import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { getFirestore} from "firebase/firestore";


function CreateCategory() {
    const [category_name, setCategoryname] = useState('');
    const [categories, setCategories] = useState([]);
    const [ createError , setCreateError ] = useState(null);
   
    const [ showForm , setShowForm ] = useState(false);
    const auth = getAuth();
    const db = getFirestore();



    const handleAddCategoryClick = () =>{
        setShowForm( true)
    }

    


    const handleCategoryNameChange = (event) => {
        const newCategory = event.target.value;
        setCategoryname(newCategory);
    }


    const handleCreateCategory = async (e) => {
        e.preventDefault();
        const user = auth.currentUser;
        const userEmail = user.email;
        try {
           
            console.log(userEmail);
            if (user) {
                //check if the category already exists
                const querySnapshot = await getDocs(collection(db, "users", userEmail, "categories"));
                const categoriesData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                const categoryExists = categoriesData.find((category) => category.category_name === category_name);
                if (categoryExists) {
                    setCreateError("Category already exists");
                    console.log("Category already exists");
                    return;
                }
                const docRef = await addDoc(collection(db, "users", userEmail, "categories"), {
                    category_name: category_name,
                }); 
                

                setShowForm(false);
                console.log(" Category created successfully ")

            }

        } catch (error) {

            console.log("error updating:", error)

        }
    }


    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;
        const userEmail = user.email;
    

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const fetchCategories = async () => {
                    try {
                        const querySnapshot = await getDocs(collection(firestore, " users ", userEmail, "categories"))
                        const categoriesData = querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        console.log(categoriesData);
                        setCategories((prevCategories) => [...prevCategories, ...categoriesData]);
                        setCategories(categoriesData);


                    } catch (error) {
                        console.log("Error fetching categories", error)
                    }

                };

                fetchCategories(userEmail);
            } else {
                console.log(" No user is logged in ")
            }
        })
    })



    return (
        <div>
            <button onClick={ handleAddCategoryClick}> Add a category</button>
            {
                showForm && (

                    <form action="" onSubmit={handleCreateCategory}>
                    <div>
                        <label htmlFor="category_name">Category name</label>
                        <input type="text" onChange={handleCategoryNameChange} value={category_name} />
                         <p> { createError}</p>
    
                    </div>
    
                    <div>
                        <button onClick={handleCreateCategory}>
                            Add category
    
                        </button>
    
                    </div>
                   
                </form>

                )
            }
          


            <div id="category_list">
                    {categories.map(category => (
                        <div key={category.id}>{category.category_name}</div>
                    ))}
            </div>
        </div>

    );
}


export default CreateCategory;