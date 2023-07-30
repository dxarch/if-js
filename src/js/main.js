import {data} from "./array.js";
import {createNewHomesItem} from "./functions.js";

const homesContainer = document.querySelector('.homes__slides');
data.map((obj) => {
    const home = createNewHomesItem(obj);
    homesContainer.appendChild(home);
});