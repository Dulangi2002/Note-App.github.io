import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useState } from "react";
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, query, where } from "firebase/firestore";
import { uploadBytesResumable, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import { SketchPicker } from 'react-color';


function AddNote() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [files, setFiles] = useState([]); // [file1 , file2 , file3]
    const [colorLabel, setColorLabel] = useState('');
    const [filesArray, setFilesArray] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adding, setAdding] = useState(false);


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


    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        const userEmail = user.email;

        onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    // Fetch categories
                    const fetchCategories = async () => {
                        try {
                            const querySnapshot = await getDocs(collection(db, "users", userEmail, "categories"));
                            const categoriesData = querySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data()
                            }));
                            setCategories(categoriesData);
                        } catch (error) {
                            console.error("Error fetching categories:", error);

                        }
                    };

                    fetchCategories();
                }
            } catch (error) {
                console.error("Error:", error);
            }
        });
    }, []);


    const handleAddNote = async (e) => {



        e.preventDefault();

        try {
            setAdding(true);
            const user = auth.currentUser;
            const userEmail = user.email;
            console.log(user);
            if (user) {

                try {
                    const note = {
                        id: title + Math.random(),
                        title,
                        content,
                        category,
                        colorLabel,
                        createdAt: new Date()
                    }
                    const notesCollection = collection(db, "users", userEmail, "notes");

                    await addDoc(notesCollection, note);
                    console.log("Note added successfully");

                    if (Array.isArray(files) && files.length > 0) {

                        try {

                            const promises = files.map((file) => {
                                const storageRef = ref(storage, `users/${userEmail}/notes/${note.id}/${file.name}`);
                                return uploadBytes(storageRef, file).then(async (snapshot) => {
                                    const downloadURL = await getDownloadURL(snapshot.ref);
                                    console.log('File uploaded successfully:', downloadURL);
                                    return downloadURL;
                                });
                            });


                            const fileDownloadURLs = await Promise.all(promises);
                            console.log(fileDownloadURLs);
                            const collectionRef = collection(db, "users", userEmail, "notes");
                            const q = query(collectionRef, where("id", "==", note.id));
                            try {
                                const querySnapshot = await getDocs(q);
                                if (!querySnapshot.empty) {
                                    querySnapshot.forEach(async (doc) => {
                                        await updateDoc(doc.ref, {
                                            files: fileDownloadURLs
                                        });
                                    });
                                    setAdding(false);
                                    navigate('/Note-App/');
                                }


                            } catch (error) {
                                console.error("Error updating document: ", error);
                            }


                        } catch (error) {
                            console.log(error);
                        }

                    } else {
                        setAdding(false);
                        navigate('/Note-App/');
                    }
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
                            <textarea type="text" className="form-control" id="desc" onChange={(e) => setContent(e.target.value)} />
                        </div>

                        <div>
                            <select name="" id="" onChange={(e) => setCategory(e.target.value)} >
                                <option value="all">All categories</option>
                                {
                                    categories.map(category => (
                                        <option key={category.id} value={category.category_name}>{category.category_name}</option>
                                    ))
                                }
                            </select>
                        </div>



                        <div className="form-group" >
                            <label htmlFor="file" className="font-[Nunito]">File</label>
                            <input type="file" className="form-control" id="file" onChange={handleFileChange} multiple />
                        </div>

                        <div className="form-group">
                            <label htmlFor="colorLabel" className="font-[Nunito]">Color </label>
                            <SketchPicker color={colorLabel} onChangeComplete={(color) => setColorLabel(color.hex)} />
                        </div>



                        <button type="submit" id="note-create-submit-button" onClick={handleAddNote} className="justify-center mt-12 h-8 bg-orange-200 hover:bg-white  hover:border-2 gap-2  w-44 p-4  rounded flex justify-center items-center text-center font-bold text-lg  ">

                            {
                                adding && (

                                    <div
                                        class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                        role="status">
                                        <span
                                            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                        >Creating...</span>

                                    </div>

                                )
                            }


                        Create</button>
                    </form>
                </div>


            </div>
        </>
    )
}

export default AddNote;