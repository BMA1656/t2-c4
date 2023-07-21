export default function createTabs(value) {
  const buttons = value;
  const container = document.getElementById('tabContainer');

  for (let i = 0; i < buttons.length; i++) {
    const newValue = buttons[i].toLowerCase();
    container.innerHTML += `
        <button class="tabButton"  id="button${newValue}" value="${newValue}">${buttons[i]}</button>`;
  }
}
