import { useState, useEffect, ChangeEvent } from "react";
import Card from "../card/Card.tsx";
import "./style/AppSearch.css";
import ApiFetch from "../../Api/ApiFetch.ts";
import Reload from "../Reloads/Reload.tsx";
import {TypePokemon} from"../../types/pokemon.ts"

interface SearchPokeAppState {
  pokemon: TypePokemon;
  isHidden: boolean;
  error: string;
  searchInput: string;
  loading: boolean;
}

export default function SearchPokeApp() {
  const pokeObj: TypePokemon = {
    number: "",
    name: "",
    img: "",
    gif: "",
    type: [],
    powers: "",
    attack: 0,
    hp: 0,
    defense: 0,
    speed: 0,
  };

  const [state, setState] = useState<SearchPokeAppState>({
    pokemon: pokeObj,
    isHidden: true,
    error: "",
    searchInput: "",
    loading: true,
  });

  useEffect(() => {
    const GetStorage: string | null = localStorage.getItem("pokemon");
    if (GetStorage != null) {
      const storedPokemon: TypePokemon | undefined = JSON.parse(GetStorage);
      if (storedPokemon) {
        setState((prevState) => ({
          ...prevState,
          pokemon: storedPokemon,
          isHidden: false,
        }));
      }
    }
  }, []);

  function loadingPage() {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, loading: true }));
    }, 1000 * 0.5);
    setState((prevState) => ({ ...prevState, loading: false }));
  }

  async function grabPoke(event: ChangeEvent<HTMLInputElement>) {
    const input = event.target.value.trim();
    setState((prevState) => ({ ...prevState, searchInput: input }));
    loadingPage();
    await choosePokemon(input);
  }

  async function choosePokemon(input: string) {
    try {
      const data = await ApiFetch(input);
      const { species, sprites, types, abilities, stats } = data;
      const number = data.id;
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
      const newPokemon: TypePokemon = {
        number, name, img,
        gif, type, powers, hp,
        attack, defense, speed,
      };
      setUseState(newPokemon);
      localStorage.setItem("pokemon", JSON.stringify(newPokemon));
    } catch (error) {
      console.log("err", error);
      setState((prevState) => ({ ...prevState, error: error.message }));
      if (input === "") {
        clearPokemon();
        setState((prevState) => ({ ...prevState, searchInput: "" }));
      }
    }
  }

  function setUseState(newPokemon: TypePokemon) {
    setState((prevState) => ({
      ...prevState,
      pokemon: newPokemon,
      error: "",
      isHidden: false,
    }));
  }

  function getRndInteger(min: number, max: number): string {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return `${num}`;
  }

  function clearPokemon() {
    setState((prevState) => ({
      ...prevState,
      pokemon: pokeObj,
      isHidden: true,
      searchInput: "",
    }));
    localStorage.removeItem("pokemon");
  }

  function randomPokemon() {
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
        {false ?
          <button id="btn" onClick={() => console.log('in build')}>
            I choose you
          </button> : ''}
        <button id="btn" onClick={clearPokemon}>
          Clear Pokemon
        </button>
        <button id="btn" onClick={randomPokemon}>
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
          <Reload></Reload>
        )}
      </div>
    </div>
  );
}
