import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

console.log("Container!");
mountProducts(document.querySelector("#root-products"));
mountCart(document.querySelector("#root-cart"));
