import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // addItem: (state, action) =>{
    //   state.items = action.payload
    // },
    addItem(state, action) {
      const cartItem_itemIdx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartItem_itemIdx !== -1) {
        state.items[cartItem_itemIdx].itemCount += 1;
      } else {
        const newItem = { ...action.payload, itemCount: 1 };
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
