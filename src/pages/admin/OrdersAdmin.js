import { useEffect, useState } from "react";
import DataGrid from "react-data-grid";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../config/axios";
import { formatDate } from "../../helper/DateUtil";

const OrdersAdmin = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState()

    useEffect(() => {
        const loadOrders = async () => {
            try {
                const res = await axiosClient.get('/api/order')
                setOrders(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        loadOrders()
    }, [])

    const data = () => {
        return orders.map((order, index) => {
            const actions = () => {
                return <>
                    <i id={'btn_' + index} onClick={() => navigate(`/admin/order/${order._id}`)}
                        title="Ver detalle" className="bi bi-eye"></i>
                </>
            }
            return {
                status: order.status,
                invoicedPrice: order.invoicedPrice,
                createdAt: order ? formatDate('es-ES', order?.createdAt) : '',
                actions: actions()

            }
        })
    }

    const columns = [
        {
            key: 'status',
            name: 'Estado'
        },
        {
            key: 'invoicedPrice',
            name: 'Monto facturado'
        },
        {
            key: 'createdAt',
            name: 'Fecha de compra'
        },
        {
            key: 'actions',
            name: 'Acciones'
        }
    ]

    return (
        <section>
            <article>
                {orders &&
                    <DataGrid columns={columns} rows={orders ? data() : []} hover></DataGrid>
                }
            </article>
        </section>
    )
}

export default OrdersAdmin;