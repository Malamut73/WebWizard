function callbackSendler (){

    const callbackName = document.querySelector('.callback__popup-name');
    const callbackPhone = document.querySelector('.callback__popup-phone');
    const checkbox = document.querySelector('.callback__popup-checkbox input[type="checkbox"]');
    const popup = document.querySelector('.callback__popup');
    const callbackIcon = document.querySelector('.callback__icon');

    if (checkbox.checked) {
        const name = callbackName.value;
        const number = callbackPhone.value;
        console.log('sendler has been done')
        
        // fetch('https://sndmlsrvc.ru/message', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({  
        //         name: name,
        //         number: number,
        //         email: 'null',
        //         description: 'null',
        //         site: 'WebWizard',
        //         dateOfCreated: new Date().toISOString()
        //     })
        //   });
        
        callbackName.value = "";
        callbackPhone.value = "";
        checkbox.checked = false;

        popup.style.display = 'none';
        callbackIcon.style.display = 'block';
    
    }
}




