import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:'cart',
    initialState: {
        items:[],
        orders:[]
    },
    reducers:{
       addItem: (state, action)=> {
        const existing= state.items.find(item => item.id=== action.payload.id);
        if(existing){
            existing.quantity+=1;
        }
        else{
            state.items.push({...action.payload, quantity: 1});
        }
       },

       removeItem :(state, action)=>{
        state.items= state.items.filter(item=> item.id!== action.payload);
       },
       placeOrder :(state, action)=>{
         state.orders.push({...action.payload})
        
       },

       increaseQty:(state, action)=>{
        const item= state.items.find(i=> i.id===action.payload)
        if(item) item.quantity+= 1;
       },
       decreaseQty:(state, action)=> {
        const item = state.items.find(i=> i.id ===action.payload);
        if(item && item.quantity>1){
            item.quantity -=1;
        }
        else{
            state.items= state.items.filter(i=> i.id !==action.payload);
        }
       },
       clearCart:(state)=>{
        state.items=[];
       }


    },
})
export const {addItem, removeItem, increaseQty, decreaseQty, clearCart , placeOrder}= cartSlice.actions;
export default cartSlice.reducer;