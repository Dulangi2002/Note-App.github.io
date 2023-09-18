import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import { storage } from "../firebase";


function AddNote() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const [percent, setPercent] = useState(0);
    
    const auth = getAuth();
    const db = getFirestore();


    function handleFileChange(event) {
        const file = event.target.files[0];
        setFile(file);
    
    }

    const handleAddNote = async (e) => {
        e.preventDefault();
        try {

            
            //const db = getFirestore();
            const user = auth.currentUser;
            const userEmail = user.email;
            const url = URL.createObjectURL(file);
            console.log(user);
            if (user) {
                const storageRef = ref(storage, `users/${userEmail}/notes/${file.name}`);
                getDownloadURL(ref (storage , `users/${userEmail}/notes/${file.name}`)
                );
                const uploadTask = uploadBytesResumable(storageRef, file);
                const downloadURL = (await getDownloadURL(uploadTask.snapshot.ref));
                
                    const xhr = new XMLHttpRequest();
                    xhr.responseType = 'blob';
                    xhr.onload = (event) => {
                        if(xhr.status == 200){
                            const blob = xhr.response;
                            console.log('Blob', blob);
                            const blobUrl = URL.createObjectURL(blob);
                            const a = document.createElement('a');
                            a.href = blobUrl;
                            a.download = file.name;
                            document.body.appendChild(a);
                            a.click();
                            a.remove();

                             URL.revokeObjectURL(blobUrl);

                            

                        } else{
                            console.log('Error code', xhr.status);
                        }
                             
                    
                    };
                    xhr.open('GET', url);
                    xhr.send();
                

              
                console.log('File available at', downloadURL);
                
                const note = {
                    title,
                    content,
                    file: downloadURL,
                    createdAt: new Date()
                }
                const notesCollection = collection(db, "users", userEmail, "notes");

                await addDoc(notesCollection, note);
                console.log("Document successfully written!");
            } else {
                console.log("No user is signed in");
            }

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>

            <button>
                <a href="/Note-App/CreateTasks">Fetch tasks</a>
            </button>

            <div className="lg:bg-black w-full border-2">
                <h1>Add a Note</h1>
                <form className="lg:bg-black ">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Content">Content</label>
                        <input type="text" className="form-control" id="desc" placeholder="Content" onChange={(e) => setContent(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="file">File</label>
                        <input type="file" className="form-control" id="file" placeholder="File" onChange={handleFileChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleAddNote} > Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote;