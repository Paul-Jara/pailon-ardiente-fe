import Product from "./product/Product"

const Category = ({ category, products }) => {
    return (
        <>
            <h2>{category}</h2>
            <div className="row card-flex">
                {products.map((product) => (
                    <Product key={product._id} product={product} />
                ))}

            </div>
        </>
    )
}

export default Category