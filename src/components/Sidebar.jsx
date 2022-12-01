import React, { useState } from 'react'
import imagenLogo from '../images/logo.jpg'

const Sidebar = () => {
   const body = document.querySelector("body");
   const toggle = document.querySelector(".toggle");
   const modeSwitch = document.querySelector(".mode");
   const modeText = document.querySelector(".mode-text");

   const [sidebar, setSidebar] = useState(false);
   const [texto, setTexto] = useState("Oscuro");

   const modeSwitchClick = () => {
      body.classList.toggle("dark");

      if(body.classList.contains("dark")) {
         setTexto("Claro")
      } else {
         setTexto("Oscuro")
      }
   }

   const openCloseSidebar = () => {
      setSidebar(!sidebar)   
   }
   
   return (
      <div>
         <nav id="sidebar" className={sidebar ? 'sidebar' : 'sidebar close'}>
            <header>
               <div className="image-text">
                  <span className="image">
                     <img
                        src={imagenLogo} alt="logo"
                     />
                  </span>

                  <div className="text header-text">
                     <span className="name">RESONANCE</span>
                     <span className="gtr">Gestion de Stock</span>
                  </div>
               </div>

               <i className="bx bx-chevron-right toggle" onClick={openCloseSidebar}></i>
            </header>

            <div className="menu-bar">
               <div className="menu">
                  <ul className="menu-links">
                     <li className="nav-links">
                        <a href="#">
                           <i className="bx bx-home-alt icon"></i>
                           <span className='text nav-text'>Inicio</span>
                        </a>
                     </li>
                     <li className="nav-links">
                        <a href="#">
                           <i className='bx bx-list-ol icon'></i>
                           <span className='text nav-text'>Listado Equipos</span>
                        </a>
                     </li>
                     <li className="nav-links">
                        <a href="#">
                           <i className='bx bx-list-ol icon'></i>
                           <span className='text nav-text'>Listado Chips</span>
                        </a>
                     </li>
                     <li className="nav-links">
                        <a href="#">
                           <i className='bx bx-desktop icon'></i>
                           <span className='text nav-text'>Agregar Equipo/s</span>
                        </a>
                     </li>
                     <li className="nav-links">
                        <a href="#">
                           <i className='bx bx-chip icon'></i>
                           <span className='text nav-text'>Agregar Chips</span>
                        </a>
                     </li>
                  </ul>
               </div>

               <div className="bottom-content">
                  <li className="">
                     <a href="#">
                        <i className='bx bx-log-out icon'></i>
                        <span className='text nav-text'>Logout</span>
                     </a>
                  </li>

                  <li className="mode">
                     <div className="moon-sun">
                        <i className='bx bx-moon icon moon'></i>
                        <i className='bx bx-sun icon sun'></i>
                     </div>
                     <span className="mode-text text">{texto}</span>

                     <div className="toggle-switch">
                        <span className="switch" onClick={modeSwitchClick}></span>
                     </div>
                  </li>
               </div>
            </div>
         </nav>
      </div>
   )
}
export default Sidebar