import React from 'react'
import AsideDeliver from '../../components/Deliver/AsideDeliver'
import ProfilPage from '../../components/ProfilPage'
import AsideAdmin from '../../components/admin/AsideAdmin'
import HeaderAdmin from '../../components/admin/HeaderAdmin'

const AdminProfil = () => {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideAdmin/>
      <div className="bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed] flex-grow py-14 px-6 sm:px-10 lg:px-20 xl:px-40">
        <main className="flex-1 p-6 overflow-y-auto">
          <HeaderAdmin/>
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

export default AdminProfil
