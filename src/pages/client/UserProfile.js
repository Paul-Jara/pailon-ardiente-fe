import { useEffect, useState } from "react"
import LabelInput from "../../component/LabelInput"
import axiosClient from "../../config/axios"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const UserProfile = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [name, setName] = useState()
    const [lastname, setLastname] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [province, setProvince] = useState()
    const [city, setCity] = useState()
    const [zipCode, setZipCode] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()

    useEffect(() => {
        const loadUser = async () => {
            try {
                const res = await axiosClient.get('/api/user/verify')
                setUser(res.data.user)
            } catch (error) {
                console.log(error)
                throw error
            }
        }
        loadUser()
    }, [])

    const updateUser = async () => {
        if (password && rePassword) {
            if (password === rePassword) {
                axiosClient.put('/api/user/password', { password })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Las contraseñas no coinciden. Por favor intente nuevamente."
                })
            }
        }
        axiosClient.put('/api/user', { name, lastname, phone, email, address, province, city, zipCode })
        navigate('/catalog/')
    }

    return (
        <section>
            <div className='row text-center'>
                <h2 className="my-5">Datos de usuario</h2>
            </div>
            <article className='container row justify-content-center'>
                <div className='card col-sm-6 p-3'>
                    <LabelInput labelText="Nombre" name="name" autoComplete="true"
                        type="text" isRequired={true} setter={setName} defaultValue={user?.name} />
                    <LabelInput labelText="Apellido" name="lastname" autoComplete="true"
                        type="text" isRequired={true} setter={setLastname} defaultValue={user?.lastname} />
                    <LabelInput labelText="Teléfono" name="phone" autoComplete="true"
                        type="text" isRequired={true} setter={setPhone} defaultValue={user?.phone} />
                    <LabelInput labelText="Correo electrónico" name="email" autoComplete="true"
                        type="email" isRequired={true} setter={setEmail} defaultValue={user?.email} />
                    <LabelInput labelText="Provincia" name="province" autoComplete="true"
                        type="text" isRequired={true} setter={setProvince} defaultValue={user?.province} />
                    <LabelInput labelText="Ciudad" name="city" autoComplete="true"
                        type="text" isRequired={true} setter={setCity} defaultValue={user?.city} />
                    <LabelInput labelText="Dirección" name="address" autoComplete="true"
                        type="text" isRequired={true} setter={setAddress} defaultValue={user?.address} />
                    <LabelInput labelText="Código postal" name="zipCode" autoComplete="true"
                        type="text" isRequired={true} setter={setZipCode} defaultValue={user?.zipCode} />
                    <LabelInput labelText="Contraseña" name="password"
                        type="password" isRequired={true} setter={setPassword} defaultValue={password} />
                    <LabelInput labelText="Confirmar contraseña" name="rePassword"
                        type="password" isRequired={true} setter={setRePassword} defaultValue={rePassword} />
                    <button type='submit' onClick={updateUser} className="btn">Actualizar datos</button>
                </div>
            </article>
        </section>
    )
}

export default UserProfile;