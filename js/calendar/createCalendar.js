import { dateformat, Price } from '../tools/dateFormat.js';

const monthYearElement = document.getElementById('month-year');
const calendarGrid = document.getElementById('calendar-grid');

let currentMonth;
let
  currentYear;
const currentDate = new Date();
currentMonth = currentDate.getMonth();
currentYear = currentDate.getFullYear();

function getEventsOnDay(day) {
  const eventsArray = [];
  const keys = ['favorite', 'interested', 'going'];

  keys.forEach((key) => {
    const events = JSON.parse(localStorage.getItem(key)) || [];
    events.forEach((originalEvent) => {
      const event = { ...originalEvent };
      const eventDate = new Date(event.date);
      if (
        eventDate.getFullYear() === currentYear
        && eventDate.getMonth() === currentMonth
        && eventDate.getDate() === day
      ) {
        event.category = key;
        eventsArray.push(event);
      }
    });
  });

  return eventsArray;
}

function createCardDetails(event) {
  const cardDetails = document.createElement('div');
  cardDetails.className = 'card-details';

  const content = `<div class="eventCard">
    <img src="${event.image}" class="card-image" alt="${event.title}">
    <h2>${event.title}</h2>
    <p>Date: ${dateformat(event.date)}</p>
    <p>Location: ${event.location.city}, ${event.location.state}, ${event.location.address}</p>
    <p>Price: $${Price(event.price)}</p>
  </div>`;

  cardDetails.innerHTML = content;

  return cardDetails;
}

function showEventDetails(event) {
  const cardDetails = createCardDetails(event);
  document.body.appendChild(cardDetails);

  cardDetails.addEventListener('click', () => {
    document.body.removeChild(cardDetails);
  });
}

function createEventElement(event) {
  const eventElement = document.createElement('div');
  eventElement.className = 'event';
  eventElement.innerHTML = `
    <h3 class="textOnCalendar" value="${event.id}">${event.title}</h3>
  `;

  if (event.category === 'favorite') {
    eventElement.classList.add('event-favorite');
  } else if (event.category === 'interested') {
    eventElement.classList.add('event-interested');
  } else if (event.category === 'going') {
    eventElement.classList.add('event-going');
  }

  eventElement.addEventListener('click', () => {
    showEventDetails(event);
  });

  return eventElement;
}

function showMonthYear() {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  const monthYear = `${months[currentMonth]} ${currentYear}`;
  monthYearElement.textContent = monthYear;
}

export function createCalendar() {
  calendarGrid.innerHTML = '';

  const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const calendarHTML = document.createElement('table');
  calendarHTML.className = 'calendar-grid';

  const headerRow = document.createElement('tr');
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  weekDays.forEach((day) => {
    const headerCell = document.createElement('th');
    headerCell.textContent = day;
    headerRow.appendChild(headerCell);
  });
  calendarHTML.appendChild(headerRow);

  let day = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDay) || day > numDays) {
        const cell = document.createElement('td');
        row.appendChild(cell);
      } else {
        const cell = document.createElement('td');
        cell.textContent = day;
        const eventsOnDay = getEventsOnDay(day);
        eventsOnDay.forEach((eventOnDay) => {
          const eventElement = createEventElement(eventOnDay);
          cell.appendChild(eventElement);
        });
        row.appendChild(cell);
        day++;
      }
    }

    calendarHTML.appendChild(row);
  }

  calendarGrid.appendChild(calendarHTML);

  showMonthYear();
}

export function showPreviousMonth() {
  if (currentMonth === 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  createCalendar();
}

export function showNextMonth() {
  if (currentMonth === 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  createCalendar();
}
