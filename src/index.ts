import { getPokemon } from "./generics/getPokemon";

getPokemon(4)
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err))
  .finally(() => console.log("Fin de pokemon"));
