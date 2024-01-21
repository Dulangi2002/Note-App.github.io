import { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { set } from "date-fns";



function EditTask(props) {


    const auth = getAuth();
    const db = getFirestore();
    const [task_ID, setTaskId] = useState(props.task_ID);
    const [task_name, setTaskName] = useState(props.task_name);
    const [priority, setPriority] = useState(props.priority);
    const [priorityColor, setPriorityColor] = useState(''); 

    const [date, setDate] = useState(props.date);
    const [completed, setCompleted] = useState(props.completed);
    const [editingStates, setEditingStates] = useState({});
    const [tasks, setTasks] = useState([]);

    const handleEditTask = async (e) => {

        e.preventDefault();
        try {
            const user = auth.currentUser;
            const userEmail = user.email;

            console.log(userEmail);

            if (user) {

                const priorityValue = priority || 'low';

                const docRef = await setDoc(doc(db, "users", userEmail, "tasks", task_ID ), {
                    task_name: task_name,
                    date: date,
                    completed: completed,
                    priority: priorityValue,
                    priorityColor: priorityColor

                });
                

                console.log("Document edited ");
                setEditingStates({ ...editingStates, [task_ID]: false });   
                setTasks(tasks.map((task) => task.task_ID === task_ID ? { ...task, task_name: task_name, date: date, completed: completed, priority: priorityValue, priorityColor: priorityColor } : task));

              


            }

        } catch (e) {
            console.error("Error editing document: ", e);
        }

    };


    return (
        <div className="w-full max-w-md m-auto left-0  absolute bg-white" id="">


            <form onSubmit={handleEditTask} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >

                <div className="mb-6">

                <label className="font-[Nunito] block text-gray-700 text-md font-bold mb-2">
                    Task Name:
                    <input

                        type="text"
                        name="task_name"
                        value={task_name}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>

                </div>

                <div className="mb-6">
                <label className="font-[Nunito] block text-gray-700 text-md font-bold mb-2">
                    Date:
                    <input

                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className=" border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </label>

                </div>

                <div className="mb-6">
                <label className="font-[Nunito] text-md ont-[Nunito] block text-gray-700 text-md font-bold mb-2 ">
                    Priority:
                    <select id="priority" value={priority}   onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>

                </label>

                </div>

                <div className="flex items-center justify-between">
                    <button type="submit" className="font-[Nunito] bg-green-300 py-2 px-4 2 rounded-full text-md " >Update</button>

                </div>

            </form>

        </div>
    )

}



export default EditTask