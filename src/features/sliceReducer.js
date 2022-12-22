import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const initialState = {
    loading : false,
    data : [],
    error : false,
}


export const getData = createAsyncThunk('state/getData', async ()=>{
    const data = await axios.get('http://localhost:8888/todo')
    return data.data
})

export const toDo = createSlice({
    name : "state",
    initialState,
   extraReducers : (builder)=>{
    builder.addCase(getData.pending,(state)=>{
        state.loading = true;
    })
    builder.addCase(getData.fulfilled,(state,action)=>{
        state.loading = false;
        state.data = action.payload
    })
    builder.addCase(getData.rejected,(state,action)=>{
        state.loading = false;
        state.error = action.payload
    })
   }
    
})

export default toDo.reducer