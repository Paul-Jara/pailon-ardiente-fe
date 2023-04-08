import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import LabelInput from "../../../component/LabelInput"
import axiosClient from "../../../config/axios"

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
                {product && <div>
                    <h2>{product.category}</h2>
                    <h3>{product.name}{product.code && ` ${product.code}`}</h3>
                    <p>{product.description}</p>
                    <p>Precio: {product.price}</p>
                    {(product.features &&
                        ((product.features.materials && product.features.materials.length > 0) ||
                            product.features.length ||
                            product.features.dimensions ||
                            product.features.thickness)) &&
                        <>
                            {product.features.materials && product.features.materials.length > 0 && <p>Materials: {product.features.materials.join(', ')}</p>}
                            {(product.features.length ||
                                product.features.dimensions ||
                                product.features.thickness) &&
                                <>
                                    <p>Dimensions:</p>
                                    {product.features.dimensions.length && <p>Length: {product.features.dimensions.length}</p>}
                                    {product.features.dimensions.insertable_length && <p>Insertable Length: {product.features.dimensions.insertable_length}</p>}
                                    {product.features.dimensions.thickness && <p>Thickness: {product.features.dimensions.thickness}</p>}
                                </>
                            }

                        </>
                    }
                    <div>
                        <img src={product?.images?.length > 0 && product.images[0].url} alt="producto-sexual"/>
                    </div>
                </div>}
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