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
pizzaRouter.get("/", getAllPizzas);// oky
pizzaRouter.get("/:id", getPizzaById);//oky

// ✅ Routes protégées (admin uniquement)
pizzaRouter.post("/create", isAuthenticated, isAdmin, createPizza);//oky
pizzaRouter.put("/update/:id", isAuthenticated, isAdmin, updatePizza);//oky
pizzaRouter.delete("/delete/:id", isAuthenticated, isAdmin, deletePizza);//oky
pizzaRouter.put("/:id/promote",isAuthenticated, isAdmin, promotePizza); // Activer promo //oky
pizzaRouter.put("/:id/remove-promo",isAuthenticated, isAdmin, removePromotion); // Désactiver promo

export default pizzaRouter;
