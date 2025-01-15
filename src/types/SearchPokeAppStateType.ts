import { Pokemon } from "./pokemon";

export interface SearchPokeAppStateType {
  pokemon: Pokemon;
  isHidden: boolean;
  error: string | never;
  searchInput: string;
  loading: boolean;
}
