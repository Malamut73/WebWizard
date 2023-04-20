const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', function(event) {
  let newValue = event.target.value.replace(/\D/g, '');

  if (newValue.length > 12) {
    newValue = newValue.slice(0, 12);
  }
  event.target.value = newValue;
});

