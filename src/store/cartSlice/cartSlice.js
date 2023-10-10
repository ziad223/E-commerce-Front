import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2'

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    products: localStorage.getItem("products")
      ? JSON.parse(localStorage.getItem("products"))
      : [],
  },
  reducers: {
    addItem: (state, action) => {
      const selectedItem = state.products.find((item) => item.id === action.payload.id)

      if(selectedItem){
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'This product already exists in Cart',
          showConfirmButton: false,
          timer: 2000
        })
      }else{
        state.products.push(action.payload);
        localStorage.setItem("products", JSON.stringify(state.products)); 

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'The product has been added successfully',
          showConfirmButton: false,
          timer: 2000
        })
      }
    },
    removerItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("products", JSON.stringify(state.products));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'The product has been removed successfully',
        showConfirmButton: false,
        timer: 1500
      })
    },
  },
});

export const { addItem, removerItem , selectedItem } = cartSlice.actions;
export default cartSlice.reducer;
