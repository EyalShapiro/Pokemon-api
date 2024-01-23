import { useState, useEffect, ChangeEvent } from "react";

import Card from "../card/Card.tsx";
import ApiFetch from "../../Api/ApiFetch.ts";
import Reload from "../Reloads/Reload.tsx";
import { Pokemon } from "../../types/pokemon.ts"
import { PokemonStartData } from "./Pokemon_Start_Data.tsx";

import "./style/AppSearch.css";


interface SearchPokeAppState {
  pokemon: Pokemon;
  isHidden: boolean;
  error: string | never;
  searchInput: string;
  loading: boolean;
}

export default function SearchPokeApp() {
  const [state, setState] = useState<SearchPokeAppState>({
    pokemon: PokemonStartData,
    isHidden: true,
    error: "",
    searchInput: "",
    loading: true,
  });

  useEffect(() => {
    const GetStorage: string | null = localStorage.getItem("pokemon");
    if (GetStorage) {
      const storedPokemon: Pokemon | undefined = JSON.parse(GetStorage);
      if (storedPokemon) {
        setState((prevState) => ({
          ...prevState,
          pokemon: storedPokemon,
          isHidden: false,
        }));
      }
    }
  }, []);

  /**
   * Asynchronous function to update the loading state of the page.
   * @param {boolean} isLoader - indicates whether the page is loading
   *  is isLoader is false is show loading Page
   */
  async function loadingPage(isLoader: boolean = false) {
    setState((prevState) => ({ ...prevState, loading: isLoader }));
  }

  async function grabPoke(event: ChangeEvent<HTMLInputElement>) {
    const input_search = event.target.value.trim();
    setState((prevState) => ({ ...prevState, searchInput: input_search }));
    await choosePokemon(input_search);
  }

  async function choosePokemon(input: string) {
    if (input === "") {
      clearPokemon();
      setState((prevState) => ({ ...prevState, searchInput: "" }));
    }

    else {
      try {
        const data = await ApiFetch(input);
        const { species, sprites, types, abilities, stats, id } = data;
        const name = species.name.toUpperCase();
        const gif =
          sprites.versions["generation-v"]["black-white"].animated.front_default;
        const img = sprites.front_default;
        const type = types
          .map((type: { type: { name: any; }; }) => type.type.name)
          .join(",")
          .toUpperCase()
          .split(",");
        const powers = abilities
          .map((ability: { ability: { name: any; }; }) => ability.ability.name)
          .join(", ")
          .toUpperCase();
        const hp = stats[5].base_stat;
        const attack = stats[4].base_stat;
        const defense = stats[3].base_stat;
        const speed = stats[0].base_stat;
        const newPokemon: Pokemon = {
          id, name, img,
          gif, type, powers, hp,
          attack, defense, speed,
        };
        SetPokemonState(newPokemon);
        localStorage.setItem("pokemon", JSON.stringify(newPokemon)); SetPokemonState
        loadingPage();
      } catch (error: any) {
        console.error('err');

        if (error) {
          loadingPage(true);
          console.log("err", error);
          setState((prevState) => ({ ...prevState, error: error.message }));
        }
      }
      finally {
        setState((prevState) => ({ ...prevState, loading: true }));
      }
    }
  }

  function SetPokemonState(newPokemon: Pokemon) {
    setState((prevState) => ({
      ...prevState,
      pokemon: newPokemon,
      error: "",
      isHidden: false,
    }));
  }

  function getRndInteger(min: number, max: number): string {
    const num: string = String(Math.floor(Math.random() * (max - min + 1)) + min);
    return num;
  }

  function clearPokemon() {
    setState((prevState) => ({
      ...prevState,
      pokemon: PokemonStartData,
      isHidden: true,
      searchInput: "",
    }));
    localStorage.removeItem("pokemon");
  }

  function RandomPokemon() {
    loadingPage();
    choosePokemon(getRndInteger(1, 1025));

  }

  return (
    <div className="PokemonApp content-img">
      <div className="Search-Poke">
        <input
          value={state.searchInput}
          id="search"
          placeholder="Enter name or ID"
          onInput={grabPoke}
        />
        {/*     
          <button id="btn" onClick={() => console.log('in build')}>I choose you</button> */}
        <button id="btn" onClick={clearPokemon}>
          Clear Pokemon
        </button>
        <button id="btn" onClick={RandomPokemon}>
          Random pokemon
        </button>
      </div>
      <div
        className="poke-info"
        style={{
          visibility: state.isHidden ? "collapse" : "visible",
        }}
      >
        {state.loading ? (
          <li>
            <Card pokemon={state.pokemon} error={state.error}></Card>
          </li>
        ) : (
          <Reload />
        )}
      </div>
    </div>
  );
}
