import { configureStore } from "@reduxjs/toolkit";
import albumReducer from "./slice/albumslicer";



export const store=configureStore({
    reducer:{
        album:albumReducer

    }
})