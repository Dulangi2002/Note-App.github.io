import { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";



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
               

              


            }

        } catch (e) {
            console.error("Error editing document: ", e);
        }

    };


    return (
        <div className="  w-60   justify-center z-[1] " id="">


            <form onSubmit={handleEditTask} className="form-control mt-2 p-4 -ml-16 shadow   border-2  flex flex-col " >

                <label className="font-[Nunito] text-md">
                    Task Name:
                    <input

                        type="text"
                        name="task_name"
                        value={task_name}
                        onChange={(e) => setTaskName(e.target.value)}
                        className="border rounded border-black h-8 w-40   mb-2 p-3 "
                    />
                </label>



                <label className="font-[Nunito] text-md">
                    Date:
                    <input

                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="border rounded border-black h-8 w-40   mb-2 p-3 "
                    />
                </label>

                <label className="font-[Nunito] text-md0 ">
                    Priority:
                    <select id="priority" value={priority}   onChange={(e) => setPriority(e.target.value)}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>

                </label>

                <div>
                    <button type="submit" className="font-[Nunito] bg-green-300 w-28 mt-2 rounded text-sm p-2 " >Update</button>

                </div>

            </form>

        </div>
    )

}



export default EditTask