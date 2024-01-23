import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from '../card/Card.tsx'
import ApiFetch from "../../Api/ApiFetch.ts";
import './PokemonDetails.css'
import { NavBarLink } from '../../base/BtnNavBar.tsx';
import { Pokemon } from "../../types/pokemon.ts"

async function NewData(valueSearch: string) {
   const data = await ApiFetch(valueSearch);
   const { id, species, sprites, types, stats } = data;
   const name = species.name.toUpperCase();
   const gif =
      sprites.versions["generation-v"]["black-white"].animated.front_default;
   const img = sprites.front_default;
   const type = types
      .map((type: { type: { name: any; }; }) => type.type.name)
      .join(",")
      .toUpperCase()
      .split(",");
   const powers = data.abilities.map((ability: { ability: { name: any; }; }) => ability.ability.name)
      .join(", ")
      .toUpperCase();
   const hp = stats[5].base_stat;
   const attack = stats[4].base_stat;
   const defense = stats[3].base_stat;
   const speed = stats[0].base_stat;
   const new_pokemon: Pokemon = {
      id, name, img,
      gif, type, powers, hp,
      attack, defense, speed,
   };
   return new_pokemon;
}

/**
 * Fetches and displays details of a Pokemon.
 * @param {string} id - The unique identifier of the Pokemon.
 * @return {void}
 */
function PokemonDetails() {

   const { id } = useParams<string>()

   const [pokemonData, setPokemonData] = useState<Pokemon>();

   useEffect(() => {
      const fetchData = async () => {
         if (id) {
            const data = await NewData(id);
            setPokemonData(data);
         }
      };

      fetchData();
   }, [id]);


   return (
      <div className='PokemonDetails'>
         <NavBarLink activeClassName='activeLink' to="/" text='Back to Pokemon List' icon={undefined}></NavBarLink>
         <div id='card'>
            {pokemonData && <Card pokemon={pokemonData} error="" />}
         </div></div>
   );
}

export default PokemonDetails;
