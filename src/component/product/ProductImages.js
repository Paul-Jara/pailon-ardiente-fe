import { useRef, useState } from "react"
import LabelInput from "../LabelInput"

const ProductImages = ({ setParentImages }) => {
    const [image, setImage] = useState({})
    const [url, setUrl] = useState('')
    const [order, setOrder] = useState('')
    const [images, setImages] = useState([])

    const refUrl = useRef(null)
    const refOrder = useRef(null)

    const handleRemoveImage = (index) => {
        const newImages = [...images]
        newImages.splice(index, 1)
        setImages(newImages)
        setParentImages(newImages)
    }

    const handleAddImage = () => {
        const newImage = { url, order: parseInt(order) }
        const newImages = [...images, newImage]
        setImages(newImages)
        setParentImages(newImages)
        clearData()
    }

    const clearData = () => {
        setUrl('')
        setOrder('')
        if (refUrl.current) refUrl.current.value = ''
        if (refOrder.current) refOrder.current.value = ''
        setImage({})
    }

    return (
        <div className="row">
            <div className="col">
                <LabelInput name="url" type="text" labelText="Url" setter={setUrl}
                    defaultValue={image.url} reference={refUrl} />
                <LabelInput name="order" type="text" labelText="Orden" setter={setOrder}
                    defaultValue={image.order} reference={refOrder} />
                <button onClick={handleAddImage} type="button" className="btn">Agregar imagen</button>
            </div>
            <div className="col">
                <label>Imagenes</label>
                <lu>
                    {images.length > 0 && images.map((item, index) => {
                        return (
                            <li key={`image_${index}`}>
                                {item.url &&
                                    <div className="col-3" key={'images_' + index}>
                                        <img src={item.url} alt='adult-products' className="img-fluid mb-3" />
                                    </div>
                                }
                                {item.index ? `Posición ${item.order} ` : ''}
                                <button key={`btnRemove_${index}`} onClick={() => handleRemoveImage(index)}
                                    className="btn">Remover</button>
                            </li>
                        )
                    })
                    }
                </lu>
            </div>
        </div>
    )
}

export default ProductImages