import React from 'react'
import { useHistory } from "react-router-dom";

const NotFound = () => {
    let history = useHistory();
    const gotoLogin = () => {
        history.push("/login");
    }
    return (
        <div>
            <button className="btn btn-primary" onClick={gotoLogin}>Login</button>    
        </div>
    )
}

export default NotFound
