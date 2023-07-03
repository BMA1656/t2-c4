import {
    buildcacheObject
} from "../api/createCache.js";

import {
    dataConstructor
} from "../constructor/construtor.js";


export function createValueforCahe(id) {
    const value = id;
    const storedValue = localStorage.getItem(value);
    if (storedValue) {
        dataConstructor(value);
    } else {
        buildcacheObject(value)
    }
}
