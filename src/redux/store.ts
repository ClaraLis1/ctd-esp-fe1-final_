import { configureStore } from '@reduxjs/toolkit'
import characters from '../slices/getCharactersSlice'

import inputSlice from '../slices/inputSlice'


export const store = configureStore({
  reducer: {
    searchCharacter:inputSlice,
    charactersGallery : characters
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch