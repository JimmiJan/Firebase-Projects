import { async } from '@firebase/util'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import {db} from "./firebase.js"

const Dasboard = () => {
    

    const [Name,setName]= useState("")
    const [Input,setInput]= useState("")
    const [todo,setTod] = useState([])
    const [refresh,setrefresh] = useState(false)

    useEffect( async()=>{
        const dbref = collection(db , "Todos")
        const update = await getDocs(dbref)
        let getTodo=[]
        update.forEach((doc)=>{
            getTodo.push({key: doc.id, todo: doc.data().todo})
        })
        setTod(getTodo)
    },[refresh])
    console.log(todo ,"todos")
    const Data =async ()=>{
        // console.log(Name , Input)
        // todo.push(Input)
        // setTod([...todo])

        const dbref =  collection(db,"Todos")
        try {
            const data  = await addDoc(dbref,{
                todo:Input
            })
            setrefresh(!refresh)
            console.log(data)
        } catch (error) {
            console.log(error)
            
        }

    }
    const del =()=>{
      setTod([])
    }

    const edit =async (key) =>{
    //   console.log(e)
    //   const pro = prompt("Edit Todo" , )
    //   todo.splice(e,1,pro)
    //  setTod([...todo])
    const dbref = doc(db ,"Todos",key)
     const edit = prompt("enter New Todo")
     const obj ={
         todo:edit
     }
     try {
         const data = await setDoc(dbref,obj)
         setrefresh(!refresh)
         console.log(data)
     } catch (error) {
         console.log(error)
     }

    console.log(key)
    }

    const dele= (key)=>{
        // console.log(e) 
        // todo.splice(e,1)
        // setTod([...todo])

        const dbref = doc(db , "Todos" , key)
        const dele = deleteDoc(dbref)
    }

  return (
    <div>
        <h1 className='text-center text-white'>
            Todo App
        </h1>
        <div className='w-50 mx-auto'>

        
        <div >
            <input type="text" className='form-contro mt-2' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)} />
        </div>
        <div >
            <input type="text" className='form-contro mt-2' placeholder='Enter Todo'  onChange={(e)=>setInput(e.target.value)}/>
            <div className='mt-2'>
                <button onClick={Data} className='btn btn-info'>Add</button>
                <button onClick={del} className='btn btn-danger'>Del</button>
            </div>
            </div>
        </div>
        <h1 className='text-center text-white'>
            {Name}
        </h1>

        <div>
           {todo.map((value,index)=>{
               return(
            <div key={index}>
                <ul >
               <li className='text-center text-white list'>
                   {value.todo}
               </li>
               <div className='text-center ml-2'>
                   <button className='btn btn-info text-center' onClick={()=>edit(value.key)}>Edit</button>
               <button className='btn btn-danger text-center' onClick={()=>dele(value.key)}>Delte One</button>
               </div>
               </ul>
               

               </div>
               )
           })}

        </div>
      
    </div>
  )
}

export default Dasboard
