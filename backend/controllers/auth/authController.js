import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../../models/userModel.js";
import transporter from "../../config/nodemailer.js";

// REGISTER
export const register = async (req, res) => {
  // 🔍 Vérifie si les données sont bien envoyées depuis Postman
  const { name, email, password } = req.body;

  // ✅ Affiche les valeurs reçues pour déboguer
  console.log("Register body:", req.body);

  // ❌ Si une des valeurs est vide, on retourne une erreur
  if (!name || !email || !password) {
    return res.status(400).json({ success: false, message: "Missing details" });
  }

  try {
    // 🔍 Vérifie si l'utilisateur existe déjà
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ success: false, message: "User already exists" });
    }

    // 🔐 Hash du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // 👤 Création du nouvel utilisateur
    const user = new userModel({ name, email, password: hashedPassword });
    await user.save();

    // 🔑 Génération du token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 🍪 Envoie du cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
    });

    //sending welcome email
    const mailOption ={
      from: process.env.SENDER_EMAIL,
      to:email,
      subject: 'Welcome to page',
      text: `welcome , your has been created with email id :${email}`
    }
    await transporter.sendMail(mailOption);
    // ✅ Réponse de succès
    return res.status(201).json({ success: true, message: "User registered" });

  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// LOGIN
export const login = async (req, res) => {
  const {email, password} = req.body;
  console.log("Login body:", req.body);

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: "Email invalid" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Password invalid" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, message: "Login successful" });

  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// LOGOUT
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    return res.status(200).json({ success: true, message: "Logged out" });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
//send otp
export const sendVerifyOtp = async (req, res) => {
  try {
    const user = req.user;  // récupère directement depuis le middleware

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    if (user.isAccountVerified) {
      return res.status(400).json({ success: false, message: "Account already verified" });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // 1 jour

    await user.save();

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Account verification OTP",
      text: `Your OTP is: ${otp}. Please verify your account using this code.`,
    };

    await transporter.sendMail(mailOption);

    return res.status(200).json({ success: true, message: "Verification OTP sent to email" });

  } catch (error) {
    console.error("OTP Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};



// verify email
export const verifyEmail = async (req,res)=>{
  const { otp } = req.body;
  const userId = req.user.id;  // récupéré depuis le token
  console.log("otp",otp)
  console.log("user id",userId)

  if (!otp) {
    return res.status(400).json({ success: false, message: "OTP is required" });
  }
  try {
    const user = await userModel.findById(userId);
    // console.log("user:",user);

    if (!user) {
      return res.json({
        success: false ,
        message:"user not found"
      });
    }
    if (user.verifyOtp === '' || user.verifyOtp !== otp) {
      return res.status(400).json({success: false, message: "invalide otp"});
    }

    if (user.verifyOtpExpireAt < Date.now()) {
      return res.status(400).json({success: false, message: 'otp expired'});
    }

    user.isAccountVerified = true;
    user.verifyOtp ='';
    user.verifyOtpExpireAt = 0;

    await user.save();
    return res.status(200).json({success:true,message: "Email verified succesfully  "});


  } catch (error) {
    console.error("error", error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

//check if user is authentifacated

export const isAuthenticated = async (req,res)=>{
  try {
    return res.json({success: true});
  } catch (error) {
    res.json({success: false,message: error.message});
  }
}

// send password reset otp
export const sendResetOtp = async (req,res) =>{
  const {email} = req.body;

  if (!email) {
    return res.json({success: false,message: "Email is required"});
  }
  
  try {
    const user = await userModel.findOne({email});
    if (!user) {
      return res.json({success: false,message: "user not found"});
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.resetOtp = otp;
    user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000; // 1 jour

    await user.save();

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: "Password Reset OTP",
      text: `Your OTP for resetting your password is: ${otp}. 
      Use this otp proceed with resetting your password.`,
    };

    await transporter.sendMail(mailOption);

    return res.json({success: true, message: "otp sent to your email"});
  } catch (error) {
    return res.json({success: false, message: error.message});
  }
}

// verify otp and reset password
export  const resetPassword = async (req,res) =>{
  const {email,otp,newPassword} = req.body;

  if (!email ||!otp || !newPassword) {
    return res.json({success: false , message: "email,otp, and new password are required"})
  }try {
    const user = await userModel.findOne({email});
    if (!user) {
      return res.json({success: false,message: "user not found "});
    }
    if (!user.resetOtp==="" || user.resetOtp !== otp) {
      return res.json({success: false, message: "otp expired"});
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetOtp = "";
    user.resetOtpExpireAt = 0;

    await user.save();
  } catch (error) {
    return res.json({success: false, message: error.message});
  }
}
