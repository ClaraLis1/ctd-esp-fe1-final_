import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { initialType} from "../types/character.types";
import type { PayloadAction } from '@reduxjs/toolkit'




export const getCharacters  = createAsyncThunk(
    'characters/getInfo',
    async (page: string | null) => {
        if(page !== null){
            const res = await fetch(page)
            const parseRes= await res.json()
            return parseRes
        }else{
            throw new Error("Error");
            
        }
    }
)

const initialState: initialType = {
    searchValue: "",
    data:{
        info:{
            count: 0,
            pages: 0,
            next: "",
            prev: ""
        },
        results: 
        [{
            id: 0,
            name:"",
            status: "",
            species: "",
            type: "",
            gender:"",
            origin: {
                name: "",
                url: ""
            },
            location: {
            name: "",
            url:"",
            },
            image:"",
            episode: [
                ""
            ],
            url: "",
            created: "" ,     
            favorite:false,   
            },
        ],
    },
    loading: false,
    next:"",
    previous:"",
    error:"",
    favorites:[]
    
}

const charactersGallery = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        createSearch(state, action : PayloadAction<string>){
            state.searchValue = action.payload
        },
        addFavorites(state, action){               
            if(action.payload.favorite === true) {state.favorites.push(action.payload)}
            else if(action.payload.favorite === false){
                state.favorites = state.favorites.filter(item => item.id !==action.payload.id)
            }         
        },
        resetFavorites(state){ 
            state.favorites= [];
        }   
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                state.loading = true
            })
            .addCase(getCharacters.fulfilled, (state, action) => {         
                 
                if(action.payload.error){
                                    
                    state.error = action.payload.error
                }                      
                else{
                    state.loading = false
                    state.data = action.payload
                    state.next = action.payload.info.next
                    state.previous = action.payload.info.prev
                    state.error = ""
                }  
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

    }
})
export const { createSearch } = charactersGallery.actions
export const { addFavorites } = charactersGallery.actions
export const { resetFavorites } = charactersGallery.actions
export default charactersGallery.reducer