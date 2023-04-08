import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosClient from "../../../config/axios"

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
                {product &&
                    <div>
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
                            <img src={product?.images?.length > 0 && product.images[0].url} alt="product-sex"/>
                        </div>
                    </div>
                }
                <button onClick={() => window.history.back()} className="btn">Volver</button>
            </article>
        </section>
    )
}

export default ProductDetail