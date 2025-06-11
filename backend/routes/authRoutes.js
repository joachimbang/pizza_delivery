import express from "express";
import {
  isAuthenticated as isUserAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  sendVerifyOtp as resendVerifyOtp,
  verifyEmail,
} from "../controllers/auth/authController.js";

import { isAuthenticated as isMiddlewareAuthenticated } from "../middleware/userAuth.js";

const authRouter = express.Router();

// Authentification de base
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

// Vérification d'email (protégée)
authRouter.post("/send-verify-otp", isMiddlewareAuthenticated, sendVerifyOtp);
authRouter.post("/verify-account", isMiddlewareAuthenticated, verifyEmail);

// Vérification de session (protégée)
authRouter.post("/is-auth", isMiddlewareAuthenticated, (req, res) => {
  res.status(200).json({ user: req.user, authenticated: true });
});

// Réinitialisation du mot de passe (publique)
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);

// Export du routeur
export default authRouter;
