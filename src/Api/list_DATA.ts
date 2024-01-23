
/**
 * Fetches a list of Pokemon from the PokeAPI.
 *
 * @param {number} limit - The maximum number of Pokemon to fetch.
 * @param {number} page - The page number of the Pokemon list to fetch.
 * @param {number} start - The starting index of the Pokemon list.
 * @return {Promise<Array<{ id: number, name: string, image: string }>>} A promise that resolves to an array of Pokemon details.
 */
export const fetchPokemonList = async (limit: number, page: number, start: number) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${(page - 1) * limit}`
    );
    const data = await response.json();
    const pokemonList = data.results;

    const detailsPromises = pokemonList.map(async (_pokemon: { url: string }, index: number) => {
      const detailsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${start + index}`);
      const detailsData = await detailsResponse.json();
      return {
        id: detailsData.id,
        name: detailsData.name,
        image: detailsData.sprites.front_default,
      };
    });

    const pokemonDetails = await Promise.all(detailsPromises);
    return pokemonDetails;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
  }
};
