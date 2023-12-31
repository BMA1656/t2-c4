import changeHeartLink from './changeHeart.js';

function renewheart(item) {
  const object = document.getElementById(item.id);
  changeHeartLink(object);
}

export default function verifylikedstate(tabs) {
  if (localStorage.getItem('favorite')) {
    const favoriteItems = JSON.parse(localStorage.getItem('favorite'));

    favoriteItems.forEach((item) => {
      if (tabs in localStorage && localStorage.getItem(tabs).includes(item.id)) {
        renewheart(item);
      }
    });
  }
}
