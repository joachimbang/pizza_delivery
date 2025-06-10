import orderModel from "../models/orderModel.js";

export const getAllOrdersForAdmin = async (req, res) => {
  try {
    const orders = await orderModel
      .find()
      .populate("clientId", "username email") // Montre les infos du client
      .sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    console.error("Erreur admin get orders :", error.message);
    res.status(500).json({ message: error.message });
  }
};
