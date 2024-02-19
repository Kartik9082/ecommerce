import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:"products",
    initialState:{
        nowProducts: null,
        nowWomenProducts:null,
        nowProductInfo:[],
    },
    reducers:{
        addProducts: (state, action) =>{
            state.nowProducts = action.payload;
        },
        addWomenProduct: (state, action) =>{
            state.nowWomenProducts = action.payload;
        },
        addProductInfo: (state, action) =>{
            state.nowProductInfo = action.payload;
        },
    },
});


export const {addProducts, addWomenProduct, addProductInfo} = productSlice.actions;

export default productSlice.reducer;