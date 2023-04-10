import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LabelInput from "../../../component/LabelInput"
import axiosClient from "../../../config/axios"
import ProductViewDetail from "../../../component/product/ProductViewDetail"

const ProductAdd = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState()
    const { productId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axiosClient.get(`/api/product/${productId}`)
                const resCart = await axiosClient.get('/api/cart')
                const cart = resCart.data?.data
                const item = cart?.items?.find(item => item.productId === productId)
                setQuantity(item ? item.quantity : 1)
                setProduct(res.data.data)
            } catch (error) {
                console.log('Error en fetch product', error)
            }
        }
        fetchProduct()
    }, [productId])

    const addToCart = async () => {
        await axiosClient.put('/api/cart/', {
            productId,
            quantity
        })
        navigate('/catalog/')
    }

    return (
        <section>
            <article>
                {product && <ProductViewDetail product={product} />}
                <LabelInput labelText="Cantidad"
                    type="text" setter={setQuantity}
                    defaultValue={quantity}
                    name="quantity" />
                <button onClick={addToCart} className="btn">Agregar al carrito</button>
            </article>
        </section>
    )
}

export default ProductAdd