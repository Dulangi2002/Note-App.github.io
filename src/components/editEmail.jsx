import { useState } from "react";
import { getAuth, updateEmail } from "firebase/auth";
import { getFirestore, setDoc, collection, doc, getDoc, writeBatch , getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';


function EditEmailForm(props) {
    const auth = getAuth();
    const db = getFirestore();
    // const [ userID, setUserID] = useState(props.userID);
    const [email, setEmail] = useState(props.email);
    const currentUser = auth.currentUser;


    const reauthenticatetheuser = async () => {
        const user = auth.currentUser;
        const password = prompt("Please enter your password to confirm the changes");
        const credential = EmailAuthProvider.credential(user.email, password);

        try {
            await reauthenticateWithCredential(user, credential);
            console.log("User re-authenticated");
        }
        catch (e) {
            console.log(e);
        }

    }


    const refreshPage = () => {
        window.location.reload();
    }


    const copyDocuments = async () => {
        const user = auth.currentUser;
        const userEmail = user.email;
        try {
            const userDocRef = getDocs(collection(firestore, "users", userEmail, "notes"))
            const docSnap = await getDoc(userDocRef);
            if (docSnap.exists()) {
                const notesCollectionRef = collection(userDocRef, "notes");
                const notesCollectionSnapshot = await getDoc(notesCollectionRef);
                const updatedUserDocRef = doc(db, "users", email);

                const notesBatch = writeBatch(db);
                notesBatch.set(updatedUserDocRef, docSnap.data());
                notesCollectionSnapshot.forEach((noteDoc) => {
                    const noteData = noteDoc.data();
                    const newNoteDocRef = doc(db, "users", email, "notes", noteDoc.id);
                    notesBatch.set(newNoteDocRef, noteData);
                });
                await notesBatch.commit();
                await deleteDoc(userDocRef);
                console.log("Documents copied  ");


            } else {
                console.log("No such document!");
            }
        } catch (e) {
            console.log(e);
        }

    }


    const handleEditEmail = async (e) => {
        e.preventDefault();
        try {
            await reauthenticatetheuser();
            const user = auth.currentUser;
            const userEmail = user.email;
            console.log(userEmail);
            if (user) {

                await copyDocuments();
                await updateEmail(user, email);
                console.log("Email updated");

            } else {
                console.log("No user is signed in");
            }

        } catch (e) {
            console.error(e);
        }

    }

    return (
        <div>
            <h1>Edit Email</h1>

            <form onSubmit={handleEditEmail}>
                <label className="text-red-700">
                    Email:
                    <input

                        type="text"
                        name="email"
                        defaultValue={props.email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <button type="submit" className="bg-red">Submit</button>
            </form>
        </div>

    )
}


export default EditEmailForm;