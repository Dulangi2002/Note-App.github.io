import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../firebase";
import { getFirestore } from "firebase/firestore";


function CreateCategory() {
    const [category_name, setCategoryname] = useState('');
    const [categories, setCategories] = useState([]);
    const [createError, setCreateError] = useState(null);

    const [showForm, setShowForm] = useState(false);
    const auth = getAuth();
    const db = getFirestore();



    const handleAddCategoryClick = () => {
        setShowForm(true)
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
                        // console.log(categoriesData);
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
        <div className="z-[1]  ">

            <div className="flex flex-row  ">
               

                <div className="mr-2 ">
                    <button onClick={handleAddCategoryClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg></button>

                </div>
                <div className="">
                    <p> Create Folder</p>

                </div>
            </div>


            {
                showForm && (

                    <form action="" onSubmit={handleCreateCategory} className="form-control z-[1] bg-base-300 rounded-box w-80 text-md font-bold  p-3 -ml-28 shadow ">
                        <div>
                            <label htmlFor="category_name" className="text-sm mr-2 ">Category </label>
                            <input type="text" onChange={handleCategoryNameChange} value={category_name} className="border rounded border-black h-8 w-40   mb-2  " />
                            <p> {createError}</p>

                        </div>

                        <div>
                            <button onClick={handleCreateCategory} className="rounded bg-green-300 w-16 h-10 ">
                                Add

                            </button>

                            <button onClick={

                                () => setShowForm(false)
                            } className="ml-2 rounded bg-red-400  w-16 h-10">
                                close
                            </button>

                        </div>

                    </form>

                )
            }



            <div id="category_list" className="bg-red-400">
                {categories.map(category => (
                    <div key={category.id}>{category.category_name}</div>
                ))}
            </div>
        </div>

    );
}


export default CreateCategory;