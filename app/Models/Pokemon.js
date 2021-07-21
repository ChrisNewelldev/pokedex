import { ProxyState } from "../AppState.js";

export default class Pokemon {
  constructor({ name, img, weight, height, type, id, forms }) {
    this.name = name;
    this.img = img || `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    this.weight = weight;
    this.height = height;
    this.type = type;
    this.id = id;

    this.isApiPokemon = forms != undefined
}

get Template() {
  return `
  <div class="bg-light m3 p-3 shadow">
  <div>
  <h4 class='uppercase'>${this.name}</h4>
  
</div>
<div class="text-right">
 ${this.Button}
</div>
</div>
  `
}