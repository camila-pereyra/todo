import { useState } from "react"
import "./Formtodo.css"

const Formtodo = ({handleAddTask}) => {
  const [input, setInput] = useState("")
  const [count,setCount]=useState(0)

  const handleClick =()=>{
    if(input!==""){
      setCount(count+1)
      handleAddTask({id:count,done:false,description:input,})
      setInput("")
    }
  }
  
  return (
    <>
      <div className="formTodoContainer">
          <input type="text" name="" id="" placeholder="Task ..." value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <button type="button" onClick={handleClick}>Add</button>
      </div>
     
    </>
  )
}

export default Formtodo