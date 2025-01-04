(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumbersFunction: addTwoNumbers;

  addNumbersFunction = () => {
    return 10;
  };
})();
