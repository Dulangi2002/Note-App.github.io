import React, { createContext, useContext, useState, useEffect } from "react";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setPersistence , browserLocalPersistence } from "firebase/auth";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);  
    const auth = getAuth();
    const navigate = useNavigate();
     


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);

            
          
        });
    }, [auth, navigate]);


      
   const signup = (email, password) => {
        Signup(email, password);
        const currentUser = auth.currentUser;
        setUser(currentUser? currentUser.email : null);
        setPersistence(auth, browserLocalPersistence);
       
    }



    const signin = () => {
      SignIn();
      const currentUser = auth.currentUser;
      setUser(currentUser? currentUser.email : null);
      
      setPersistence(auth, browserLocalPersistence);

      
    }

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        navigate("/Note-App/signin");
    
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



