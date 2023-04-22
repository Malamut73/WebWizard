const nameInput = document.getElementById('name');
const telInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const descriptionInput = document.getElementById('description');
const agreeCheckbox = document.getElementById('agry');
const orderUnderline = document.querySelector('.order__agree-underline');


const button = document.querySelector('.order__send');

button.addEventListener('click', (event) => {
  event.preventDefault(); 

  if (!agreeCheckbox.checked) {
    orderUnderline.classList.add('error'); 
    return;
  }
  
  const name = nameInput.value;
  const number = telInput.value;
  const email = emailInput.value;
  const description = descriptionInput.value;

  fetch('https://sndmlsrvc.ru/message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({  
        name: name,
        number: number,
        email: email,
        description: description,
        site: 'WebWizard',
        dateOfCreated: new Date().toISOString()
    })
  });

  nameInput.value = "";
  telInput.value = "";
  emailInput.value = "";
  descriptionInput.value = "";
});

agreeCheckbox.addEventListener('change', () => {
  if (agreeCheckbox.checked) {
    orderUnderline.classList.remove('error');
  }
});