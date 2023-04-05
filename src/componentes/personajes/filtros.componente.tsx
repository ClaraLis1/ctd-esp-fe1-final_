import './filtros.css';
import { createSearch} from '../../slices/getCharactersSlice';
import { getCharacters } from '../../slices/getCharactersSlice';
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Filtros = () => {
    const inputValue = useAppSelector(state => state.charactersInfo.searchValue)
    const dispatch = useAppDispatch()
    

    const handleChange  = (e: { target: { value: string; }; })=>{        
        dispatch(createSearch(e.target.value))
        dispatch(getCharacters(`https://rickandmortyapi.com/api/character/?name=${e.target.value}`))      
    }   
    
    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
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