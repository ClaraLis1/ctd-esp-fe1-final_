import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState{
    searchValue:string
}

const initialState: SearchState = {
    searchValue: "",
}

export const inputSlice = createSlice({
    name: 'searchCharacter',
    initialState,
    reducers: {
        createSearch(state, action : PayloadAction<string>){
            state.searchValue = action.payload
        }
    }
})

export const { createSearch } = inputSlice.actions
export default inputSlice.reducer