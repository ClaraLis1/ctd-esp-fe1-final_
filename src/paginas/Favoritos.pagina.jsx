import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetFavorites } from "../slices/getCharactersSlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useAppDispatch()
    const favorites = useAppSelector(state => state.charactersGallery.favorites) 

   
    const handleClick = ()=>{
        dispatch(resetFavorites("reset"))
    }

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={handleClick}>Limpiar favoritos</button>
        </div>
        <GrillaPersonajes 
        favorites = {favorites} />
    </div>
}

export default PaginaFavoritos