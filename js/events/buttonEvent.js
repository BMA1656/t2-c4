export function changeCardList(card) {
    const cardContent = card + "Card";
    const buttonContent = "button" + card;
    console.log(cardContent)

    const cardContainer = document.querySelectorAll("#cardsContainer ol");
    const buttonContainer = document.querySelectorAll("#tabContainer button");

    buttonContainer.forEach(function (buttonContent) {
        buttonContent.classList.remove("active");
    });
    cardContainer.forEach(function (cardContent) {
        cardContent.classList.add("hide");
        cardContent.classList.remove("display");
    });
    const selectedTabContent = document.getElementById(buttonContent);
    selectedTabContent.classList.add("active");

    const selectedcardContent = document.getElementById(cardContent);
    selectedcardContent.classList.remove("hide");
    selectedcardContent.classList.add("display");

}