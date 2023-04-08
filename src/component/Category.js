import Product from "./Product"

const Category = ({ category, products }) => {
    return (
        <>
            <h2>{category}</h2>
            <div className="row">
                <div className="col">
                    {products.map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Category