import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axiosClient from "../../config/axios"
import DataGrid from "react-data-grid";

const Cart = () => {
    const [cart, setCart] = useState()
    const [invoiceCart, setInvoiceCart] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCart = async () => {
            try {
                await loadData()
            } catch (error) {
                console.log(error)
            }
        }
        fetchCart()
    }, [])

    const loadData = async () => {
        const res = await axiosClient.get('/api/cart')
        setCart(res.data?.data)
        setInvoiceCart(res.data?.data?.invoiceCart)
    }

    const handleOrder = () => {
        navigate('/order/verify')
    }

    const data = () => {
        const items = cart?.items.map(item => {
            const removeFromCart = async (productId) => {
                await axiosClient.put('/api/cart', { productId, quantity: 0 })
                await loadData()
            }

            const actions = () => {
                return <>
                    <i onClick={() => navigate(`/product/add/${item.productId}`)} className="bi bi-pencil-square" title="Editar"></i>
                    <i onClick={() => removeFromCart(item.productId)} className='bi bi-trash' title="Eliminar"></i>
                </>
            }
            return {
                name: item.name,
                quantity: item.quantity,
                price: item.price,
                pricexQuantity: item.pricexQuantity,
                actions: actions()
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
        },
        {
            key: 'actions',
            name: 'Acciones'
        }
    ]

    return (
        <section>
            <article>
                <div className='row text-center'>
                    <h2 className="my-5">Carrito de compras</h2>
                </div>
                <div>
                    <DataGrid columns={columns} rows={cart ? data() : []} hover></DataGrid>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={handleOrder} className="btn">Verificar pedido</button>
                </div>
            </article>
        </section>
    )
}

export default Cart