import React from 'react'
import AsideDeliver from '../../components/Deliver/AsideDeliver'
import ProfilPage from '../../components/ProfilPage'

const DeliverProfil = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideDeliver/>
      <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] flex-grow py-14 px-6 sm:px-10 lg:px-20 xl:px-40">
        <main className="flex-1 p-6 overflow-y-auto">
          <HeaderDeliver />
          <div className="text-2xl font-bold text-gray-800 text-start  ">
            Profile
          </div>
          <div>
            <ProfilPage/>
          </div>
          
        </main>
      </div>
    </div>
  )
}

export default DeliverProfil
