import bcrypt from "bcryptjs";
import userModel from "../models/userModel.js";
import "dotenv/config";

export const createDefaultAdmin = async () => {
  const defaultEmail = process.env.DEFAULT_ADMIN_EMAIL;
  const defaultPassword = process.env.DEFAULT_ADMIN_PASS;

  const adminExists = await userModel.findOne({ email: defaultEmail });
  if (adminExists) {
    console.log("✅ Admin déjà présent");
    return;
  }

  const hashedPassword = await bcrypt.hash(defaultPassword, 10);

  const newAdmin = new userModel({
    name: "Super Admin",
    email: defaultEmail,
    password: hashedPassword,
    role: "admin",
    isAccountVerified: true,
  });

  await newAdmin.save();
  console.log(`✅ Admin par défaut créé :
    Email: ${defaultEmail}
    Mot de passe: ${defaultPassword}`);
};
