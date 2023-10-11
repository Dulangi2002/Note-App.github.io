import React, { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { getFirestore, collection, getDocs, where } from "firebase/firestore";
import photo from '../assets/signup.jpg';


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const [validationerror, setValidationerror] = useState("");
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
      setValidationerror("Password must be at least 8 characters long and must contain a lowercase letter, an uppercase letter, a number and a special character");
      return validationerror;
    }

    if (!password || !email) {
      setValidationerror("Please enter your email and password");
      return;
    }
    if (
      getDocs(collection(db, "users"), where("email", "==", email)).then((querySnapshot) => {
        if (querySnapshot.size > 0) {
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

<div className=' lg:pb-20 pb-8 lg:grid grid-cols-2 ' id='main-background'>

  <div>
  <img src={photo} alt="" id='main-image' />
</div>

<div className='w-96 mr-0 ml-0 m-auto' id='sign-up'>
      <h1 className="font-bold underline  text-center text-3xl text-white -mt-80 mb-4 lg:-mt-0   ">Signup</h1>
      <form action="" className='max-lg:80  ml-2 mr-4 pt-4 rounded pb-2 w-82' id='signup-form'>

        <div className='flex flex-col m-4 '>
          <div>
            <label htmlFor="email" className='text-sm font-bold'>Email</label>
          </div>

          <div>
            <input type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} className=' w-80 rounded ' />

          </div>

        </div>

        <div  className='flex flex-col m-4 font-bold'>
          <div>
            <label htmlFor="password" className='text-sm font-bold'>Password</label>

          </div>

          <div> 
            <input type="password" name="password" id="" onChange={(e) => setPassword(e.target.value)} className=' w-80 rounded  ' />

          </div>


        </div>
        <p>{validationerror}</p>

        <div className='bg-red-300 w-80  m-4 h-10  text-center pt-2 rounded font-bold '>

        <button onClick={handleSignup}>Signup</button>

        </div>

      </form>
    </div>



</div>
   

  );
}

export default Signup;