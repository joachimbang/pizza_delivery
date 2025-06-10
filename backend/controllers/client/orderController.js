import orderModel from "../../models/orderModel.js";
import pizzaModel from "../../models/pizzaModel.js";

export const createOrder = async (req, res) => {
  try {
    const clientId = req.user.id; // ✅ Injecté par le middleware

    const { items, pickupAddress, deliveryAddress } = req.body;

    if (!items || items.length === 0 || !deliveryAddress) {
      return res.status(400).json({ message: "Informations incomplètes." });
    }

    let calculatedTotal = 0;
    const orderItemsDetails = [];

    await Promise.all(
      items.map(async (item) => {
        const pizza = await pizzaModel.findById(item.pizzaId);
        if (!pizza) throw new Error(`Produit introuvable : ${item.pizzaId}`);
        calculatedTotal += pizza.price * item.quantity;
        orderItemsDetails.push({
          name: pizza.name,
          quantity: item.quantity,
          price: pizza.price,
        });
      })
    );

    const newOrder = new orderModel({
      clientId,
      items: orderItemsDetails,
      totalAmount: calculatedTotal,
      pickupAddress,
      deliveryAddress,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error("Erreur lors de la commande :", error.message);
    res.status(500).json({ message: error.message });
  }
};

// get orders

export const getOrdersForClient = async (req, res) => {
  try {
    const clientId = req.user.id;

    // Chercher toutes les commandes du client
    const orders = await orderModel
      .find({ clientId })
      .sort({ createdAt: -1 });

    if (!orders.length) {
      return res.status(404).json({ message: "Aucune commande trouvée pour ce client." });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes du client :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
