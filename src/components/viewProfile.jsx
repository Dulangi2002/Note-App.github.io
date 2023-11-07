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
            <div >
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <div>
            <div className='flex lg:flex-row flex-col lg:mt-32 m-auto '>



                <div className='flex flex-col gap-4' id=''>
                    <div className='w-2/4 m-auto'>
                        {profilePhoto ? (
                            <img src={profilePhoto} alt="Profile" className='rounded-full ' id='profile-image' />
                        ) : (
                            <p>No profile photo available</p>
                        )}
                    </div>



                    <div className='w-2/4 bg-white rounded-full border-3 border-black  flex justify-center m-auto  '>

                        <button
                            onClick={navigateToProfilePhotoPage}
                            id='profile-photo-button'
                            className=''
                        > <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                            </svg></button>

                    </div>

                </div>



                <div className=' flex flex-col w-full gap-9 m-3   ' >

                    <div className='flex flex-row space-between border p-2 items-baseline rounded-lg  mb-4'>
                        <div className='text-lg font-bold m-2  ' >
                            <p >{currentUser?.email}</p>

                        </div>

                        <div>
                            <button
                                onClick={() => setIsEditEmailFormVisible(!isEditEmailFormVisible)}
                                className='w-20 mt-3 '

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                </svg>
                            </button>
                            {isEditEmailFormVisible && <EditEmailForm email={currentUser?.email} />}

                        </div>

                    </div>

                    <div className='flex flex-row space-between border p-2 items-baseline rounded-lg  mb-4'>
                        <div className='text-lg font-bold m-2 ' >
                            <p >Reset My Password</p>

                        </div>

                        <div>
                            <button

                                className='w-20 mt-2'

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                </svg>
                            </button>

                        </div>

                    </div>

                    <div className='flex flex-row space-between border p-2 items-baseline rounded-lg  mb-4'>


                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z" />
                                <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                            </svg>

                        </div>


                        <div>
                            <button className="text-lg font-bold m-2 " onClick={signOutUser}>  Sign Out</button>
                        </div>

                    </div>

                    <div className='flex ;g:flex-row flex-col gap-2' >
                        <div className='bg-red-600 lg:w-1/2 text-center rounded-full  '>


                            <button 
                            className=' text-white  p-3'
                            onClick={deleteAccount}  >
                                Delete My Account
                            </button>
                        </div>

                        <div className='bg-red-600 lg:w-1/2 text-center rounded-full  '>

                            <button 
                            className=' text-white  p-3'

                            onClick={deleteNotes}>
                                Delete My Notes
                            </button>
                        </div>





                    </div>



                </div>
            </div>
        </div>
    );
}

export default ViewProfile;