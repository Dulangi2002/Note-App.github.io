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


          <div className='flex  flex-row  '>
            <div className='text-5xl  font-bold m-8 '>
              <h1 id='notes-heading'> Your Notes</h1>
            </div>

            <div className='flex flex-col mt-8 gap-4  '>
              <div >
                <button onClick={goToTasks} id='submenu-buttons'>View your tasks</button>
              </div>

              <div>
                <button onClick={getCreateNoteForm} id='submenu-buttons'>create new note</button>
              </div>


            </div>


          </div>







          {/* {
            colorFilter.map((color) => (
              <select name="" value={selectedColor} onChange={handleColorFilterSelect} id="" key={color}>
                <option value={color}>{color}</option>
              </select>
            ))
          } */}

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

          <button onClick={handleSelectAllNotes} id="all-notes-button"  className='text-center mt-4 border-2 px-3 py-2 rounded-full ml-8 border-red-200 shadow-lg font-bold  '>All</button>
  
          </div>

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


        </div>
      )}

    </div>
  );
}

export default FetchNotes;
