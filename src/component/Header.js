import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../context/UserContext"

export const Header = () => {
    const { logoutUser, authStatus } = useContext(UserContext)

    return (
        <header className="sticky-top container bg-dark">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img alt="Pailón Ardiente" src={require('../images/icon.png')} className="navbar-brand m-2" />
                    <div className="text-center">
                        <h1 className="title align-middle fs-1">Pailón Ardiente</h1>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navmenu" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navmenu">
                        <ul className="navbar-nav justify-content-end">
                            <li className="nav-item"><Link to='/' className="nav-link text-white">Inicio</Link></li>
                            {
                                authStatus &&
                                <>
                                    <li className="nav-item"><Link to='/catalog/' className="nav-link text-white">Catálogo</Link></li>
                                    <li className="nav-item"><Link to='/cart' className="nav-link text-white">Carrito</Link></li>
                                    <li className="nav-item"><Link to='/orders' className="nav-link text-white">Mi ordenes</Link></li>
                                    <li className="nav-item"><Link to='/users' className="nav-link text-white">Usuarios</Link></li>
                                    <li className="nav-item"><Link to='/admin/orders' className="nav-link text-white">Administrar ordenes</Link></li>
                                </>
                            }
                            {
                                authStatus &&
                                <>
                                    <li className="nav-item"><Link to='/user' className="nav-link text-white">Mi perfil</Link></li>
                                    <li className="nav-item"><Link onClick={logoutUser} to="/login" className="nav-link text-white">Cerrar sesión</Link></li>
                                </>
                            }
                            <li className="nav-item"><Link to='/help' className="nav-link text-white">Ayuda</Link></li>
                            {!authStatus &&
                                <>
                                    <li className="nav-item"><Link to='/register' className="nav-link text-white">Registro</Link></li>
                                    <li className="nav-item"><Link to='/login' className="nav-link text-white">Iniciar sesión</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav >
        </header >
    )
}