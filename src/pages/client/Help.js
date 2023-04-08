const Help = () => {
    return (
        <section>
            <article className="article-about">
                <h3>Acerca de nosotros</h3>
                <lu>
                    <li>Es una página en donde se muestra la informacion del restaurante, ubicación y datos de contacto.</li>
                </lu>
                <h3>Reservación</h3>
                <lu>
                    <li>Despliega un formulario que permite realizar una reservación en el restaurante.</li>
                </lu>
                <h3>Mi orden</h3>
                <lu>
                    <li>Despliega una pagina en donde que permite visualizar los elementos que han sido agregados al carrito de compras.</li>
                </lu>
                <h3>Menú</h3>
                <lu>
                    <li>Permite agregar elementos al carrito de compras, previamente se requeriere que se ingrese el número de la mesa en la que el comenzal se encuetra.</li>
                    <li>Se muestran los elementos del menu acompañados de un boton que redirige a la pagina de agregar el item al carrito.</li>
                    <li>Tiene un botoón que dirige a "Mi orden".</li>
                </lu>
                <h3>Agregar item a la orden</h3>
                <lu>
                    <li>Muestra la información del item que se desea agregar y permite modificar la cantidad que se desea.</li>
                    <li>La información se almacena en el local storage hasta que se confirme la orden.</li>
                </lu>
                <h3>Ayuda</h3>
                <lu>
                    <li>Despliega información importante sobre la aplicación.</li>
                </lu>
                <h3>Administración</h3>
                <lu>
                    <li>Permite cargar el menú a la base de datos Firebase.</li>
                    <li>Permite eliminar el menú de la base de datos Firebase.</li>
                    <li>Permite visualizar las reservaciones que se han realizado.</li>
                </lu>
            </article>
        </section>
    )
}

export default Help