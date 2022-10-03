import { configureStore } from "@reduxjs/toolkit";
import dataSlice from './Data'


const  store  =configureStore({
    reducer:{
Data : dataSlice
    }
})

export default store