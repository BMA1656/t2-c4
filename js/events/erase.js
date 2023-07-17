import { State } from "../profilePage/State.js";


export function removeCardFromContainer(cardContainer, cardId) {
    const container = document.getElementById(`${cardContainer}Card`);
    const cardToRemove = document.getElementById(cardId);

    if (cardToRemove) {
        container.removeChild(cardToRemove);
    }
}


export function eraseObject(id, category) {
    return new Promise((resolve, reject) => {
      try {
        const stateInstance = new State();
        stateInstance.removeObject(id, category);
        updateStateInLocalStorage(id,category)
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
  


export function updateStateInLocalStorage(id, category) {
    return new Promise((resolve, reject) => {
      try {
        const storedValue = localStorage.getItem(category);
        const storedObjects = storedValue ? JSON.parse(storedValue) : [];
        const updatedObjects = storedObjects.filter(obj => obj.id !== id);
        const updatedValue = JSON.stringify(updatedObjects);
        localStorage.setItem(category, updatedValue);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }