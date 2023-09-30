import React from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';

const NavigationBar = () => {

    const { user, logout } = useAuth();
    return (
        <div className="navbar">
            {user ? (
                <>
                 <Link to="/Note-App/FetchNotes">Notes </Link>
                  <Link to="/Note-App/ViewProfile">Profile </Link>
                    <button onClick={logout}>Logout</button>
                 
                </>
            ) : (
                <>
                  
                  <Link to="/Note-App/signup">Register</Link>
                    <Link to="/Note-App/signin">Sign In</Link>
                   
                </>
            )}
        </div>
    )

}





export default NavigationBar;