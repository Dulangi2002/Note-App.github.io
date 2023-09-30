import React from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import '../App.css';
import '../index.css';



const NavigationBar = () => {

    const { user, logout } = useAuth();
    return (
        <div className='w-56 w-full bg-black ' id="navbar">
          


                {user ? (
                    <>

                        <div className="navbar bg-neutral text-neutral-content" >
                        <Link  to="/Note-App/FetchNotes" id="nav-button">Notes </Link>
                        </div>
                        <Link to="/Note-App/ViewProfile">Profile </Link>
                        <button onClick={logout}>Logout</button>

                    </>
                ) : (
                    <>

                       <div className="navbar bg-neutral text-neutral-content" >
                       <Link to="/Note-App/signup">Register</Link>

                       </div>
                        <Link to="/Note-App/signin">Sign In</Link>

                    </>
                )}
         
        </div>

    )

}





export default NavigationBar;