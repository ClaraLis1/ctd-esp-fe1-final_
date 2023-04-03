import {  useAppSelector } from '../../redux/hooks';
import { Character, initialType} from '../../types/character.types';
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
        
        <div className="grilla-personajes">   
            { newCharacters?.map(item =>{     
            return <TarjetaPersonaje 
                key={item.id}
                item={item} characters={undefined} favorite={[]}
                />
            })
        }       
        
    </div>
    
    {favorites && 
    <div className="grilla-personajes">  
        {favorites.map(item =>{     
        return <TarjetaPersonaje 
            key={item.id}
            item={item} characters={undefined} favorite={[]}            
         />
        })
    }       
    
</div>


    }
    </>)
}
 
export default GrillaPersonajes;