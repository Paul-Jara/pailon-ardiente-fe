import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PaypalButton from "../../../component/PaypalButton"
import axiosClient from "../../../config/axios"
import DataGrid from "react-data-grid";

const OrderVerify = () => {
    const [cart, setCart] = useState()
    const [invoiceCart, setInvoiceCart] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const res = await axiosClient.get('/api/cart')
                setCart(res.data.data)
                setInvoiceCart(res.data.data.invoiceCart)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCart()
    }, [])

    const handleOrder = async () => {
        try {
            await axiosClient.post('/api/order')
            navigate('/order/success')
        } catch (error) {
            console.log(error)
        }
    }

    const data = () => {
        const items = cart?.items.map(item => {
            return {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                pricexQuantity: item.pricexQuantity,
            }
        })

        const totalRow = {
            name: 'Total a pagar',
            quantity: '',
            price: '',
            pricexQuantity: invoiceCart
        }
        return [...items, totalRow]
    }

    const columns = [
        {
            key: 'name',
            name: 'Producto'
        },
        {
            key: 'quantity',
            name: 'Cantidad'
        },
        {
            key: 'price',
            name: 'Precio U'
        },
        {
            key: 'pricexQuantity',
            name: 'Precio x cantidad'
        }
    ]

    return (
        <section>
            <article>
                <div>
                    <DataGrid columns={columns} rows={cart ? data() : []} hover></DataGrid>
                    {invoiceCart && <PaypalButton value={invoiceCart} handleAction={handleOrder} />}
                    <button onClick={handleOrder} className="btn">Acordar pago en efectivo u otros medios</button>
                </div>
            </article>
        </section>
    )
}

export default OrderVerify