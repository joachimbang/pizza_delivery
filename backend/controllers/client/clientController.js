// controllers/deliverController.js
import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

/// update deliver by client themselves

export const updateClient = async (req, res) => {
  try {
    if (req.user.role !== "client" || req.user.id !== req.params.id) {
      return res.status(403).json({ message: "Accès refusé" });
    }

    const updates = req.body;
    if (updates.password) {
      updates.password = await bcrypt.hash(updates.password, 10);
    }

    const updated = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    });
    res.status(200).json({ message: "Profil mis à jour", updated });
    console.log("Profil mis à jour", updated);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error: error.message });
    console.log("Erreur serveur", error);
  }
};
