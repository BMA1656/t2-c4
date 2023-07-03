

export function createTabs( value ) {
    const buttons = value;
    const container = document.getElementById("tabContainer");
    
    for (let i = 0; i < buttons.length; i++) {
        const value = buttons[i].toLowerCase();
        container.innerHTML += `
        <button class="tabButton"  id="button${value}" value="${value}">${buttons[i]}</button>`;
    }
   
}