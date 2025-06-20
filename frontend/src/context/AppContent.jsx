import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = "http://localhost:4001/api";

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true); // <- important

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = backendUrl;
    axios.defaults.headers.common["Content-Type"] = "application/json";
    getAuthState();
  }, []);

  const getUserData = async () => {
    try {
      const {data} = await axios.get(backendUrl+"/user/data"
      //   , {
      //   withCredentials: true,
      // }
    )
    data.success ? setUserData(data.userData) : toast.error(data.message)
      // if (data.success) {
      //   setUserData(data.userData);
      // } else {
      //   toast.error(data.message);
      // }
    } 
    catch (error) {
      toast.error(data.message)
    }
  };

  const getAuthState = async () => {
    try {
      const { data } = await axios.get("/auth/is-auth");
      if (data.success) {
        setIsLoggedin(true);
        setUserData(data.userData);
      } else {
        setIsLoggedin(false);
        setUserData(false);
      }
    } catch (error) {
      setIsLoggedin(false);
      setUserData(false);
    } finally {
      setLoadingUser(false); // <- important
    }
  };

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getAuthState, // utile dans le futur
    getUserData, // pour la compatibilité avec les anciens composant
  };

  return (
    <AppContent.Provider value={value}>
      {props.children}
    </AppContent.Provider>
  );
  // return (
  //   <AppContent.Provider value={value}>
  //     {loadingUser ? (
  //       <div className="flex justify-center items-center min-h-screen">
  //         <div className="w-12 h-12 border-4 border-green-500 border-dashed rounded-full animate-spin"></div>
  //       </div>
  //     ) : (
  //       props.children
  //     )}
  //   </AppContent.Provider>
  // );
};
