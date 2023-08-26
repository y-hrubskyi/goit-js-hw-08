// libraries
import throttle from 'lodash.throttle';

// code
const FEEDBACK_FORM_KEY = 'feedback-form-state';

const feedbackFormRef = document.querySelector('.feedback-form');
feedbackFormRef.addEventListener('submit', onFormSubmit);
feedbackFormRef.addEventListener('input', throttle(onFormInput, 500));

const parsedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)) ?? {};
let formData = { ...parsedData };
for (const key in formData) {
  feedbackFormRef.elements[key].value = formData[key];
}

function onFormSubmit(event) {
  event.preventDefault();

  const { email, message } = event.currentTarget.elements;
  if (!email.value || !message.value) {
    return;
  }

  console.log(formData);
  formData = {};
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_KEY);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_FORM_KEY, JSON.stringify(formData));
}
