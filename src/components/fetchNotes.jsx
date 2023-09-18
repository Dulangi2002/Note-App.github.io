import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, firestore, storage } from '../firebase';
import AddNote from './home';
import { uploadBytesResumable, getDownloadURL, ref } from "firebase/storage";
import AddAudioNotes from './audioNotes';

function FetchNotes() {
  const [notes, setNotes] = useState([]);
  const [note , setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = auth.currentUser ? auth.currentUser.email : null;
  const [showCreateNoteForm, setShowCreateNoteForm] = useState(false);
  const [url , setUrl] = useState('');
  const storageRefForDownload = ref(storage, note.file);
  const downloadUrl = note.file

  /*const downloadFile = async () => {
    try{
      const querySnapshot = await getDocs(collection(firestore, "users", userEmail, "notes"));
            const notesData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()

            }));
      for (let i = 0; i < notesData.length; i++) {
        const note = notesData[i];
        if (note.file) {
          const downloadURL = await getDownloadURL(ref(storage, note.file));
          console.log(downloadURL); 
          const xhr = new XMLHttpRequest();
          xhr.responseType = 'blob';
          xhr.onClick = (event) => {
            if(xhr.status == 200){
              const blob = xhr.response;
              console.log('Blob', blob);
              const blobUrl = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = blobUrl;
              a.download = note.name;
              document.body.appendChild(a);
              a.click();
              a.remove();


                URL.revokeObjectURL(blobUrl);

            }

          }
          note.file = downloadURL;
        }
      }
    
  }catch (error) {
    console.error("Error downloading file:", error);
  }
}*/

  

  const getCreateNoteForm = () => {
    return <AddNote />;
  };

  const getCreateAudioNoteForm = () => {
    return <AddAudioNotes />;

  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {

        const fetchNotes = async () => {
          try {
            setUrl("getting link")
            const querySnapshot = await getDocs(collection(firestore, "users", userEmail, "notes"));
            const notesData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data()


            }));
            console.log(notesData);
            setNotes((prevNotes) => [...prevNotes, ...notesData]);
            setNotes(notesData);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching notes:", error);
            setLoading(false);
          }
        }



        fetchNotes();
      

      } else {
        setLoading(false);

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


          <div>
            <button onClick={() => setShowCreateNoteForm(true)}>Add new note</button>
            {showCreateNoteForm && getCreateNoteForm()}
          </div>

          <div>
            <button onClick={() => setShowCreateNoteForm(true)}>Add new audio note</button>
            {showCreateNoteForm && getCreateAudioNoteForm()}
          </div>


          {notes.map((note) => (
            <div className="card" key={note.id}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                {
                  note.file && <img src={note.file} alt="file" />
                }

                <a href="{downloadURL}" download={note.file} >download</a>

                <p className="card-text">{note.createdAt.toDate().toString()}</p>
            

                  
              
                <a className="card-text">{note.file}</a>
                <p className="card-text">{note.content}</p>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FetchNotes;
