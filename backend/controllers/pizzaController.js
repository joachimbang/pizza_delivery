import Pizza from "../models/pizzaModels.js";

// Créer une nouvelle pizza (ADMIN uniquement)
export const createPizza = async (req, res) => {
  try {
    const { name, description, price, image, category, size } = req.body;

    if (!name || !description || !price || !category) {
      return res.status(400).json({ message: "Champs obligatoires manquants" });
    }

    const newPizza = new Pizza({
      name,
      description,
      price,
      image,
      category,
      size,
    });

    const savedPizza = await newPizza.save();
    res.status(201).json(savedPizza);
    console.log(`✅ Pizza créé :
    name: ${name}
    description : ${description}
    price: ${price}
    image: ${image}
    category : ${category}
    size: ${size}`);

  } catch (error) {
    console.error("Erreur lors de la création :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Mettre à jour une pizza (ADMIN uniquement)
export const updatePizza = async (req, res) => {
  try {
    const pizzaId = req.params.id;
    const updateData = req.body;

    const updatedPizza = await Pizza.findByIdAndUpdate(
      pizzaId,
      { ...updateData, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedPizza) {
      return res.status(404).json({ message: "Pizza non trouvée" });
    }

    res.json(updatedPizza);
    console.log("pizza modifie :",updatePizza);
    
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Obtenir toutes les pizzas (accessible à tous)
export const getAllPizzas = async (req, res) => {
  try {
    const pizzas = await Pizza.find().sort({ createdAt: -1 });//
    res.json(pizzas);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Obtenir une pizza par ID (accessible à tous)
export const getPizzaById = async (req, res) => {
  try {
    const pizza = await Pizza.findById(req.params.id);
    if (!pizza) {
      return res.status(404).json({ message: "Pizza non trouvée" });
    }
    res.json(pizza);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Supprimer une pizza (optionnel, ADMIN uniquement)
export const deletePizza = async (req, res) => {
  try {
    const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
    if (!deletedPizza) {
      return res.status(404).json({ message: "Pizza non trouvée" });
    }
    res.json({ message: "Pizza supprimée avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
