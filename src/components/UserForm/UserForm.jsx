import { useState } from 'react';
import  styles from './styles.module.css'
import InputComponent from '../InputComponent/InputComponent';

import { contextInput } from '../../contexts/context';
// import {v4 as uuidv4} from 'uuid'
const {classForm}=styles;
const initState= {
// id:uuidv4(),
name:"",
age:"",
location:"",
phone:""
}
const UserForm = ({addUser}) => {
const [formInputs,setFormInputs]=useState(initState)
// const focusInput= useRef("Kamel");
const inputHandler = (event)=>{
  const key=event.target.name;
  const value = event.target.value;
setFormInputs((prev)=>{
  return({...prev,[key]:value});
})
}
const formHandler = (event)=>{ 
  event.preventDefault()
  addUser(formInputs)
  setFormInputs(initState);
  // console.log(testInput)
}

  return (
  
<form className={classForm}  onSubmit={formHandler}>
    <label htmlFor="name">Name</label>
    <contextInput.Provider value={{
          InputValue: formInputs.name,
          inputhandleValue: {inputHandler},
      }}>
              <InputComponent/>
      </contextInput.Provider>
    {/* <input type="text"  name="name" value={formInputs.name} onChange={(e)=>{inputHandler(e)}}/> */}

    <label htmlFor="age">Age</label>
    <contextInput.Provider value={{
          InputValue: formInputs.age,
          inputhandleValue: {inputHandler},
      }}>
              <InputComponent/>
      </contextInput.Provider>
    {/* <input type="text"  name="age" value={formInputs.age} onChange={(e)=>{(inputHandler(e))}}/> */}

    <label htmlFor="location">Location</label>

    <contextInput.Provider value={{
          InputValue: formInputs.location,
          inputhandleValue: {inputHandler},
      }}>
              <InputComponent/>
      </contextInput.Provider>
    {/* <input type="text"  name="location" value={formInputs.location} onChange={(e)=>{(inputHandler(e))}}/> */}

    <label htmlFor="phone">Phone</label>
    <contextInput.Provider value={{
          InputValue: formInputs.phone,
          inputhandleValue: {inputHandler},
      }}>
              <InputComponent/>
      </contextInput.Provider>
    
    {/* <input type="text" name="phone" value= {formInputs.phone}  onChange={(e)=>{(inputHandler(e))}}/> */}
    {/* <label htmlFor="test">Test</label>
    
    <input type="text" name="test" ref={testInput.current.value}/> */}
    <input type="submit" value="Submit"/>

</form>
  
  
  )
}

export default UserForm;