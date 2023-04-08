import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from "../config/axios"

const CategoryMenu = () => {
    const [categories, setCategories] = useState()

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const res = await axiosClient.get('/api/product/categories')
                setCategories(res.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        loadCategories()
    }, [])

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-products" aria-controls="nav-products" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="nav-products">
                    <ul class="navbar-nav flex-column">
                        {
                            categories?.map((category, index) => {
                                return <li key={`category_${index}`} class="nav-item">
                                            <Link to={`/catalog/${category}`} class="nav-link">{category}</Link>
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default CategoryMenu