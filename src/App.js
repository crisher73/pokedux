import { useEffect, useState } from 'react';
import { Col } from 'antd';
import { getPokemon } from './api';
import 'antd/dist/reset.css';
import Searcher from '../src/components/Searcher';
import './App.css';
import PokemonList from '../src/components/PokemonList';
import logo from './statics/logo.svg'



function App() {
const [pokemons, setPokemons] = useState([]);

  useEffect (() => {
    const fecthPokemons = async () => { 
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes)
    };
    fecthPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
      <img src={logo} alt='pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
