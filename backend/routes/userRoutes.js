import express from "express";
import { isAuthenticated } from "../middleware/userAuth.js"; // corriger ici
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router();

// Protège la route avec isAuthenticated
userRouter.post('/data', isAuthenticated, getUserData);

export default userRouter;
