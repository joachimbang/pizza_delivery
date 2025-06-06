import React from 'react'
import CommandesBarChartAdmin from './CommandeBarChart'
import { LineChart } from 'recharts'
import LineChartAdmin from './LineChartAdmin'

const Graphic = () => {
  return (
    // {/* Graphiques */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded shadow ">
            <h2 className="text-lg font-semibold mb-2">
              {/* Tendance de la semaine */}
              <CommandesBarChartAdmin/>
            </h2>
            
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-lg font-semibold mb-2">
              <LineChartAdmin/>
            </div>
            
          </div>
        </section>
  )
}

export default Graphic
