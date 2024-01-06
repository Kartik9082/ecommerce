import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState:{
        nowProducts: null,
        nowWomenProducts:null,
    },
    reducers:{
        addProducts: (state, action) =>{
            state.nowProducts = action.payload;
        },
        addWomenProduct: (state, action) =>{
            state.nowWomenProducts = action.payload;
        },
    },
});


export const {addProducts, addWomenProduct} = productSlice.actions;

export default productSlice.reducer;