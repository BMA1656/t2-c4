export class State {
    constructor() {
        if (!State.instance) {
            this.favorite = getLocalStorageValue("favorite");
            this.interested = getLocalStorageValue("interested");
            this.going = getLocalStorageValue("going");
            State.instance = this;
        } else {
            State.instance.favorite = getLocalStorageValue("favorite");
            State.instance.interested = getLocalStorageValue("interested");
            State.instance.going = getLocalStorageValue("going");
        }
        return State.instance;
    }   
    getFavorite() {
        return this.favorite;
    }    
    getInterested() {
        return this.interested;
    } 
    getGoing() {
        return this.going;
    }
}
function getLocalStorageValue(key) {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return null;
  }
  