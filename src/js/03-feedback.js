import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name="email"]');
const messageInput = document.querySelector('[name="message"]');

//Колбєк функція для збереження  данних в локал схов.
function onInput() {
  const formCurrentValue = {
    email: emailInput.value,
    message: messageInput.value,
  };
  //Зберігаємо кожну зміну в локал.сховище
  localStorage.setItem('feedback-form-state', JSON.stringify(formCurrentValue));
}

//Прослуховуємо  подію input на формі
form.addEventListener('input', throttle(onInput, 500));

//Распарсити дані з локал.сховища
try {
  const isFormCurrentValue = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  //Записати дані з распарсених данних до  інпутів
  if (isFormCurrentValue) {
    emailInput.value = isFormCurrentValue.email;
    messageInput.value = isFormCurrentValue.message;
  }
} catch (error) {
  console.log('Помилка' + error);
}

//Прослуховуємо  подію submit
form.addEventListener('submit', e => {
  if (emailInput.value !== '' && messageInput.value !== '') {
    //Перезавтаження сторінки
    e.preventDefault();

    //В консолі відображено дані
    const formCurrentValue = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formCurrentValue);

    //Очищення сховища
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Заповніть всі поля!');
  }
});
