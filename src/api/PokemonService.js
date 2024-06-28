import ApiService from "./ApiService";

export const getKantoPokemon = async () => {
    try {
    let response = await ApiService.get(`https://pokeapi.co/api/v2/pokemon`, {
      limit: 151,
    });
    return response.results;
    } catch (err) {
    throw err;
    }
    };

    export const getPokemonData = async (url) => {
        try {
        let response = await ApiService.get(url);
        return response;
        } catch (err) {
        throw err;
        }
        };

        export const getPokemonKantoData = async () => {
            try {
            let pokemons = await getKantoPokemon();
            
            let pokemonPromises = pokemons.map((p) => getPokemonData(p.url));
            
            return await Promise.all(pokemonPromises);
            } catch (err) {
            throw err;
            }
            };