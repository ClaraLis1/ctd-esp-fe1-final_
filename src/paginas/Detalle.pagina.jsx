import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


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
const PaginaDetalle = () => {
    const {id}= useParams(); 
    const [detalle, setDetalle] = useState({})
    
    
    useEffect(() => {  
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then(response => response.json())
                .then(data => {      
                const respuesta = data;
                setDetalle(respuesta)
            })
            .catch(error => console.error(error));
      
    },[])    

    console.log(detalle);
    

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
                <BotonFavorito esFavorito={false} onClick={undefined} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {detalle.episode?.map(episode =>{
                return(
                <TarjetaEpisodio 
                key = {episode.id}
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