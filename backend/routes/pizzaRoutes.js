import express from "express";
import {
  createPizza,
  updatePizza,
  getAllPizzas,
  getPizzaById,
  deletePizza,
} from "../controllers/pizzaController.js";
import { isAuthenticated, isAdmin } from "../middleware/userAuth.js"; // ✅

const pizzaRouter = express.Router();

// ✅ Routes publiques accessibles à tous
pizzaRouter.get("/", getAllPizzas);
pizzaRouter.get("/:id", getPizzaById);

// ✅ Routes protégées (admin uniquement)
pizzaRouter.post("/create", isAuthenticated, isAdmin, createPizza);
pizzaRouter.put("/update/:id", isAuthenticated, isAdmin, updatePizza);
pizzaRouter.delete("/delete/:id", isAuthenticated, isAdmin, deletePizza);

export default pizzaRouter;
