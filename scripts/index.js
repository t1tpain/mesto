const buttonEditProfile = document.querySelector('#editButton');
const buttonCloseProfile = document.querySelector('#closeButton');
const popUpEdit = document.querySelector('#popUpEdit');
const formElement = document.querySelector('#editForm');
const nameInput = formElement.querySelector('#nameInput');
const jobInput = formElement.querySelector('#jobInput');
const profileName = document.querySelector('#profileName'); 
const profileJob = document.querySelector('#profileJob');
const buttonOpenAdd = document.querySelector('#addButton');
const buttonCloseAdd = document.querySelector('#closeButtonAdd');
const popupAdd = document.querySelector('#popUpAdd');
const listElements = document.querySelector('.elements__list');
const elementNewAdd = document.querySelector('#addNewElement');
const nameAdd = document.querySelector('#nameAdd');
const linkAdd = document.querySelector('#linkAdd');
const imgPopup = document.querySelector('#popUpImage');
const buttonCloseImg = document.querySelector('#closeButtonImg');
const imgContent = document.querySelector('.popup__img');
const paragraphContent = document.querySelector('.popup__name');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#cardTemplate').content;

const openPopup = function(popupElement) {
  popupElement.classList.add('popup_opened');
}

const popupClose = function(popupElement) {
  popupElement.classList.remove('popup_opened');
}

const handleOpenImagePreview = (name, link) => {
  openPopup(imgPopup);
  imgContent.src = link;
  imgContent.alt = name;
  paragraphContent.textContent = name;
}

const handleCardDelete = (card) => {
  card.remove();
}

const handleLikeClick = (evt) => {
  evt.target.classList.toggle('element__main-like_activated');
  evt.target.classList.toggle('element__main-like');
}

function makeNewCard(name, link) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  const cardImage = cardElement.querySelector('#cardImage');

  cardImage.src = link;
  cardImage.alt = name;
  cardElement.querySelector('.element__main-title').textContent = name;

  cardImage.addEventListener('click', () => handleOpenImagePreview(name, link));
  cardElement.querySelector('#likeButton').addEventListener('click', handleLikeClick);
  cardElement.querySelector('#trashButton').addEventListener('click', () => handleCardDelete(cardElement));
  
  return cardElement;
}

function renderCard() { 
  initialCards.forEach(card => {
    listElements.prepend(makeNewCard(card.name, card.link));
  })
}

renderCard();

buttonCloseImg.addEventListener('click', function(evt) {
  popupClose(imgPopup);
});

elementNewAdd.addEventListener('click', function(evt) {
  evt.preventDefault();  
  listElements.prepend(makeNewCard(nameAdd.value, linkAdd.value));
  popupClose(popupAdd);
});


buttonEditProfile.addEventListener('click', function(evt) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popUpEdit);
});

buttonCloseProfile.addEventListener('click', function(evt) {
  popupClose(popUpEdit);
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose(popUpEdit);
}

formElement.addEventListener('submit', handleFormSubmit);

buttonOpenAdd.addEventListener('click', function(evt) {
  openPopup(popupAdd);
});

buttonCloseAdd.addEventListener('click', function(evt) {
  popupClose(popupAdd);
});