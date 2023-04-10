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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-products" aria-controls="nav-products" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav-products">
                    <ul className="navbar-nav flex-column">
                        {
                            categories?.map((category, index) => {
                                return <li key={`category_${index}`} className="nav-item">
                                    <Link to={`/catalog/${category}`} className="nav-link">{category}</Link>
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