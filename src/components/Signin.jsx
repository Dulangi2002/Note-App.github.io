import React, { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


function SignIn() {
    const { SignIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/");

            })
            .catch((error) => {
                console.log(error);

            });

    }
    return (
        <div class="w-full max-w-xs" >
            <div className=" ">

                <form action="" className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                    <div className='mb-4'>
                        <label htmlFor="email" className=" text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline  " type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
                        <br />
                    </div>

                    <div>

                        <label htmlFor="password" className=' text-gray-700 text-sm font-bold mb-2'>Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline " type="text" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <br />
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleSignIn}>Signin</button>

                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}


export default SignIn;