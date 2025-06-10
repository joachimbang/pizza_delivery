import orderModel from "../../../models/orderModel.js";

export const getAllOrdersForAdmin = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("clientId", "username email") // Montre les infos du client
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
    console.log("toutes les commandes" , orders);
  } catch (error) {
    console.error("Erreur admin get orders :", error.message);
    res.status(500).json({ message: error.message });
  }
};

//

export const assignDeliverer = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { deliverId } = req.body;

    // Vérifie que deliverId est fourni
    if (!deliverId) {
      console.log("L'ID du livreur est requis.");
      return res.status(400).json({ message: "L'ID du livreur est requis." });
    }

    // Met à jour la commande avec le livreur
    const updatedOrder = await orderModel.findByIdAndUpdate(
      orderId,
      { deliverId: deliverId, status: "en cours" }, // Change le statut si tu veux
      { new: true }
    ).populate("clientId", "username email")
     .populate("livreurId", "username email");

    if (!updatedOrder) {
      return res.status(404).json({ message: "Commande introuvable." });
    }

    res.status(200).json({
      message: "Livreur attribué avec succès.",
      order: updatedOrder
    });
    console.log("Livreur attribué avec succès.",updatedOrder);

  } catch (error) {
    console.error("Erreur lors de l'attribution du livreur :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

