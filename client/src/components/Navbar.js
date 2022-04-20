import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div>
      <nav className="flex bg-green-800 justify-between px-12 p-4 text-white">
        <h1 className="text-lg font-semibold">
          <Link to={"/"}>Tenant Management App</Link>
        </h1>
        <ul className="flex space-x-6 text-base">
          <li>
            <Link to={"/addtenant"}>Add tenant</Link>
          </li>
          <li>
            <Link to={"/addbuilding"}>Add building</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
