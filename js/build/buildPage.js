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

export function createTabs() {
    const buttons = ["Music", "Sports", "Food", "Business", "Art"];
    const container = document.getElementById("tabContainer");
    const vl = buttons[0].toLowerCase()
    for (let i = 0; i < buttons.length; i++) {
        const value = buttons[i].toLowerCase();
        container.innerHTML += `
        <button class="tabButton"  id="button${value}" value="${value}">${buttons[i]}</button>`;
    }
    createValueforCahe(vl);
}