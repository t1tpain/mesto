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
const closeButtonImg = document.querySelector('#closeButtonImg');
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

function makeNewCard(src, alt, text) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('#cardImage').src = src;
  cardElement.querySelector('#cardImage').alt = alt;
  cardElement.querySelector('.element__main-title').textContent = text;
  listElements.prepend(cardElement);
}

function renderCard() { 
  initialCards.forEach(card => {
    makeNewCard(card.link, card.name, card.name);
    addEvents();
  })
}

renderCard();



const openPopup = function(popupElement) {
  popupElement.classList.add('popup_opened');
}

const popupClose = function(popupElement) {
  popupElement.classList.remove('popup_opened');
}




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


const imgContent = document.querySelector('.popup__img');
const paragraphContent = document.querySelector('.popup__name');

function addEvents() {
  const cards = document.querySelectorAll('.element');
  const likeButton = document.querySelector('#likeButton');

  cards.forEach((card) => {
    
    const trashButton = card.querySelector('#trashButton');
  
    trashButton.addEventListener('click', function(evt) {
      card.remove();
    });
  });

  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('element__main-like_activated');
    evt.target.classList.toggle('element__main-like');
  });

  const newImage = document.querySelector('#cardImage');
  const newParagraph = document.querySelector('.element__main-title');


  newImage.addEventListener('click', function(evt) {
    openPopup(imgPopup);
    imgContent.src = newImage.getAttribute('src');
    imgContent.alt = newParagraph.textContent;
    paragraphContent.textContent = newParagraph.textContent;
  });

  closeButtonImg.addEventListener('click', function(evt) {
    popupClose(imgPopup);
  });
}

elementNewAdd.addEventListener('click', function(evt) {
  evt.preventDefault();
  makeNewCard(linkAdd.value, linkAdd.value, nameAdd.value);
  popupClose(popupAdd);
  addEvents();
});