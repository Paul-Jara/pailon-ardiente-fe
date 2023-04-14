import React, { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/UserContext"

const AdminRoute = () => {
    const { user } = useContext(UserContext)

    return user.role === 'admin' ? <Outlet /> : <Navigate to="/" replace />
}

export default AdminRoute