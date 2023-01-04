import { configureStore, createSlice } from "@reduxjs/toolkit";
import musicList from "./musicList";

///{name:'state Name', initialState :'statie Value'}
let music =createSlice({
    name:'music',
    initialState: musicList,
    reducers: {
        soulList(state){
            console.log(state);
            return state
        }
    }
})



export let { soulList } = music.actions



export default configureStore({
    reducer:{
        music : music.reducer
      
    }
})