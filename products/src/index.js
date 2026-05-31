import { faker } from "@faker-js/faker";
const COUNT = 5;
let products = Array.from(Array(COUNT), _ => `<div>${faker.commerce.productName()}</div>`).join("");

document.querySelector("#dev-products").innerHTML = products;
