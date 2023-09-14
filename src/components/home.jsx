import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { getFirestore, collection, addDoc  } from "firebase/firestore";


function AddNote(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const auth = getAuth();
    const handleAddNote  = async (e) => {
        e.preventDefault();
        try {
            
            const note = { title, content };
            const db = getFirestore();
            const user = auth.currentUser; 
            const userEmail = user.email;
            console.log(user);/// Assuming you have Firebase Authentication set up
            if (user) {
              const userUid = user.uid;
              const notesCollection = collection( db , "users" , userEmail , "notes" );
              await addDoc(notesCollection, note);
              console.log("Document successfully written!");
            } else {
                console.log("No user is signed in");
                // No user is signed in.
            }
           console.log(note);
        } catch (error) {
            console.log(error);
        }



       
    }

    return (
        <>
        <div className="container">
            <h1>Add a Note</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="Content">Content</label>
                    <input type="text" className="form-control" id="desc" placeholder="Content" onChange={(e) => setContent(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleAddNote} > Add Note</button>
            </form>
        </div>
        </>
    )
}

export default AddNote;