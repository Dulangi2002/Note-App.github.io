import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import EditTask from "./editTask";


function CreateTasks() {
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [task_name, setTaskName] = useState("");
    const [priority, setPriority] = useState("low");
    const [tasks, setTasks] = useState([]);
    const [editingStates, setEditingStates] = useState({});
    const [priorityColor, setPriorityColor] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('all');



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






    function handlePriorityChange(event) {
        const newPriority = event.target.value;
        setPriority(newPriority);
    }

    const handlePriorityFilterChange = (event) => {
        setPriorityFilter(event.target.value);
    };

    const filteredTasks = tasks.filter((task) => {
        if (priorityFilter === "all") {
            return true; // Show all tasks if the filter is set to "All"
        }
        return task.priority === priorityFilter;
    });



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
                priority: task.priority
            });
            console.log("Document successfully updated!");
            //await deleteFromFirebase(id);
        } catch (e) {
            console.error("Error updating document: ", e);
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
                    priority: priority,

                });

                let newTask = {
                    id: docRef.id,
                    task_name: task_name,
                    date: date,
                    completed: false,
                    priority: priority,
                    priorityColor: getPriorityColor(priority) // Set priority color for the new task
                };



                setTasks((prevTasks) => [...prevTasks, newTask]);


                console.log("Document written with ID: ", docRef.id);
                //reset the form
                setTaskName("");
                setDate("");
                setPriority("low");

            }
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    };


    const getPriorityColor = (priority) => {
        if (priority === 'high') {
            return 'red';
        } else if (priority === 'medium') {
            return 'yellow';
        } else if (priority === 'low') {
            return 'green';
        } else {
            return 'transparent'; // Default color if priority level is not recognized
        }
    };


    const toggleEdit = (task_ID) => {
        setEditingStates((prev) => ({
            ...prev,
            [task_ID]: !prev[task_ID]
        }));

        setTasks((prevTasks) => {
            return prevTasks.map((task) => {
                if (task.id === task_ID) {
                    return {
                        ...task,
                        priorityColor: getPriorityColor(task.priority)
                    };
                }
                return task;
            });
        });


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
                    priority={task.priority}
                    priorityColor={task.priorityColor}



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
                        const tasksData = querySnapshot.docs.map((doc) => {
                            const taskData = doc.data();
                            return {
                                id: doc.id,
                                ...taskData,
                                priorityColor: getPriorityColor(taskData.priority) // Set priority color for each task
                            };
                        });
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

        <div id="tasks">




            <form className="form-control  flex flex-row gap-4" id="task-form">
                <div>
                    <label htmlFor="task_name">Task name</label>
                    <input type="text" onChange={handleTaskNameChange} value={task_name} />
                </div>

                <div>
                    <label htmlFor="task_due_date"> Due date</label>
                    <input type="date" onChange={handleDateChange} value={date} />
                </div>
                <div>
                    <label htmlFor="priority">Priority:</label>
                    <select id="priority" value={priority} onChange={
                        handlePriorityChange
                    }>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <button onClick={handleAddTask} id="add-task-button">
                    <span>Add</span>
                </button>

            </form>

            <div>


                <details id="priority-filter" value={priorityFilter} onChange={handlePriorityFilterChange} className="dropdown ">
                    <summary className="btn font-bold font-[Nunito] text-sm -mb-4">Priority</summary>

                    <select name="" id="" className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <option value="all">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>


                    </select>


                </details>

            </div>
            <div id="tasks-list ">
                {filteredTasks.map((task) => (




                    <div key={task.id} className="flex flex-col shadow rounded m-4  " id="single-task">
                        <div className="flex flex-row space-between">
                            <div className="w-20  h-2 rounded  ml-2 mt-2 " style={{ backgroundColor: task.priorityColor }}></div>

                        </div >

                        <div className="flex flex-row ">
                            <div className="-mt-4">

                                <div className="flex flex-row ml-4 mt-4 ">

                                    <div className="mt-2 ">

                                        <input
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleTaskCompletion(task.id)}
                                        />
                                    </div>

                                    <div>
                                        <h2
                                            style={{
                                                textDecoration: task.completed ? "line-through" : 'none',
                                            }}

                                            className="font-[Nunito] font-bold text-xl ml-2 mt-2 ">{task.task_name}</h2>
                                    </div>
                                </div>

                                <div>
                                    <p className="p-2 font-[Nunito] ml-2 "> Due date : {task.date}</p>

                                </div>

                            </div>


                            <div className="flex flex-col  ">
                                <div>
                                    <button onClick={() => toggleEdit(task.id)} id="edit-task-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                        </svg>
                                    </button>
                                    {editingStates[task.id] && <EditTaskForm

                                        task_ID={task.id}
                                        task_name={task.task_name}
                                        date={task.date}
                                        completed={task.completed}
                                        id={task.id}
                                        priority={task.priority}
                                    />
                                    }

                                </div>

                                <div>
                                    <button onClick={
                                        () => deleteTask(task.id)
                                    } id="delete-task-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                        </svg>

                                    </button>
                                </div>
                            </div>


                        </div>













                    </div>
                ))}
            </div>
        </div>


    );
}


export default CreateTasks;
