// controllers/deliverController.js
import userModel from "../../models/userModel.js";
import User from "../../models/userModel.js";
import bcrypt from "bcryptjs";

/// update deliver by admin themselves
export const updateAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin" || req.user.id !== req.params.id) {
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

// Obtenir toutes les users
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find().sort({ createdAt: -1 }); //
    res.json(users);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Obtenir un user
// Obtenir un utilisateur par son ID
export const getOneUser = async (req, res) => {
  try {
    // 1. Récupérer l'ID depuis les paramètres de la requête (ex: /api/users/12345)
    const { id } = req.params;

    // 2. Utiliser findById pour trouver l'utilisateur correspondant à cet ID
    const oneUser = await userModel.findById(id);

    // 3. Si aucun utilisateur n'est trouvé, renvoyer une erreur 404
    if (!oneUser) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    // 4. Si l'utilisateur est trouvé, le renvoyer en réponse
    res.status(200).json(oneUser);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'utilisateur :", error);
    // Gère aussi les cas où l'ID fourni n'est pas un format valide (CastError)
    res.status(500).json({ message: "Erreur serveur" });
  }
};

/// delete user
