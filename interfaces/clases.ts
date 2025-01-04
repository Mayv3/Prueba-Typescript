(() => {
  interface xMen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }
  interface Human {
    age: number;
  }

  class Mutant implements xMen, Human {
    public age: number;
    public name: string;
    public realName: string;
    mutantPower(id: number): string {
      return `${this.name} - ${this.realName}`;
    }
  }
})();
