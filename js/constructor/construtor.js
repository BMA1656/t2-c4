import {
  Price,
  dateformat
} from "../tools/dateFormat.js"


export class PageConstructor {
  constructor(id, title, image, date, location, price) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.date = new Date(date);
    this.location = location;
    this.price = price;
  }

   generateCard() {
    return `
        <li class="card" id="card${this.id}">
          <img src="${this.image}" alt="${this.title}" class="card-image" >
          <div  class="corazon-svg">
          <img src="utilities/heart-dislike.svg" class="heart unliked" id="${this.id}" >
          </div>
          <div class="card-content">
            <h2 class="card-title">${this.title}</h2>
            <p class="card-date">${dateformat(this.date)}</p>
            <p class="card-location">${this.location.address} • ${this.location.city}, ${this.location.state}</p>
            <p class="card-price">${Price(this.price)}</p>
            <div id="bt${this.id}">
            <button class="intButton" value="${this.id}">Interested</button>
            <button class="goButton" value="${this.id}">Going!</button>
            </div>
            </div>            
        </li>
      `;
  }
  profileCard(value) {
    return `
      <li class="card card${this.id}" id="${this.id}">
        <img src="${this.image}" alt="${this.title}" class="card-image" >
        
        <div class="card-content">
          <h2 class="card-title">${this.title}</h2>
          <p class="card-date">${dateformat(this.date)}</p>
          <p class="card-location">${this.location.address} • ${this.location.city}, ${this.location.state}</p>
          <p class="card-price">${Price(this.price)}</p>
          <div class="${this.id}">
            <button class="${value}" value="${this.id}">not going anymore? remove</button>
          </div>
        </div>            
      </li>
    `;
  }


}

export function dataConstructor(value) {
  const eventStorage = JSON.parse(localStorage.getItem(`${value}`)) || [];
  const events = eventStorage.map(eventData => {
    return new PageConstructor(
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
}