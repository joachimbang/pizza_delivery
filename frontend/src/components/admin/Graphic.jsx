import React from 'react'

const Graphic = () => {
  return (
    // {/* Graphiques */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">
              📊 Paiements vs Prêts (par mois)
            </h2>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              [Graphique ici]
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">
              📈 Évolution des dettes
            </h2>
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              [Graphique ici]
            </div>
          </div>
        </section>
  )
}

export default Graphic
