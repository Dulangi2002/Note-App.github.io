import React, { useState } from 'react';
import { auth, firestore } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { getFirestore, collection, getDocs, where } from "firebase/firestore";
import pic from '../assets/bg2.png'


function SignIn() {
    const { SignIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validationerror, setValidationerror] = useState("");
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();
    const db = getFirestore();


    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!password || !email) {
            setIsError(true);
            setValidationerror("Please enter your email and password");
            return;
        } 
        //if the password doesnt match the email then it will throw an error
        if (
            getDocs(collection(db, "users"), where("email", "==", email)).then((querySnapshot) => {
                if (querySnapshot.size === 0) {
                    setIsError(true);
                    setValidationerror("User does not exist");
                    return;
                }
            }
            )

        )
        //make sure the password is correct
        if (
            getDocs(collection(db, "users"), where("email", "==", email)).then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().password !== password) {
                        setIsError(true);
                        setValidationerror("Incorrect password");
                        return;
                    }
                })
            }
            )

        )
            

        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                navigate("/Note-App/");

            })
            .catch((error) => {
                console.log(error);

            });
            
        } catch (error) {
            console.log(error);
        }

            // await signInWithEmailAndPassword(auth, email, password)
            //     .then((userCredential) => {
            //         const user = userCredential.user;
            //         console.log(user);
            //         navigate("/Note-App/");

            //     })
            //     .catch((error) => {
            //         console.log(error);

            //     });

    }
    return (
        <div className='flex lg:flex-row  flex-col '  >
            <div className='lg:w-2/3 p-4 '>
                <img src={pic} alt="" className='hidden sm:block   ' />
            </div>
            <div className="w-full">
                <form className="w-full m-auto left-0 right-0 lg:p-44 p-12 rounded-lg ">

                    <h1 className='font-bold text-6xl p-2 text-center text-black underline animate-bounce  pb-4 '>Sign In </h1>
                    <div className="mb-4">

                        <label htmlFor="email" className="block text-gray-700 text-xl  font-bold mb-2"></label>

                        <input className="border rounded-full w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl bg-[#E9D5DA] placeholder:text-black" placeholder='Enter your email ' type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} />


                    </div>

                    <div className='mb-6'>


                        <label htmlFor="password" className='block text-gray-700 text-xl  font-bold mb-2'></label>



                        <input className=" border rounded-full w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl bg-[#E9D5DA] placeholder:text-black" type="password" name="password" id="" placeholder='******' onChange={(e) => setPassword(e.target.value)} />


                    </div>

                    {
                        isError && <p className='bg-yellow-200 border-2 border-black text-sm rounded-lg p-2'>{validationerror}</p>
                    }


                    <div className="flex items-center">
                        <button className=" m-auto left-0  right-0 rounded-full bg-black hover:bg-white text-white hover:text-black hover:shadow-md font-bold py-3 px-10  focus:outline-none focus:shadow-outline text-xl" onClick={
                            handleSignIn
                        }>Signin</button>
                    </div>
                </form>
            </div>


        </div>
    );
}


export default SignIn;