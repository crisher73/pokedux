import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon) => {
                return <PokemonCard
                name={pokemon.name}
                key={pokemon.name} 
                image={pokemon.sprites.front_default}
                allAbilities={pokemon.abilities.map(ability => ability.ability.name).join(',')}
                />;
            })}
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill(''), // crea un arreglo con 10 posiciones, de este valor ''. 
};

export default PokemonList;