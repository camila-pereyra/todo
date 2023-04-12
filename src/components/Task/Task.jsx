import "./Task.css"
import classNames from "classnames"

const Task = ({onChange, task}) => {  

  const taskCointainerClass=classNames({
    taskContainer:true,
    isChecked: task.done===true,
  })
  
  return (
    <div className={taskCointainerClass} >
      <input type="checkbox" className="checkbox" name={task.id} defaultChecked={task.done} onChange={onChange} />
      <p className="task">{task.description}</p>
    </div>
  )
}

export default Task