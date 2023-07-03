import {
    createValueforCahe
} from "./build/buildPage.js";
import {
    changeCardList
} from "./events/buttonEvent.js";
import {
    addList
} from "./InterestedActivities/addTolist.js";
import {
    createTabs
} from "./tools/tabs.js";
import {
    changeHeartLink
} from "./tools/changeHeart.js";


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
    await createTabs(["Music", "Sports", "Food", "Business", "Art"]);
    createValueforCahe("music");
    changeCardList("music")
});




const intButtonEvent = document.getElementById("cardsContainer");
intButtonEvent.addEventListener("click", (event) => {
    if (event.target.matches(".intButton")) {
        let button = event.target;
        let buttonValue = button.getAttribute('value');
        console.log("ID del botón:", buttonValue);
        addList("interested")
    }
});

const goButtonEvent = document.getElementById("cardsContainer");
goButtonEvent.addEventListener("click", (event) => {
    if (event.target.matches(".goButton")) {
        let button = event.target;
        let buttonValue = button.getAttribute('value');
        console.log("ID del botón:", buttonValue);
        addList(buttonValue, "going")
    }
});

const heart = document.getElementById("cardsContainer");
heart.addEventListener("click", (event) => {
    if (event.target.matches(".heart")) {
        let heartElement = event.target.closest(".heart");
        let heartvalue = heartElement.id;
        changeHeartLink(heartElement);
        addList(heartvalue, "favorite")
    
    }
});