import React, { useState } from "react";
import { toast } from "react-toastify";
import { addUser } from "../../services/adminService"; // Ton service backend

const DialogAddUser = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    // number: "",
    // role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await addUser(form);
      toast.success("Utilisateur ajouté !");
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
          <p className="text text-gray-600 mt-4">User Information</p>

          <p className="pt-4">Name</p>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="grow"
            />
          </label>

          <p className="pt-4">Email</p>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="grow"
            />
          </label>

          <p className="pt-4">Password</p>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              className="grow"
              required
            />
          </label>

          {/* Si tu veux activer les autres champs : Number, Role */}
          {/* 
          <p className="pt-4">Number</p>
          <label className="input input-bordered flex items-center gap-2 w-full">
            <input
              type="text"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="+243..."
              className="grow"
            />
          </label>

          <p className="pt-4">Role</p>
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="select select-bordered w-full"
          >
            <option value="" disabled>
              Choisi le rôle
            </option>
            <option value="Client">Client</option>
            <option value="Deliver">Deliver</option>
          </select>
          */}
        </div>

        <div className="text-sm sm:text-base flex justify-end p-5">
          <button
            onClick={handleSubmit}
            className="btn btn-primary transition-colors duration-300"
          >
            Save now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogAddUser;
