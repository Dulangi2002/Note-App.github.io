import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import EditTask from "./editTask";
import { compareAsc, format } from "date-fns";

function CreateTasks() {
    const [date, setDate] = useState("");
    const [completed, setCompleted] = useState(false);
    const [task_name, setTaskName] = useState("");
    const [priority, setPriority] = useState("low");
    const [tasks, setTasks] = useState([]);
    const [editingStates, setEditingStates] = useState({});
    const [priorityColor, setPriorityColor] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('all');
    const [showForm, setshowForm] = useState(false);
    const auth = getAuth();
    const db = getFirestore();


    function showNotification(title , options) {
        if( !("Notification" in window) ) {
            alert("This browser does not support desktop notification");
        }
        else if (Notification.permission === "granted") {
            const notification = new Notification(title , options);
        }
        else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(function (permission) {
                if (permission === "granted") {
                    const notification = new Notification(title , options);
                }
            });
        }
    }

    function checkDueTasks() {
        const today = new Date();
        
        tasks.forEach((task) => {
            const taskDate = task.date.split("-");
            const taskDateObj = new Date(taskDate[0], taskDate[1] - 1, taskDate[2]);
            const result = compareAsc(today, taskDateObj);
            if (result === 0) {
                showNotification("Task due today" , {
                    body : task.task_name
                });
            }
        }
        );


    }

    function DailyTimer() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(10, 32, 0, 0);
    
        const timeToTomorrow = tomorrow - now;
    
        setTimeout(function () {
            checkDueTasks();
            DailyTimer();
        }, timeToTomorrow);
    }
    
    // Call the DailyTimer function to start the recurring timer
    DailyTimer();
    


    



    function handleTaskNameChange(event) {
        const newTaskName = event.target.value;
        setTaskName(newTaskName);
    }

    function handleDateChange(event) {
        const newDate = event.target.value;
        setDate(newDate);
    }


    const handleClickAddTask = (event) => {
        setshowForm(true);
    }


    const filterTasksDueToday = () => {

        const today = new Date();
        const todayDate = today.getDate().toString();
        return tasks.filter((task) => {
            const taskDate = task.date.split("-")[2];
            return taskDate === todayDate;
        });
    };





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


                setshowForm(false);
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

            <div className="flex flex-row items-baseline  justify-start  ">
            <button onClick={handleClickAddTask} className="flex flex-row  border-2  w-56 h-12 rounded justify-center m-4 p-2  gap-2" id="open-create-task-form">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                Add task
            </button>




            {
                showForm && (
                    <form className="flex flex-col gap-4 z-[1] shadow p-4 w-2/3 m-auto left-0 right-0 absolute bg-white ">
                        <div>
                            <label htmlFor="task_name">Task name</label>
                            <input type="text" onChange={handleTaskNameChange} value={task_name} placeholder="Enter task..." className="border-2 border-black p-2 rounded w-full  " />
                        </div>

                        <div>
                            <label htmlFor="task_due_date"> Due date</label>
                            <input type="date" onChange={handleDateChange} value={date} className="border-2  border-black p-2 rounded  w-full" />
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

                        <div className="flex flex-row justify-start gap-6  ">
                            <button onClick={handleAddTask} id="" className="bg-green-400 rounded-full  h-10 p-2 text-center  w-1/2 font-[Nunito ] text-lg  text-white font-bold ">
                                <span>Add</span>
                            </button>
                            <button onClick={
                                () => setshowForm(false)
                            } className="bg-red-400 rounded-full  h-10 p-2 text-center  w-1/2  font-[Nunito] text-lg text-white font-bold">
                                Cancel
                            </button>
                        </div>



                    </form>

                )
            }


            <div>


                <details id="priority-filter" value={priorityFilter} onChange={handlePriorityFilterChange} className="dropdown ">
                    <summary className="btn font-bold font-[Nunito] text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
                            <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </summary>

                    <select name="" id="" className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <option value="all">All</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>


                    </select>


                </details>

            </div>
            </div>




           
            <div id="tasks-list" className="flex lg:flex-row flex-col flex-wrap m-4 gap-4">
                {filteredTasks.map((task) => (




                    <div key={task.id} className="flex flex-col border-2  rounded lg:m-4 p-2  lg:w-1/4 w-full">
                        <div className="flex flex-row space-between">
                            <div className="w-20  h-2 rounded  ml-2 mt-2 " style={{ backgroundColor: task.priorityColor }}></div>

                        </div >

                        <div className="flex flex-row  justify-between">
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

                                            className="font-[Nunito] font-bold text-2xl ml-2  ">{task.task_name}</h2>
                                    </div>
                                </div>

                                <div>
                                    <p className="p-2 font-[Nunito] ml-2 text-xl  "> Due date : {task.date}</p>

                                </div>

                            </div>


                            <div className="flex flex-row gap-4   ">
                                <div>
                                    <button onClick={() => toggleEdit(task.id)} id="edit-task-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
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
                                    } id="delete-task-button"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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
