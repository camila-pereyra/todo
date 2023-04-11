import { useState } from "react"
import "./Task.css"
import classNames from "classnames";

const Task = ({task}) => {
  const [checked,setChecked]=useState(false);
  const onChange=()=>{
    setChecked(!checked)
  }
  let taskContainer=classNames({
    taskContainer: true,
    isChecked: checked===true,
  })
  return (
    <div className={taskContainer} >
      <input type="checkbox" defaultChecked={checked} className="checkbox" onChange={onChange} />
      <p>{task}</p>
    </div>
  )
}

export default Task