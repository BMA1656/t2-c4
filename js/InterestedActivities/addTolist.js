import {
    importLocal
} from "../tools/searchobject.js";


export function addList(value, category) {
    let id = `bt${value}`
       const existingData = localStorage.getItem(category);
    let list = [];

    if (existingData) {
        list = JSON.parse(existingData);
    }

    const isDuplicate = list.some(item => item.id === value);

    if (!isDuplicate) {
        let object = importLocal(value);
        list.push(object);
        
        changes(1, category, value,id)
    } else {
        list = list.filter(item => item.id !== value);
       
        changes("base", category, value,id)

    }

    localStorage.setItem(category, JSON.stringify(list));
}



function changes(base, category, value, id) {
    let container = document.getElementById(id);
  
    let basebutton = `<button class="intButton" value="${value}">Interested</button>
      <button class="goButton" value="${value}">Going!</button>`;
    let interested = `<p>you're interested on going</p>
      <button class='intButton clear' value='${value}'>Changed your mind?</button>
      <button class='goButton' value='${value}'>Going!</button>`;
    let going = `<p>You are going to this event</p>
      <button class='goButton clear' value='${value}'>Changed your mind?</button>`;
  
    if (base === "base") {
      switch (category) {
        case "going":          
          container.innerHTML = basebutton;
          break;
        case "interested":
          container.innerHTML = basebutton;
          break;
        case "favorite":
          break;
      }
    }
  
    if (base === 1) {
      switch (category) {
        case "going":
          container.innerHTML = going;
          break;
        case "interested":
          container.innerHTML = interested;
          break;
        case "favorite":
          break;
      }
    }
  }
  