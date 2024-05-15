const STORAGE_KEY = 'feedback-form-state';
const formElem = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };

formElem.addEventListener('input', e => {
  const value = e.target.value.trim();
  formData[e.target.name] = value;
  saveFormData(STORAGE_KEY, formData);
});

formElem.addEventListener('submit', e => {
  e.preventDefault();
  if (correctForm()) {
    console.log(formData);
    clearFormData();
  } else {
    noCorrectForm();
  }
});

function saveFormData(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromData(key) {
  const data = localStorage.getItem(key);
  try {
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    return data;
  }
}

function clearFormData() {
  formData.email = '';
  formData.message = '';
  formElem.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function correctForm() {
  return formData.email.trim() !== '' && formData.message.trim() !== '';
}

function noCorrectForm() {
  alert('Fill please all fields');
}

// ========================================
function init() {
  const storedData = loadFromData(STORAGE_KEY);
  if (storedData) {
    formData.email = storedData.email || '';
    formData.message = storedData.message || '';
    formElem.elements.email.value = formData.email;
    formElem.elements.message.value = formData.message;
  }
}
init();
