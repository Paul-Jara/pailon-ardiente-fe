import { useContext, useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import FormInput from '../component/FormInput'
import { UserContext } from '../context/UserContext'

const Login = () => {
    const { authStatus, handleChange, loginUser, verifyToken } = useContext(UserContext)
    const navigate = useNavigate()

    const sendData = async (event) => {
        event.preventDefault()
        await loginUser()
        navigate('/catalog/')
    }

    useEffect(() => {
        const checkLogin = async () => {
            await verifyToken()
        }
        checkLogin()
    }, [])

    if (authStatus) {
        return <Navigate to='/catalog/'></Navigate>
    }

    return (
        <section className='container '>
            <div className='row text-center'>
                <h2 className="my-5">Iniciar sesión</h2>
            </div>
            <article className='container row justify-content-center'>
                <form onSubmit={(e) => sendData(e)} className='card col-sm-6 p-3'>
                    <FormInput labelText="Correo electrónico" name="email"
                        type="email" isRequired={true} handlerChange={handleChange} autoComplete="true" />
                    <FormInput labelText="Contraseña" name="password"
                        type="password" isRequired={true} handlerChange={handleChange} />
                    <button type='submit' className='btn'>Iniciar sesión</button>
                    <div className='mt-3'>
                        ¿No tienes una cuenta? <Link to="/register">Registrate</Link>
                    </div>
                </form>
            </article>
        </section>
    )
}

export default Login