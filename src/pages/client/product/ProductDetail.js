import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClient from "../../../config/axios"
import ProductViewDetail from "../../../component/product/ProductViewDetail"

const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axiosClient.get(`/api/product/${productId}`)
                setProduct(res.data.data)
            } catch (error) {
                console.log('Error en fetch product', error)
            }
        }
        fetchProduct()
    }, [productId])

    return (
        <section>
            <article>

                {product && <ProductViewDetail product={product} />}
                <button onClick={() => window.history.back()} className="btn">Volver</button>
            </article>
        </section>
    )
}

export default ProductDetail