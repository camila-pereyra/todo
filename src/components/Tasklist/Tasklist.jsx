import Task from "../Task/Task"
import "./TaskList.css"

const Tasklist = ({arrayTask,setArrayTask}) => {
  
const createTask = (arrayTask) =>
  arrayTask.map((task) => (<Task key={task} task={task} />
));
const deleteAll =(arrayTask)=>{
  setArrayTask([]) 
}

  
  return (
    <div>
      {createTask(arrayTask)}
      <div className="buttonContainer">
        <button type="button" className="buttonDelete" onClick={deleteAll}>Delete All</button>
      </div>
      
    </div>
  )
}

export default Tasklist