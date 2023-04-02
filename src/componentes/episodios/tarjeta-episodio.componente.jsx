import { useEffect, useState } from 'react';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = (props) => {
    const [episodes, setEpisodes] = useState({})

    let episodeNumber = props.episode.slice(40)

    useEffect(() => {  
        fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`)
                .then(response => response.json())
                .then(data => {      
                const respuesta = data;
                setEpisodes(respuesta)
            })
            .catch(error => console.error(error));
      
    },[]) 

    console.log(episodes);

    return <div className="tarjeta-episodio">
            <h4>{episodes?.name}</h4>
            <div>
                <span>{episodes.episode}</span>
                <span>Lanzado el: {episodes?.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;