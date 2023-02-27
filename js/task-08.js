document.body.style.backgroundColor = '#888888';
document.body.style.color = '#870576';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitHandler);
const profile = {};

function submitHandler(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Error!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  event.currentTarget.reset();
} 
