import { ProfileCardConstructor } from "../InterestedActivities/cardsBuilder.js";
import {
    Singleton
} from "./Singleton.js";




export function dataConstructor(value) {
    const builder = new Singleton();

    let events;
    switch (value) {
        case "favorite":
            events = [builder.getFavorite()];
            break;
        case "interested":
            events = [builder.getInterested()];
            break;
        case "going":
            events = [builder.getGoing()];
            break;
        default:
            events = [];
            break;
    }

    const container = document.getElementById(`${value}Card`);
    if (container) {
        container.innerHTML = "";
        events.forEach(subArray => {
            subArray.forEach(event => {
                console.log(event);
                Constructor(event, value);
            });
        });
    }
}

function Constructor(event, value) {
    const card = new ProfileCardConstructor (
        event.id,
        event.title,
        event.image,
        event.date,
        event.location,
        event.price
    );

    const cardHtml = card.profileCard(value);
    const container = document.getElementById(`${value}Card`);
    if (container) {
        container.innerHTML += cardHtml;
    }
}