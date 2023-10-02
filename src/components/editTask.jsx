import { useState } from "react";
import { getAuth  } from "firebase/auth";
import { getFirestore, doc, setDoc  } from "firebase/firestore";



function EditTask (props){
 

    const auth = getAuth();
    const db = getFirestore();
    const [task_ID , setTaskId] = useState(props.task_ID);
    const [task_name, setTaskName] = useState(props.task_name);
    const [date, setDate] = useState(props.date);
    const [completed, setCompleted] = useState(props.completed);
    const [editingStates, setEditingStates] = useState({});

    const refreshPage = () => {
        window.location.reload();
    }
    const handleEditTask = async (e) => {
        
        e.preventDefault();
        try {
            const user = auth.currentUser;
            const userEmail = user.email;
           
            console.log(userEmail);
            
            if (user) {
               
                const docRef = await setDoc(doc(db, "users", userEmail, "tasks", task_ID), {
                    task_name: task_name,
                    date: date,
                    completed: completed,
                });
                

                console.log("Document edited ");
               // console.log(completed)
               refreshPage();
            }

        } catch (e) {
            console.error("Error editing  document: ");
        }

    };

 
    return (
        <div className="mt-2 mb-20  "  id="edit-task">
        

            <form onSubmit={handleEditTask} className="form-control mt-2  gap-4 border-2 " id="edit-task-form">
               
                <label className="font-[DM-sans] text-md">
                    Task Name:
                    <input
                       
                        type="text" 
                        name="task_name"
                        value={task_name}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </label>

              
               
                <label className="font-[DM-sans] text-md">
                    Date:
                    <input
                     
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>

               <div>
               <button type="submit" id="update-task-button">Submit</button>

               </div>
                
            </form>

        </div>
    )

}



export default EditTask