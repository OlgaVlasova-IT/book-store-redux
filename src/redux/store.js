import { configureStore } from '@reduxjs/toolkit'
import showMore from './ShowMoreSlice'
import filter from './FilterSlice'
import cart from './cartSlice'


export const store = configureStore({
  reducer: {
      showMore,
      filter,
      cart
  },
})