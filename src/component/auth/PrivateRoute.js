import React, { useContext, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const PrivateRoute = () => {
    const {authStatus, verifyToken} = useContext(UserContext)

    useEffect(() => {
        verifyToken()
    }, [])

    return authStatus ? <Outlet/> : <Navigate to="/login" replace/>
}


export default PrivateRoute