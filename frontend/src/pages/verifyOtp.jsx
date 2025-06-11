import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";
import api from "../lib/axios";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.warning("Le code doit contenir 6 chiffres.");
      return;
    }

    try {
      const res = await api.post("/auth/verify-otp", { email, otp });

      if (res.data.success) {
        toast.success("Compte vérifié avec succès !");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Code invalide.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Une erreur est survenue lors de la vérification."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Vérification OTP
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center">
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input {...props} className="otp-box bg-gray-100" />
              )}
              separator={<span style={{ width: "8px" }}></span>}
              isInputNum
              shouldAutoFocus
              inputStyle={{
                border: "1px solid transparent",
                borderRadius: "8px",
                width: "54px",
                marginRight: "8px",
                height: "54px",
                fontSize: "16px",
                color: "#000",
                fontWeight: "500",
                caretColor: "blue",
              }}
              focusStyle={{
                border: "1px solid #CFD3DB",
                outline: "none",
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Vérifier le code
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
