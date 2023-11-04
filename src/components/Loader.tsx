import './Loader.css';
import GIF from '../assets/loader.gif';

function Loader() {
  return (
    <div className="loader__container">
      <img src={GIF} alt="gif" className="loader__gif" />
      <p>Cargando...</p>
    </div>
  )
}

export default Loader