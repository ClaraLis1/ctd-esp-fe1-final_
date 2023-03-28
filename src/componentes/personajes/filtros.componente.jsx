import { useState } from 'react';
import './filtros.css';
import { useDispatch } from "react-redux"
import { createSearch } from '../../slices/inputSlice';

const Filtros = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState("")

    const handleChange  = (e)=>{
        setInputValue(e.target.value)
    }

    const handleBlur = () =>{
        dispatch(createSearch(inputValue))
        
    }

    const handleClick = ()=>{
        dispatch(createSearch(""))
        setInputValue("")
    }
    
    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input 
            type="text" 
            placeholder="Rick, Morty, Beth, Alien, ...etc" 
            name="nombre"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur} />
            <button onClick={handleClick}> Limpiar filtros</button>
    </div>
}

export default Filtros;