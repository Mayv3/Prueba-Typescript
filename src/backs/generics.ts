import { genericFunctionArrow } from "../generics/generics";
import { Villian, Hero } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject([1, 2, 3, 4, 5, 6, 7]);

// const name = "nico";

// console.log(genericFunctionArrow(3.141616).toFixed(2));
// console.log(genericFunctionArrow(name).toUpperCase());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villian>(deadpool).dangerLevel);
