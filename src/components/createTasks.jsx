import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs  , doc , setDoc , deleteDoc} from "firebase/firestore";
import { firestore } from "../firebase";
import  TaskReminderNotification  from "./notification";



function CreateTasks() {
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [task_name, setTaskName] = useState("");
    const [tasks, setTasks] = useState([]);
    const [completedTaskCount, setCompletedTaskCount] = useState(0);
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
          task.completed = !task.completed;
      
          const docRef = doc(db, "users", auth.currentUser.email, "tasks", id);
          await setDoc(docRef, task); // Update the document with the modified task data
      
          // Call the deleteFromFirebase function to delete the document
          await deleteFromFirebase(id);
        } catch (e) {
          console.error("Error updating document: ", e);
        }
      };
      
      const deleteFromFirebase = async (id) => {
        try {
          const docRef = doc(db, "users", auth.currentUser.email, "tasks", id);
          await deleteDoc(docRef);
          console.log("Document successfully deleted!");
        } catch (e) {
          console.error("Error removing document: ", e);
        }
      };
      


      
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
           
            <TaskReminderNotification />

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
                        textDecoration={task.completed ? "line-through" : null}
                        onChange={() => handleTaskCompletion(task.id)}
                    />
                    <h2>{task.task_name}</h2>
                    <p>{task.date}</p>
                    
                </div>
            ))}


        </div>
    );
}


export default CreateTasks;
