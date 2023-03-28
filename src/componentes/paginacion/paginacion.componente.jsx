import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { store } from '../../redux/store';
import './paginacion.css';
import { getCharacters } from '../../slices/getCharactersSlice';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useAppDispatch()
    const nextPage = useAppSelector(state => state.charactersGallery.next)
    const previousPage = useAppSelector(state => state.charactersGallery.previous)
  
   
    const handleClickNext = ()=>{
        dispatch(getCharacters(nextPage))
    } 

    const handleClickPrevious = ()=>{
        dispatch(getCharacters(previousPage))
    } 

    return <div className="paginacion">
        <button disabled={previousPage===null?true:false} className={"primary"} onClick = {handleClickPrevious} >Anterior</button>
        <button disabled={nextPage===null?true:false} className={"primary"} onClick={handleClickNext}>Siguiente</button>
    </div>
}

export default Paginacion;