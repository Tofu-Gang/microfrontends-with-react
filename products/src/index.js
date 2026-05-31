import faker from "faker";
const COUNT = 5;
let products = Array.from(Array(COUNT), _ => `<div>${faker.commerce.productName()}</div>`).join("");
console.log(products);
