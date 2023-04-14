import { useState } from "react"
import axiosClient from "../../config/axios"
import LabelInput from "../../component/LabelInput"
import ProductStock from "../../component/product/ProductStock"
import ProductImages from "../../component/product/ProductImages"
import Editor from "../../component/Editor"
import LabelInputList from "../../component/LabelInputList"

const ProductCreate = () => {

    const [name, setName] = useState('')
    const [smartDescription, setSmartDescription] = useState('')
    const [description, setDescription] = useState('')
    const [vendor, setVendor] = useState('')
    const [category, setCategory] = useState('')
    const [subCategories, setSubCategories] = useState([])
    const [price, setPrice] = useState('')
    const [code, setCode] = useState('')
    const [stock, setStock] = useState([])
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
            subCategories,
            price,
            code,
            stock,
            images,
            features,
            care
        }
        try {
            console.log(JSON.stringify(newProduct))
            await axiosClient.post('/api/product', newProduct)
            alert('Ok')
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
                <LabelInputList setParentSubCategories={setSubCategories} />
                <LabelInput name="price" labelText="Precio" setter={setPrice} type="text" />
                <LabelInput name="code" labelText="SKU" setter={setCode} type="text" />
                <ProductStock setParentStock={setStock} />
                <ProductImages setParentImages={setImages} />
                <Editor labelText="Características" defaultValue={features} setter={setFeatures} />
                <Editor labelText="Cuidados" defaultValue={care} setter={setCare} />
                <button onClick={handleClick} type="button" className="btn">Crear</button>
            </article>
        </section>
    )
}

export default ProductCreate
