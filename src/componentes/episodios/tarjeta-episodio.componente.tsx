import { useEffect, useState } from 'react';
import { Character } from '../../types/character.types';
import './tarjeta-episodio.css';

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
 interface Episode {
    id: number
    name: string
    air_date: string
    episode: string
    characters: Character[],
    url: string,
    created: string
    
}
/**
 * este componente recibe un episodio y busca la informacion y la renderiza
 * @param {object} props
 * @param {number} props.id
 * @param {string} props.name
 * @param {string} props.air_date
 * @param {string} props.episode
 * @param {Character[]}
 * @param {string} props.url
 * @param {string} props.created
 * @return {TS.Element} 
 */

const TarjetaEpisodio = (props: Episode): any => {
    const [episodes, setEpisodes] = useState({
        id: 0,
        name: "",
        air_date: "",
        episode: "",
        characters: [],
        url: "",
        created: ""
      })

    let episodeNumber = props.episode.slice(40)

    useEffect(() => {  
        fetch(`https://rickandmortyapi.com/api/episode/${episodeNumber}`)
                .then(response => response.json())
                .then(data => {      
                const respuesta = data;
                setEpisodes(respuesta)
            })
            .catch(error => console.error(error));
      
    })   

    return (
    <div className="tarjeta-episodio">
            <h4>{episodes?.name}</h4>
            <div>
                <span>{episodes.episode}</span>
                <span>Lanzado el: {episodes?.air_date}</span>
            </div>
    </div>
    )
}

export default TarjetaEpisodio;