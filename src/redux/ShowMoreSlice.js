import { createSlice } from '@reduxjs/toolkit'
import {data} from '../data/data'

// import { useState} from 'react'
const books = [{data}]
const showMoreArr = new Array(books[0].data.length).fill(false)



export const showMoreSlice = createSlice({
  name: 'showMore',
  initialState: {
    showMoreState: showMoreArr
  },
  reducers: {
    handleShowMore: (state, action) => {
      console.log("action.payload " + action.payload);
        console.log ("state before " + state.showMoreState);
  
  
        let temp = [...state.showMoreState];
        temp[action.payload - 1] = !temp[action.payload  - 1];
        state.showMoreState =[...temp]
        console.log("state after " + state.showMoreState);
    }


  }
})

// Action creators are generated for each case reducer function
export const getShowMore = state => state.showMore.showMoreState
export const { handleShowMore } = showMoreSlice.actions

export default showMoreSlice.reducer