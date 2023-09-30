import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs  , doc , setDoc , deleteDoc} from "firebase/firestore";
import { firestore } from "../firebase";
import EditTask from "./editTask";


function CreateTasks() {
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [task_name, setTaskName] = useState("");
    const [tasks, setTasks] = useState([]);
    //const [isEditing, setIsEditing] = useState(false);  
    const [editingStates, setEditingStates] = useState({});



    //const [completedTaskCount, setCompletedTaskCount] = useState(0);
    const auth = getAuth();
    const db = getFirestore();

    function handleTaskNameChange(event) {
        const newTaskName = event.target.value;
        setTaskName(newTaskName);
    }

    function handleDateChange(event) {
        const newDate = event.target.value;
        setDate(newDate);
    }


    const handleTaskCompletion = async (id) => {
        try {
          let task = tasks.find((task) => task.id === id);
          const updateTask = 
          tasks.map((task) => {
            if (task.id === id) {
                task.completed = !task.completed;
                setCompleted(task.completed);
                console.log(task.completed);
                console.log(task);
                return task;
            } else {
                return task;
            }
            });
            setTasks(updateTask);
            console.log(updateTask);
            const docRef = doc(db, "users", auth.currentUser.email, "tasks", id);
            await setDoc(docRef, {
                task_name: task.task_name,
                date: task.date,
                completed: task.completed,
            });
            console.log("Document successfully updated!");
          //await deleteFromFirebase(id);
        } catch (e) {
          console.error("Error updating document: ", e);
        }
      };
      
      /*const deleteFromFirebase = async (id) => {
        try {
          const docRef = doc(db, "users", auth.currentUser.email, "tasks", id);
          await deleteDoc(docRef);
          console.log("Document successfully deleted!");
        } catch (e) {
          console.error("Error removing document: ", e);
        }
      };
      */


      
    const handleAddTask = async (e) => {


        e.preventDefault();
        try {
            const user = auth.currentUser;
            const userEmail = user.email;
            console.log(userEmail);
            if (user) {
                const docRef = await addDoc(collection(db, "users", userEmail, "tasks"), {

                    task_name: task_name,
                    date: date,
                    completed: false,

                });

                console.log("Document written with ID: ", docRef.id);
            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    };


    /*
    const handleEditClick = () => {
        setIsEditing(true);
    };*/


  /*  const handleEditClick = (task) => {
        setIsEditing(true);
        console.log(task);
       return (
            <EditTask
            task_ID={task.id}
            task_name={task.task_name}
            date={task.date}
            completed={task.completed}
            id={task.id}
          />
       )
    };*/





    const toggleEdit = (task_ID) => {
        setEditingStates((prev) =>({
            ...prev,
            [task_ID]: !prev[task_ID]
        }) );
    };


    

   


    const EditTaskForm = (task) => {
          
          return (
            <div>
                <EditTask
                    task_ID={task.id}
                    task_name={task.task_name}
                    date={task.date}
                    completed={task.completed}
                    id={task.id}
                />
            </div>
        );
      
    }


    const deleteTask = async (id) => {  
        try {
            const docRef = doc(db, "users", auth.currentUser.email, "tasks", id);
            await deleteDoc(docRef);
            console.log("Document successfully deleted!");
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (e) {
            console.error("Error removing document: ", e);
        }
    };


    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;


        onAuthStateChanged(auth, (user) => {
            if (user) {
                const userEmail = user.email;
                const db = getFirestore();

                const fetchTasks = async () => {
                    try {
                        //setTasks("getting link")
                        const querySnapshot = await getDocs(collection(firestore, "users", userEmail, "tasks"));
                        const tasksData = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        console.log(tasksData);
                        setTasks((prevTasks) => [...prevTasks, ...tasksData]);
                        setTasks(tasksData);
                
                    } catch (error) {
                        console.error("Error fetching tasks:", error);
                    }
                };

                fetchTasks();
            } else {
                console.log("No user is signed in");

            }
        });
    }, []);


    return (


        <div>
           

            <div className="form">
                <div>
                    <label htmlFor="task_name">Task name</label>
                    <input type="text" onChange={handleTaskNameChange} value={task_name} />
                </div>

                <div>
                    <label htmlFor="task_due_date"> Due date</label>
                    <input type="date" onChange={handleDateChange} value={date} />
                </div>
                <button onClick={handleAddTask}>
                    <span>Add</span>
                </button>

            </div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <input 
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleTaskCompletion(task.id)}
                     />
                    <h2
                        style={{    
                            textDecoration: task.completed ? "line-through" : 'none',
                        }}

                    
                    >{task.task_name}</h2>
                    <h2> {task.id}</h2>
                    <p>{task.date}</p>

                    <button onClick={ () => toggleEdit(task.id)}>Edit </button>
                    {editingStates[task.id] && <EditTaskForm

                       task_ID = {task.id}
                       task_name={task.task_name}
                       date={task.date}
                       completed={task.completed}
                       id={task.id} />
                    }
                    


                    {/*<button onClick={
                        () => handleEditClick(task)
                     }> 
                        <span>Edit</span>
                    </button>*/}


          
                  {/*<EditTask
                         task_ID = {task.id}
                         task_name={task.task_name}
                        date={task.date}
                        completed={task.completed}
                        id={task.id}
                    />*/}
                    <button onClick={
                        () => deleteTask(task.id)
                    }>
                        <span>Delete</span>
                    </button>
                    
                </div>
            ))}


        </div>
    );
}


export default CreateTasks;
