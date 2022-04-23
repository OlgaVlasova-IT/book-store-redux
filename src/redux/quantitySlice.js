import { createSlice } from '@reduxjs/toolkit'



export const quantitySlice = createSlice({
  name: 'quantity',
  initialState: {
    quantity: 1
  },
  reducers: {
    increment: (state) => {
      
       state.quantity +=1
    },
    decrement: (state) => {
        if (state.quantity >1)
        state.quantity -=1
     }

  }
})

// Action creators are generated for each case reducer function
export const getQuantity= state => state.quantity.quantity
export const { increment, decrement} = quantitySlice.actions

export default quantitySlice.reducer