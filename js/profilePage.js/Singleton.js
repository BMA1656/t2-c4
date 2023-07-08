export class Singleton {
    constructor() {
        if (!Singleton.instance) {
            this.favorite = getLocalStorageValue("favorite");
            this.interested = getLocalStorageValue("interested");
            this.going = getLocalStorageValue("going");
            Singleton.instance = this;
        } else {
            Singleton.instance.favorite = getLocalStorageValue("favorite");
            Singleton.instance.interested = getLocalStorageValue("interested");
            Singleton.instance.going = getLocalStorageValue("going");
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
  