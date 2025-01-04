(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "fernando",
    age: 25,
    address: {
      id: 125,
      zip: "KY2 SUD",
      city: "Ottawa",
    },
  };

  const client2: Client = {
    name: "Melisa",
    age: 30,
    address: {
      id: 23,
      city: "otawa",
      zip: "asdd",
    },
  };
})();
