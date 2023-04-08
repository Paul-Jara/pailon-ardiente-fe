import { useState, createContext } from "react"
import { Navigate } from "react-router-dom"
import axiosClient from "../config/axios"
export const UserContext = createContext()


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ name: null, email: null })
    const [authStatus, setAuthStatus] = useState(false)
    const [formData, setFormData] = useState({
        name: '', lastname: '', phone: '', email: '', password: '', rePassword: ''
    })

    const handleChange = (event) => {
        event.preventDefault()
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const verifyPassword = () => {
        if (formData.password === formData.rePassword) {
            return true
        }
        return false
    }

    const registerUser = async () => {
        try {
            const res = await axiosClient.post('/api/user', formData)
            localStorage.setItem('token', res.data.token)
            setFormData({...formData, password:''})
            localStorage.setItem('user', JSON.stringify({...formData, password:''}))
            setAuthStatus(true)
        } catch (error) {
            console.log(error)
        }
    }

    const verifyToken = async () => {
        const token = localStorage.getItem('token')
        if (token) {
            axiosClient.defaults.headers.common['x-auth-token'] = token
            const res = await axiosClient.get('/api/user/verify')
            if(res.status === 200) {
                setUser(res.data.user)
                setAuthStatus(true)
            } else {
                setUser(undefined)
                setAuthStatus(false)
                console.log('Error verificando el token', res.error)
            }
        } else {
            setUser(undefined)
            setAuthStatus(false)
            delete axiosClient.defaults.headers.common['x-auth-token']
        }
    }

    const loginUser = async () => {
        try {
            const res = await axiosClient.post('/api/user/login', formData) 
            localStorage.setItem('token', res.data.token)
            setFormData({...formData, password:''})
            localStorage.setItem('user', JSON.stringify({...formData, password:''}))
            setAuthStatus(true)
        } catch (error) {
            console.log(error)
        }
    }

    const logoutUser = () => {
        localStorage.removeItem('token')
        setUser(null)
        setAuthStatus(false)
        return <Navigate to="/login" />
    }

    const data = { user, authStatus, handleChange, registerUser, verifyPassword, verifyToken, loginUser, logoutUser }
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>
}