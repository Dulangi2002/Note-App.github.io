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
        <a href="/signup">Signup</a>
      </button>

      <button>
      <a href="/signin">Signin</a>
      </button>
       
      <button>
      <a href="/addnote">Add Note</a>
      </button>

      <button>
      <a href="/addcollaborator">Add Collaborator</a>
      </button>

      
      <button>
      <a href="/viewnotes">View notes</a>
      </button>

    <Router basename='/Note-App/'>
      <Routes>  
        <Route path="/signin" element={<Signin/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/addnote" element={<AddNote/>} />
        <Route path="/addcollaborator" element={<AddCollaborator/>} />
        <Route path="/viewnotes" element={<FetchNotes/>} />

       
      </Routes>
    </Router>
    
    </>
  )
}

export default App
