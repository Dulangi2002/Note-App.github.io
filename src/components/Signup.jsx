import React, { useState } from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { getFirestore , collection  , getDocs , where } from "firebase/firestore";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const [validationerror , setValidationerror] = useState("");
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
      getDocs(collection( db, "users"), where("email", "==", email)).then((querySnapshot) => {
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



    <div>
      <h1 className=" font-bold underline">Signup</h1>
      <form action="">
      <p>{validationerror }</p>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="" onChange={(e) => setEmail(e.target.value)} />



        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="" onChange={(e) => setPassword(e.target.value)} />

        <button onClick={handleSignup}>Signup</button>
      </form>
    </div>




  );
}

export default Signup;