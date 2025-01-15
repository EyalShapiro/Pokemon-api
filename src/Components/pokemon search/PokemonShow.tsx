import { SearchPokeAppStateType } from "../../types/SearchPokeAppStateType";
import Card from "../card/Card";
import Reload from "../Reloads/Reload";

export function PokemonShow({ state }: props) {
  return (
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
  );
}
interface props {
  state: SearchPokeAppStateType;
}
