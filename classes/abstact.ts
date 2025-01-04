(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      //   console.log("Mundo salvado!");
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      //   console.log("Mundo conquistado!");
    }
  }

  const magneto = new Villian("Magneto", "Magnus");
  const wolverine = new Xmen("Wolverine", "Logan");

  const printName = (character: Mutante) => {
    // console.log(character.name + " " + character.realName);
  };

  //   printName(magneto);
  //   printName(wolverine);
  //   console.log(wolverine);
  //   console.log(magneto);
  //   wolverine.salvarMundo();
  //   magneto.conquistarMundo();
})();
