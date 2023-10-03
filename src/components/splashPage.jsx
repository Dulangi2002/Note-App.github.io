import React from 'react'
import { useAuth } from '../AuthContext'

function SplashPage(){
    const { user , login } = useAuth();
    return ( <div>
        <h1>Splash Page</h1>
        {!user && (
          <>
          
          
          </>
        )}
        {user && <button>Logout</button>}
      </div>
    
    
    )
}

export default SplashPage;