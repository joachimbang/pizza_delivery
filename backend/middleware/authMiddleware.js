import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
// import userModel from "../models/userModel.js";

export const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id).select("-password"); // Ne retourne pas le mot de passe
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user; // Injecte l'utilisateur dans la requête
    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};
