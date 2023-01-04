import { configureStore, createSlice } from "@reduxjs/toolkit";

///{name:'state Name', initialState :'statie Value'}
let user =createSlice({
    name:'user',
    initialState:'yuna',
    reducers: {
        changeName(state){
            console.log(state);
            return 'doyeon'+state
        }
    }
})

export let {changeName} = user.actions //state 변경함수

let stock = createSlice({
    name: "stock",
    initialState: [7, 13,20]
})

let cart = createSlice({
    name: "cart",
    initialState: [
        { id : 0, title : "Black and White", count: 2 },
        { id : 1, title : "Red Knit", count: 1 }
    ],
    reducers: {
        countUp(state, action){
            console.log(state.target);
            state[action.payload.id].count = action.payload.count + 1;
        },
        countDown(state, action){
            state[action.payload.id].count = action.payload.count - 1;
        },
        changeCount(state, action){
            state[action.payload.item.id].count = action.payload.val;
        },
        addItem(state, action){
            state.push(action.payload);
        }
    }
})

export let {countUp, countDown, changeCount, addItem} = cart.actions

export default configureStore({
    reducer:{
        user:user.reducer,
        stock:stock.reducer,
        cart:cart.reducer
    }
})