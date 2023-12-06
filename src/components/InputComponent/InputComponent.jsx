import { useContext } from "react"
import { contextInput } from "../../contexts/context"

const Input = () => {
  const inputContext = useContext(contextInput);
  return (
    <>
<input type="text"  
value= {inputContext.InputValue}  
onChange={(e)=>
{(inputContext.inputhandleValue(e)
)}}/>
    </>
  )
}

export default Input