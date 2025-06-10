import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },              
  description: { type: String, required: true },       
  price: { type: Number, required: true },             
  image: { type: String },                             
  category: { 
    type: String, 
    enum: ['Végétarienne', 'Viande', 'Mixte'], 
    required: true 
  }, 
  size: { 
    type: String, 
    enum: ['S', 'M', 'L'], 
    default: 'M' 
  },

  // 🔥 Champs de promotion
  isOnPromotion: { type: Boolean, default: false },         // Promo active ?
  promotionPrice: { type: Number, default: null },          // Prix promo
  promotionExpires: { type: Date, default: null },          // Date d’expiration promo

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const pizzaModel = mongoose.models.pizzaModel || mongoose.model('Pizza', pizzaSchema);
export default pizzaModel;
