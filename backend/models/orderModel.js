import { mongoose } from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    livreurId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: null,
    },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    totalAmount: { type: Number, required: true },
    pickupAddress: { type: String, required: true },
    deliveryAddress: { type: String, required: true },
    status: {
      type: String,
      enum: ["en attente", "en cours", "livrée", "annulée"],
      default: "en attente",
    },
  },
  { timestamps: true }
);

const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);
export default orderModel;
