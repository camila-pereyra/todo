import { useState } from "react"
import Tasklist from "../Tasklist/Tasklist"
import "./FormTodo.css"

const FormTodo = () => {
  const [input, setInput] = useState("")
  const [arrayTask,setArrayTask]=useState([])
  const handleClick =()=>{
    if(input!==""){
      setArrayTask([...arrayTask,input]);
      setInput("")
    }
  }
  return (
    <>
      <div className="formTodoContainer">
          <input type="text" name="" id="" placeholder="Task ..." value={input} 
          onChange={(e)=>{setInput(e.target.value)}}/>
          <button type="button" onClick={handleClick}>Add</button>
      </div>
      <div className="taskListContainer">
        {arrayTask.length===0? <p className="noTasks">No tasks</p>:<Tasklist arrayTask={arrayTask} setArrayTask={setArrayTask}/>}
        
      </div>
    </>
  )
}

export default FormTodo