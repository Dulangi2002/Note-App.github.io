import React, { createContext, useContext, useState, useEffect } from "react";
import SignIn from "./components/Signin";
import Signup from "./components/Signup";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   

    const [user , setUser] = useState('null');
    const auth = getAuth();
    const navigate = useNavigate();

    const signOutUser = async () => {

        console.log('signing out');
        await signOut(auth);
        navigate('/Note-App/signin');
    }
    


useEffect(() => {

    onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('user is signed in');
          setUser(user);
        } else {
          console.log('user is signed out');
          setUser(null);
        }
      });


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



