import { genericFunctionArrow } from "./generics/generics";

// printObject(123);
// printObject(new Date());
// printObject([1, 2, 3, 4, 5, 6, 7]);

const name = "nico";

console.log(genericFunctionArrow(3.141616).toFixed(2));
console.log(genericFunctionArrow(name).toUpperCase());
