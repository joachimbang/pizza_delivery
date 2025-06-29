import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContent } from "../context/AppContent";

const EmailVerify = () => {
  axios.defaults.withCredentials = true;
  const { backendUrl, setIsLoggedin, getUserData, userData } =
    useContext(AppContent);
  const inputRefs = React.useRef([]);
  const navigate = useNavigate();

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && e.target.value === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text");
    const pastArray = paste.split("");
    pastArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
  };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const otpArray = inputRefs.current.map(e => e.value)
  //     const otp =otpArray.join();

  //     const {data} = await axios.post(backendUrl+'/auth/verify-account',{otp})
  //     if (data.sucess) {
  //       toast.success(data.message);
  //       getUserData();
  //       navigate('/');
  //     }
  //     else{
  //       toast.error(data.message)
  //     }
  //   } catch (error) { 
  //     toast.error(data.message)
  //   }
  // };
  // ...existing code...
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const otp = inputRefs.current.map(e => e.value).join("");
    const { data } = await axios.post(backendUrl + '/auth/verify-account', {
      otp,
      userId: userData?.userId
    });
    if (data.success) {
      toast.success(data.message);
      getUserData();
      navigate("/client/dashboard");
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
  }
};
// ...existing code...

  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:0 bg-gradient-to-br from-blue-200 to-purple-400">
      
        

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 p-8 rounded-lg w-96 text-sm"
        >
          <h1 className="text-2xl font-semibold mb-4 text-center text-white">
            Vérification Email
          </h1>
          <p className="text-center mb-6 text-indigo-300">
            Entrez le code à 6 chiffres envoyé à <strong>{userData.email}</strong>
          </p>
          <div className="flex justify-between mb-8" onPaste={handlePaste}>
            {Array(6).fill(0).map((_,index)=>(
              <input type="text" maxLength='1' key={index} required className="w-12 h-12 bg-[#333A5C] text-white text-center text-xl rounded-md"
              ref={e=> inputRefs.current[index] = e} onInput={(e) => handleInput(e,index)}  onKeyDown={(e)=>handleKeyDown(e,index)}/>
            ))}
          </div>
          

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-semibold py-3 rounded-lg transition"
          >
            Vérifier le code
          </button>
        </form>
      {/* </div> */}
    </div>
  );
};

export default EmailVerify;
