import React, { useState, useEffect, ChangeEvent } from "react";
import { fetchPokemonList } from "../../Api/list_DATA.ts";
import { ShowPokeSelect } from './ShowPokeSelect.tsx';
import GetGen from "../../Api/data/Gen.json";
import { Pokemon } from "../../types/pokemon.ts";

import "./PokemonList.css";

interface Generation {
   nome: string;
   start: number;
}


export const PokemonList: React.FC<{}> = () => {
   const [pokemonData, setPokemonData] = useState<any[]>([]);
   const [page] = useState<number>(1);
   const [, setSelectedPokemon] = useState<Pokemon | ListPoke | null>(null);
   const [selectedGen, setSelectedGen] = useState<string>("all");
   const [start, SetStart] = useState<number>(1);
   const [limit, SetLimit] = useState<number>(10);

   useEffect(() => {
      const fetchData = async () => {
         const data: any = await fetchPokemonList(limit, page, start);
         setPokemonData(data);
      };
      fetchData();
   }, [page, limit, selectedGen, start]);

   const handleNextPage = () => {
      SetStart((prevStart) => prevStart + limit);
   };

   const handlePrevPage = () => {
      SetStart(prevStart => Math.max(prevStart - limit, 1));
   };

   const handleCardClick = (pokemon: Pokemon) => {
      setSelectedPokemon(pokemon);
   };

   const handleGenChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedGeneration = event.target.value;
      const selectedGenData = GetGen.find(
         (generation: Generation) => generation.nome === selectedGeneration
      );
      const newStart = selectedGenData ? selectedGenData.start : 1;
      setSelectedGen(selectedGeneration);
      SetStart(newStart);
   };

   const handleLimitChange = (event: ChangeEvent<HTMLInputElement>) => {
      let newLimit = parseInt(event.target.value, 10);
      newLimit = isNaN(newLimit) ? 1 : Math.min(Math.max(newLimit, 1), 100);
      SetLimit(newLimit);
   };

   return (
      <div className="app-home">
         <div className="pagination">
            <div className="gen-filter">
               <select value={selectedGen} onChange={handleGenChange}>
                  <option value="all">All</option>
                  {GetGen.map((gen: Generation) => (
                     <option key={gen.nome} value={gen.nome}>
                        {gen.nome}
                     </option>
                  ))}
               </select>
               <p style={{ fontSize: '150 %' }}>number poke show: </p>
               <input
                  type="number"
                  style={{ width: '50px' }}
                  value={limit}
                  onInput={handleLimitChange}
               />
            </div>
            <button onClick={handlePrevPage} id="prev">
               Previous
            </button>
            <button onClick={handleNextPage} id="prev">
               Next
            </button>
         </div>

         <div className="pokemon-list">
            {pokemonData.map((pokemon) => (
               <ShowPokeSelect
                  key={pokemon.id}
                  handleCardClick={handleCardClick}
                  pokemon={pokemon}
               />
            ))}
         </div>
      </div>
   );
};
