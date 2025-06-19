import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js";
import userRouter from "./routes/userRoutes.js";
import pizzaRouter from "./routes/pizzaRoutes.js";
import { createDefaultAdmin } from "./config/createDefaultAdmin.js";
import deliverRouter from "./routes/deliverRouter.js";
import orderRouter from "./routes/orderRoutes.js";

const app = express();
const port = process.env.PORT || 4001;

// Connexion à MongoDB
connectDB().then(() => {
  createDefaultAdmin(); // Crée admin si non existant
});

// Middleware essentiels
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ['http://localhost:5173']

// Si tu travailles avec un front-end :
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));


// Routes
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/pizza", pizzaRouter); // oky
app.use("/api/deliver", deliverRouter);
app.use("/api/order", orderRouter);

// Démarrage du serveur
app.listen(port, () => console.log(`server running on port ${port}`));
