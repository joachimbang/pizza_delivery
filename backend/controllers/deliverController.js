// controllers/deliverController.js
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

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
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
    console.log("erreur => ", error );
  }
};

// update deliver by deliver themselves

export const updateDeliver = async (req, res) => {
  try {
    if (req.user.role !== "deliver" || req.user.id !== req.params.id) {
      return res.status(403).json({ message: "Accès refusé" });
    }

    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updated = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    res.status(200).json({ message: "Profil mis à jour", updated });
    console.log("Profil mis à jour", updated);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err.message });
    console.log("Erreur serveur", error);
  }
};
