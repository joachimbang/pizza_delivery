import express from "express";
import { isAdmin, isAuthenticated } from "../middleware/userAuth.js"; // corriger ici
// import { getUserData } from "../controllers/userController.js";
import { getAllUsers, getOneUser } from "../controllers/admin/adminController.js";
import { deleteUser } from "../controllers/admin/client/adminClientController.js";
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router();

// Protège la route avec isAuthenticated
userRouter.post('/list-users/:id', isAuthenticated,isAdmin, getOneUser);
userRouter.post('/list-users', isAuthenticated,isAdmin, getAllUsers);
userRouter.delete('/delete/:id',isAuthenticated,isAdmin,deleteUser)
userRouter.get('/data',isAuthenticated,getUserData)
export default userRouter;
