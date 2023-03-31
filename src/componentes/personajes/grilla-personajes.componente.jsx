import { useEffect } from 'react';
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
const GrillaPersonajes = ({characters, favorites}) => {    
    const favoritesToUpdate = useAppSelector(state => state.charactersGallery.favorites) 
    const newCharacters = characters?.data.results.slice()
    
    

    if(characters){
        for (let i = 0; i < favoritesToUpdate.length; i++) {
                const index = newCharacters.findIndex(obj => obj.id === favoritesToUpdate[i].id);     
                newCharacters[index] =favoritesToUpdate[i]
            }
    }
         

    return (
        <>
         {characters && 
    <div className="grilla-personajes">  
        {(characters.error === true) ?
         <h4 className='sinResultados'>No se encontraron resultados para su búsqueda</h4>
        :newCharacters?.map(item =>{     
            return <TarjetaPersonaje 
                key={item.id}               
                item = {item}
                
             />
            })
        }       
        
    </div>
    }  
    {favorites && 
    <div className="grilla-personajes">  
        {favorites.map(item =>{     
        return <TarjetaPersonaje 
            key={item.id}               
            item = {item}
            
         />
        })
    }       
    
</div>


    }
    </>)
}
 
export default GrillaPersonajes;