import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addFavorites } from "../slices/getCharactersSlice";
import { Character } from "../types/character.types";


/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
interface Detalle{
    character: Character
}
 
const PaginaDetalle = () => {
    const {id}= useParams(); 
    const [detalle, setDetalle]= useState({id: 0,
        name:"",
        status: "",
        species: "",
        type: "",
        gender:"",
        origin: {
            name: "",
            url: ""
        },
        location: {
        name: "",
        url:"",
        },
        image:"",
        episode: [
            ""
        ],
        url: "",
        created: "" ,     
        favorite:false, });
    const favoritesToUpdate = useAppSelector(state => state.charactersGallery.favorites) 
    const [fav, setFav] = useState(false)
    const dispatch = useAppDispatch()
    const isFavorite = favoritesToUpdate.find(element => element.id === detalle.id)
    


    useEffect(() => {  
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => response.json())
                .then(data => {      
                const respuesta = data;
                setDetalle(respuesta)  
        })
            .catch(error => console.error(error));
            
        },[])    
       
    useEffect(()=>{
        if(isFavorite){
            setFav(true)
        }
    },[detalle])
        
               
        const handleClick = ()=>{  
            if(isFavorite){
                dispatch(addFavorites({...detalle,favorite:false}))
                setFav(false)
            }else if(!isFavorite) {
                dispatch(addFavorites({...detalle,favorite:true}))
                setFav(true)
            } else {
                dispatch(addFavorites({...detalle,favorite:true}))
                setFav(true)
            }    
              
        }          


    return <div className="container">
        {detalle && 
        <>
        <h3>{detalle.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={detalle.image} alt="Rick Sanchez"/>
                <div className={"detalle-header-texto"}>
                    <p>{detalle.name}</p>
                    <p>Planeta: {detalle.origin?.name}</p>
                    <p>Genero: {detalle.gender}</p>
                </div>
                <BotonFavorito esFavorito={fav} onClick={handleClick} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {detalle.episode?.map((episode, index) =>{
                return(
                <TarjetaEpisodio 
                key = {index}
                episode = {episode}/>
                )
            })
            }
            
        </div>
        </>
        }
    </div>
}

export default PaginaDetalle