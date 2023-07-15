export class State {
  constructor() {
    if (!State.instance) {
      const storedValue = getLocalStorageValue("state");
      this.state = storedValue ? JSON.parse(storedValue) : {
        favorites: getLocalStorageValue("favorites") ? JSON.parse(getLocalStorageValue("favorites")) : [],
        going: getLocalStorageValue("going") ? JSON.parse(getLocalStorageValue("going")) : [],
        interested: getLocalStorageValue("interested") ? JSON.parse(getLocalStorageValue("interested")) : []
      };
      State.instance = this;
    } else {
      this.state = State.instance.state;
    }
    return State.instance;
  }

  getState() {
    return this.state;
  }
}


function getLocalStorageValue(key) {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    return storedValue;
  }
  return null;
}
  