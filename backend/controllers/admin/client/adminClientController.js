// controllers/deliverController.js
import userModel from "../../../models/userModel.js";
// import User from "../models/userModel.js";
// import bcrypt from "bcryptjs";
// Obtenir toutes les users
export const getAllClients = async (req, res) => {
  try {

    const clients = await userModel.find({role:"client"}).sort({ createdAt: -1 });//
    res.json(clients);
    console.log("liste clients",clients);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};