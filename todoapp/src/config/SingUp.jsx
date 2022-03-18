import React, { useState } from 'react'
import "./Singup.css"
import {db, auth} from "./firebase.js"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Spiner from './Spiner'
import Tostify from './Tostify'
import { toast } from 'react-toastify'
import { addDoc, collection } from 'firebase/firestore'


const SingUp = () => {
  const dbref = collection(db,"Users")
  const [Name, setName]= useState ("")
  const [Email, setEmail]= useState ("")
  const [Number, setNumber]= useState ("")
  const [Password, setPassword]= useState ("")
  const [loading,setLoading] = useState(false)

  const obj = {
    Name,
    Email,
    Number,
  }


  const AddData =  ()=>{
 console.log(Name , Email, Number, Password)
 setLoading(true)
 createUserWithEmailAndPassword(auth,Email,Password)

 .then(async User=>{
  //  localStorage.setItem(user)
   console.log(User)
   setLoading(false)
   toast("SuccesFully Login")
   await addDoc(dbref , {...obj, userUid:User.user.uid} )
 })

 .catch(err=>{
  console.error(err);
  setLoading(false)
  toast("Invalid User")

 })
  }


  return (
    <div className='MainDIv'>
      <div >
         <div className=''>
            
             <div  className='container borderDiv'>
              <h1 className='text-center margin colo'>SingUp Form</h1>
              <div className='w-50 mx-auto '>
                  <h5 className=' pt-2'>
                      Name:
                  </h5>
              <input className='input-group input' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)} type="text" />
              <h5 className=' pt-2'>
                      Email:
                  </h5>
              <input className='input-group input'  placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} type="email" />
              <h5 className=' pt-2'>
                      Number:
                  </h5>
              <input className='input-group input'  placeholder='Enter Number'  onChange={(e)=>setNumber(e.target.value)} type="number" />
              <h5 className=' pt-2'>
                    Password:
                  </h5>
              <input className='input-group input'  placeholder='Enter Password'  onChange={(e)=>setPassword(e.target.value)} type="password" />

             <div className='pt-2 text-center '>
               {loading
               ? <Spiner />:

               <button className='btn btn-info btnCol' onClick={AddData}>Singup</button>
               
               } 
             </div>
              </div>
                 
             </div>
         </div>
      </div>
      <Tostify />

    </div>
  )
}

export default SingUp

