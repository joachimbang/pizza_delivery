import express from "express";
import { isAuthenticated, isAdmin } from "../middlewares/userAuth.js";
import { createOrder } from "../controllers/orderController.js";

const router = express.Router();

// 🚫 Sans authentification
// router.post("/orders", createOrder);

// ✅ Avec authentification
router.post("/orders", isAuthenticated, createOrder);
router.get("/admin/orders", isAuthenticated, isAdmin, getAllOrdersForAdmin);

