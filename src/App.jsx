
import './App.css'
import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Signup from './components/signup.jsx';
import Signin from './components/Signin.jsx';
import AddNote from './components/home.jsx';
import AddAudioNotes from './components/audioNotes.jsx';
import { NavigationButtons } from './components/buttons.jsx';
import FetchNotes from './components/fetchNotes';
import CreateTasks from './components/createTasks.jsx';

function App() {

  return (
    <>

      <Router>
        <NavigationButtons />
        <Routes>
          
         <Route path="/Note-App/signup" element={<Signup />} />
         <Route path="/Note-App/signin" element={<Signin />} />
         <Route path="/Note-App/AddNote" element={<AddNote />} />
         <Route path="/Note-App/FetchNotes" element={<FetchNotes />} />
         <Route path="/Note-App/addAudioNote" element={<AddAudioNotes />} />
         <Route path="/Note-App/CreateTasks" element={<CreateTasks />} />
         
        </Routes>
      </Router>
    </>

  )
}

export default App
