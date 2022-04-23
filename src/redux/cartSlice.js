import { createSlice } from '@reduxjs/toolkit'
import { data } from "../data/data";

// import { useState} from 'react'
const dataBooks = [{ data }];
const books = dataBooks[0].data


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: []
  },
  reducers: {
    addToCart: (state, action) => {
         
        let temp =books.filter( book => action.payload.id === book.id)
        
        state.itemList.push({id: temp[0].id,
          bookname: temp[0].bookname,
          image : temp[0].image,
          price: temp[0].price*action.payload.quantity,
          quantity: action.payload.quantity
        })
    },
    deleteItem: (state, action) =>{

      state.itemList =[...state.itemList.filter(item => item.id !== action.payload.id)]
    }


  }
})

// Action creators are generated for each case reducer function
export const getCartList = state => state.cart.itemList
export const { addToCart, deleteItem} = cartSlice.actions

export default cartSlice.reducer