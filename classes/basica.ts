(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name;
    }
    constructor(
      private name: string = "Scott",
      private team: string,
      avgAge: number = 34,
      public realName?: string
    ) {}
    bio(): string {
      return `Hola, mi nombre es ${this.name} y soy del equipo "${this.team}" tengo ${Avenger.avgAge} años!
      `;
    }
  }

  const antMan: Avenger = new Avenger("antMan", "Captain");
})();
