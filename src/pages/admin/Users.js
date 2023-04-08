import { useEffect, useState } from "react"
import axiosClient from "../../config/axios"
import DataGrid from "react-data-grid";

const Users = () => {
    const [users, setUsers] = useState()

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const res = await axiosClient.get('/api/user')
                setUsers(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        loadUsers()
    }, [])

    const deleteUser = async (userId) => {
        try {
            await axiosClient.delete(`/api/user/${userId}`)
            const res = await axiosClient.get('/api/user')
            setUsers(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const data = () => {
        return users.map(user => {
            const actions = () => {
                return <>
                    <i type="button" aria-label="Left Align" onClick={() => deleteUser(user._id)}
                        className="bi bi-trash" title="Eliminar"></i>
                </>
            }
            return {
                name: `${user.name} ${user.lastname}`,
                email: user.email,
                phone: user.phone,
                actions: actions()

            }
        })
    }

    const columns = [
        {
            key: 'name',
            name: 'Nombre'
        },
        {
            key: 'email',
            name: 'Correo electrónico'
        },
        {
            key: 'phone',
            name: 'Télefono'
        },
        {
            key: 'actions',
            name: 'Acciones'
        }
    ]

    return (
        <section>
            <article>
                <DataGrid columns={columns} rows={users ? data() : []} hover></DataGrid>
            </article>
        </section>
    )
}

export default Users;