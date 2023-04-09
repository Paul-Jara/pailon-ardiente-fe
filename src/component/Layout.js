import { Outlet } from "react-router-dom"
import { Fooder } from "./Fooder"
import { Header } from "./Header"

const Layout = () => {
    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Fooder />
        </>
    )
}

export default Layout