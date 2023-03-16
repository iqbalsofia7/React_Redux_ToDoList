import { configureStore } from "@reduxjs/toolkit"
import ToDoSlice from '../features/toDoSlice/ToDoSlice.js'

export const store = configureStore({
    reducer: {
        todo: ToDoSlice
    }
})