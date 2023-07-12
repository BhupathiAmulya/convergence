import React from 'react'
import Navbar from './Navbarb/Navbarb';
import { Outlet } from 'react-router-dom';


function RootLayout() {
  return (
    <div>
      <Navbar/>
      <div style={{minHeight:"90vh"}}>
      <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout;