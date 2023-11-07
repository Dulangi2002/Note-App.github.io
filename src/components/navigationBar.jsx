import React from 'react';
import { useAuth } from '../AuthContext';
import { Link } from 'react-router-dom';
import '../App.css';
import '../index.css';
import { auth } from '../firebase';
import { getAuth } from "firebase/auth";
import Wakelock from './wakelock';
import { useState } from 'react';
// import { askforPermissioToReceiveNotifications } from '../firebase';



const NavigationBar = () => {

    const { user, logout } = useAuth();
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (

        <nav className="lg:px-16 px-8  shadow-md flex flex-wrap items-center lg:py-8 py-8 mt-8  " id='navigation-bar'>
         
            <label for="menu-toggle" className="cursor-pointer lg:hidden block">
                <svg
                    class="fill-current text-gray-900"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </label>
            <input className="hidden" type="checkbox" id="menu-toggle" checked={isMenuOpen} onChange={toggleMenu} />
            <div className={`lg:flex lg:items-center lg:w-auto w-full ${isMenuOpen ? 'block' : 'hidden'}`} id="menu">
                <nav>


                    <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">


                        {user ? (
                            <>

                                <div className="py-2 lg:py-0  lg:p-4   md:border-b sm:border-b  border-black" >
                                    <Link to="/Note-App/" className=''>Notes </Link>
                                </div>

                                <div className="py-2 lg:py-0  lg:p-4   md:border-b sm:border-b border-black">
                                    <Link to="/Note-App/createTasks" className=''>Tasks </Link>

                                </div>





                                <div className="py-2 lg:py-0 lg:p-4   md:border-b sm:border-b border-black ">
                                <Link to="/Note-App/ViewProfile" className=''>Profile </Link>

                                </div>
                               
                               <div className="py-2 lg:py-0  lg:p-4   md:border-b sm:border-b border-black">
                               <button onClick={logout} >Logout</button>

                               </div>
                               {/* <div className="py-2 lg:py-0  lg:p-4   md:border-b sm:border-b border-black">
                               <Wakelock />

                               </div> */}
                             




                            </>
                        ) : (
                            <>


                              
                                    <div className="py-2 lg:py-0 ">
                                        <Link to="/Note-App/signup" className=' '>Register</Link>

                                    </div>

                                    <div className="py-2 lg:py-0 ">
                                        <Link to="/Note-App/signin" className=' '>Sign In</Link>

                                    </div>







                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </nav>

    )

}





export default NavigationBar;