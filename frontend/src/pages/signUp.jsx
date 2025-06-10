import React from 'react';

const SignUp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Créer un compte</h2>
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-600">Nom complet</label>
            <input
              type="text"
              placeholder="Jean Dupont"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition"
          >
            S'inscrire
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Vous avez déjà un compte ?{" "}
          <a href="/login" className="text-primary hover:underline">
            Se connecter
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
