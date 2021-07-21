import { ProxyState } from "../AppState"
import { myPokemonsService } from "../Services/MyPokemonsService.js"

function _drawAll() {
  const pokemons = ProxyState.MyPokemon
  const activePokemon = ProxyState.activePokemon || {}
  let template = ""
  pokemons.forEach(p => template += `<li class="action ${activePokemon.id === p.id ? 'text-primary' : ''}" onclick="app.myPokemonsController.setPokemon('${p.id}')">${p.name}</li>`)
  if (!template) {
    template += '<p>NO Pokemon</p>'
  }
  document.getElementById("my-pokemons").innerHTML = template
}

export default class MyPokemonsController {
  constructor() {
    ProxyState.on('myPokemons', _drawAll)
    this.getMyPokemons()
  }
  async getMyPokemons() {
    try {
      await myPokemonsService.getMyPokemons()
    } catch(error) {
      console.error("something went wrong adding that pokemon")
    }
  }

  setPokemon(id) {
    try {
      await myPokemonsService.addPokemon()
    } catch (error) {
      console.error('invalid id')
    }
  }

  async removePokemon() {
    try {
      await myPokemonsService.removePokemon()
    } catch (error) {
      console.error('invalid id')
    }
  }

}