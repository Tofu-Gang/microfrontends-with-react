import { faker } from "@faker-js/faker";

const COUNT = 5;
const products = Array.from(Array(COUNT), _ => `<div>${faker.commerce.productName()}</div>`).join("");

document.querySelector("#dev-products").innerHTML = products;

/*
 * context/situation #1
 * we are running this file in development isolation
 * we are using our local index.html file which DEFINITELY has an element with an id of "dev-products"
 * we want to immediately render our app into that element
 */

/*
 * context/situation #2
 * we are running this file in development or production through the CONTAINER app
 * NO GUARANTEE that an element with an id of "dev-products" exists
 * WE DO NOT WANT TO try to immediately render the app
 */