import React from 'react'
import Aside from '../../components/Users/Aside'
import FooterClient from '../../components/Users/FooterClient'
import TitleFilter from '../../components/Users/TitleFilter'
import HistoricList from '../../components/Users/HistoricList'

const Historic = () => {
  return (
    <div>
      <Aside/>
      <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] min-h-screen flex flex-col pt-14 px-40">
        <main className="flex-grow">
            <TitleFilter title={"Historics"}/>
        <HistoricList/>
        <HistoricList/>
        <HistoricList/>
        <HistoricList/>
        </main>
        
      </div>
      <FooterClient/>
    </div>
  )
}

export default Historic
