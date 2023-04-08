import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import FormInput from '../component/FormInput'
import { UserContext } from '../context/UserContext'

const SignUp = () => {
    const { authStatus, handleChange, registerUser, verifyPassword, verifyToken } = useContext(UserContext)
    const navigate = useNavigate()

    const register = async (event) => {
        event.preventDefault()
        if (verifyPassword()) {
            await registerUser()
            navigate('/catalog/')
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Las contraseñas no coinciden. Por favor intente nuevamente."
            })
        }
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
        <section className='container'>
            <article className='container row justify-content-center'>
                <div className='row text-center'>
                    <h2 className="my-5">Registro de usuario</h2>
                </div>
                <form onSubmit={(e) => register(e)} className='card col-sm-6 p-3'>
                    <FormInput labelText="Nombre" name="name" autoComplete="true"
                        type="text" isRequired={true} handlerChange={handleChange} />
                    <FormInput labelText="Apellido" name="lastname" autoComplete="true"
                        type="text" isRequired={true} handlerChange={handleChange} />
                    <FormInput labelText="Teléfono" name="phone" autoComplete="true"
                        type="text" isRequired={true} handlerChange={handleChange} />
                    <FormInput labelText="Correo electrónico" name="email" autoComplete="true"
                        type="email" isRequired={true} handlerChange={handleChange} />
                    <FormInput labelText="Contraseña" name="password"
                        type="password" isRequired={true} handlerChange={handleChange} />
                    <FormInput labelText="Confirmar contraseña" name="rePassword"
                        type="password" isRequired={true} handlerChange={handleChange} />
                    <button type='submit' className='btn'>Registrar</button>

                    <div className='w-100 text-center mt-2'>
                        ¿Ya tienes una cuenta? <Link to="/login">Inicia seción</Link>
                    </div>
                </form>
            </article>
        </section>
    )
}

export default SignUp