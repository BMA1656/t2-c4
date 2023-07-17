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
  createCalendar,
  showPreviousMonth,
  showNextMonth
} from "../calendar/createCalendar.js";

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



const cardsContainer = document.getElementById("cardsContainer");
cardsContainer.addEventListener("click", async (event) => {
  const targetClass = event.target.classList;

  if (targetClass.contains("favorite") || targetClass.contains("going") || targetClass.contains("interested")) {
    const button = event.target;
    const buttonValue = button.getAttribute('value');
    const buttonClass = button.getAttribute('class');
    await eraseObject(buttonValue, buttonClass);
    removeCardFromContainer(buttonClass, buttonValue);
  }
});


window.addEventListener("load", async () => {
  await createTabs(["Calendar", "Interested", "Going", "Favorite"]);
  changeCardList("favorite");
  CardContructor("favorite");

});


const calendarContainer = document.getElementById("cardsContainer");
calendarContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.matches("#btn-next")) {
    showNextMonth()
  } else if (target.matches("#btn-prev")) {
    showPreviousMonth()
  }
});