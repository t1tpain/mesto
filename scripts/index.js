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
const addNewElement = document.querySelector('#addNewElement');
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


function renderCard() { 
  initialCards.forEach(card => {
    const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
    cardElement.querySelector('#cardImage').src = `${card.link}`;
    cardElement.querySelector('#cardImage').alt = `${card.name}`;
    cardElement.querySelector('.elements__card-main-title').textContent = `${card.name}`;
    listElements.append(cardElement);
  })
}

renderCard();



const popupOpen = function(popupElement) {
  popupElement.classList.add('popup_opened');
}

const popupClose = function(popupElement) {
  popupElement.classList.remove('popup_opened');
}




buttonEditProfile.addEventListener('click', function(evt) {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popupOpen(popUpEdit);
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
  popupOpen(popupAdd);
});

buttonCloseAdd.addEventListener('click', function(evt) {
  popupClose(popupAdd);
});

addNewElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  cardElement.querySelector('#cardImage').src = `${linkAdd.value}`;
  cardElement.querySelector('#cardImage').alt = `${linkAdd.value}`;
  cardElement.querySelector('.elements__card-main-title').textContent = `${nameAdd.value}`;
  listElements.prepend(cardElement);
  popupClose(popupAdd);
});

const cards = document.querySelectorAll('.elements__card');

cards.forEach((card) => {
  const likeButton = card.querySelector('#likeButton');
  const trashButton = card.querySelector('#trashButton');

  trashButton.addEventListener('click', function(evt) {
    card.remove();
    trashButton.removeEventListener('click', function(evt) {
      card.remove();
    });
  });

  likeButton.addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__card-main-like_activated');
    evt.target.classList.toggle('elements__card-main-like');
  });

  const newImage = card.querySelector('#cardImage');
  const newParagraph = card.querySelector('.elements__card-main-title');
  const imgContent = document.querySelector('.popup__img');
  const paragraphContent = document.querySelector('.popup__name');

  newImage.addEventListener('click', function(evt) {
    popupOpen(imgPopup);
    imgContent.src = newImage.getAttribute('src');
    imgContent.alt = newParagraph.textContent;
    paragraphContent.textContent = newParagraph.textContent;
  });

  closeButtonImg.addEventListener('click', function(evt) {
    popupClose(imgPopup);
  });
});