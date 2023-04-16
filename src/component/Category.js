import Product from "./product/Product"

const Category = ({ category, products }) => {
    return (

        <div className="row card-flex mt-2">
            {products && products.map((product) => (
                <Product key={product._id} product={product} />
            ))}
        </div>
    )
}

export default Category