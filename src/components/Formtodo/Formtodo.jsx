import { useState } from "react"
import Tasklist from "../Tasklist/Tasklist"

const FormTodo = () => {
  const [input, setInput] = useState("")
  const [arrayTask,setArrayTask]=useState([])
  const handleClick =()=>{
    if(input!==""){
      setArrayTask([...arrayTask,input]);
    }
  }
  return (
    <><div>
        <input type="text" name="" id="" placeholder="Add task" value={input} 
        onChange={(e)=>{setInput(e.target.value)}}/>
        <button type="button" onClick={handleClick}>Add</button>
    </div>
    <div>
      <Tasklist arrayTask={arrayTask}/>
    </div>
    </>
  )
}

export default FormTodo