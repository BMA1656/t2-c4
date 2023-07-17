import {eventApi} from "./api.js"
import {dataConstructor} from "../constructor/construtor.js"

function cache(apiData,prop) {
    const cacheProxy = new Proxy(apiData, {
        get: function (target, property) {
            return target[property];
        },
        set: function (target, property, value) {
            target[property] = value;
            localStorage.setItem(`${prop}`, JSON.stringify(apiData));
            return true;           
        }
    });
    Object.assign(cacheProxy, apiData);
    dataConstructor(prop)
}




export async function buildcacheObject(value) {
    const apiData = [];
    const result = await eventApi(value);
    for (let i = 0; i < result.length; i++) {
        apiData.push(result[i])
    }
    cache(apiData,value);
}