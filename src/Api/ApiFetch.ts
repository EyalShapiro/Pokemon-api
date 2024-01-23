
/**
 * An asynchronous function that fetches Pokemon data from the PokeAPI based on the input provided.
 *
 * @param {string | number} input - The name or ID of the Pokemon to fetch.
 * @return {Promise<any>} The data of the fetched Pokemon.
 */
export default async function ApiFetch(input: string | number) {
  try {
    const send: string = String(input);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${send.toLowerCase()}`);

    if (!response.ok) {
      throw new Error("Please make sure the Pokémon name or ID is typed correctly.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
}
