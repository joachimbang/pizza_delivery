import React from 'react';

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Connexion</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
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

export default ForgetPassword;
