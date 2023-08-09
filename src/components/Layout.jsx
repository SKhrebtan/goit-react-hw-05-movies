import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
             <nav> 
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/movies">Movies</NavLink></li>
            </ul>
            </nav>
            <main>
                <Suspense fallback="Loading">
                    <Outlet />
                </Suspense>
                            </main>
            
        </div>
       
    )
}

export default Layout;