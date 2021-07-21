import PokemonsController from "./Controllers/PokemonsController.js";
import MyPokemonsController from "./Controllers/MyPokemonsController.js";

class App {
  pokemonsController = new PokemonsController()
  myPokemonsController = new MyPokemonsController()
}

window["app"] = new App();
