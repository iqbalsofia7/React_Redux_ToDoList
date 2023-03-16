import { useSelector, useDispatch } from "react-redux";
import { toggleTask, deleteTask, addTask } from "../features/toDoSlice/ToDoSlice.js";

function TaskList() {
    const tasks = useSelector((state)=> state.todo)
    const dispatch = useDispatch()

    return (
        <div>
            {tasks.map((item) => {
                return(
                    <div key={item.id}>
                        <input type="checkbox" checked={item.completed} onChange={() => dispatch(toggleTask(item.id))} />
                        <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.title}</span>
                        <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
                    </div>
                )
            })}
        </div>
    );
}

export default TaskList;