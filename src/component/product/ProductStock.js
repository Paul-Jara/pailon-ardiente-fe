import { useRef, useState } from "react"
import LabelInput from "../LabelInput"

const ProductStock = ({ setParentStock }) => {
    const [stock, setStock] = useState([])
    const [sizeNumber, setSizeNumber] = useState()
    const [sizeLetters, setSizeLetters] = useState()
    const [color, setColor] = useState()
    const [quantity, setQuantity] = useState()
    const [selectedOptionSize, setSelectedOptionSize] = useState('sizeNumber')

    const refSizeNumber = useRef(null)
    const refQuantity = useRef(null)

    const handleSizeLettersChange = (event) => {
        setSizeLetters(event.target.value)
    }

    const handleColorChange = (event) => {
        setColor(event.target.value)
    }

    const handleOptionSizeChange = (event) => {
        setSelectedOptionSize(event.target.value)
    }

    const handleAddSizeStock = () => {
        const stockItem = {
            sizeNumber,
            sizeLetters,
            color,
            quantity
        }
        const newStock = [...stock, stockItem]
        setStock(newStock)
        setParentStock(newStock)
        clearData()
    }

    const handleRemoveStock = (index) => {
        const newStock = [...stock]
        newStock.splice(index, 1)
        setStock(newStock)
        setParentStock(newStock)
    }

    const clearData = () => {
        setSizeNumber('')
        setQuantity('')
        if (refQuantity.current) refQuantity.current.value = ''
        if (refSizeNumber.current) refSizeNumber.current.value = ''
        setSizeLetters('')
        setColor('')
    }

    return (
        <div className="row">
            <div className="col">
                <label>
                    <input type="radio" value="sizeNumber" checked={selectedOptionSize === 'sizeNumber'}
                        onChange={handleOptionSizeChange} />
                    Tamaño en texto
                </label>
                <label>
                    <input type="radio" value="sizeLetter" checked={selectedOptionSize === 'sizeLetter'}
                        onChange={handleOptionSizeChange} />
                    Tamaño en talla
                </label>
                {
                    selectedOptionSize === 'sizeLetter' &&
                    <LabelInput reference={refSizeNumber} name="sizeNumber" labelText="Tamaño"
                        setter={setSizeNumber} type="text" />
                }
                {
                    selectedOptionSize === 'sizeNumber' &&
                    <div>
                        <label htmlFor="sizeLetters">Talla:</label>
                        <select id="sizeLetters" value={sizeLetters} onChange={handleSizeLettersChange}>
                            <option value="">Seleccione una talla</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="SM">SM</option>
                            <option value="M">M</option>
                            <option value="ML">ML</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                    </div>
                }
                <div>
                    <label htmlFor="color">Color:</label>
                    <select id="color" value={color} onChange={handleColorChange}>
                        <option value="">Seleccione una talla</option>
                        <option value="Negro">Negro</option>
                        <option value="Rojo">Rojo</option>
                        <option value="Blanco">Blanco</option>
                        <option value="Azul">Azul</option>
                        <option value="Plateado">Plateado</option>
                        <option value="Amarillo">Amarillo</option>
                    </select>
                </div>
                <LabelInput reference={refQuantity} name="quantity" labelText="Cantidad"
                    setter={setQuantity} type="text" />
                <button onClick={handleAddSizeStock} type="button" className="btn">
                    Agregar talla y stock
                </button>
            </div>
            <div className="col">
                <label>Stock</label>
                <ul>
                    {stock.length > 0 && stock.map((item, index) => {
                        return <li key={`itemStock_${index}`}>
                            {item.sizeNumber ? `Tamaño ${item.sizeNumber}cm ` : ''}
                            {item.sizeLetters ? `Talla ${item.sizeLetters} ` : ''}
                            {item.color ? `Color ${item.color} ` : ''}
                            {`Cantidad ${item.quantity}`}
                            <button key={`btnRemove_${index}`} onClick={() => handleRemoveStock(index)} className="btn">Remover</button>
                        </li>
                    })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductStock