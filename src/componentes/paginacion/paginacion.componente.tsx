import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './paginacion.css';
import { getCharacters } from '../../slices/getCharactersSlice';



const Paginacion = () => {
    const dispatch = useAppDispatch()
    const nextPage = useAppSelector(state => state.charactersInfo.next)
    const previousPage = useAppSelector(state => state.charactersInfo.previous) 
  
   
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