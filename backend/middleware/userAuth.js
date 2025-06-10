// middlewares/authMiddleware.js
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Vérifie que l'utilisateur est connecté
export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Non autorisé. Veuillez vous connecter.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Utilisateur introuvable." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Jeton invalide ou expiré.",
    });
  }
};

// Vérifie que l'utilisateur est admin
export const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    return res.status(403).json({ message: "Accès refusé: admin uniquement" });
  }
  next();
};
