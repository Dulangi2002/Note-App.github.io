import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, deleteDoc, getDocs, collection, addDoc, getDoc, query, where } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { getFirestore } from "firebase/firestore";
import { ref, deleteObject, getStorage, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { signOut } from "firebase/auth";
import EditEmailForm from './editEmail.jsx';




function ViewProfile({ userEmail, firestore }) {

    const storage = getStorage();

    const [loading, setLoading] = useState(true);
    const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);
    const [isEditEmailFormVisible, setIsEditEmailFormVisible] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const db = getFirestore();
    const auth = getAuth();
    const navigate = useNavigate();
    const [profilePhoto, setProfilePhoto] = useState(null);





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



  

    const navigateToProfilePhotoPage = () => {
        navigate('/Note-App/profilePhoto');
    }






    useEffect(() => {
        const auth = getAuth();

        const fetchProfilePhoto = async (userEmail) => {
            try {
                const userDocRef = doc(db, 'users', userEmail);
                const docSnap = await getDoc(userDocRef);


                if (docSnap.exists()) {
                    const userProfile = docSnap.data();
                    const profilePhotoUrl = userProfile.profilePhoto;
                    setProfilePhoto(profilePhotoUrl);
                } else {
                    console.log('User document not found');
                }

            } catch (error) {
                console.error('Error fetching profile photo:', error);
            }
        };



        onAuthStateChanged(auth, (user) => {
            setLoading(false);
            if (user) {
                setCurrentUser(user);
                const userEmail = user.email;
                // Call the fetchProfilePicture function with the user's email
                fetchProfilePhoto(userEmail);



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

            <div className='flex flex-col' id='image-container'>
                <div>
                    {profilePhoto ? (
                        <img src={profilePhoto} alt="Profile" className=' ' id='profile-image' />
                    ) : (
                        <p>No profile photo available</p>
                    )}
                </div>



                <div >

                    <button
                        onClick={navigateToProfilePhotoPage}
                        id='profile-photo-button'> <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                            <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                            <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                        </svg></button>

                </div>

            </div>



            <div>
                <h2 className=" text-2xl ">{currentUser?.displayName}</h2>
                <p>{currentUser?.email}</p>
                <button
                    onClick={() => setIsEditEmailFormVisible(!isEditEmailFormVisible)}

                >
                    Edit Email

                </button>
                {isEditEmailFormVisible && <EditEmailForm email={currentUser?.email} />}
                <img src={currentUser?.photoURL} alt="user profile" />
                <img src="" alt="" />

                <button onClick={deleteAccount} >
                    Delete account
                </button>


                <button onClick={deleteNotes}>
                    Delete Notes
                </button>


            </div>
        </div>
    );
}

export default ViewProfile;