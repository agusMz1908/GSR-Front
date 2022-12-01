import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "./Sidebar";

const Layout = () => {
    const location = useLocation();

    return (
        <div>
            <aside>
                <Sidebar />
            </aside>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout