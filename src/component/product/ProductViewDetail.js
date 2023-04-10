const ProductViewDetail = ({ product }) => {
    return (
        <div>
            <h2>{product.category}</h2>
            {product.subCategory && <h2>{product.subCategory}</h2>}
            <h3>{product.name}</h3>
            {product.smartDescription && <h4>{product.smartDescription}</h4>}
            {product.code && <p>SKU: {product.code}</p>}
            {product.description && <p>{product.description}</p>}
            <p>{product.vendor}</p>
            <p>Precio: {product.price}</p>
            {product.stock && (
                <div>
                    <h3>Stock:</h3>
                    <ul>
                        {Object.keys(product.stock).map(key => (
                            <li key={key}>
                                {key}: {product.stock[key]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {product.images && product.images.length && product.images.map((image, index) => (
                <img src={image.url} alt={product.name} />
            ))}
            {product.features && product.features.length > 0 && <ul>
                {product.features.map(feature => (
                    <li key={feature}>{feature}</li>
                ))}
            </ul>}
            {product.care && product.care.length > 0 && (
                <div>
                    <h3>Care Instructions:</h3>
                    <ul>
                        {product.care.map(instruction => (
                            <li key={instruction}>{instruction}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default ProductViewDetail