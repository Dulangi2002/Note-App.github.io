import React, { createContext, useContext, useState, useEffect } from "react";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);  
    const auth = getAuth();
    const navigate = useNavigate();

    const signOutUser = async () => {
        await signOut(auth).then(() => {
            console.log('user signed out');
            setUser(null);
            navigate('/Note-App/signin');
        }).catch((error) => {
            console.log(error);
        })
        
    }
    


    useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        setLoading(false);
        if(user) {
            console.log(user);
            setUser(user);
            navigate('/');
        }
        else {
            setUser(null);
            navigate('/Note-App/signin');
        }
    }   )


});


      
   const signup = (email, password) => {
        // localStorage.setItem("isAuthenticated", true);
        // setIsAuthenticated(true);
        Signup(email, password);
       
    }



    const signin = () => {
      SignIn();
      setUser(user);
      
    }

    const logout = () => {
        // localStorage.removeItem("isAuthenticated");
        // setIsAuthenticated(false);
        signOutUser();
        navigate('/Note-App/signin');
       
       

    
    }

    return (
        <AuthContext.Provider value={{ user, signin , signup , logout }}>
            {children}
        </AuthContext.Provider>
    );


   

}

export const useAuth = () => {
    return useContext(AuthContext);
}



