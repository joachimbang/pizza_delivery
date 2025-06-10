import pizzaModel from "../models/pizzaModel.js";

// Obtenir toutes les pizzas (accessible à tous)
export const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await pizzaModel.find().sort({ createdAt: -1 }); //
    res.json(pizzas);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Obtenir une pizza par ID (accessible à tous)
export const getPizzaById = async (req, res) => {
  try {
    const pizza = await pizzaModel.findById(req.params.id);
    if (!pizza) {
      return res.status(404).json({ message: "Pizza non trouvée" });
    }
    res.json(pizza);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
