import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Data from './Pages/AddData/index'
import Tables from './Components/Tables'
import EditPost from './Pages/EditData'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
function App() {

  return (
    <>
    
    <Router>
    <Routes >
      <Route path='/' element={<Data />}/>
      <Route path='/tables' element={<Tables />}/>
      <Route path='/edit/:id' element={<EditPost />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      
    </Routes>
  </Router>
    </>
  )
}

export default App
