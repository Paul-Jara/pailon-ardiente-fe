import React, { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const PrivateRoute = () => {
    const { authStatus, verifyToken } = useContext(UserContext)
    const [used, setUsed] = useState()

    useEffect(() => {
        if (!used) {
            verifyToken()
            setUsed(true)
        }
    }, [verifyToken, used])

    return authStatus ? <Outlet /> : <Navigate to="/" replace />
}


export default PrivateRoute