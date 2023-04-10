import { useEffect, useState } from "react"
import axiosClient from "../../config/axios"
import Category from "../../component/Category"
import { useParams } from "react-router-dom"
import CategoryMenu from "../../component/CategoryMenu"

const Catalog = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosClient.get('/api/product/filter', {
                    params: { category }
                })
                setProducts(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [category])

    return (
        <section className="row">
            <article className="col-auto me-auto">
                <CategoryMenu />
            </article>
            <article className="col">
                <Category
                    key={category}
                    category={category}
                    products={products} />
            </article>
        </section>
    )
}

export default Catalog