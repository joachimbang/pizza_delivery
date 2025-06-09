// routes/DeliverRoutes.js
import express from "express";
import { createDeliver, updateDeliver } from "../controllers/deliverController.js";
import { isAuthenticated, isAdmin } from "../middleware/userAuth.js";

const deliverRouter = express.Router();

deliverRouter.post("/create", isAuthenticated, isAdmin, createDeliver);
deliverRouter.put("/update/:id", isAuthenticated, updateDeliver);

export default deliverRouter;