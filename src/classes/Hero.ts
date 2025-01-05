import powers from "../data/heroes";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
  get power() {
    return (
      powers.find((power) => power.id === this.powerId)?.desc || "Not Found"
    );
  }
}
