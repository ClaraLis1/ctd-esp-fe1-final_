import { configureStore } from '@reduxjs/toolkit'
import characters from '../slices/getCharactersSlice'



export const store = configureStore({
  reducer: {  
    charactersGallery : characters    
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch