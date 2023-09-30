import  { Link } from 'react-router-dom';


function NavigationButtons() {
  return (
   
    <div className="buttons">
      <Link to="/Note-App/signup" className="btn btn-primary ">Sign Up</Link>
      <Link to="/Note-App/signin" className="btn btn-primary">Sign In</Link>
    </div>



    
  );
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

export { NavigationButtons };

