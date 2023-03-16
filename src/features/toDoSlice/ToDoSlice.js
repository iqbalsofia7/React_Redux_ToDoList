//import du createSlice
import { createSlice } from "@reduxjs/toolkit"


export const toDoSlice = createSlice({
    name: 'todo',
    initialState: [
        {   id: 1,
            title: "Task 1", 
            completed: false
        },
        {   id: 2,
            title: "Task 2", 
            completed: false
        }
    ],
    reducers: {
        addTask: (state, action)=>{
            const newTask = {
                //pour avoir un id unique
                id: Date.now(),
                //ce qu'on va entrer dans l'input
                title : action.payload.title,
                //valeur par défaut
                completed: false,
            };
            state.push(newTask)
        },
        toggleTask: (state, action) => {
            const toggleTask = state.find(t => t.id == action.payload)
            toggleTask.completed = !toggleTask.completed
        },

        deleteTask: (state, action)=>{
            return (state.filter(t => t.id !== action.payload))
    
        }
        
    } 
})

export const { addTask, toggleTask, deleteTask } = toDoSlice.actions
export default toDoSlice.reducer