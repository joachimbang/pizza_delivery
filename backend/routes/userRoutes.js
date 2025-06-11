import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/userAuth.js"; // corriger ici
// import { getUserData } from "../controllers/userController.js";
import { getAllUsers, getOneUser } from "../controllers/admin/adminController.js";

const userRouter = express.Router();

// Protège la route avec isAuthenticated
userRouter.post('/list-users/:id', isAuthenticated,isAdmin, getOneUser);
userRouter.post('/list-users', isAuthenticated,isAdmin, getAllUsers);
export default userRouter;
