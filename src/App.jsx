
import { useState} from "react"
import {UserInfo ,Container,UserForm } from "./components"

import { contextInput } from "./contexts/context"

function App() {
  const dataUse = [
    {
      id:1,
      name:"Maroua",
      age: "25",
      location: "Hammam Chatt",
      phone:"98161797"
    },
  
    {
      id:2,
      name:"Mouna",
      age: "35",
      location: "Hammam Chatt",
      phone:"98161798"
    },
  
    {
      id:3,
      name:"Maher",
      age: "55",
      location: "Hammam LIF",
      phone:"98161793"
    }
  
  ]

const [userData,setUserData]=useState(dataUse)
  
  const userList=userData.map(r=>(
    <UserInfo key={r.id} name={r.name} age={r.age} location={r.location} phone={r.phone} />
  ))

  const addUser = (newUser)=>{
    newUser.id = Math.floor(Math.random()*100)
    return(setUserData([...userData,newUser]))
  }
  
  return (
    <>
    <contextInput.Provider value={dataUse}>
    <Container> 
    
    <UserForm addUser={addUser}/>

    </Container>
  
    <Container>  
 {userList} 
 </Container>
 </contextInput.Provider>

    </>
  )
}

export default App
