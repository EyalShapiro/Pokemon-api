import { Link } from 'react-router-dom';
import PokemonBallImg from "../pokeImg/pokeImg.tsx";

type ShowPokeSelectProps = {
   handleCardClick: (pokemon: any) => void;
   pokemon: ListPoke;
}

export function ShowPokeSelect({ handleCardClick, pokemon }: ShowPokeSelectProps) {
   return (
      <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
         <div className='pokemon-container' onClick={() => handleCardClick(pokemon)}>
            <PokemonBallImg Gif={pokemon.image} Img={pokemon.image} alt={`pokemon:\n ${pokemon.name}`} isAnimated={false} />
            <p className="pokemon-name">
               {pokemon.name} (ID: {pokemon.id})
            </p>
         </div>
      </Link>);
}