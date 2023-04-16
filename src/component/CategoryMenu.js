import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axiosClient from "../config/axios"

const CategoryMenu = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const res = await axiosClient.get('/api/configuration/menu')
                setCategories(res.data.data.data)
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
                            categories.map((category, index) => {
                                return (
                                    <li key={`category_${category.name}_${index}`} className="nav-item dropdown">
                                        <Link to={`/catalog/${category.keys}`} className="nav-link dropdown-toggle"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">{category.name}
                                        </Link>
                                        {category.items && 
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown" key={`${category.name}_${index}`}>
                                                {category.items.map((subCategory, index) => {
                                                    return (
                                                        <li key={`subCategory_${index}`}>
                                                            <Link className="dropdown-item" to={`/catalog/${subCategory.keys}`}>{subCategory.name}</Link>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        }

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default CategoryMenu