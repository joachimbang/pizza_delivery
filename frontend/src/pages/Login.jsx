import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; // ✅ Import du toast
import "react-toastify/dist/ReactToastify.css";
import api from "../lib/axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", { email, password });

      if (res.data.success) {
        const user = res.data.user;
        const role = user.role;

        toast.success("Connexion réussie ! 🎉");

        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "client") {
          navigate("/client/dashboard");
        } else if (role === "deliver") {
          navigate("/deliver/dashboard");
        } else {
          toast.warn("Rôle utilisateur inconnu.");
        }
      }
    } catch (error) {
      console.error("Erreur de connexion :", error.response || error);
      toast.error(
        error.response?.data?.message || "Erreur lors de la connexion."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Connexion
        </h2>

        <form className="space-y-5" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            />
          </div>

          <div className="flex justify-between px-1 text-sm">
            <p className="text-gray-600">Mot de passe oublié ?</p>
            <a href="/ForgetPassword" className="text-primary hover:underline">
              Récupérer
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Vous n'avez pas de compte ?{" "}
          <a href="/signUp" className="text-primary hover:underline">
            Créer un compte
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
