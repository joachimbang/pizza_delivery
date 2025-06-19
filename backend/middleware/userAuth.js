import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Messages d'erreur centralisés
const ERROR_MESSAGES = {
  MISSING_TOKEN: "Token manquant. Veuillez vous connecter.",
  INVALID_TOKEN: "Jeton invalide.",
  TOKEN_EXPIRED: "Session expirée. Veuillez vous reconnecter.",
  USER_NOT_FOUND: "Utilisateur introuvable.",
  ADMIN_ONLY: "Accès refusé: admin uniquement",
  ROLE_ONLY: (role) => `Accès refusé: ${role} uniquement`,
};

export const isAuthenticated = async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    const parts = req.headers.authorization.split(" ");
    if (parts.length === 2) {
      token = parts[1];
    }
  }

  if (!token && req.headers.authorization?.startsWith("Bearer ")) {
    const parts = req.headers.authorization.split(" ");
    if (parts.length === 2) {
      token = parts[1];
    }
  }

  if (!token) {
    return res.status(401).json({ message: ERROR_MESSAGES.MISSING_TOKEN });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: ERROR_MESSAGES.USER_NOT_FOUND });
    }

    req.user = user;
    next();
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error("Erreur JWT:", error);
    }

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: ERROR_MESSAGES.TOKEN_EXPIRED });
    }

    return res.status(401).json({ message: ERROR_MESSAGES.INVALID_TOKEN });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user?.role !== "admin") {
    console.error("l'utilisateur:", req.user?.role);
    return res.status(403).json({ message: ERROR_MESSAGES.ADMIN_ONLY });
  }
  next();
};

export const hasRole = (role) => (req, res, next) => {
  if (req.user?.role !== role) {
    return res.status(403).json({ message: ERROR_MESSAGES.ROLE_ONLY(role) });
  }
  next();
};
