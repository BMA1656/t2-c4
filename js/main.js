import {
    createValueforCahe,
    createTabs
} from "./build/buildPage.js";
import {
    changeCardList
} from "./events/buttonEvent.js"



const tabButtons = document.getElementById("tabContainer");
tabButtons.addEventListener("click", (event) => {
    if (event.target.matches(".tabButton")) {
        const object = event.target;
        const objectValue = object.value;
        console.log(objectValue);
        createValueforCahe(objectValue);
        changeCardList(objectValue)
    }
});

window.addEventListener("load", async () => {
    await createTabs();
    changeCardList("music")
});