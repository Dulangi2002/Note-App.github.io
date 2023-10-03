import { getAuth } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { getFirestore, collection, addDoc, doc } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { SketchPicker } from 'react-color';


function AddNote() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState('');
    const [files, setFiles] = useState([]); // [file1 , file2 , file3]
    const [colorLabel, setColorLabel] = useState('');
    const [filesArray, setFilesArray] = useState([]);
    const [fileType, setFileType] = useState('');

    const navigate = useNavigate();

    const auth = getAuth();
    const db = getFirestore();


    function handleFileChange(event) {
     

        const files = event.target.files;
        setFiles(Array.from(files));
        console.log(files);
        const filesArray = Array.from(files);
        setFilesArray(filesArray);
        console.log(filesArray);




      

    }

    const handleAddNote = async (e) => {
        e.preventDefault();
        if (Array.isArray(files) && files.length > 0) {
            try {


                const user = auth.currentUser;
                const userEmail = user.email;
                console.log(user);
                if (user) {

                    try {

                        const promises = files.map((file) => {
                            const storageRef = ref(storage, `users/${userEmail}/notes/${file.name}`);
                            return uploadBytes(storageRef, file).then(async (snapshot) => {
                                const downloadURL = await getDownloadURL(snapshot.ref);
                                console.log('File uploaded successfully:', downloadURL);
                                return downloadURL;
                            });
                        });


                        const fileDownloadURLs = await Promise.all(promises);
                        console.log(fileDownloadURLs);



       
                        const note = {
                            title,
                            content,
                            files: fileDownloadURLs,
                            colorLabel,
                            createdAt: new Date()
                        }
                        const notesCollection = collection(db, "users", userEmail, "notes");

                        await addDoc(notesCollection, note);
                        navigate('/Note-App/');
                        console.log("Document successfully written!");

                    } catch (error) {
                        console.log(error);
                    }


                } else {
                    console.log("No user is signed in");
                }


            } catch (error) {
                console.log(error);
            }
        }
        else {
            console.error('No files selected.');

        }

    }

    return (
        <>

          
          <div id="form-background">
            <div className="  border-2 mt-8 justify-center sm:m-8 lg:ml-96 lg:mr-96 p-4 " id="form-div">
                <h1 className="text-center font-[DM sans] font-bold text-2xl pt-4" >Add a Note</h1>
                <form className="  " id="form-note">
                    <div className="form-group">
                        <label htmlFor="title" className="font-[Nunito]">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" onChange={(e) => setTitle(e.target.value)} />
                    </div>
{/* input was turn into teztarea for the content */}
                    <div className="form-group">
                        <label htmlFor="Content" className="font-[Nunito]">Content</label>
                        <textarea type="text" className="form-control" id="desc"  onChange={(e) => setContent(e.target.value)} />
                    </div>

                    <div className="form-group" >
                        <label htmlFor="file" className="font-[Nunito]">File</label>
                        <input type="file" className="form-control" id="file"  onChange={handleFileChange} multiple />
                    </div>

                    <div className="form-group">
                        <label htmlFor="colorLabel"className="font-[Nunito]">Color </label>
                        <SketchPicker color={colorLabel} onChangeComplete={(color) => setColorLabel(color.hex)} />
                    </div>


                    <button type="submit" id="note-create-submit-button" onClick={handleAddNote} className="justify-center mt-12 "> Add Note</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default AddNote;