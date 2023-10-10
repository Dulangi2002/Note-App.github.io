import React, { useState } from 'react';
import { auth, firestore } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { getFirestore, collection, getDocs, where } from "firebase/firestore";
import photo from '../assets/signup.jpg';


function SignIn() {
    const { SignIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationerror, setValidationerror] = useState("");
    const navigate = useNavigate();
    const db = getFirestore();


    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!password || !email) {
            setValidationerror("Please enter your email and password");
            return;
        }
        if (
            getDocs(collection(firestore, "users"), where("email", "==", email)).then((querySnapshot) => {
                if (querySnapshot.size > 0) {
                    setValidationerror("User already exists");
                    return;
                }
            }
            )
        )

            await signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/Note-App/");

                })
                .catch((error) => {
                    console.log(error);

                });

    }
    return (
        <div className=' pb-8 lg:grid grid-cols-2 ' id='main-background' >
            <div>
                <img src={photo} alt="" id='main-image' />
            </div>
            <div className='w-96 mr-0 ml-0 -mt-96 lg:mt-32'  >
            <h1 className=" font-bold underline m-4 text-center text-3xl text-white ">Sign In</h1>
            <form action="" className='  ml-2 mr-2 pt-4 rounded pb-2' id='signin-form'>
                <div className='flex flex-col m-4 '>
                    <div>
                        <label htmlFor="email" className="text-sm font-bold">Email</label>
                    </div>

                    <div>
                        <input className="w-80 rounded  " type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} />
                    </div>

                </div>

                <div className='flex flex-col m-4 font-bold'>

                    <div>
                        <label htmlFor="password" className='text-sm font-bold '>Password</label>
                    </div>

                    <div>
                        <input className=" w-80 rounded " type="text" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                </div>

                <p>{validationerror}</p>

                <div class="flex items-center justify-between">
                    <button className="bg-red-300 w-80  m-4 h-10  text-center pt-2 rounded font-bold " onClick={handleSignIn}>Signin</button>
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