// controllers/deliverController.js
import pizzaModel from "../../../models/pizzaModel.js";
import userModel from "../../../models/userModel.js";
import bcrypt from "bcryptjs";
// Créer une nouvelle pizza (ADMIN uniquement)
export const createPizza = async (req, res) => {
  try {
    const { name, description, price, image, category, size } = req.body;

    if (!name || !description || !price || !category) {
      console.log("Champs obligatoires manquants");

      return res.status(400).json({ message: "Champs obligatoires manquants" });
    }

    const newPizza = new pizzaModel({
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

    const updatedPizza = await pizzaModel.findByIdAndUpdate(
      pizzaId,
      { ...updateData, updatedAt: Date.now() },
      { new: true }
    );

    if (!updatedPizza) {
      console.log("Pizza non trouvée");
      return res.status(404).json({ message: "Pizza non trouvée" });
    }

    res.json(updatedPizza);
    console.log("pizza modifie :", updatedPizza);
  } catch (error) {
    console.error("Erreur lors de la mise à jour :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Supprimer une pizza (optionnel, ADMIN uniquement)
export const deletePizza = async (req, res) => {
  try {
    const deletedPizza = await pizzaModel.findByIdAndDelete(req.params.id);
    if (!deletedPizza) {
      console.log("Pizza non trouvée ");
      return res.status(404).json({ message: "Pizza non trouvée" });
    }
    res.json({ message: "Pizza supprimée avec succès" });
    console.log("Pizza supprimée avec succès");
  } catch (error) {
    console.error("Erreur lors de la suppression :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Activer une promotion (ADMIN uniquement)
export const promotePizza = async (req, res) => {
  try {
    const { id } = req.params;
    const { promotionPrice, promotionExpires } = req.body;

    if (!promotionPrice || !promotionExpires) {
      console.log("Données de promotion manquantes");
      return res
        .status(400)
        .json({ message: "Données de promotion manquantes" });
    }

    const updatedPizza = await pizzaModel.findByIdAndUpdate(
      id,
      {
        isOnPromotion: true,
        promotionPrice,
        promotionExpires,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!updatedPizza) {
      return res.status(404).json({ message: "Pizza non trouvée" });
    }
    console.log("Promotion activée", updatedPizza);
    res.json({ message: "Promotion activée", pizza: updatedPizza });
  } catch (error) {
    console.error("Erreur promotion :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Désactiver une promotion
export const removePromotion = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedPizza = await pizzaModel.findByIdAndUpdate(
      id,
      {
        isOnPromotion: false,
        promotionPrice: null,
        promotionExpires: null,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    if (!updatedPizza) {
      console.log("Pizza non trouvée");
      return res.status(404).json({ message: "Pizza non trouvée" });
    }

    res.json({ message: "Promotion supprimée", pizza: updatedPizza });
    console.log("Promotion supprimée", updatedPizza);
  } catch (error) {
    console.error("Erreur suppression promo :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
