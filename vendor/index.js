let openEdit = document.getElementById('editButton');
let closeEdit = document.getElementById('closeButton');
let popUpEdit = document.getElementById('popUp');
let formElement = document.querySelector('#editForm');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');

openEdit.addEventListener('click', function(evt) {
  evt.preventDefault();
  popUpEdit.classList.add('active');
})

closeEdit.addEventListener('click', function(evt) {
  evt.preventDefault();
  popUpEdit.classList.remove('active');
})

function handleFormSubmit (evt) {
    evt.preventDefault();
    let profileName = document.querySelector('#profileName');
    let profileJob = document.querySelector('#profileJob').textContent = jobInput.value;
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popUpEdit.classList.remove('active');
}

formElement.addEventListener('submit', handleFormSubmit);