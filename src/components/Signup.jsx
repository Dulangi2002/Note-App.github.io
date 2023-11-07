import React, { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { getFirestore, collection, getDocs, where } from "firebase/firestore";
import pic from '../assets/bg2.png'


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const [validationerror, setValidationerror] = useState("");
  const [ isError , setIsError ] = useState(false);
  const db = getFirestore();


  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      password.length < 8 ||
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)
    ) {
      setIsError(true);

      setValidationerror("Password must be at least 8 characters long and must contain a lowercase letter, an uppercase letter, a number and a special character");
      return validationerror;
    }

    if (!password || !email) {
      setIsError(true);

      setValidationerror("Please enter your email and password");
      return;
    }
    if (
      getDocs(collection(db, "users"), where("email", "==", email)).then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          setIsError(true);
          setValidationerror("User already exists");
          return;
        }
      }
      )

    )
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log(user);
          navigate("/Note-App/")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error, errorMessage, errorCode);
          // ..
        });

  }
  return (

    <div className='flex lg:flex-row  flex-col '  >
      <div className='lg:w-2/3 p-4 '>
        <img src={pic} alt="" className='hidden sm:block   ' />
      </div>
      <div className="w-full">
        <form action="" className="w-full m-auto left-0 right-0 lg:p-44 p-12 rounded-lg ">
        <h1 className='font-bold text-6xl p-2 text-center text-black underline animate-bounce  pb-4 '>Register </h1>

          <div className=' mb-4'>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-xl  font-bold mb-2">Email</label>
            </div>

            <div>
              <input type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} className="border rounded-full w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl bg-[#E9D5DA] placeholder:text-black" />

            </div>

          </div>

          <div className='mb-6 '>
            <div>
              <label htmlFor="password" className='block text-gray-700 text-xl  font-bold mb-2'>Password</label>

            </div>

            <div>
              <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} className="border rounded-full w-full h-16 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-xl bg-[#E9D5DA] placeholder:text-black"/>

            </div>


          </div>
          {
            isError && <p className='bg-yellow-200 border-2 border-black text-sm rounded-lg p-2'>{validationerror}</p>
          }

          <div className='flex items-center'>

            <button className=" m-auto left-0  right-0 rounded-full bg-black hover:bg-white text-white hover:text-black hover:shadow-md font-bold py-3 px-10  focus:outline-none focus:shadow-outline text-xl" onClick={handleSignup}>Signup</button>

          </div>

        </form>
      </div>



    </div>


  );
}

export default Signup;