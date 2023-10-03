import React, {useState} from 'react';
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(user);
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error , errorMessage, errorCode);
        // ..
      });

  }
  return (
   
   
 
    <div>
      <h1 className=" font-bold underline">Signup</h1>
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