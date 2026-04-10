import { configureStore } from "@reduxjs/toolkit";
 import cartSlice from './Counterslice'
export const  store= configureStore({
    reducer:{
        cart: cartSlice
    },
})