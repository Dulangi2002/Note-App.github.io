
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, RouterProvider } from 'react-router-dom'
import Signup from './components/Signup.jsx';
import Signin from './components/Signin.jsx';

import CreateNote from './components/createNote';
import AddAudioNotes from './components/audioNotes.jsx';
import { NavigationButtons } from './components/buttons.jsx';
import FetchNotes from './components/fetchNotes';
import AddNote from './components/home.jsx';
import GetAudioNotes from './components/getAudioNotes.jsx';
import ViewProfile from './components/viewProfile.jsx';
import CreateTasks from './components/createTasks.jsx';
import NavigationBar from './components/navigationBar.jsx';
import { AuthProvider } from './AuthContext.jsx';
import { useAuth } from './AuthContext.jsx';
import ProfilePhoto from './components/profilePhoto.jsx';


function App() {

  const { user } = useAuth();

  if (user) {
    console.log('user is signed in');
  }


  return (
    <>
      <div className='-mt-12 '>



        <NavigationBar />

          <Routes>
            {user ? (
              <Route path="/" element={<FetchNotes />} />
            ) : (
              <Route path="/Note-App/signin" element={<Signin />} />
            )}
            {/* Rest of your routes */}
          </Routes>



   
        <Routes>
          <Route path="/Note-App/signup" element={<Signup />} />
          <Route path="/Note-App/ViewProfile" element={<ViewProfile />} />
          <Route path="/Note-App/AddNote" element={<AddNote />} />
          <Route path="/Note-App/CreateNote" element={<CreateNote />} />
          <Route path="/Note-App/FetchNotes" element={<FetchNotes />} />
          <Route path="/Note-App/addAudioNote" element={<AddAudioNotes />} />
          <Route path="/Note-App/GetAudioNotes" element={<GetAudioNotes />} />
          <Route path="/Note-App/ViewProfile" element={<ViewProfile />} />
          <Route path="/Note-App/CreateTasks" element={<CreateTasks />} />
          <Route path="/Note-App/profilePhoto" element={<ProfilePhoto />} />



        </Routes> 





      </div>







    </>

  )
}



function Home() {
  return (
    <div>

      <div>
        <NavigationBar />
      </div>
      <Router>
        <NavigationButtons />
        <Routes>
          <Route path="/Note-App/signin" element={<Signin />} />
          <Route path="/Note-App/signup" element={<Signup />} />
          <Route path="/Note-App/CreateNote" element={<CreateNote />} />
          <Route path="/Note-App/FetchNotes" element={<FetchNotes />} />
          <Route path="/Note-App/addAudioNote" element={<AddAudioNotes />} />
          <Route path="/Note-App/AddNote" element={<AddNote />} />
          <Route path="/Note-App/GetAudioNotes" element={<GetAudioNotes />} />
          <Route path="/Note-App/ViewProfile" element={<ViewProfile />} />
          <Route path="/Note-App/CreateTasks" element={<CreateTasks />} />

        </Routes>
      </Router>

    </div>
  )
}


export default App
export { Home }
