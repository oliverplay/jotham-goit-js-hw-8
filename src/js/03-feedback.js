// Import the throttle function from lodash library
import throttle from 'lodash.throttle';

// Select the form element and its input fields for email and message
const form = document.querySelector('.feedback-form');
const emailField = form.querySelector('input');
const messageField = form.querySelector('textarea');

// Get the form state from localStorage and parse it as an object
const userData = JSON.parse(localStorage.getItem('feedback-form-state'));

// Define a function to update the form state in localStorage
function saveFormState() {
  // Create an object with the current values of email and message fields
  const fieldsObject = {
    email: emailField.value,
    message: messageField.value,
  };
  // Convert the object to a JSON string and save it in localStorage with the key 'feedback-form-state'
  localStorage.setItem('feedback-form-state', JSON.stringify(fieldsObject));
}

// Listen to 'input' events on the email field and use throttle to avoid excessive updates
emailField.addEventListener(
  'input',
  throttle(() => {
    // Call the saveFormState function to update the form state in localStorage
    saveFormState();
  }, 500)
);

// Listen to 'input' events on the message field and use throttle to avoid excessive updates
messageField.addEventListener(
  'input',
  throttle(() => {
    // Call the saveFormState function to update the form state in localStorage
    saveFormState();
  }, 500)
);

// Restore the form state from userData (if available) when the page loads
if (userData) {
  emailField.value = userData.email;
  messageField.value = userData.message;
}

// Listen to the form's 'submit' event
form.addEventListener('submit', event => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Check if any of the required fields are empty
  const requiredFields = [emailField, messageField];
  const emptyFields = requiredFields.filter(field => !field.value.trim());

  // If any required field is empty, show an alert and prevent form submission
  if (emptyFields.length > 0) {
    alert('Please fill all fields before submitting the form.');
    return;
  }

  const formData = {
    email: emailField.value,
    message: messageField.value,
  };

  console.log(formData);

  // Clear the form inputs after successful submission
  event.target.reset();

  // Remove the form state from localStorage after submission
  localStorage.removeItem('feedback-form-state');
});
