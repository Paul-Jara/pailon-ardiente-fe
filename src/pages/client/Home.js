const Home = () => {
    return (
        <>
            <section className="row mt-5" id="row-promos">
                <article className="container text-center">
                    <div className="row py-3 justify-content-center">
                        <h2>Productos destacados</h2>
                    </div>
                    <div className="row">
                        <div className="col container">
                            <img src="https://cdn.shopify.com/s/files/1/0572/1866/2591/products/disfraz-mucama-francesa-sensual_1_400x.jpg?v=1665423466" 
                                alt="Lenceria"></img>
                            <h3 className="py-3">Lencería</h3>
                        </div>
                        <div className="col container">
                            <img src="https://cdn.shopify.com/s/files/1/0572/1866/2591/products/succionador-pulse-pure-azul-svakom_1_700x.jpg?v=1668630848"
                                alt="Novedades"></img>
                            <h3 className="py-3">Novedades</h3>
                        </div>
                        <div className="col container">
                            <img src="https://cdn.shopify.com/s/files/1/0572/1866/2591/products/Collar-con-Esposas-Narvel-Negro-Distrisex-1_700x.jpg?v=1639152831"
                                alt="Accesorios"></img>
                            <h3 className="py-3">Accesorios</h3>
                        </div>
                    </div>
                </article>
            </section>
            <section className="row mt-5" id="row-services">
                <article className="row container text-center">
                    <h2>Nuestros servicios</h2>
                </article>
                <article className="row container text-center">
                    <div className="col container">
                        <img alt="Asesoria" 
                            src="https://cdn.create.vista.com/api/media/medium/605165344/stock-photo-smiling-woman-talking-smartphone-urban?token="></img>
                        <h4 className="py-3 text-wrap">Asesoramiento e información sobre todos nuestros productos</h4>
                    </div>
                    <div className="col container">
                        <img alt="Entrega a domicilio" 
                            src="https://marketing4ecommerce.co/wp-content/uploads/2020/09/aplicaciones-de-entrega-a-domicilio-de-Colombia.jpg"></img>
                        <h4 className="py-3 text-wrap">Disponemos de servicio a domicilio por motorizados propios que entregarán el producto con total discreción</h4>
                    </div>
                </article>
            </section>
            <section className="row" id="row-location">
                <article className="">

                </article>
            </section>
        </>
    )
}

export default Home 