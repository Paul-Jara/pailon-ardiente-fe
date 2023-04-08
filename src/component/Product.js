import { useNavigate } from "react-router-dom"

const Product = ({ product }) => {
  const navigate = useNavigate()

  return (
    <>
      <div onClick={() => navigate(`/product/add/${product._id}`)}>
        <h3>{product.name}</h3>
        <p>Precio: {product.price}</p>
        <div>
          <img src={product.images[0].url} className="image-product" alt={product.description} />
        </div>
        <button type="button" onClick={() => navigate(`/product/add/${product._id}`)} className="btn">Agregar</button>
      </div>
    </>
  )
}

export default Product