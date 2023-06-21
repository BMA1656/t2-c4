import {dateformat} from "../tools/dateFormat.js"


class pageConstructor {
  constructor(id, title, image, date, location, price) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.date = new Date(date);
    this.location = location;
    this.price = price;
  }

  generateCard() {
    const Price = () => {
      if (this.price == 0) {
        return "free"
      } else {
        return (`$${this.price}`)
      }
    }
  
    return `
        <li class="card">
          <img src="${this.image}" alt="${this.title}" class="card-image">
          <div class="card-content">
            <h2 class="card-title">${this.title}</h2>
            <p class="card-date">${dateformat(this.date)}</p>
            <p class="card-location">${this.location.address} • ${this.location.city}, ${this.location.state}</p>
            <p class="card-price">${Price()}</p>
          </div>
        </li>
      `;
  }
}

export function dataConstructor(value) {
  const eventStorage = JSON.parse(localStorage.getItem(`${value}`)) || [];
  const events = eventStorage.map(eventData => {
    return new pageConstructor(
      eventData.id,
      eventData.title,
      eventData.image,
      eventData.date,
      eventData.location,
      eventData.price
    );
  });

  const cardsHtml = events.map(event => event.generateCard()).join('');
  const container = document.getElementById(`${value}Card`);
  container.innerHTML = cardsHtml;
  console.log(events);
}