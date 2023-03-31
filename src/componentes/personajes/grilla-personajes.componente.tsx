import {  useAppSelector } from '../../redux/hooks';
import { Character, Data, initialType} from '../../types/character.types';
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

interface ListadoCharacters {
    characters: initialType | undefined,
    favorites: Character[],
}
const GrillaPersonajes = ({characters, favorites}:ListadoCharacters) => {    
    const favoritesToUpdate = useAppSelector(state => state.charactersGallery.favorites) 
    const newCharacters : Character[] | undefined = characters?.data.results.slice()
       

    if(newCharacters){
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