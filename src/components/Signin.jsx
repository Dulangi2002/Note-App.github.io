import React, { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/Note-App/FetchNotes");

            })
            .catch((error) => {
                console.log(error);
            
            });

    }
    return (
        <div>
            <div className="form-control" >

                <form action="">
                    <label htmlFor="email" className="text-3xl font-bold underline">Email</label>
                    <input className="input input-bordered" type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
                    <br />

                    <label htmlFor="password">Password</label>
                    <input className="input input-bordered" type="text" name="password" id="" onChange={(e) => setPassword(e.target.value)} />


                    <br />
                    <button onClick={handleSignIn}>Signin</button>
                </form>
            </div>
        </div>
    );
}


export default SignIn;