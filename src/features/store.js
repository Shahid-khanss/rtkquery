import { configureStore } from "@reduxjs/toolkit";
import toDo from './sliceReducer'

const store = configureStore({
    reducer : {
        toDo,
    }
})


export default store