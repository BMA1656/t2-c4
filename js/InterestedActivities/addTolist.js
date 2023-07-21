import searchLocal from '../tools/searchobject.js';

function changeClass(id) {
  const element = document.getElementById(id);
  if (element.classList.contains('bt2')) {
    element.classList.remove('bt2');
  } else {
    element.classList.add('bt2');
  }
}

function changes(base, category, value, id) {
  const container = document.getElementById(id);

  const basebutton = `<button class="intButton" value="${value}">Interested</button>
      <button class="goButton" value="${value}">Going!</button>`;
  const interested = `<p>you're interested on going</p>
      <button class='intButton clear' value='${value}'>Changed your mind?</button>
      <button class='goButton' value='${value}'>Going!</button>`;
  const going = `<p>You are going to this event</p>
      <button class='goButton clear' value='${value}'>Changed your mind?</button>`;

  if (base === 'base') {
    switch (category) {
      case 'going':
        container.innerHTML = basebutton;
        break;
      case 'interested':
        changeClass(id);
        container.innerHTML = basebutton;
        break;
      case 'favorite':
        break;
      default:
        break;
    }
  }

  if (base === 1) {
    switch (category) {
      case 'going':
        container.innerHTML = going;
        break;
      case 'interested':
        changeClass(id);
        container.innerHTML = interested;
        break;
      case 'favorite':
        break;
      default:
        break;
    }
  }
}
function addList(value, category) {
  const id = `bt${value}`;
  const existingData = localStorage.getItem(category);
  let list = [];

  if (existingData) {
    list = JSON.parse(existingData);
  }

  const isDuplicate = list.some((item) => item.id === value);

  if (!isDuplicate) {
    const object = searchLocal(value);
    list.push(object);

    changes(1, category, value, id);
  } else {
    list = list.filter((item) => item.id !== value);

    changes('base', category, value, id);
  }

  localStorage.setItem(category, JSON.stringify(list));
}
export default addList;
