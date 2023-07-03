export class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.favorite = getLocalStorageValue("favorite");
            this.interested = getLocalStorageValue("interested");
            this.going = getLocalStorageValue("going");
            Singleton.instance = this;
        }
        return Singleton.instance;
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
  