const openEdit = document.getElementById('editButton');
const closeEdit = document.getElementById('closeButton');
const popUpEdit = document.getElementById('popUpEdit');
const formElement = document.querySelector('#editForm');
const nameInput = formElement.querySelector('#nameInput');
const jobInput = formElement.querySelector('#jobInput');
const profileName = document.querySelector('#profileName'); 
const profileJob = document.querySelector('#profileJob');
const openAdd = document.getElementById('addButton');
const closeAdd = document.getElementById('closeButtonAdd');
const popUpAdd = document.getElementById('popUpAdd');
const listElements = document.querySelector('.elements__list');
const addNewElement = document.getElementById('addNewElement');
const nameAdd = document.getElementById('nameAdd');
const linkAdd = document.getElementById('linkAdd');
let cardList = '';
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

function renderElements() {
  initialCards.forEach(card => {
    cardList +=`
    <li class="elements__card">
      <button id="trashButton" type="button" class="elements__card-trash"></button>
      <img id="cardImage" src='${card.link}' alt='${card.name}' class="elements__card-image">
      <div class="elements__card-main">
        <h2 class="elements__card-main-title">${card.name}</h2>
        <button id="likeButton" type="button" class="elements__card-main-like"></button>
      </div>
    </li>
    `;
    
    listElements.innerHTML = cardList;
  })
}

renderElements();

openEdit.addEventListener('click', function(evt) {
  evt.preventDefault();
  popUpEdit.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

closeEdit.addEventListener('click', function(evt) {
  evt.preventDefault();
  popUpEdit.classList.remove('popup_opened');
});

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popUpEdit.classList.remove('popup_opened');
}

formElement.addEventListener('submit', handleFormSubmit);

openAdd.addEventListener('click', function(evt) {
  evt.preventDefault();
  popUpAdd.classList.add('popup_opened');
});

closeAdd.addEventListener('click', function(evt) {
  evt.preventDefault();
  popUpAdd.classList.remove('popup_opened');
});

addNewElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  const newCard = `
  <li class="elements__card">
    <button id="trashButton" type="button" class="elements__card-trash"></button>
    <img id="cardImage" src='${linkAdd.value}' alt='${nameAdd.value}' class="elements__card-image">
    <div class="elements__card-main">
      <h2 class="elements__card-main-title">${nameAdd.value}</h2>
      <button id="likeButton" type="button" class="elements__card-main-like"></button>
    </div>
  </li>
  `;
  listElements.innerHTML = newCard + cardList;
  popUpAdd.classList.remove('popup_opened');
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
    
      if (likeButton.className === 'elements__card-main-like') {
        likeButton.classList.add('elements__card-main-like_activated');
        likeButton.classList.remove('elements__card-main-like');
      } else if (likeButton.className === 'elements__card-main-like') {
        likeButton.classList.add('elements__card-main-like');
        likeButton.classList.remove('elements__card-main-like_activated');
      } else {
        likeButton.classList.remove('elements__card-main-like_activated');
        likeButton.classList.add('elements__card-main-like');
      }  
    });

    const imgPopup = document.getElementById('popUpImage');
    const closeButtonImg = document.getElementById('closeButtonImg');
    const newImage = card.querySelector('#cardImage');
    const newParagraph = card.querySelector('.elements__card-main-title');
    const imgContent = document.querySelector('.imgpopup__wraper');

    card.addEventListener('click', function(evt) {
      imgPopup.classList.add('imgpopup_opened');
      const newImg = `
            <img class="imgpopup__img" src='${newImage.getAttribute('src')}' alt='${newParagraph.textContent}'>
            <p class="imgpopup__name">${newParagraph.textContent}</p>
      `;

      imgContent.innerHTML = newImg;
    });

    closeButtonImg.addEventListener('click', function(evt) {
      imgPopup.classList.remove('imgpopup_opened');
    });
  });