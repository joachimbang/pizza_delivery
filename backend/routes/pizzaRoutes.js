import express from "express";
import { getAllPizzas, getPizzaById } from "../controllers/pizzaController.js";
import {
  

} from "../controllers/admin/adminController.js";
import { isAuthenticated, isAdmin } from "../middleware/userAuth.js"; // ✅
import { createPizza ,updatePizza,
  deletePizza,
  promotePizza,
  removePromotion} from "../controllers/admin/pizza/adminPizzaController.js"; // ✅

const pizzaRouter = express.Router();

// ✅ Routes publiques accessibles à tous
pizzaRouter.get("/", getAllPizzas);
pizzaRouter.get("/:id", getPizzaById);

// ✅ Routes protégées (admin uniquement)
pizzaRouter.post("/create", isAuthenticated, isAdmin, createPizza);
pizzaRouter.put("/update/:id", isAuthenticated, isAdmin, updatePizza);
pizzaRouter.delete("/delete/:id", isAuthenticated, isAdmin, deletePizza);
pizzaRouter.put("/:id/promote", promotePizza); // Activer promo
pizzaRouter.put("/:id/remove-promo", removePromotion); // Désactiver promo

export default pizzaRouter;
