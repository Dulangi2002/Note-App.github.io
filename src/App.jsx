
import './App.css'
import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';

import CreateNote from './components/createNote';
import AddAudioNotes from './components/audioNotes.jsx';
import FetchNotes from './components/fetchNotes';
import AddNote from './components/home.jsx';
import GetAudioNotes from './components/getAudioNotes.jsx';
import ViewProfile from './components/viewProfile.jsx';
import CreateTasks from './components/createTasks.jsx';
import NavigationBar from './components/navigationBar.jsx';
import { useAuth } from './AuthContext.jsx';
import ProfilePhoto from './components/profilePhoto.jsx';
import { useNavigate } from 'react-router-dom';


function App() {

  const { user, logout, signup, signin } = useAuth();
  const navigate = useNavigate();




  useEffect(() => {
    if (user == null)
      navigate("/Note-App/signin")
  }
    ,

    [user])



  const renderRoutes = () => {
    if (user) {
      return (
        <>

          <Routes>
            <Route path="/Note-App/ViewProfile" element={<ViewProfile />} />
            <Route path="/Note-App/AddNote" element={<AddNote />} />
            <Route path="/Note-App/CreateNote" element={<CreateNote />} />
            <Route path="/Note-App/" element={<FetchNotes />} />
            <Route path="/Note-App/addAudioNote" element={<AddAudioNotes />} />
            <Route path="/Note-App/GetAudioNotes" element={<GetAudioNotes />} />
            <Route path="/Note-App/ViewProfile" element={<ViewProfile />} />
            <Route path="/Note-App/CreateTasks" element={<CreateTasks />} />
            <Route path="/Note-App/profilePhoto" element={<ProfilePhoto />} />

          </Routes>



        </>
      )
    } else {
      return (

        <>

          <Routes>
            <Route path="/Note-App/signin" element={<Signin />} />
            <Route path="/Note-App/signup" element={<Signup />} />
          </Routes>


        </>
      );

    }
  }




  return (
    <div className='-mt-12 '>
      <NavigationBar />
      {renderRoutes()}
    </div>

  );
}


export default App

