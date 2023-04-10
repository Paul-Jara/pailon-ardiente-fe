import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import User from "../../component/User";
import axiosClient from "../../config/axios";
import 'react-data-grid/lib/styles.css';
import DataGrid from 'react-data-grid';

const OrderAdmin = () => {
    const params = useParams()
    const { orderId } = params
    const [order, setOrder] = useState()
    const [user, setUser] = useState()
    const [status, setStatus] = useState()
    const [statusList, setStatusList] = useState()

    useEffect(() => {
        const loadOrder = async () => {
            try {
                const resOrder = await axiosClient.get(`/api/order/${orderId}`)
                setOrder(resOrder.data.data)
                const resUser = await axiosClient.get(`/api/user/${resOrder.data.data.userId}`)
                setUser(resUser.data.data)
                const resStatuses = await axiosClient.get(`/api/order/${resOrder.data.data._id}/status/admin`)
                setStatusList(resStatuses.data.data)
                setStatus(resOrder.data.data.status)
            } catch (error) {
                console.log(error)
            }
        }
        loadOrder()
    }, [orderId])

    const data = () => {
        return order?.items.map(item => {
            return {
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                sub: `${item.price * item.quantity}`
            }
        })
    }

    const columns = [
        {
            key: 'name',
            name: 'Nombre'
        },
        {
            key: 'price',
            name: 'Precio unitario'
        },
        {
            key: 'quantity',
            name: 'Cantidad'
        },
        {
            key: 'sub',
            name: 'Sub total'
        }
    ]

    const handleOptionChange = async (event) => {
        const status = event.target.value
        setStatus(status)
        await axiosClient.patch(`/api/order/${order._id}/status/${status}`)
        const resStatuses = await axiosClient.get(`/api/order/${order._id}/status/admin`)
        setStatusList(resStatuses.data.data)
    }

    return (
        <section>
            <article className='container row justify-content-center'>
                <User user={user}></User>
                <label>{`Estado: ${status}`}</label>
                <select value={status} onChange={handleOptionChange}>
                    <option value="">Seleccionar una opción</option>
                    {statusList &&
                        statusList.map((s, index) => {
                            return <option value={s} id={`option${index}`}>{s}</option>
                        })
                    }
                </select>
                <DataGrid columns={columns} rows={order ? data() : []} hover></DataGrid>
            </article>
        </section>
    )
}

export default OrderAdmin;