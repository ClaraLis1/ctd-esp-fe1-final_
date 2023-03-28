import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCharacters } from '../../slices/getCharactersSlice';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const dispatch = useAppDispatch()
    const characters = useAppSelector(state => state.charactersGallery)
    
    

    useEffect(() => {
        dispatch(getCharacters("https://rickandmortyapi.com/api/character"))        
    },[])
    
    

    return <div className="grilla-personajes">
       {characters.data.results?.map(item =>{
            return <TarjetaPersonaje 
                image = {item.image}
                name = {item.name}
             />
            })
        }       
    </div>
}
 
export default GrillaPersonajes;