import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import {Routes, Route , Link} from 'react-router-dom';
import Signup from './components/signup.jsx';
import Signin from './components/Signin.jsx';
import AddNote from './components/home.jsx';
import AddCollaborator from './components/inviteCollaborators.jsx';
import FetchNotes from './components/fetchNotes'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    
      <button>
        <a href="/Note-App/signup">Signup</a>
      </button>

      <button>
      <a href="/Note-App/signin">Signin</a>
      </button>
       
      <button>
      <a href="/Note-App/addnote">Add Note</a>
      </button>

      <button>
      <a href="/Note-App/addcollaborator">Add Collaborator</a>
      </button>

      
      <button>
      <a href="/Note-App/viewnotes">View notes</a>
      </button>

    <Router>
      <Routes>  
        <Route path="/Note-App/signin" element={<Signin/>} />
        <Route path="/Note-App/signup" element={<Signup/>} />
        <Route path="/Note-App/addnote" element={<AddNote/>} />
        <Route path="/Note-App/addcollaborator" element={<AddCollaborator/>} />
        <Route path="/Note-App/viewnotes" element={<FetchNotes/>} />

       
      </Routes>
    </Router>
    
    </>
  )
}

export default App
