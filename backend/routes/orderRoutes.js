import express from "express";
// import { isAuthenticated, isAdmin } from "../middlewares/userAuth.js";
// import { createOrder } from "../controllers/orderController.js";
// import {
//   getAllOrdersForAdmin,
//   assignDeliverer,
// } from "../controllers/admin/orders/adminOrderController.js";
import { markOrderAsDelivered } from "../controllers/admin/deliver/deliverOrderController.js";
// import { getOrdersForClient } from "../controllers/client/orderController.js";
import { isAdmin,isAuthenticated } from "../middleware/userAuth.js";
import { createOrder, getOrdersForClient } from "../controllers/client/orderController.js";
import { getAllOrdersForAdmin,assignDeliverer } from "../controllers/admin/orders/adminOrderController.js.js";

const orderRouter = express.Router();

// 🚫 Sans authentification
// router.post("/orders", createOrder);

// ✅ Avec authentification
orderRouter.post("/orders", isAuthenticated, createOrder);
orderRouter.get(
  "/admin/orders",
  isAuthenticated,
  isAdmin,
  getAllOrdersForAdmin
);
// Admin assigne un livreur à une commande
orderRouter.patch(
  "/admin/orders/:orderId/assign",
  isAuthenticated,
  isAdmin,
  assignDeliverer
);
// Le livreur signale que la commande est livrée
orderRouter.patch(
  "/deliverer/orders/:orderId/delivered",
  isAuthenticated,
  markOrderAsDelivered
);
orderRouter.get("/client/orders", isAuthenticated, getOrdersForClient);
export default orderRouter;
