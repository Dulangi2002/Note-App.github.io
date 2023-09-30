
import './App.css'
import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
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

function App() {

  return (
    <> 

      
      <div className="flex justify-center  absolute inset-x-0 top-0 h-full  " id="homebackground">
        <div classname="flex flex-row">
        {/* <img src="../public/background.jpg" alt="background" className="absolute inset-x-0 top-0 h-full z-0"/> */}


        </div>



      <Home />  
        <h1 className="text-4xl text-white font-bold">Note App</h1>
      </div>
        
  
      
   
    </>

  )
}



function Home() {
  return (
    <div>
      

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
