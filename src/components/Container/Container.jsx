import { useState } from "react"
import Formtodo from "../FormTodo/FormTodo"
import Tasklist from "../Tasklist/Tasklist"
import "./Container.css"

const Container = () => {
  const [listTask,setListTask]=useState([])

  const handleAddTask =(task)=>{
    setListTask([...listTask, task]);
  }
    return (
    <div className="container">
        <FormTodo handleAddTask={handleAddTask}/>
        <Tasklist listTask={listTask} setListTask={setListTask}/>
    </div>
  )
}

export default Container