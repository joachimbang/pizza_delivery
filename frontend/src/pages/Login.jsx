import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppContent } from "../context/AppContent";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContent);

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      axios.defaults.withCredentials = true;

      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/auth/register", {
          name,
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          await getUserData(); // ✅ On attend le chargement des données utilisateur
          navigate("/receive-otp");
        } else {
          toast.error(data.message+"ici");
        }
      } else {
        const { data } = await axios.post(backendUrl + "/auth/login", {
          email,
          password,
        });

        if (data.success) {
          setIsLoggedin(true);
          // await getUserData(); // ✅ Attente ici

          const user = data.user;
          const role = user.role;

          toast.success("connected !");

          if (role === "admin") {
            navigate("/admin/dashboard");
          } else if (role === "client") {
            navigate("/client/dashboard");
          } else if (role === "deliver") {
            navigate("/deliver/dashboard");
          } else {
            toast.warn("Rôle utilisateur inconnu.");
          }
        } else {
          toast.error(data.message || "Une erreur s'est produite.");
        }
      }
    } catch (error) {
      toast.error(error.message || "Erreur de connexion");
    }
  };

  return (
    <div className="bg-gray-300 p-4 min-h-screen flex flex-col justify-center items-center">
      <div
        onClick={() => navigate("/")}
        className="bg-green-600 text-white px-4 py-2 mb-4 rounded cursor-pointer underline"
      >
        Logo
      </div>

      <h1 className="text-2xl font-bold mb-2">
        {state === "Sign Up" ? "Create Account" : "Login"}
      </h1>
      <p className="mb-4 text-gray-700">
        {state === "Sign Up" ? "Create your account" : "Login to your account"}
      </p>

      <form
        onSubmit={onSubmitHandler}
        className="bg-white shadow-md p-6 rounded w-full max-w-sm"
      >
        {state === "Sign Up" && (
          <div className="mb-4">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        )}

        <div className="mb-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4 text-right">
          <span
            onClick={() => navigate("/reset-password")}
            className="text-sm text-blue-600 cursor-pointer"
          >
            Forgot password?
          </span>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          {state}
        </button>
      </form>

      <div className="mt-4 text-sm">
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600 cursor-pointer underline"
            >
              Sign up
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
