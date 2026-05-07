import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './slices/themeSlice'

// slice for site theme management
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})