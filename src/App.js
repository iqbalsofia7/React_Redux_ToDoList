import './App.css'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskList from './component/TaskList'
import { addTask, toggleTask, deleteTask } from './features/toDoSlice/ToDoSlice';
function App() {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      dispatch(addTask({ title: newTaskTitle }));
      setNewTaskTitle('');
    }
  }

  return(
    <div className="App">
          <div className="App">
      <div>
        <input type="text" value={newTaskTitle} onChange={(e) => setNewTaskTitle(e.target.value)} />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
      <TaskList/>
    </div>
  )
}

export default App
