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

  // const handleshareButtonClick = async (note) => {


  //   try {

  //       let data = {
  //       title: note.title,
  //       text: note.content,
  //       url: note.file,
  //       //  url: 'https:dulangi2002.github.io/Note-App/${note.id}'
  //     }
  //     await navigator.share(data)
  //     setResult('Page shared successfully')
  //   } catch (error) {
  //     console.log(error);
  //     setResult('Error sharing: ' + error)
  //   }
  // }








  // const storageRefForDownload = ref(storage, note.file);
  //const downloadUrl = note.file


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

  const getCreateAudioNoteForm = () => {
    navigate('/Note-App/addAudioNote')

  };

  const getCreateNoteForm = () => {
    navigate('/Note-App/AddNote');
  };

  const fetchAudioNotes = () => {
    navigate('/Note-App/GetAudioNotes');
  }

  const viewProfile = () => {
    navigate('/Note-App/ViewProfile');
  }



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







  {/*}
  const updateNote = (id, updatedNote) => {
    setEditNote(false)
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)))
  }

  const EditNote = note => {
    setEditNote(true)
    setCurrentNote({
      id: note.id,
      title: note.title,
      content: note.content,
      file: note.file
    })

  }*/}


  const handleColorFilterSelect = (event) => {
    setSelectedColor(event.target.value);
  };

  const filteredNotes = notes.filter((note) => {
    if (selectedColor === "all") {
      return true;
    } else {
      return note.colorLabel === selectedColor;
    }
  });

  const handleshareButtonClick = async (note) => {


    try {

      const fileURLs = note.files.map((file) => {
        return file instanceof File
          ? URL.createObjectURL(file) // Create object URLs for local files
          : file; // Use the file URLs directly if they are already online
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
              id: doc.id,

              ...doc.data()



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


    <div className='filter'>
      {/*<select name="" value={selectedColor} onChange={handleColorFilterSelect} id="">
        {colorFilter.map((color) => (
          <option value={color}>{color}</option>
        ))}

      </select>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            {note.title}
          </li>
        ))}

        </ul>*/}

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>

          <div>
            <button onClick={fetchAudioNotes}> Get audio notes </button>
          </div>
          <div>
            <button onClick={getCreateNoteForm}>create new note</button>
          </div>

          <div>
            <button onClick={getCreateAudioNoteForm}>create audio note</button>
          </div>


          <div>
            <button onClick={viewProfile}>go to profile</button>
          </div>

          <div>
            <button onClick={goToTasks}>View your tasks</button>
          </div>
          {
            colorFilter.map((color) => (
              <select name="" value={selectedColor} onChange={handleColorFilterSelect} id="" key={color}>
                <option value={color}>{color}</option>
              </select>
            ))
          }

          {/* <select name="" value={selectedColor} onChange={handleColorFilterSelect}
          id="">
        {colorFilter.map((color) => (
          <option value={color}>{color}</option>
        ))}

        </select>*/}


          {filteredNotes.map((note) => (

            <div className="card" key={note.id}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <div>
                  <h2>Selected Images:</h2>
                  {Array.isArray(note.files) && note.files.map((file, index) => {
                    // Filter files to display only images
                    
                    return <img key={index} src={file} alt={`Image ${index}`} />;
                  })}
                </div>



                {/* correct code {
                  note.file && <img src={note.file} alt="file" />
                }
                <a href={note.file} download={note.file} >download</a> */}




                <p className="card-text">{note.createdAt.toDate().toString()}</p>


                <a className="card-text" >{note.file}</a>
                <p className="card-text" contentEditable="true" suppressContentEditableWarning onInput={

                  (event) => {
                    const newContent = event.target.innerText;
                    console.log(newContent);
                    const docRef = doc(firestore, 'users', userEmail, 'notes', note.id);
                    updateDoc(docRef, {
                      content: newContent
                    })



                  }
                }>{note.content}</p>
                <p>
                  {note.colorLabel}
                </p>


                <button onClick={deleteNote.bind(this, note.id)} className="btn btn-danger">Delete</button>
                <button onClick={
                  () => {
                    handleshareButtonClick(note);

                  }


                }> share note</button>
                <p>{result}</p>






              </div>
            </div>
          ))}




          {/*{notes.map((note) => (
            <div className="card" key={note.id}>
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                {
                  note.file && <img src={note.file} alt="file" />
                }

                <a href={note.file} download={note.file} >download</a>

                <p className="card-text">{note.createdAt.toDate().toString()}</p>


                <a className="card-text" >{note.file}</a>
                <p className="card-text" contentEditable="true" suppressContentEditableWarning onInput={

                  (event) => {
                    const newContent = event.target.innerText;
                    console.log(newContent);
                    const docRef = doc(firestore, 'users', userEmail, 'notes', note.id);
                    updateDoc(docRef, {
                      content: newContent
                    })



                  }
                }>{note.content}</p>
                <p>
                  {note.colorLabel}
                </p>

                <button onClick={deleteNote.bind(this, note.id)} className="btn btn-danger">Delete</button>


              </div>
        </div> 

              ))}*/}
        </div>
      )}
      {/*
      {
        editNote ? (
          <Fragment>
            <h2>Edit note</h2>
            <EditNoteForm
              editNote={editNote} 
              setEditNote={setEditNote}
              currentNote={setCurrentNote}
              updateNote={updateNote}

            />
          </Fragment>
        ) : null
      }*/}
    </div>
  );
}

export default FetchNotes;
