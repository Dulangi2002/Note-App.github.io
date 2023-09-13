import React, {useState} from 'react';
import ReactDOM from "react-dom/client";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";



function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
        // ..
      });

  }
  return (
    <div>
      <h1>Signup</h1>
        <form action="">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="" onChange={(e) =>setEmail(e.target.value)}/>


            <label htmlFor="password">Password</label>
            <input type="text" name="password" id="" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleSignup}>Signup</button>
        </form>
    </div>
  );
}

export default Signup;