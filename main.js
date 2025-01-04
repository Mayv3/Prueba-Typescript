"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: [1, 2],
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: [1],
        getName() {
            return this.name;
        },
    };
})();
(() => {
    class Mutant {
        mutantPower(id) {
            return `${this.name} - ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: "fernando",
        age: 25,
        address: {
            id: 125,
            zip: "KY2 SUD",
            city: "Ottawa",
        },
    };
    const client2 = {
        name: "Melisa",
        age: 30,
        address: {
            id: 23,
            city: "otawa",
            zip: "asdd",
        },
    };
})();
//# sourceMappingURL=main.js.map