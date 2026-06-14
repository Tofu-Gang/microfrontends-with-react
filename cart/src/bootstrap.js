import { faker } from "@faker-js/faker";

function mount(element) {
    element.innerHTML = `<div>You have ${faker.number.int()} items in your cart.</div>`;
}

/*
 * context/situation #1
 * we are running this file in development isolation
 * we are using our local index.html file which DEFINITELY has an element with an id of "dev-cart-dev-only"
 * we want to immediately render our app into that element
 */
if(process.env.NODE_ENV === "development") {
    const element = document.querySelector("#dev-cart-dev-only");

    // assuming our container does not have an element with id "dev-cart-dev-only"
    if(element) {
        // we are probably running in isolation
        mount(element);
    }
}

/*
 * context/situation #2
 * we are running this file in development or production through the CONTAINER app
 * NO GUARANTEE that an element with an id of "dev-cart-dev-only" exists
 * WE DO NOT WANT TO try to immediately render the app
 */
export { mount };
