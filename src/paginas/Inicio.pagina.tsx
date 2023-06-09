import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { createSearch, getCharacters } from '../slices/getCharactersSlice';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";


/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 * @author Clara Lisle
 */
const PaginaInicio = () => {
       
    const dispatch = useAppDispatch()
    const characters  = useAppSelector(state => state.charactersInfo)  

      
    const handleClick = ()=>{
        dispatch(createSearch(""))        
        dispatch(getCharacters(`https://rickandmortyapi.com/api/character/`))
    }

    useEffect(() => {  
        dispatch(getCharacters("https://rickandmortyapi.com/api/character"))       
    },[])    



    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={handleClick}>Limpiar Filtros</button>
        </div>
        <Filtros />
        {characters.error===""&&
        <>
        <Paginacion />
        
        <GrillaPersonajes 
            characters={characters} favorites={[]}        />
        <Paginacion />
        </>
        }
    </div>
}

export default PaginaInicio