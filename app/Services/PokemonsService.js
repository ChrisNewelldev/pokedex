import { ProxyState } from "../AppState.js";
import Pokemon from "../Models/Pokemon.js";
import { pokemonApi } from "./AxiosService.js";

class PokemonsService {
  async getAllPokemons {
    let res = await pokemonApi.get()
    console.log(res.data.results)
    ProxyState.allPokemonApiPokemon = res.data.results

}

  async getPokemon(id) {
    let res =await pokemonApi.get(id)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}

export const pokemonsService = new PokemonsService