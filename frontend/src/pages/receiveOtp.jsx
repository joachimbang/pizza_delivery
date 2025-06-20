import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AppContent } from "../context/AppContent";
import { toast } from "react-toastify";
import axios from "axios";



const ReceiveOtp = () => {
  const navigate = useNavigate();
  const { userData,backendUrl } = useContext(AppContent);
  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      console.log("userData in Navbar:", userData);

      const { data } = await axios.post(backendUrl + "/auth/send-verify-otp", {
        userId: userData.id, // ou userData.id
        
      });
      
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      {!userData.isAccountVerified && (
        <button onClick={sendVerificationOtp}>send</button>
      )}
    </div>
  );
};

export default ReceiveOtp;
