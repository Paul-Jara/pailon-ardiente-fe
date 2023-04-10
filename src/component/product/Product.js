import { useNavigate } from "react-router-dom"

const Product = ({ product }) => {
    const navigate = useNavigate()

    return (
        <>
            <div onClick={() => navigate(`/product/add/${product._id}`)} className="card product-card">
                <div className="card-body">
                    <h1 className="h4 card-title">{product.name}</h1>
                    <p className="cart-text">Precio: {product.price}</p>
                    <div>
                        <img src={product.images[0].url} className="card-image" alt={product.description} />
                    </div>
                    <button type="button" onClick={() => navigate(`/product/add/${product._id}`)} className="btn">Agregar</button>
                </div>
            </div>
        </>
    )
}

export default Product