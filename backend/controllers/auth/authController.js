import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../../models/userModel.js";
import transporter from "../../config/nodemailer.js";
// import transporter from "../config/nodemailer.js";
// import userModel from "../models/userModel.js";


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
      return res
        .status(409)
        .json({ success: false, message: "User already exists" });
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
    const mailOption = {
      from: "joachimbangirahe.jb@gmail.com",
      to: email,
      subject: "Welcome to page",
      text: `welcome , your has been created with email :${email}`,
    };
    await transporter.sendMail(mailOption);
    // ✅ Réponse de succès
    return res.status(201).json({ success: true, message: "User registered",token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // 👈 Assure-toi que ce champ existe dans ton modèle
        isAccountVerified: user.isAccountVerified,
      }, }
      
    );
  } catch (error) {
    console.error("Register Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

// LOGIN
export const login = async (req, res) => {
  const { email, password } = req.body;
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

    // if (!user.isAccountVerified) {
    //   return res
    //     .status(403)
    //     .json({ success: false, message: "Please verify your email first" });
    // }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Password invalid" });
    }

    // ✅ Ajoute ici le rôle et les autres infos à retourner
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Envoie le token en cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // ✅ Renvoie le token et les infos de l'utilisateur dans la réponse JSON
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // 👈 Assure-toi que ce champ existe dans ton modèle
        isAccountVerified: user.isAccountVerified,
      },
    });
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
    console.log("sendVerifyOtp called");

    const { userId } = req.body;
    // console.log("userId from:", userId);

    // ✅ Vérifie que userId est fourni
    if (!userId) {
      return res.status(400).json({ success: false, message: "userId is required" });
    }

    const user = await userModel.findById(userId);

    // ✅ Vérifie que l'utilisateur existe
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // ✅ Vérifie si le compte est déjà vérifié
    if (user.isAccountVerified) {
      return res.json({ success: false, message: "Account already verified" });
    }

    // ✅ Génère l'OTP
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    console.log("Generated OTP:", otp);

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000; // expire dans 24h

    await user.save();

    // ✅ Prépare et envoie l'email
    const mailOption = {
      from: "joachimbangirahe.jb@gmail.com",
      to: user.email,
      subject: "Account verification OTP",
      text: `Your OTP is: ${otp}. Please verify your account using this code.`,
    };

    await transporter.sendMail(mailOption);
    console.log("OTP email sent");

    return res.status(200).json({ success: true, message: "Verification OTP sent to email" ,otp});

  } catch (error) {
    console.error("OTP Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};


// verify email
export const verifyEmail = async (req, res) => {
  const {userId, otp } = req.body;
//   const userIdId = req.userId.id; // récupéré depuis le token
  console.log("otp", otp);
//   console.log("userId id", userIdId);

  if (!otp || !userId) {
  return res.status(400).json({ success: false, message: "missing details" });
}

try {
  const user = await userModel.findById(userId);

  if (!user) {
    return res.json({ success: false, message: "user not found" });
  }

  if (!user.verifyOtp ==='' || user.verifyOtp !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }

  if (user.verifyOtpExpireAt < Date.now()) {
    return res.status(400).json({ success: false, message: "OTP expired" });
  }

  user.isAccountVerified = true;
  user.verifyOtp = "";
  user.verifyOtpExpireAt = 0;
  await user.save();

  return res.status(200).json({ success: true, message: "Email verified successfully",otp,user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // 👈 Assure-toi que ce champ existe dans ton modèle
        isAccountVerified: user.isAccountVerified,
      } });
} catch (error) {
  console.error("Verify Email Error:", error);
  return res.status(500).json({ success: false, message: error.message });
}

};

//check if userId is authentifacated

export const isAuthenticated = async (req, res) => {
  try {
    return res.json({
      success: true,
      userData: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
        isAccountVerified: req.user.isAccountVerified,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// send password reset otp
export const sendResetOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.json({success:false,message: "email is required"})
  }

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "userId not found" });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));

    user.resetOtp = otp;
    user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000; // 1 jour

    await user.save();

    const mailOption = {
      from: "joachimbangirahe.jb@gmail.com",
      to: user.email,
      subject: "Password Reset OTP",
      text: `Your OTP for resetting your password is: ${otp}. 
      Use this otp proceed with resetting your password.`,
    };

    await transporter.sendMail(mailOption);

    return res.json({ success: true, message: "otp sent to your email" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// verify otp and reset password
export const resetPassword = async (req, res) => {
  const {email, otp, newPassword} = req.body;

  if (!email || !otp || !newPassword) {
    return res.json({
      success: false,
      message: "Email, OTP, and new password are required",
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }

    // ✅ Vérifie que l'OTP est présent et correspond
    if (!user.resetOtp === '' || user.resetOtp !== otp) {
      return res.json({ success: false, message: "Invalid OTP" });
    }

    // ✅ Vérifie l'expiration de l'OTP
    if (user.resetOtpExpireAt < Date.now()) {
      return res.json({ success: false, message: "OTP has expired" });
    }

    // 🔐 Hash du nouveau mot de passe
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;

    // ❌ Réinitialise l'OTP et sa date d'expiration
    user.resetOtp = "";
    user.resetOtpExpireAt = 0;

    await user.save();

    return res.json({
      success: true,
      message: "Password has been reset successfully",
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};
