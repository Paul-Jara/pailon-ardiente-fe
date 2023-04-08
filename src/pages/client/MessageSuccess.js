import { Link } from "react-router-dom"

const MessageSuccess = () => {
    return (
        <section>
            <article>
                <h1>Muchas gracias por su compra!</h1>
                <Link to="/" className="btn">Volver al inicio</Link>
            </article>
        </section>
    )
}

export default MessageSuccess