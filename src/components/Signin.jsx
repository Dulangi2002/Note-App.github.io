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
            <div className="form-control absolute ">

                <form action="" className='bg-purple-700 opacity-50 '>
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
                    <button onClick={handleSignIn}>Signin</button>
                </form>
            </div>
        </div>
    );
}


export default SignIn;