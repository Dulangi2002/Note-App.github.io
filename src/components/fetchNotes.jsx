import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,

} from "firebase/firestore";
import { storage } from "../firebase";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../firebase";
//import { ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import CreateCategory from "./Category";

function FetchNotes({ note }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const userEmail = auth.currentUser ? auth.currentUser.email : null;
  const [url, setUrl] = useState("");
  const [colorFilter, setColorFilter] = useState([]);
  const [result, setResult] = useState("");
  const [expandedNotesForImages, setExpandedNotesForImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState([]);

  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const getCreateNoteForm = () => {
    navigate("/Note-App/AddNote");
  };

  

  const deleteNote = async (id) => {
    // console.log("Deleting note with id:", id);
    if( confirm('Are you sure you want to delete this note?') === false){
      return;
    }
    const collectionRef = collection(firestore, "users", userEmail, "notes");
    const q = query(collectionRef, where("id", "==", id));
    console.log(q);

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docRef = doc(collectionRef, querySnapshot.docs[0].id);

        if( querySnapshot.docs[0].data().files.length > 0){
          querySnapshot.docs[0].data().files.forEach((file) => {
            // console.log('this is the tgile ' ,  file);
            const storageRef = ref(storage, file);
            // console.log(storageRef);
            deleteObject(storageRef);
            // console.log("File deleted successfully");
          });
        }

        await deleteDoc(docRef);
      }
      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };



  const filterNotesByCategory = notes.filter((note) => {
    // console.log("Selected Category:", selectedCategory);
    // console.log("Note Category:", note.category);
    if (selectedCategory === "all") {
      return true;
    } else {
      return note.category === selectedCategory;
    }
  });

  const handleshareButtonClick = async (note) => {
    try {
      const fileURLs = note.files.map((file) => {
        return file instanceof File ? URL.createObjectURL(file) : file;
      });

      await navigator.share({
        title: note.title,
        text: note.content,
        url: fileURLs,
        //  url: 'https:dulangi2002.github.io/Note-App/${note.id}'
      });

      setResult("Page shared successfully");
    } catch (error) {
      console.log(error);
      setResult("Error sharing: " + error);
    }
  };

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        const fetchNotes = async () => {
          try {
            setUrl("getting link");
            const querySnapshot = await getDocs(
              collection(firestore, "users", userEmail, "notes")
            );
            const notesData = querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
              category: doc.data().category,
            }));

            const categoriesquerySnapshot = await getDocs(
              collection(firestore, "users", userEmail, "categories")
            );
            const categoriesData = categoriesquerySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));

            // console.log(categoriesData);
            setCategories((prevCategories) => [
              ...prevCategories,
              ...categoriesData,
            ]);
            setCategories(categoriesData);

            console.log(notesData);
            setNotes((prevNotes) => [...prevNotes, ...notesData]);
            setNotes(notesData);

            setLoading(false);
            const colorSet = new Set(notesData.map((note) => note.colorLabel));
            setColorFilter(["all", ...colorSet]);

            //filter notes by category
            const categorySet = new Set(notesData.map((note) => note.category));
            setCategoryFilter(["all", ...categorySet]);
          } catch (error) {
            console.error("Error fetching notes:", error);
            setLoading(false);
          }
        };
        fetchNotes();
      } else {
        setLoading(false);
        navigate("/Note-App/signin");
      }
    });

    return () => {};
  }, [userEmail]);

  return (
    <div className="bg-white">
      {/* create filter for the categories */}

      {loading ? (
        <p className="m-auto right-0 left-0 text-lg"
        >Loading...</p>
      ) : (
        <div className="bg-white">
          <div className="">
            <div className=" flex flex-row items-center  w-full  justify-start gap-4 pl-16 mt-8  ">
              <div>
                <h1 id="notes-heading" className="text-4xl font-bold mb-3">
                  {" "}
                  Your Notes
                </h1>
              </div>

              <div>
                <button onClick={getCreateNoteForm}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    class="bi bi-plus-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                  </svg>
                </button>
              </div>

              <div>
                <details
                  className="dropdown "
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <summary className=" btn font-bold font-[Nunito] text-sm mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="currentColor"
                      class="bi bi-folder-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2Zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672Z" />
                      <path d="M13.5 9a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V12h-1.5a.5.5 0 0 1 0-1H13V9.5a.5.5 0 0 1 .5-.5Z" />
                    </svg>
                  </summary>

                  <select className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <option value="all" className="text-sm">
                      All
                    </option>
                    {categories.map((category) => (
                      <option value={category.category_name}>
                        {category.category_name}
                      </option>
                    ))}
                  </select>
                </details>
              </div>
            </div>

            {/* 
            <div className='flex  mt-2 gap-4 lg:ml-20 ml-3  sm:rounded-lg '>
              <div >
                <button onClick={goToTasks} id='submenu-buttons' className=' '> Your Tasks</button>
              </div>

            </div> */}
          </div>

          <div className="flex flex-row ml-4 mt-4 -mb-4 lg:ml-20   ">
            <div></div>

            <div className=" ml-8 ">
              <CreateCategory />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:ml-20 mt-8 ">
            {filterNotesByCategory.map((note) => (
              <div
                id=""
                className=" shadow-md p-4  lg:w-80 w-full h-auto text-black lg:rounded-lg   border-gray-200 border-1"
                // style={{
                //   backgroundColor: note.colorLabel,
                // }}
              >
                <div className="flex flex-row  justify-between p-2 ">
                  <div>
                    <button
                      onClick={() => {
                        handleshareButtonClick(note);
                      }}
                      id="share-button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-share"
                        viewBox="0 0 16 16"
                      >
                        <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
                      </svg>{" "}
                    </button>
                    {/* <p>{result}</p> */}
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        deleteNote(note.id);
                      }}
                      className=""
                      id="delete-button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {note.category && (
                  <div className="flex flex-row -mt-6 " id="category-name">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16 "
                        fill="currentColor"
                        class="bi bi-files"
                        viewBox="0 0 16 16"
                        className=""
                      >
                        <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                      </svg>
                    </div>

                    <div className="ml-2 font-bold ">
                      <p className="text-sm mt-8  ">{note.category}</p>
                    </div>
                  </div>
                )}

                <p className="card-text mb-4  text-lg ">
                  {note.createdAt.toDate().toLocaleString()}
                </p>

                <div className="" key={note.id}>
                  <div className="card-body">
                    <h5
                      className="card-title font-[Merriweather] text-2xl"
                      contentEditable="true"
                      suppressContentEditableWarning
                      onInput={(event) => {
                        const newTitle = event.target.innerText;
                        console.log(newTitle);
                        const docRef = doc(
                          firestore,
                          "users",
                          userEmail,
                          "notes",
                          note.id
                        );
                        updateDoc(docRef, {
                          title: newTitle,
                        });
                      }}
                    >
                      {note.title}
                    </h5>

                    <div className="your-container-div">
                      <p
                        className={`card-text font-[Nunito] text-xl `}
                        contentEditable="true"
                        suppressContentEditableWarning

                        // onInput={(event) => {
                        //   const newContent = event.target.innerText;
                        //   console.log(newContent);
                        //   const docRef = doc(firestore, 'users', userEmail, 'notes', note.id);
                        //   updateDoc(docRef, {
                        //     content: newContent
                        //   });
                        // }}
                      >
                        {note.content.length > 100
                          ? note.content.slice(0, 100) + "..."
                          : note.content}
                      </p>
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          console.log("clicked");
                          console.log(note);
                          navigate("/Note-App/ViewNote", { state: { note } });
                        }}
                        className="text-sm font-bold text-blue-500 hover:underline"
                      >
                        Expand
                      </button>
                    </div>

                    <div>
                      {Array.isArray(note.files) &&
                        note.files
                          .slice(
                            0,
                            expandedNotesForImages.includes(index)
                              ? note.files.length
                              : 1
                          )
                          .map((file, imgIndex) => (
                            <img
                              key={imgIndex}
                              src={file}
                              alt={`Image ${imgIndex}`}
                              className="h-56 w-56 border rounded object-cover"
                              id="Zoom-image"
                            />
                          ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FetchNotes;
