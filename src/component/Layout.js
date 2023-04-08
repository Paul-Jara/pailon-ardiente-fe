import { Outlet } from "react-router-dom"
import { Fooder } from "./Fooder"
import { Header } from "./Header"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <div className="text-center">
                    <h1 className="title align-middle">Pailón Ardiente</h1>
                </div>
                <Outlet />
            </main>
            <Fooder />
        </>
    )
}

export default Layout