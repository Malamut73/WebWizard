const nameInput = document.getElementById('name');
const telInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const descriptionInput = document.getElementById('description');


const button = document.querySelector('.order__send');


button.addEventListener('click', (event) => {
  event.preventDefault(); 
  
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

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("description").value = "";
});