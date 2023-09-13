import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { getFirestore, collection, addDoc } from 'firebase/firestore';


function AddNote(){

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNote  = async (e) => {
        e.preventDefault();
        try {
            
            const note = { title, content };
            const db = getFirestore();
            const docRef = await addDoc(collection(db, "notes"), note);
            
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