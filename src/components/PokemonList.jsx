import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard name={pokemon.name} key={pokemon.name}/>;
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), // crea un arreglo con 10 posiciones, de este valor ''. 
};

export default PokemonList;