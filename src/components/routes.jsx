import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route } from 'react-router-dom';
import ViewNote from './viewNote';



function AppRouter(){
    return (
        <div>
        <Router>
        <NavigationButtons />
        <Routes>
          
         <Route path="/Note-App/signin" element={<Signin />} />
         <Route path="/Note-App/signup" element={<Signup />} />
         <Route path="/Note-App/AddNote" element={<AddNote />} />
         <Route path="/Note-App/FetchNotes" element={<FetchNotes />} />
         <Route path="/Note-App/addAudioNote" element={<AddAudioNotes />} />
         <Route path="/Note-App/CreateTasks" element={<CreateTasks />} />
         <Route path="/Note-App/ViewNote" element={<ViewNote />} />
         
        </Routes>
      </Router>
      </div>

     
    )
}


export default AppRouter;