import {
  isAuthenticated as isUserAuthenticated,
  login,
  logout,
  register,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/auth/authController.js";

import { isAuthenticated as isMiddlewareAuthenticated } from "../middleware/userAuth.js";
import express from "express"


const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", isMiddlewareAuthenticated, sendVerifyOtp);
authRouter.post("/verify-account", isMiddlewareAuthenticated, verifyEmail);
authRouter.post("/is-auth", isMiddlewareAuthenticated, (req, res) => {
  res.status(200).json({ user: req.user, authenticated: true });
});


authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);
// SendGrid

export default authRouter;
