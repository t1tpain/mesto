# Mesto

 **Mesto** - это мой третий проект, который я писал на основе обучения в **[Яндекс.Практикуме](https://practicum.yandex.ru/)**.

Этот проект имеет несколько целей:
  + _Изучение JavaSctipt_
  + _Научиться работать с приложением Figma_
  + _Самостоятельно прогрессировать в адаптивной вёрстке_
  + _Изучение расширенных возможностей GIT_

____

## Technologies

В этом проекте вы можете встретить несколько интересных технологий, которые я использовал для осуществления проекта.

### Создание popup'a
```css
.popup {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
}

.popup.active {
  display: block;
}
```

### JavaScript
```javascript
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
```

## Info

Язык страницы - русский ```lang="ru"```.

Кодировка документа - ```charset="UTF-8"```.

Ссылка на сайт - https://t1tpain.github.io/mesto/