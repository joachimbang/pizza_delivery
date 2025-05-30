import React from 'react'
import { Link } from 'react-router'

const AsideAdmin = () => {
  return (
    
      <aside className=" w-64 bg-white shadow-md p-4 space-y-4">
        <h2 className="text-2xl font-bold text-primary">Dashboard</h2>
        <nav className="space-y-2">
            
          <Link to="/admin/home" className="block hover:text-primary">
         Home
          </Link>
          <Link to="/admin/add-loan" className="block hover:text-primary">
            Ajouter un prêt
          </Link>
          <Link to="/admin/add-user" className="block hover:text-primary">
            Ajouter un utilisateur
          </Link>
          <Link to="/admin/listclient" className="block hover:text-primary">
            Liste des utilisateurs
          </Link>
        </nav>
      </aside>
    // </div>
  )
}

export default AsideAdmin
