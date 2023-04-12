import { useState } from "react"
import FormTodo from "../Formtodo/Formtodo"
import Tasklist from "../Tasklist/Tasklist"
import "./Container.css"

const Container = () => {
  const [listTask,setListTask]=useState([])

  const handleAddTask =(task)=>{
    setListTask([...listTask, task]);
  }
    return (
    <div className="container">
        <Formtodo handleAddTask={handleAddTask}/>
        <Tasklist listTask={listTask} setListTask={setListTask}/>
    </div>
  )
}

export default Container
