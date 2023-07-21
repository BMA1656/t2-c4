export default function changeCardList(card) {
  const localCardContent = `${card}Card`;
  const localButtonContent = `button${card}`;

  const cardContainer = document.querySelectorAll('#cardsContainer ol');
  const buttonContainer = document.querySelectorAll('#tabContainer button');

  buttonContainer.forEach((buttonContent) => {
    buttonContent.classList.remove('active');
  });
  cardContainer.forEach((cardContent) => {
    cardContent.classList.add('hide');
    cardContent.classList.remove('display');
  });
  const selectedTabContent = document.getElementById(localButtonContent);
  selectedTabContent.classList.add('active');

  const selectedcardContent = document.getElementById(localCardContent);
  selectedcardContent.classList.remove('hide');
  selectedcardContent.classList.add('display');
}
