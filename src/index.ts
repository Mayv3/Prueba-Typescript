import { getPokemon } from "./generics/getPokemon";

getPokemon(4)
  .then((Pokemon) => console.log(Pokemon.sprites.front_shiny))
  .catch((err) => console.log(err))
  .finally(() => console.log("Fin de pokemon"));
