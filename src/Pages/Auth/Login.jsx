/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
// import { addPost } from '../../Services/Crud'; 
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { LoginApi } from '../../Services/Auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate()
  
  const handleAddPost = async () => {
    if(email==='', password===''){
      toast.error("Please fill all the fields")
      return;
    }
    
    else {

      const LoginData = new FormData()
      LoginData.append('username', email)    
      LoginData.append('password', password)
      try {
        const res = await LoginApi(LoginData);
        localStorage.setItem("Token", res.access)
        console.log(res.access);
        toast.success('Login Successfully!');
        console.log(res);
        setTimeout(() => {
          navigate("/")
        }, 2000);
        
      } catch (error) {
        console.log(error.response.data.detail);
        toast.error(error.response.data.detail)
      }
    }
  };

  return (
    <div className="container mx-auto  mt-8 h-full flex flex-col lg:mt-32">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      
      <form className="max-w-md mx-auto w-full">
       
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
            UserName:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="Password">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="password"
            placeholder="Enter Password "
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        
        
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="button"
            onClick={handleAddPost}
          >
            Login
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
