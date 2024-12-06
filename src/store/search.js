import { createSlice } from '@reduxjs/toolkit'

const initialState='';

const  searchvalue=createSlice({
    name:'search',initialState,reducers:{
        includeitem(state,action){
           return state=action.payload
        }

    }
})
  
export const {includeitem}=searchvalue.actions;
export default searchvalue.reducer;