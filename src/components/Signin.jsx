import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithCustomToken, signInWithEmailAndPassword } from "firebase/auth";
import { NavLink , useNavigate } from 'react-router-dom';

function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate("/home")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error);
            // ..
        });

    }
    return(
        <div>
            <h1>Signin</h1>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="" onChange={(e) =>setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input type="text" name="password" id="" onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleSignIn}>Signin</button>
            </form>
        </div>
    );
}


export default SignIn;