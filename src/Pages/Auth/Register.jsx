/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { addPost } from '../../Services/Crud';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom';
import {  Register1 } from '../../Services/Auth';

function Register() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    
    const navigate = useNavigate()
    const handleAddPost = async () => {
        const RegisterData = new FormData()
        RegisterData.append('fname', fname)
        RegisterData.append('lname', lname)
        RegisterData.append('username', username)
        RegisterData.append('email', email)    
        RegisterData.append('password', password)
        console.log();
        try {
          await Register1(RegisterData);
          toast.success('Register successfully!');
          
          setTimeout(() => {
            navigate("/login")
          }, 2000);
        } catch (error) {
          console.error('Error adding post:', error);
        }
    };

    return (
        <div className="container mx-auto  mt-8 h-full flex flex-col lg:mt-10">
            <h1 className="text-3xl font-bold mb-4">Register</h1>

            <form className="max-w-md mx-auto w-full">

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="fname">
                        First Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="fname"
                        type="text"
                        placeholder="Enter Fisrt Name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
                        last Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lname"
                        type="text"
                        placeholder="Enter last Name "
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
                        UserName:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="UserName"
                        type="text"
                        placeholder="Enter User Name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="email"
                        placeholder="Enter Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>


                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="button"
                        onClick={handleAddPost}
                    >
                        Register
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Register;
