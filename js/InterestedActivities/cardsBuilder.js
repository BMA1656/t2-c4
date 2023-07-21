import State from '../profilePage/State.js';

import { PageConstructor } from '../constructor/construtor.js';

export default function CardContructor(value) {
  const state = new State().getState();

  let events;
  switch (value) {
    case 'favorite':
      events = [state.favorite];
      break;
    case 'interested':
      events = [state.interested];
      break;
    case 'going':
      events = [state.going];
      break;
    default:
      events = [];
      break;
  }

  function Constructor(event, enterValue) {
    const card = new PageConstructor(
      event.id,
      event.title,
      event.image,
      event.date,
      event.location,
      event.price,
    );

    const cardHtml = card.profileCard(enterValue);
    const container = document.getElementById(`${enterValue}Card`);
    if (container) {
      container.innerHTML += cardHtml;
    }
  }

  const container = document.getElementById(`${value}Card`);
  if (container) {
    container.innerHTML = '';
    events.forEach((subArray) => {
      subArray.forEach((event) => {
        Constructor(event, value);
      });
    });
  }
}
