import React from 'react'
import {useEffect,useState} from 'react'
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged ,signOut} from 'firebase/auth'
function Auth() {
    const [authUser,setAuthUser] =useState(null)
    const navigate=useNavigate()
    useEffect(()=>{
        const listen = onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthUser(user)
            }else{
                setAuthUser(null)
            }
        });
         return ()=>{
            listen()
         }

    },[])
    const userSignOut=()=>{
        signOut(auth).then(()=>{
            alert("logged out successfully")
       navigate('/')
        }).then((error)=>{
            console.log(error)
        })
    }
  return (
    <div className='auth'>
        {authUser && <><p>{`Signed in ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></>}
    </div>
  )
}

export default Auth