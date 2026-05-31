import faker from "faker";

let products = Array(3).map(_ => `<div>${faker.commerce.productName()}</div>`).join("");
console.log(products);
