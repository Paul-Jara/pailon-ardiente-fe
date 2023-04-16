import { useEffect, useState } from "react"
import axiosClient from "../../config/axios"
import Category from "../../component/Category"
import { useParams } from "react-router-dom"
import CategoryMenu from "../../component/CategoryMenu"

const Catalog = () => {
    const { subCategories } = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                if (subCategories) {
                    const res = await axiosClient.get('/api/product/sub-categories', {
                        params: { subCategories }
                    })
                    setProducts(res.data.data)
                } else {
                    const res = await axiosClient.get('/api/product')
                    setProducts(res.data.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [subCategories])

    return (
        <section className="row">
            <article className="col-auto me-auto">
                <CategoryMenu />
            </article>
            <article className="col">
                <Category
                    category={subCategories}
                    products={products} />
            </article>
        </section>
    )
}

export default Catalog