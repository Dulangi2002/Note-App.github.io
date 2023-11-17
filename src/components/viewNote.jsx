import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase";


const ViewNote = () => {
    const { state } = useLocation();
    const note = state.note;
    

    

    return (
        <>
            <div className="m-8 " >

                <h1 className="text-5xl font-bold underline mb-8 font-[merriweather]">{note.title}</h1>
                <p className="text-2xl font-[merriweather] ">{note.content}</p>
                <p className="text-xl">{note.category}</p>
                <div className="flex lg:flex-row flex-col   gap-3 m-8 ">
                {Array.isArray(note.files) &&
                          
                            note.files.map((file) => (  
                                <div className="w-full">
                                    <img src={file} className="w-full h-full ">
                                      
                                    </img>
                                </div>
                            ))

                        }
                </div>

            </div>
        </>
    );
};

export default ViewNote;
