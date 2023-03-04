const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

//Колбєк функція для контроля чи є запис в полях
function onInput(e) {
  if (email.value !== '' || message.value !== '') {
    const formCurrentValue = {
      email: e.currentTarget.elements.email.value,
      message: e.currentTarget.elements.message.value,
    };
    //Зберігаємо кожну зміну в локал.сховище
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(formCurrentValue)
    );
  }
}

//Прослуховуємо  подію input на формі
form.addEventListener('input', onInput);

//Распарсити дані з локал.сховища
try {
  const isFormCurrentValue = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  //Записати дані з распарсених данних до  інпутів
  if (isFormCurrentValue) {
    email.value = isFormCurrentValue.email;
    message.value = isFormCurrentValue.message;
  }
} catch (error) {
  console.log('Помилка' + error);
}

//Прослуховуємо  подію submit
form.addEventListener('submit', e => {
    
  //Перезавантажуємо сторінку
  e.preventDefault();

  //В консолі відображаємо дані
  const formCurrentValue = {
    email: email.value,
    message: message.value,
  };
  console.log(formCurrentValue);

  //Очищення сховища
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});
