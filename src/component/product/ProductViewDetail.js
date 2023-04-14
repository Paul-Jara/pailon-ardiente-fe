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
                            {product.stock.map((item, index) => (
                                <li key={'productId_' + index}>
                                    {item.sizeLetters}{item.sizeNumber} {item.color}: {item.quantity}
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
                            {product.images.map((image, index) => (
                                <div className="row">
                                    <div className="col-3" key={'images_' + index}>
                                        <img
                                            className="img-fluid mb-3"
                                            src={image.url}
                                            alt={`small_${index}`}
                                            onClick={() => handleSmallImageClick(index)}
                                        />
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>}
                <h3>Características:</h3>
                {product.features &&<div dangerouslySetInnerHTML={{ __html: product.features }}></div>}
                <h3>Instrucciones de cuidado</h3>
                {product.care &&<div dangerouslySetInnerHTML={{ __html: product.care }}></div>}
            </div>
        </div>
    )
}

export default ProductViewDetail