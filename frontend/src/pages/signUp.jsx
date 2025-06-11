import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../lib/axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // Étape 1 : Inscription
      const res = await api.post("/auth/register", { email, password, name });

      if (res.data.success) {
        toast.success("Compte créé avec succès !");

        // Étape 2 : Envoyer OTP de vérification
        const otpRes = await api.post("/auth/send-verify-otp");

        if (otpRes.data.success) {
          toast.info("Un code OTP a été envoyé à votre adresse email.");
          navigate("/verify-email"); // Redirige vers la page de vérification
        } else {
          toast.error("Erreur lors de l'envoi de l'OTP.");
        }
      } else {
        toast.error(res.data.message || "Erreur lors de l'inscription.");
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Une erreur s'est produite lors de l'inscription.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Créer un compte
        </h2>
        <form className="space-y-5" onSubmit={handleSignUp}>
          <div>
            <label className="block mb-1 text-gray-600">Nom complet</label>
            <input
              type="text"
              placeholder="Jean Dupont"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition"
          >
            S'inscrire
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-yellow-600 hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
