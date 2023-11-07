import React from 'react'
import { useAuth } from '../AuthContext'
import { useNavigate } from 'react-router-dom'
import pic from '../assets/bg.png'

function SplashPage() {
  const { user, login } = useAuth();
  const navigate = useNavigate();

  const directToSignup = () => {
    navigate('/Note-App/signup');
  }



  return (
    <div className='flex lg:flex-row  flex-col'>

<div className='lg:w-1/2 '>
        <img src={pic} alt="pic" className=' h-full w-3/4 m-auto left-0 right-0 ' />
      </div>

      <div className='lg:w-1/2 lg:mt-24 '>
      <h1 className='font-[DM sans] text-7xl font-bold text-left p-8 animate-fadeIn fade-in' id="splash-heading">Jot down your next adventure</h1>
        <p className='font-[DM sans] text-2xl p-8 text-left leading-10   '>
          "Discover simplicity and creativity with our note-taking app.
          Capture ideas, set tasks, and stay organized effortlessly.
          Perfect for students, professionals, and creative minds.
          Start organizing your thoughts now!"
        </p>
        <h3 className='animate-bounce text-6xl font-bold p-8 text-[#EB6440] '> Happy Notetaking !</h3>
        <button onClick={
          directToSignup
        }
          id=''
          className='bg-[#EB6440] text-white  text-lg font-[DM Sans] font-bold  rounded-full w-1/3 p-4 m-4 border-black border-2   hover:translate-x-2'
        >
          Register
        </button>

        

      {!user && (
        <>


        </>
      )}
      {user && <button>Logout</button>}

      </div>

 



    </div>


  )
}

export default SplashPage;