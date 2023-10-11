import React from 'react';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import pic from '../assets/splash3.jpg';



function Fallback (){
    const { user , login } = useAuth();
    const navigate = useNavigate(); 

    const directToSignup = () => {
      navigate('/Note-App/signup');
    }



    return ( <div>

      <div className='grid lg:grid-cols-2  grid-cols-1'>
       
        <div  className='mt-24  lg:ml-44 '>
            <h1 className='w-80 m-4 font[Nunito] text-lg text-center '>You are offline at the moment !</h1>



          <h1 className='font-[DM sans] text-2xl font-bold ml-12'>Find your next adventure</h1>
          <p className='w-80 m-4 font[Nunito] text-lg text-center '>
          "Discover simplicity and creativity with our note-taking app. 
           Capture ideas, set tasks, and stay organized effortlessly.
           Perfect for students, professionals, and creative minds. 
           Start organizing your thoughts now!"
          </p>
          
        </div>
        <div>
          <img src={pic} alt="" id='' className='w-full lg:h-full h-96 '/>
        </div>
      </div>

      
        {!user && (
          <>
          
          
          </>
        )}
        {user && <button>Logout</button>}
      </div>
    
    
    )
}

export default Fallback; 