import { useState } from "react"
import axiosClient from "../../config/axios"
import LabelInput from "../../component/LabelInput"

const ProductCreate = () => {

    const [name, setName] = useState('')
    const [smartDescription, setSmartDescription] = useState('')
    const [description, setDescription] = useState('')
    const [vendor, setVendor] = useState('')
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')
    const [price, setPrice] = useState('')
    const [code, setCode] = useState('')
    const [stock, setStock] = useState({})
    const [images, setImages] = useState([])
    const [features, setFeatures] = useState([])
    const [care, setCare] = useState([])

    const handleClick = async () => {
        const newProduct = {
            name,
            smartDescription,
            description,
            vendor,
            category,
            subCategory,
            price,
            code,
            stock,
            images,
            features,
            care,
        }
        try {
            await axiosClient.post('/api/product', newProduct)
            console.log('Product saved successfully!')
        } catch (err) {
            console.error('Error saving product: ', err)
        }
    }


    return (
        <section>
            <article>
                <LabelInput name="name" labelText="Nombre" setter={setName} type="text" />
                <LabelInput name="smartDescription" labelText="Leyenda" setter={setSmartDescription} type="text" />
                <LabelInput name="description" labelText="Descripción" setter={setDescription} type="text" />
                <LabelInput name="vendor" labelText="Fabricante" setter={setVendor} type="text" />
                <LabelInput name="category" labelText="Categoría" setter={setCategory} type="text" />
                <LabelInput name="subCategory" labelText="Sub categoría" setter={setSubCategory} type="text" />
                <LabelInput name="price" labelText="Precio" setter={setPrice} type="text" />
                <LabelInput name="code" labelText="SKU" setter={setCode} type="text" />
                {/*<LabelInput name="name" labelText="Nombre" setter={setName} type="text" />*/}
                <button onClick={handleClick} type="button" className="btn ">Crear</button>
            </article>
        </section>
    )
}

export default ProductCreate
