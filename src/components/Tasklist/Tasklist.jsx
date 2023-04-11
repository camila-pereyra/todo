import Task from "../Task/Task"

const Tasklist = ({arrayTask}) => {
  
const createTask = (arrayTask) =>
arrayTask.map((task) => (
      <Task key={task} task={task} />
    ));

  
  return (
    <div>{createTask(arrayTask)}</div>
  )
}

export default Tasklist