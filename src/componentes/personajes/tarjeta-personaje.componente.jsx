import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addFavorites } from '../../slices/getCharactersSlice';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = (props) => {
    
    const dispatch = useAppDispatch()
    const [fav, setFav] = useState(false)
    const handleClick = ()=>{  
        if(props.item.favorite===true){
            dispatch(addFavorites({...props.item,favorite:false}))
            setFav(false)
        }else if(props.item.favorite===false) {
            dispatch(addFavorites({...props.item,favorite:false}))
            setFav(false)
        } else {
            dispatch(addFavorites({...props.item,favorite:true}))
            setFav(true)
        }        
    }   

    
    return(
     <div className="tarjeta-personaje">
        {<Link to={`/detalle/${props.item.id}`}><img src={props.item.image} alt={props.item.name}/></Link>}
        <div className="tarjeta-personaje-body">
            <span>{props.item.name}</span>
            <BotonFavorito esFavorito={props.item.favorite} onClick={handleClick}/>
        </div>
    </div>
    )
}

export default TarjetaPersonaje;