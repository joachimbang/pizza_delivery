import React from 'react'
import AsideDeliver from '../../components/Deliver/AsideDeliver'
import HeaderDeliver from '../../components/Deliver/HeaderDeliver'

function DeliverDashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#f0f4f8] to-[#dbe5ed]">
      <AsideDeliver />
      <main className="flex-1 p-6 overflow-y-auto">
        <HeaderDeliver />
      </main>
    </div>
  )
}

export default DeliverDashboard
