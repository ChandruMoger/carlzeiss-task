import React, { useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    let history = useHistory();
    const [pathname, setPathname] = useState('')
    
    const logout = () => {
        localStorage.clear();
        history.push("/login");
    }

    useEffect(() => {
        HeaderView();
    })

    function HeaderView() {  
    setPathname(location.pathname);
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <li className="navbar-brand" href="#" onClick={pathname.includes('login') ? null : logout}>{ pathname.includes('login') ? 'Welcome' : 'Logout'}</li>
            </nav>
        </div>
    )
}

export default Navbar
