// controllers/deliverController.js
import userModel from "../../../models/userModel.js";
// import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

/// create deliver
export const createDeliver = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email déjà utilisé" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const deliver = new User({
      name,
      email,
      password: hashedPassword,
      role: "deliver",
      isAccountVerified: true,
    });

    await deliver.save();
    res.status(201).json({ message: "deliver créé", deliver });
    console.log("livreur creer ", deliver);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error:message });
    console.log("erreur => ", error );
  }
};


// Obtenir toutes les users
export const getAllDelivers = async (req, res) => {
  try {

    const delivers = await userModel.find({role:"deliver"}).sort({ createdAt: -1 });//
    res.json(delivers);
    console.log("liste de deliver",delivers);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};