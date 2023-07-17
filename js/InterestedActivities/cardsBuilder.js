import {
  State
} from "../profilePage/State.js";

import {
  PageConstructor
} from "../constructor/construtor.js"
  
export function CardContructor(value) {
  const state = new State().getState();

  let events;
  switch (value) {
    case "favorite":
      events = [state.favorite];
      break;
    case "interested":
      events = [state.interested];
      break;
    case "going":
      events = [state.going];
      break;
    default:
      events = [];
      break;
  }

  const container = document.getElementById(`${value}Card`);
  if (container) {
    container.innerHTML = "";
    events.forEach(subArray => {
      subArray.forEach(event => {
        Constructor(event, value);
      });
    });
  }
}


function Constructor(event, value) {
  const card = new PageConstructor(
    event.id,
    event.title,
    event.image,
    event.date,
    event.location,
    event.price
  );

  const cardHtml = card.profileCard(value);
  const container = document.getElementById(`${value}Card`);
  if (container) {
    container.innerHTML += cardHtml;
  }
}