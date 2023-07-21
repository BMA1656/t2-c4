import eventApi from './api.js';
import { dataConstructor } from '../constructor/construtor.js';

function cache(apiData, prop) {
  function getCachedData() {
    return JSON.parse(localStorage.getItem(`${prop}`)) || [];
  }

  const cachedData = getCachedData();
  const cacheProxy = new Proxy(cachedData, {
    get(target, property) {
      return target[property];
    },
    set(target, property, value) {
      target[property] = value;
      localStorage.setItem(`${prop}`, JSON.stringify(cachedData));
      return true;
    },
  });

  Object.assign(cacheProxy, apiData);
  dataConstructor(prop);
}

export default async function buildcacheObject(value) {
  const apiData = [];
  const result = await eventApi(value);
  for (let i = 0; i < result.length; i++) {
    apiData.push(result[i]);
  }
  cache(apiData, value);
}
