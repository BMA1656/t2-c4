import {
  createTabs
} from "../tools/tabs.js";
import {
  changeCardList
} from "../events/buttonEvent.js";
import {
  removeCardFromContainer,
  eraseObject,
} from "../events/erase.js";
import {
  CardContructor
} from "../InterestedActivities/cardsBuilder.js";
import {
  createCalendar,showPreviousMonth,showNextMonth
} from "../calendar/createCalendar.js";
import { State } from "../profilePage/State.js";

const state = new State();
const currentState = state.getState();
console.log(currentState);

const tabButtons = document.getElementById("tabContainer");
tabButtons.addEventListener("click", (event) => {
  if (event.target.matches(".tabButton")) {
    const object = event.target;
    const objectValue = object.value;
    if (objectValue === "calendar") {
      changeCardList(objectValue);
      
      createCalendar()
    } else {
      changeCardList(objectValue);
      CardContructor(objectValue);
    }
  }
});



const removeObject = document.getElementById("cardsContainer");
removeObject.addEventListener("click", async (event) => {
  const targetClass = event.target.classList;

  if (targetClass.contains("favorite") || targetClass.contains("going") || targetClass.contains("interested")) {
    const button = event.target;
    const buttonValue = button.getAttribute('value');
    const buttonClass = button.getAttribute('class');
    console.log("ID del botón:", buttonValue, buttonClass);
    await eraseObject(buttonValue, buttonClass);
    removeCardFromContainer(buttonClass, buttonValue);
  }
});


window.addEventListener("load", async () => {
  await createTabs(["Calendar", "Interested", "Going", "Favorite"]);
  changeCardList("favorite");
  CardContructor("favorite")
});

const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches(".intButton")) {
    const buttonValue = target.getAttribute("value");
    console.log("ID del botón:", buttonValue);
    addList(buttonValue, "interested");
  } else if (target.matches(".goButton")) {
    const buttonValue = target.getAttribute("value");
    console.log("ID del botón:", buttonValue);
    addList(buttonValue, "going");
  } else if (target.matches(".heart")) {
    const heartElement = target.closest(".heart");
    const heartValue = heartElement.id;
    changeHeartLink(heartElement);
    addList(heartValue, "favorite");
  }
});

const calendarContainer = document.getElementById("cardsContainer");
calendarContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches("#btn-next")) {
   
    showNextMonth()
   
  } 
 else if (target.matches("#btn-prev")) {
   
  showPreviousMonth()
   
  } 
});