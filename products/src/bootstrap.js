import { faker } from "@faker-js/faker";

const COUNT = 5;

function mount(element) {
    element.innerHTML = Array.from(Array(COUNT), _ => `<div>${faker.commerce.productName()}</div>`).join("");
}

/*
 * context/situation #1
 * we are running this file in development isolation
 * we are using our local index.html file which DEFINITELY has an element with an id of "dev-products"
 * we want to immediately render our app into that element
 */
if(process.env.NODE_ENV === "development") {
    const element = document.querySelector("#dev-products-dev-only");

    // assuming our container does not have an element with id "dev-products-dev-only"
    if(element) {
        // we are probably running in isolation
        mount(element);
    }
}

/*
 * context/situation #2
 * we are running this file in development or production through the CONTAINER app
 * NO GUARANTEE that an element with an id of "dev-products" exists
 * WE DO NOT WANT TO try to immediately render the app
 */
export { mount };
