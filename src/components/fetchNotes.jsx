import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from '../firebase';

function FetchNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = auth.currentUser ? auth.currentUser.email : null;

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;


    onAuthStateChanged(auth, (user) => {
        if (user) {

            const fetchNotes = async () => {
                try {
                  const querySnapshot = await getDocs(collection(firestore, "users", userEmail, "notes"));
                  const notesData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                  }));
                  console.log(notesData);
                  setNotes(notesData);
                  setLoading(false);
                } catch (error) {
                  console.error("Error fetching notes:", error);
                  setLoading(false);
                }
              };

              fetchNotes();
        } else {
        }
      });

    

    // console.log(user);

    // if (user) {
    //   fetchNotes();
    // } else {
    //   setLoading(false);
    // }
  }, [userEmail]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {notes.map((note) => (
            <div className="card" key={note.id}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.content}</p>
                <button className="btn btn-primary">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchNotes;
