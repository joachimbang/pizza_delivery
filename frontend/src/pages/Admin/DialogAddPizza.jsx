import React, { useState } from "react";
import { toast } from "react-toastify";
import { addPizza } from "../../services/adminService"; // Remplace addUser par addPizza

const DialogAddPizza = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    size: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await addPizza(form); // Appelle le service approprié
      toast.success("Pizza ajoutée !");
      onClose();
    } catch (error) {
      toast.error("Erreur lors de l'ajout !");
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center px-4 sm:px-0">
      <div className="bg-white w-full max-w-2xl rounded-xl p-4 sm:p-6 shadow-xl relative">
        {/* Bouton Fermer */}
        <button
          className="absolute top-3 right-4 text-gray-500 hover:text-red-600 text-xl"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="flex-1 bg-white rounded-xl p-6">
          <p className="text-lg font-semibold text-gray-700 mb-4">Ajout d'une Pizza</p>

          <label className="block pt-2">Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Pizza Royale"
            className="input input-bordered w-full"
          />

          <label className="block pt-4">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Jambon, champignons et mozzarella"
            className="textarea textarea-bordered w-full"
          />

          <label className="block pt-4">Prix</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="12.5"
            className="input input-bordered w-full"
            step="0.01"
          />

          <label className="block pt-4">Image URL</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
          />

          <label className="block pt-4">Catégorie</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Choisir une catégorie</option>
            <option value="Mixte">Mixte</option>
            <option value="Végétarienne">Végétarienne</option>
            <option value="Viande">Viande</option>
          </select>

          <label className="block pt-4">Taille</label>
          <select
            name="size"
            value={form.size}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="">Choisir une taille</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="text-sm sm:text-base flex justify-end p-5">
          <button
            onClick={handleSubmit}
            className="btn btn-primary transition-colors duration-300"
          >
            Ajouter la pizza
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogAddPizza;
