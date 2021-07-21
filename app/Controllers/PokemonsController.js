import { ProxyState } from "../AppState.js";
import { pokemonApi } from "../Services/AxiosService.js";
import { pokemonsService } from "../Services/PokemonsService.js";

function _drawAll() {
  const pokemons = ProxyState.allPokemon
  let template = ''
  pokemons.forEach(p => template += `<li class="action" onclick="app.pokemonsController.getPokemon('${p.id}')">${p.name}</li>`)
  document.getElementById('api-pokemons').innerHTML = template

}

function _drawActivePokemon() {
  if(!ProxyState.activePokemon) {
    document.getElementById('active-pokemon').innerHTML = '<div class="text-center"><em>No Active Pokemon</em></div>'
    return
  }
  document.getElementById('active-pokemon').innerHTML = ProxyState.activePokemon.Template
}

export default class PokemonsController {
  constructor() {
    ProxyState.on('allPokemons', _drawAll)
    ProxyState.on('activePokemon', _drawActivePokemon)

    this.getAllPokemons
  }

  async getAllPokemons(){
    try{
    await pokemonsService.getAllPokemons();
  } catch (error) {
    console.error('There was an issue getting pokemon')
  }

  }

  async getPokemon(id) {
    try {
      await pokemonsService.getPokemon(id)
    } catch (error) {
      console.error("unable to get pokemon details")
    }
  }
}