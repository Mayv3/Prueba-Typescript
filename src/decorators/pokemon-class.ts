import { ids } from "webpack";

function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del pokemon debe ser entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

@printToConsoleConditional(false)
export class Pokemon {
  public publicApi: string = "https://pokeapi.co";
  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}
