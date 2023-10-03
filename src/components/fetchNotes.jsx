import { collection, getDocs, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, firestore, storage } from '../firebase';
//import { ref } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { typographyClasses } from '@mui/material';
import { getDownloadURL, ref, getStorage } from 'firebase/storage';




function FetchNotes() {
  const [notes, setNotes] = useState([]);
  //const [currentNote, setCurrentNote] = useState ({ id: null, title: '', content: '', file: '' });
  //  const [note, setNote] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = auth.currentUser ? auth.currentUser.email : null;
  const [url, setUrl] = useState('');
  const [editNote, setEditNote] = useState(false);
  const [colorFilter, setColorFilter] = useState([]);
  const [selectedColor, setSelectedColor] = useState("all");
  const [sharedata, setShareData] = useState('');
  const [result, setResult] = useState('');
  const [DownloadNote, setDownloadNote] = useState('');
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  const navigate = useNavigate();




  const getCreateNoteForm = () => {
    navigate('/Note-App/AddNote');
  };





  const goToTasks = () => {
    navigate('/Note-App/CreateTasks');

  }


  const deleteNote = async (id) => {
    try {
      await getDocs(collection(firestore, "users", userEmail, "notes"));
      const docRef = doc(firestore, 'users', userEmail, 'notes', id);
      await deleteDoc(docRef);
      console.log("Note deleted successfully!");
      setNotes(notes.filter((note) => note.id !== id));

    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };



  const handleColorFilterSelect = (color) => {
    setSelectedColor(color);
  };

  const filteredNotes = notes.filter((note) => {
    if (selectedColor === "all") {
      return true;
    } else {
      return note.colorLabel === selectedColor;
    }
  });


  const handleSelectAllNotes = () => {
    handleColorFilterSelect('all');
    console.log('Selected Color:', selectedColor);

  };


  const handleshareButtonClick = async (note) => {


    try {

      const fileURLs = note.files.map((file) => {
        return file instanceof File
          ? URL.createObjectURL(file)
          : file;
      });


      await navigator.share({
        title: note.title,
        text: note.content,
        url: fileURLs,
        //  url: 'https:dulangi2002.github.io/Note-App/${note.id}'
      })

      setResult('Page shared successfully')
    } catch (error) {
      console.log(error);
      setResult('Error sharing: ' + error)
    }
  }




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
              id: doc.id,   ...doc.data()

            }));
            console.log(notesData);
            setNotes((prevNotes) => [...prevNotes, ...notesData]);
            setNotes(notesData);
            setLoading(false);
            const colorSet = new Set(notesData.map((note) => note.colorLabel));
            setColorFilter(["all", ...colorSet]);
          } catch (error) {
            console.error("Error fetching notes:", error);
            setLoading(false);
          }
        }
         fetchNotes();


      } else {
        setLoading(false);
        navigate('/Note-App/signin');

      }
    });

    return () => {
     
    }




  }, [userEmail]);



  return (

<div id='whole'>
    <div className='filter' id='filter'>
      {loading ? (
        <p>Loading...</p>
      ) : (

        
        <div>
          <div className='flex  flex-row'>
            <div className=' font-bold ml-8 '>
              <h1 id='notes-heading' className='text-5xl'> Your Notes</h1>
            </div>

            <div className='flex lg:flex-col mt-8 gap-4 ml-2 sm:rounded-lg '>
              <div >
                <button onClick={goToTasks} id='submenu-buttons'>View your tasks</button>
              </div>

              <div>
                <button onClick={getCreateNoteForm} id='submenu-buttons'>create new note</button>
              </div>


            </div>


          </div>


          <div id='filter-band'>
            <button>

              {colorFilter.map((color, index) => (
                <button
                  id='filter-buttons'
                  key={index}
                  onClick={() => handleColorFilterSelect(color)}
                  style={{

                    backgroundColor: color,
                    marginRight: '10px'
                  }}
                />
              ))}
            </button>


          </div>
        


          <div id='note-blocks'>
            {filteredNotes.map((note) => (

              <div id='single-note-block'>
                <div
                  className=' '
                  id='label-block'
                  style={{
                    backgroundColor: note.colorLabel,
                  }}
                >

                </div>
                <p className="card-text mt-8 " >{note.createdAt.toDate().toLocaleString()}</p>

                <div className="" key={note.id}>
                  <div className="card-body">
                    <h5 className="card-title font-[DM sans] text-xl" contentEditable="true" suppressContentEditableWarning onInput={
                      (event) => {
                        const newTitle = event.target.innerText;
                        console.log(newTitle);
                        const docRef = doc(firestore, 'users', userEmail, 'notes', note.id);
                        updateDoc(docRef, {
                          title: newTitle
                        })
                      }
                    }>{note.title}</h5>

                    <div className='flex flex-row '>
                      <div>
                        <button onClick={deleteNote.bind(this, note.id)} className="" id='delete-button'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                          </svg>   </button>
                      </div>

                      <div>

                        <button onClick={
                          () => {
                            handleshareButtonClick(note);

                          }


                        } id='share-button'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
                            <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                          </svg>  </button>
                        <p>{result}</p>
                      </div>


                    </div>




                    <p className="card-text font-[Nunito] text-xl" contentEditable="true" suppressContentEditableWarning onInput={

                      (event) => {
                        const newContent = event.target.innerText;
                        console.log(newContent);
                        const docRef = doc(firestore, 'users', userEmail, 'notes', note.id);
                        updateDoc(docRef, {
                          content: newContent
                        })



                      }
                    }>{note.content}</p>
                    <div>
                      <h2> Images:</h2>
                      {Array.isArray(note.files) && note.files.map((file, index) => {

                        return <img key={index} src={file} alt={`Image ${index}`} className='h-56 w-56 border rounded' />;
                      })}
                    </div>







                  </div>
                </div>
              </div>

            ))}


          </div>




        </div>
      )}

    </div>
    </div>
  );
}

export default FetchNotes;
