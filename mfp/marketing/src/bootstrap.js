import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount function to start up the app
function mount(element) {
    ReactDOM.render(
        <App />, element
    );
}

/*
 * context/situation #1
 * we are running this file in development isolation
 * we are using our local index.html file which DEFINITELY has an element with an id of "_marketing-dev-root"
 * we want to immediately render our app into that element
 */
if(process.env.NODE_ENV === "development") {
    const element = document.querySelector("#_marketing-dev-root");

    // assuming our container does not have an element with id "_marketing-dev-root"
    if(element) {
        // we are probably running in isolation
        mount(element);
    }
}

/*
 * context/situation #2
 * we are running this file in development or production through the CONTAINER app
 * NO GUARANTEE that an element with an id of "_marketing-dev-root" exists
 * WE DO NOT WANT TO try to immediately render the app
 */
export { mount };
