import { useState } from 'react';
import './filtros.css';
import { useDispatch } from "react-redux"
import { createSearch} from '../../slices/getCharactersSlice';
import { getCharacters } from '../../slices/getCharactersSlice';
import { useAppSelector } from '../../redux/hooks';

const Filtros = () => {
    const inputValue = useAppSelector(state => state.charactersGallery.searchValue)
    const dispatch = useDispatch()
    

    const handleChange  = (e)=>{        
        dispatch(createSearch(e.target.value))
        dispatch(getCharacters(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`))      
    }   
    
    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <div className='inputsFiltro'>
            <input 
                type="text" 
                placeholder="Rick, Morty, Beth, Alien, ...etc" 
                name="nombre"
                value={inputValue}
                onChange={handleChange}
                />
        </div>
    </div>
}

export default Filtros;