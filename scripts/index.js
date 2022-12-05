let openEdit = document.getElementById('editButton');
let closeEdit = document.getElementById('closeButton');
let popUpEdit = document.getElementById('popUp');
let formElement = document.querySelector('#editForm');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');
let profileName = document.querySelector('#profileName'); 
let profileJob = document.querySelector('#profileJob');

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