// libraries
import throttle from 'lodash.throttle';

const FEEDBACK_FORM_KEY = 'feedback-form-state';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};

refs.feedbackForm.addEventListener('submit', onFormSubmit);
refs.feedbackForm.addEventListener('input', throttle(onFormInput, 500));

const parsedData = JSON.parse(localStorage.getItem(FEEDBACK_FORM_KEY)) ?? {};
const formData = { ...parsedData };
refs.emailInput.value = formData.email ?? '';
refs.messageInput.value = formData.message ?? '';

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
