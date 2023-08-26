// libraries
import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

const formData = {};
const parsedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)) || {};
for (key in parsedData) {
  formData[key] = parsedData[key];
  formRef.elements[key].value = formData[key];
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}
