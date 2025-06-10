import userModel from "../models/userModel.js";

export const getUserData = async (req, res) => {
  try {
    const {userId} = req.body;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.json({ success: false, message: "user not found" });
    }
    res.json({
        success: true,
        userData: {
            name: user.name,
            isAccountVerified: user.isAccountVerified
        }
    })
  } catch (error) {
    return res.json({ success: false, message: error.message +" ERROR" });
  }
};

// Obtenir toutes les users
export const getAllUsers = async (req, res) => {
  try {
    const user = await userModel.find().sort({ createdAt: -1 });//
    res.json(user);
  } catch (error) {
    console.error("Erreur lors de la récupération :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};
