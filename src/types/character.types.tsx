export interface Character {    
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
    favorite:boolean    
}

export interface Info {
    count: number
    pages: number
    next: string
    prev: string
}

export interface Data{
    info:Info
    results: Character[]
}

export interface initialType {    
    searchValue:string
    data:Data
    loading: boolean
    next: string | null
    previous:string | null
    error:boolean
    favorites: Character[]
}   