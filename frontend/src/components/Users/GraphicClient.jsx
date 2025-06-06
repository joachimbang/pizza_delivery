
import LineChartClient from './LineChartClient'
import CommandesBarChartClient from './CommandeBarsChartClient'

const GraphicClient = () => {
  return (
    // {/* Graphiques */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-4 rounded shadow ">
            <h2 className="text-lg font-semibold mb-2">
              {/* Tendance de la semaine */}
              <CommandesBarChartClient/>
            </h2>
            
          </div>
          <div className="bg-white p-4 rounded shadow">
            <div className="text-lg font-semibold mb-2">
              <LineChartClient/>
            </div>
            
          </div>
        </section>
  )
}

export default GraphicClient
