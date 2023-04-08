import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../../../config/axios";
import DataGrid from "react-data-grid";

const Order = () => {
    const { orderId } = useParams()
    const [order, setOrder] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const loadOrder = async () => {
            try {
                const resOrder = await axiosClient.get(`/api/order/${orderId}`)
                setOrder(resOrder.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        loadOrder()
    }, [orderId])

    const data = () => {
        const items = order?.items.map(item => {
            const actions = () => {
                return <>
                    <i type="button" 
                        id={`action_${item._id}`}
                        className='bi bi-eye' title="Ver detalle"
                        onClick={() => navigate(`/product/${item.productId}`)}>
                    </i>
                </>
            }
            return {
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                sub: `${item.price * item.quantity}`,
                actions: actions()

            }
        })

        const totalRow = {
            name: 'Total',
            price: '',
            quantity: '',
            sub: order.invoicedPrice,
            actions: ''
        }
        return [...items, totalRow]
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
        },
        {
            key: 'actions',
            name: 'Acciones'
        }
    ]

    return (
        <section>
            <article>
                <label>{`Estado: ${order?.status}`}</label>
                <DataGrid columns={columns} rows={order ? data() : []} hover></DataGrid>
            </article>
        </section>
    )
}

export default Order;