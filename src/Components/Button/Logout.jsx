/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Logout() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    const logout = () => {
      toast.success("Logout Success")
      setTimeout(() => {
        localStorage.removeItem("Token")
        navigate("/login")
        
      }, 2000);
    }
    if(!localStorage.getItem("Token")){
    navigate("/login")
    }
  return (
    <div className=''>
    <nav className="bg-slate-950 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center text-white" >
       <h3 className='text-2xl font-bold'>Logo</h3>
      </div>

      <div className="lg:hidden">
        <button
          className="text-white focus:outline-none focus:border-none"
          onClick={toggleNavbar}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
        <div className="lg:flex items-center">
          <div href="/" className="text-white px-4 py-2 hover:bg-blue-600 cursor-pointer"  onClick={logout} >
            Logout
          </div>
       
        </div>
      </div>
    </div>
  </nav>
  
      <ToastContainer />
    
    </div>
  )
}

export default Logout
