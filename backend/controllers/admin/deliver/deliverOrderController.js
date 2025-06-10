import orderModel from "../models/orderModel.js";

export const markOrderAsDelivered = async (req, res) => {
  try {
    const delivererId = req.user.id;
    const { orderId } = req.params;

    // Vérifier que la commande existe et appartient bien à ce livreur
    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: "Commande introuvable." });
    }

    if (order.livreurId?.toString() !== delivererId) {
      return res.status(403).json({ message: "Vous n'êtes pas autorisé à modifier cette commande." });
    }

    // Mettre à jour le statut
    order.status = "livrée";
    await order.save();

    res.status(200).json({
      message: "Commande marquée comme livrée avec succès.",
      order,
    });
  } catch (error) {
    console.error("Erreur lors du signalement de livraison :", error.message);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
