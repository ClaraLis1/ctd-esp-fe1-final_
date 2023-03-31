import './boton-favorito.css';

interface BotonFavorito {
    esFavorito: boolean,
    onClick:React.MouseEventHandler<HTMLDivElement> | undefined ,
}

const BotonFavorito = ({esFavorito, onClick}:BotonFavorito) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
        
    </div>
}

export default BotonFavorito;