import createValueforCahe from './build/buildPage.js';
import changeCardList from './events/buttonEvent.js';
import addList from './InterestedActivities/addTolist.js';
import createTabs from './tools/tabs.js';
import changeHeartLink from './tools/changeHeart.js';
import verifylikedstate from './tools/verifyIFLiked.js';

const tabButtons = document.getElementById('tabContainer');
tabButtons.addEventListener('click', (event) => {
  if (event.target.matches('.tabButton')) {
    const object = event.target;
    const objectValue = object.value;
    createValueforCahe(objectValue);
    changeCardList(objectValue);
    verifylikedstate(objectValue);
  }
});

window.addEventListener('load', async () => {
  await createTabs(['Music', 'Sports', 'Food', 'Business', 'Art']);
  createValueforCahe('music');
  changeCardList('music');
  verifylikedstate('music');
});

const intButtonEvent = document.getElementById('cardsContainer');
intButtonEvent.addEventListener('click', (event) => {
  if (event.target.matches('.intButton')) {
    const button = event.target;
    const buttonValue = button.getAttribute('value');
    addList(buttonValue, 'interested');
  }
});

const goButtonEvent = document.getElementById('cardsContainer');
goButtonEvent.addEventListener('click', (event) => {
  if (event.target.matches('.goButton')) {
    const button = event.target;
    const buttonValue = button.getAttribute('value');
    addList(buttonValue, 'going');
  }
});

const heart = document.getElementById('cardsContainer');
heart.addEventListener('click', (event) => {
  if (event.target.matches('.heart')) {
    const heartElement = event.target.closest('.heart');
    const heartvalue = heartElement.id;
    changeHeartLink(heartElement);
    addList(heartvalue, 'favorite');
  }
});
