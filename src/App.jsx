
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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

function App() {

  return (
    <>
      <div className="">
     
        <NavigationBar />
        <Routes>
          <Route path="/Note-App/signin" element={<Signin />} />
          <Route path="/Note-App/signup" element={<Signup />} />
          <Route path="/Note-App/FetchNotes" element={<FetchNotes />} />
          <Route path="/Note-App/ViewProfile" element={<ViewProfile />} />
          <Route path="/Note-App/AddNote" element={<AddNote />} />
          <Route path="/Note-App/CreateNote" element={<CreateNote />} />
          <Route path="/Note-App/FetchNotes" element={<FetchNotes />} />
          <Route path="/Note-App/addAudioNote" element={<AddAudioNotes />} />
          <Route path="/Note-App/GetAudioNotes" element={<GetAudioNotes />} />
          <Route path="/Note-App/ViewProfile" element={<ViewProfile />} />
          <Route path="/Note-App/CreateTasks" element={<CreateTasks />} />



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
