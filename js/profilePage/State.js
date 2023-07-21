function getLocalStorageValue(key) {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    return storedValue;
  }
  return null;
}

export default class State {
  constructor() {
    if (!State.instance) {
      const storedValue = getLocalStorageValue('state');
      this.state = storedValue ? JSON.parse(storedValue) : {
        favorite: getLocalStorageValue('favorite') ? JSON.parse(getLocalStorageValue('favorite')) : [],
        going: getLocalStorageValue('going') ? JSON.parse(getLocalStorageValue('going')) : [],
        interested: getLocalStorageValue('interested') ? JSON.parse(getLocalStorageValue('interested')) : [],
      };
      State.instance = this;
    } else {
      this.state = State.instance.state;
    }
  }

  getState() {
    return this.state;
  }

  removeObject(id, category) {
    const categoryState = this.state[category];
    const updatedCategoryState = categoryState.filter((item) => item.id !== id);
    this.state = {
      ...this.state,
      [category]: updatedCategoryState,
    };
  }
}
