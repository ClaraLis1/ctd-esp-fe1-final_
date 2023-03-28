import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Character {
    id: number
    name:string
    status: string
    species: string
    type: string
    gender:string,
    origin: {
        name: string
        url: string
    },
    location: {
    name: string
    url:string
    },
    image:string
    episode: [
        string
    ]
    url: string
    created: string
}

interface Info {
    count: number
    pages: number
    next: string
    prev: string
}

interface Data{
    info:Info
    characters: Character[]
}

interface initialType {
    data:Data
    loading: boolean
    next: string | null
    previous:string | null
}   



export const getCharacters = createAsyncThunk(
    'characters/info',
    async (page: string) => {
        const res = await fetch(page)
        const parseRes = await res.json()
        return parseRes
    }
)

const initialState: initialType = {
    data:{
        info:{
            count: 0,
            pages: 0,
            next: "",
            prev: ""
        },
        characters: []
    },
    loading: false,
    next:"",
    previous:""
}

const charactersGallery = createSlice({
    name: 'gallery',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                state.loading = true
            })
            .addCase(getCharacters.fulfilled, (state, action) => {               
                state.loading = false
                state.data = action.payload
                state.next = action.payload.info.next
                state.previous = action.payload.info.prev
             
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.loading = false
            })

    }
})



export default charactersGallery.reducer