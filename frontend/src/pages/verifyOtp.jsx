// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import OTPInput from "react-otp-input";
// import api from "../lib/axios";

// const VerifyOtp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email || "";

//   const [otp, setOtp] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [otpMessage, setOtpMessage] = useState("");

//   const handleRequestOtp = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       toast.error("Vous devez être connecté pour continuer.");
//       return;
//     }

//     const otpRes = await api.post(
//       "/auth/send-verify-otp",
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (otpRes.data.success) {
//       toast.info("Un code OTP a été envoyé à votre adresse email.");
//       setOtpMessage(`Le code OTP a été envoyé à l'adresse : ${email}`);
//       setShowForm(true);
//     } else {
//       toast.error("Erreur lors de l'envoi de l'OTP.");
//     }
//   } catch (error) {
//     toast.error(
//       error.response?.data?.message || "Impossible d’envoyer le code OTP."
//     );
//     console.log("erreur : ",error)
//   }
// };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (otp.length !== 6) {
//       toast.warning("Le code doit contenir 6 chiffres.");
//       return;
//     }

//     try {
//       const res = await api.post("/auth/verify-otp", { email, otp });

//       if (res.data.success) {
//         toast.success("Compte vérifié avec succès !");
//         navigate("/login");
//       } else {
//         toast.error(res.data.message || "Code invalide.");
//       }
//     } catch (error) {
//       toast.error(
//         error.response?.data?.message ||
//           "Une erreur est survenue lors de la vérification."
//       );
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
//           Vérification OTP
//         </h2>

//         {!showForm && (
//           <button
//             onClick={handleRequestOtp}
//             className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition"
//           >
//             Clique pour vérifier votre compte
//           </button>
//         )}

//         {showForm && (
//           <>
//             {otpMessage && (
//               <p className="text-center text-gray-600 mt-4 mb-4 text-sm">
//                 {otpMessage}
//               </p>
//             )}
//             <form onSubmit={handleSubmit} className="space-y-6 mt-4">
//               <div className="flex justify-center">
//                 <OTPInput
//                   value={otp}
//                   onChange={setOtp}
//                   numInputs={6}
//                   renderInput={(props) => (
//                     <input {...props} className="otp-box bg-gray-100" />
//                   )}
//                   separator={<span style={{ width: "8px" }}></span>}
//                   isInputNum
//                   shouldAutoFocus
//                   inputStyle={{
//                     border: "1px solid transparent",
//                     borderRadius: "8px",
//                     width: "54px",
//                     marginRight: "8px",
//                     height: "54px",
//                     fontSize: "16px",
//                     color: "#000",
//                     fontWeight: "500",
//                     caretColor: "blue",
//                   }}
//                   focusStyle={{
//                     border: "1px solid #CFD3DB",
//                     outline: "none",
//                   }}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition"
//               >
//                 Vérifier le code
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../lib/axios";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [otpMessage, setOtpMessage] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("emailToVerify");

  // Envoi automatique de l'OTP dès l'ouverture de la page
  useEffect(() => {
    const sendOtp = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log(token);
        if (!token) {
          toast.error("Vous devez être connecté pour vérifier votre email.");
          return;
        }

        const res = await api.post(
          "/auth/send-verify-otp",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          toast.info("Un code OTP a été envoyé à votre adresse email.");
          setOtpMessage(`Le code OTP a été envoyé à l'adresse : ${email}`);
        } else {
          toast.error(res.data.message || "Erreur lors de l'envoi de l'OTP.");
        }
      } catch (error) {
        console.error("Erreur OTP :", error);
        toast.error("Impossible d’envoyer le code OTP.");
      }
    };

    if (email) sendOtp();
  }, [email]);

  const handleVerify = async (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      toast.warning("Le code doit contenir 6 chiffres.");
      return;
    }

    try {
      const res = await api.post("/auth/verify-email", { email, otp });

      if (res.data.success) {
        toast.success("Email vérifié avec succès !");
        localStorage.removeItem("emailToVerify");
        navigate("/login");
      } else {
        toast.error(res.data.message || "OTP incorrect.");
      }
    } catch (error) {
      console.error("OTP error:", error);
      toast.error("Erreur lors de la vérification.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Vérification Email
        </h2>

        {otpMessage && (
          <p className="text-center text-gray-600 mb-4 text-sm">{otpMessage}</p>
        )}

        <form onSubmit={handleVerify} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600">Code OTP</label>
            <input
              type="text"
              placeholder="Entrez le code OTP"
              className="w-full border rounded-lg px-4 py-2"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Vérifier
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
