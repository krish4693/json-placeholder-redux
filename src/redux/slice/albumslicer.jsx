import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlbum=createAsyncThunk("fetchAlbum",async()=>{
    const data=await fetch('https://jsonplaceholder.typicode.com/albums')
    return data.json()
})

const albumSlice=createSlice({
    name:'album',
    initialState:{
        isLoading:false,
        data:[],
        error:false
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAlbum.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(fetchAlbum.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=action.payload
        })
        builder.addCase(fetchAlbum.rejected,(state,action)=>{
            state.error=true
        })
    }
})

export default albumSlice.reducer