import axios from "axios";

// Création de l'instance axios avec les options par défaut
const API = axios.create({
  baseURL: "http://localhost:4001/api/",
  withCredentials: true, // pour que les cookies (token) soient envoyés automatiquement
});

// Fonction d'ajout d'utilisateur
export const addUser = (data) => API.post("deliver/create", data);

// add pizza
export const addPizza = (data) => API.post("pizza/create", data);

// Exemple d'appel au logout avec l'instance API
export const logout = async () => {
  try {
    const { data } = await API.post("auth/logout");
    return data;
  } catch (error) {
    console.error("Logout error:", error);
    throw error;
  }
};

