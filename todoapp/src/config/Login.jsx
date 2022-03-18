import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from './firebase'
import Spiner from './Spiner'
import Tostify from './Tostify'

const Login = () => {
    const user= localStorage.getItem("user")

    const [signout, setSignout] = useState(false);

    const [Email, setEmail]= useState ("")
    const [Password, setPassword]= useState ("")
    const [loading,setLoading] = useState(false)


    const navigate = useNavigate();

    const AddData =()=>{
      
        setLoading(true)
        console.log(Email,Password)
        signInWithEmailAndPassword(auth ,Email,Password)
        .then(User=>{
            console.log(User)
            setLoading(false)
            setSignout(true)
            
            toast("SuccesFully Login")
            localStorage.setItem("user", User.user.uid);
        })
        .catch(err=>{
            console.log(err)
            setLoading(false)
            toast("Invalid User")
        })
    }

    useEffect(()=>{
     if(user){
         navigate("/dashBoard")
         
     }
     
    },[signout])
  
  return (
    <div>
          <div className='MainDIv'>
      <div >
         <div className=''>
            
             <div  className='container borderDiv '>
              <h1 className='text-center margin colo mt-5'>Login Form</h1>
              <div className='w-50 mx-auto '>
                 
              <h5 className=' pt-2'>
                      Email:
                  </h5>
              <input className='input-group input'  placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} type="email" />
              
              <h5 className=' pt-2'>
                    Password:
                  </h5>
              <input className='input-group input'  placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value)} type="password" />

             <div className='pt-2 text-center '>
               {loading
               ? <Spiner />:

               <button className='btn btn-info btnCol' onClick={AddData}>Login</button>
               
               } 
             </div>
              </div>
                 
             </div>
         </div>
      </div>
      <Tostify />

    </div>
    </div>
  )
}

export default Login
