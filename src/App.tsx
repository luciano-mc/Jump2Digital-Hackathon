import { useState, useEffect } from 'react';
import Loader from './components/Loader.tsx';
import Card from './components/Card';
import Logo from './assets/logo.png';
import './App.css'

// Tipado de las propiedades del personaje
interface ICharacter {
  name: string;
  status: string;
  species: string;
  image: string;
  location: { name: string};
  origin: { name: string};
}

function App() {
  const [ characterName, setCharacterName ] = useState<string>('');             // Guarda el nombre buscado en el input
  const [ characters, setCharacters ] = useState<ICharacter[] | null>(null);    // Guarda todos los personajes
  const [ nextPage, setNextPage ] = useState<string | null>(null);              // Guarda la próxima página de los resultados (si la hay)
  const [ loader, setLoader ] = useState<boolean>(false);                       // Establece si mostrar el Loader

  // Endpoint de la API para traer todos los personajes
  const endpoint = 'https://rickandmortyapi.com/api/character/';

  const fetchData = async(endpoint:string, rewrite?:boolean): Promise<void> => {
    setLoader(true);
    if(rewrite) {               // Sobreescribe los personajes actuales, si es indicado previamente
      setCharacters(null);
      setNextPage(null);
    }
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      if(!data.error) {
        setCharacters(prevData => [...(prevData || []), ...data?.results]);   // Guarda los personajes nuevos junto a los ya cargados
        setNextPage(data?.info?.next);                                        // Establece próxima página en caso que la haya
      }
      setLoader(false);
    } catch (err) {
      console.error(err);
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setCharacterName(e.target.value);
    fetchData(endpoint + `?name=${e.target.value}`, true);      // Hace la petición a la API con el nombre indicado en el input. Sobreescribe los personajes actuales
  }

  // Primera petición a la API para cargar los personajes al iniciar 
  useEffect(() => {
      fetchData(endpoint)
  }, [])

  return (
    <div className="container">
      <header className="header">
        <picture className="logo__container">
          <img src={Logo} alt="Rick And Morty" className="logo" />
        </picture>
        <h1 className="header__title">Lista de personajes</h1>
        <input type="text" placeholder="Busca tu personaje favorito" className="header__input" value={characterName} onChange={handleChange} />
      </header>
      <div className="cards__container">
        
      {/* Si hay personajes, se renderizan, si no hay personajes ni Loader muestra el mensaje de personaje no encontrado */}
      {characters ? 
       characters.map((item:ICharacter, index:number) => (
          <Card key={index} 
                name={item.name}
                status={item.status}
                species={item.species}
                image={item.image}
                location={item.location.name}
                origin={item.origin.name}
                />
       ))
       :
        !loader && <p><span className="characterName">{characterName}</span> no lo hemos encontrado 🙃 , ¡prueba con otro nombre!</p>
      }

      {/* Muestra el loader en caso de estar cargando */}
      { loader && <Loader /> }

      {/* Si hay próxima página, muestra el botón de cargar más */}
      { nextPage !== null ? <button className="btn btn--primary btn--load" onClick={() => fetchData(nextPage)}>Cargar más...</button> : ''}
      </div>
    </div>
  )
}

export default App
