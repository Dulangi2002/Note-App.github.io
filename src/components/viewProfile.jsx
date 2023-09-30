import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, deleteDoc, getDocs, collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
import { ref, deleteObject, getStorage, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { signOut } from "firebase/auth";
import EditEmailForm from './editEmail.jsx';
import ProfilePhoto from './profilePhoto.jsx';


function ViewProfile({ userEmail, firestore }) {


    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const navigate = useNavigate();
    const [isEditEmailFormVisible, setIsEditEmailFormVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);












    const deleteNotes = async () => {
        const db = getFirestore();
        const storage = getStorage();
        const user = auth.currentUser;
        const userEmail = user.email;
        const querySnapshot = await getDocs(collection(db, `users/${userEmail}/notes`));
        try {
            querySnapshot.forEach((doc) => {
                deleteDoc(doc.id, " => ", doc.data());
            });
            const storageRef = ref(storage, `users/${userEmail}/notes`);
            deleteObject(storageRef);
            console.log("All notes deleted");

        } catch (error) {
            console.log(error);
        }


    }




    const deleteAccount = async () => {
        const auth = getAuth();
        const user = auth.currentUser;
        const userEmail = user.email;
        const db = getFirestore();
        const storage = getStorage();

        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
            if (doc.data().email === userEmail) {
                deleteDoc(doc.id, " => ", doc.data());
            }
        });

        const storageRef = ref(storage, `users/${userEmail}`);
        deleteObject(storageRef);

        await deleteDoc(doc(db, "users", user.uid));
        await user.delete();
        navigate('/Note-App/SignUp');




    }



    const signOutUser = async () => {
        const auth = getAuth();
        console.log('signing out');
        await signOut(auth);
        navigate('/Note-App/signin');
    }



    // const fetchEmailEditForm = () => {
    //     return <EditEmailForm email={currentUser?.email} />
    // }








    




    const saveProfilePhoto = async (profilePicDataUrl) => {
        const storage = getStorage();
        const auth = getAuth();
        const user = auth.currentUser;
        const userEmail = user.email;



        try {

            if (user) {
                const storageRef = ref(storage, `users/${userEmail}/profilePic`);
                getDownloadURL(ref(storage, `users/${userEmail}/profilePic`));
                const uploadTask = uploadBytesResumable(storageRef, profilePicDataUrl);
                uploadTask.on('state_changed',
                    (snapshot) => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                        console.log('Upload is ' + progress + '% done');
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        try {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            console.log('File available at', downloadURL);
                            const db = getFirestore();
                            const userDocRef = collection(db, "users", userEmail, "profilePic");
                            const userData = {
                                profilePic: downloadURL
                            }
                            await addDoc(userDocRef, userData);
                            console.log("Profile picture saved");

                        } catch (error) {
                            console.log(error);
                        }
                    }
                );
            }

        } catch (error) {
            console.log(error);
        }



    };

  






    useEffect(() => {
        const auth = getAuth();


        onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                setCurrentUser(user);



            } else {
                console.log('no user signed in');
            }
        });

      

    }, [userEmail]);




    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>View Profile</h1>

       
            <ProfilePhoto />
          

            <div>
                <h2>{currentUser?.displayName}</h2>
                <p>{currentUser?.email}</p>
                <button
                    onClick={() => setIsEditEmailFormVisible(!isEditEmailFormVisible)}

                >
                    Edit Email

                </button>
                {isEditEmailFormVisible && <EditEmailForm email={currentUser?.email} />}
                {/* <EditEmailForm email={currentUser?.email} />                     */}
                <img src={currentUser?.photoURL} alt="user profile" />

                <button onClick={deleteAccount}>
                    Delete account
                </button>

                <button onClick={signOutUser}>
                    Sign out
                </button>

                <button onClick={deleteNotes}>
                    Delete Notes
                </button>


            </div>
        </div>
    );
}

export default ViewProfile;