import Task from "../Task/Task"
import "./TaskList.css"

const Tasklist = ({listTask,setListTask}) => {

const createTask = () => listTask.map((task) =>  
(<Task key={task.id} task={task} onChange={onChangeStatus}/> 
));

const onChangeStatus = e => {
  const { name, checked } = e.target;
  const updateList = listTask.map(item => ({
    ...item,
    done: item.id.toString() === name ? checked : item.done
  }));
  setListTask(updateList);
};

const deleteAll = ()=>{
  setListTask ([]);
}

const deleteAllDone=()=>{
  const updateList = listTask.filter(item=>!item.done)
  setListTask(updateList)
}

  return (
    listTask.length===0 ? <p className="noTasks">No tasks</p>:
     (
      <>
        {createTask()}
        <div className="buttonContainer">
          <p className="dataTask">Total tasks: {listTask.length}</p>
          <button className="buttonDeleteAll" onClick={deleteAll}>Delete all</button>
          <button className="buttonDeleteDone" onClick={deleteAllDone}>Delete all done</button>
        </div>
      </>
    )
  )
}

export default Tasklist