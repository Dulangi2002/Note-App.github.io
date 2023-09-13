import { useState } from 'react'
import React from "react";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    setDoc,
  } from 'firebase/firestore';
import { getAuth, fetchSignInMethodsForEmail } from 'firebase/auth'; // Import Firebase Authentication functions
import { firestore } from '../firebase';
import { EmailAuthProvider } from 'firebase/auth';



function AddCollaborator(){

    const [email, setCollaboratorEmail] = useState('');
    const auth = getAuth();
    const db = getFirestore();

    const handleAddCollaborator = async (e) => {
    e.preventDefault();
    try {
        const collaborator = email;
        const signInMethods = await fetchSignInMethodsForEmail(auth, emailtocheck);
        const currentUser = auth.currentUser;
        console.log(signInMethods);
        if (signInMethods.length === 0) {
         
            console.log('User does not exist.');
            return;
        } else {
            
            console.log('User exists.');
            const collaboratorData = {
                collaborator,
            }
            const userEmail = currentUser.email;
            const userCollectionRef = collection(db, 'users', userEmail , 'collaborators');
            const newCollaboratorRef = await addDoc(userCollectionRef, collaboratorData);
            console.log('Collaborator added with ID: ', newCollaboratorRef.id);
        }
        
  
      } catch (error) {
        console.log(error);
      }
    }

    return(
        <div>
            <h1>Add Collaborator</h1>
            <form action="">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="" onChange={(e) =>setCollaboratorEmail(e.target.value)}/>

                <button onClick={handleAddCollaborator}>Add</button>
            </form>

        </div>
    )
}

export default AddCollaborator;