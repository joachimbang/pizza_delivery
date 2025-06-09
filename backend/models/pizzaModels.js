import mongoose from "mongoose";

const pizzaSchema = new mongoose.Schema({
  name: { type: String, required: true },              // Nom de la pizza
  description: { type: String, required: true },       // Description
  price: { type: Number, required: true },             // Prix
  image: { type: String },                             // URL de l’image
  category: { type: String, enum: ['Végétarienne', 'Viande', 'Mixte'], required: true }, // Catégorie
  size: { type: String, enum: ['S', 'M', 'L'], default: 'M' }, // Taille
  createdAt: { type: Date, default: Date.now },        // Date d’ajout
  updatedAt: { type: Date, default: Date.now }
});

const Pizza = mongoose.models.Pizza || mongoose.model('Pizza', pizzaSchema);
export default Pizza;

