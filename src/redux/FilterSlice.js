import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

// import { useState} from 'react'
const dataBooks = [{ data }];
const books = dataBooks[0].data;
const booksNoFilter = dataBooks[0].data;

export const filterSlice = createSlice({
  name: "filter",
  initialState: {
    booksState: books,
  },
  reducers: {
    filterByAge: (state, action) => {
      let temp = [...booksNoFilter];
      temp = temp.filter((book) => book.searchTerm.includes(action.payload));
      state.booksState = [...temp];
    },
    handleClearAll: (state) => {
      state.booksState = [...booksNoFilter];
    },

    sortLowToHigh: (state) => {
      for (let i = 0; i < state.booksState.length; i++) {
        for (let j = 0; j < state.booksState.length - 1; j++) {
          if (state.booksState[j].price > state.booksState[j + 1].price) {
            let tmp = state.booksState[j];
            state.booksState[j] = state.booksState[j + 1];
            state.booksState[j + 1] = tmp;
          }
        }
      }
    },

    sortHighToLow: (state) => {
      for (let i = 0; i < state.booksState.length; i++) {
        for (let j = 0; j < state.booksState.length - 1; j++) {
          if (state.booksState[j].price < state.booksState[j + 1].price) {
            let tmp = state.booksState[j];
            state.booksState[j] = state.booksState[j + 1];
            state.booksState[j + 1] = tmp;
          }
        }
      }
    },
    sortAtoZ: (state) => {
      for (let i = 0; i < state.booksState.length; i++) {
        for (let j = 0; j < state.booksState.length - 1; j++) {
          if (
            state.booksState[j].bookname.toLowerCase >
            state.booksState[j + 1].bookname.toLowerCase()
          ) {
            let tmp = state.booksState[j];
            state.booksState[j] = state.booksState[j + 1];
            state.booksState[j + 1] = tmp;
          }
        }
      }
    },
    sortZtoA: (state) => {
      for (let i = 0; i < state.booksState.length; i++) {
        for (let j = 0; j < state.booksState.length - 1; j++) {
          if (
            state.booksState[j].bookname.toLowerCase <
            state.booksState[j + 1].bookname.toLowerCase()
          ) {
            let tmp = state.booksState[j];
            state.booksState[j] = state.booksState[j + 1];
            state.booksState[j + 1] = tmp;
          }
        }
      }
    }
  },
  },
);

// Action creators are generated for each case reducer function
export const getBooks = (state) => state.filter.booksState;
export const {
  filterByAge,
  handleClearAll,
  sortLowToHigh,
  sortHighToLow,
  sortAtoZ,
  sortZtoA,
} = filterSlice.actions;

export default filterSlice.reducer;
