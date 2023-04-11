import { useEffect, useState } from "react";

const ProductViewDetail = ({ product }) => {
    const [mainImage, setMainImage] = useState('')

    const handleSmallImageClick = (index) => {
        setMainImage(product.images[index])
    }

    useEffect(() => {
        if (product && product.images) {
            setMainImage(product.images[0])
        }
    }, [product])

    return (
        <div className="card">
            <div className="card-body">
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
                                <li key={'productId_' + key}>
                                    {key}: {product.stock[key]}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {product.images && <div className="container my-5">
                    <div className="row">
                        <div className="col-lg-8">
                            <img className="img-fluid" src={mainImage?.url} alt="adult-product" />
                        </div>
                        <div className="col-lg-4">
                            <div className="row">
                                {product.images.map((image, index) => (
                                    <div className="col-3" key={'images_' + index}>
                                        <img
                                            className="img-fluid mb-3"
                                            src={image.url}
                                            alt={`small_${index}`}
                                            onClick={() => handleSmallImageClick(index)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>}

                {product.features && product.features.length > 0 && <ul>
                    {product.features.map((feature, index) => (
                        <li key={`feature_${index}`}>{feature}</li>
                    ))}
                </ul>}
                {product.care && product.care.length > 0 && (
                    <div>
                        <h3>Care Instructions:</h3>
                        <ul>
                            {product.care.map(instruction => (
                                <li key={`instruction_${instruction}`}>{instruction}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductViewDetail