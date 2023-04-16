import { useRef, useState } from "react"
import LabelInput from "./LabelInput"

const LabelInputList = ({ setParentSubCategories }) => {
    const [subCategories, setSubCategories] = useState([])
    const [subCategory, setSubCategory] = useState()

    const refSubCategory = useRef(null)

    const handleRemoveSubCategory = (index) => {
        const newSubCategories = [...subCategories]
        newSubCategories.splice(index, 1)
        setSubCategories(newSubCategories)
        setParentSubCategories(newSubCategories)
    }

    const handleAddSubCategory = () => {
        const newSubCategories = [...subCategories, subCategory]
        setSubCategories(newSubCategories)
        setParentSubCategories(newSubCategories)
        clearData()
    }

    const clearData = () => {
        setSubCategory('')
        if (refSubCategory.current) refSubCategory.current.value = ''
    }

    return (
        <div className="row">
            <div className="col">
                <LabelInput labelText="Subcategoría" setter={setSubCategory}
                    defaultValue={subCategory} reference={refSubCategory} />
                <button onClick={handleAddSubCategory} type="button" className="btn">
                    Agregar subcategoría</button>
            </div>
            <div className="col">
                <label>Subcategorias</label>
                <ul>
                    {subCategories.length > 0 && subCategories.map((item, index) => {
                        return (
                            <li key={`sub_category_${index}`}>
                                <p>{item}</p>
                                <button key={`btnRemove_${index}`} onClick={() => handleRemoveSubCategory(index)}
                                    className="btn">Remover</button>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default LabelInputList