import './Card.css';

interface CardProps {
  image: string,      // URL de la imagen del personaje
  name: string,       // Nombre del personaje
  status: string,     // Estado, si vive o no
  species: string     // La especie a la que pertenece
  location: string,   // Ubicación del personaje
  origin: string      // Lugar de origen
}

function Card({ image, name, status, species, location, origin }:CardProps) {

  return (
    <article className="card">
      <div className="card__image">
        <img src={image} />
      </div>
      <h2 className="card__name">{name}</h2>
      <span className="card__status">{status === 'Alive' ? '🧡 Alive' : status === 'Dead' ? '💀 Dead' : '❓ Unknown'}</span>
      <div className="card__species">
        <button className="btn btn--primary">{species}</button>
      </div>
      <div className="card__details">
        <div className="card__details__row">
          <button className="btn btn--icon">
            <span>🌎</span>
          </button>
          <span className="card__details__row--text">{origin}</span>
        </div>
        <div className="card__details__row">
          <button className="btn btn--icon">
            <span>📍</span>
          </button>
          <span className="card__details__row--text">{location}</span>
        </div>
      </div>
    </article>
  )
}

export default Card