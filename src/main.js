import './style.css'
import './style.css'

const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const inputElements = document.querySelectorAll('input')
const submitBtn = document.getElementById('submit')
const email = document.getElementById('email')
const form = document.querySelector('form')

const displayError = (element) => {
    element.classList.add('border-red-custom','bg-[url(/images/icon-error.svg)]','bg-no-repeat','bg-[right_1rem_center]')
    element.nextElementSibling.classList.remove('hidden','absolute')
}

const removeError = (element) => {
    element.classList.remove('border-red-custom','bg-[url(/images/icon-error.svg)]','bg-no-repeat','bg-[right_1rem_center]')
    element.nextElementSibling.classList.add('hidden','absolute')
}



form.addEventListener('submit', (e) => {
  let isValid = true;

  inputElements.forEach((elem) => {
    if (elem.id === 'email' && !validEmail.test(elem.value)) {
      displayError(elem);
      isValid = false;
    } else if (elem.value.trim() === '') {
      displayError(elem);
      isValid = false;
    }
  });

  if (!isValid) {
    e.preventDefault();
  }
});


inputElements.forEach(inputElem => {
  inputElem.addEventListener('input', () => {
    removeError(inputElem)
  });
});