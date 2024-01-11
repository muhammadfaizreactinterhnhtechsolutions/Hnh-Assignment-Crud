/* eslint-disable react/prop-types */
// import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";
export const PrivateRoute = ({children}) =>{
    console.log(children, "children")
    const Token = localStorage.getItem('Token')
    if(!Token){
        return <Navigate to="/login" />
}
else{
    return children
}
}