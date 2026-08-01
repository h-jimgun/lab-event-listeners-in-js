function changeBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
}

function resetBackgroundColor() {
  document.body.style.backgroundColor = ''; 
}

function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  if (display) {
    display.textContent = `Key pressed: ${event.key}`;
  }
}

function displayUserInput(event) {
  const display = document.getElementById('textInputDisplay');
  if (!display) return;

  let value = '';
  if (event && event.target && typeof event.target.value === 'string') {

    value = event.target.value;
  } else {

    const input = document.getElementById('textInput');
    if (input) {
      value = input.value;
    }
  }

  display.textContent = `You typed: ${value}`;
}

function setupEventListeners() {
  document.getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor);

  document.getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);

  document.getElementById('textInput')
    .addEventListener('input', displayUserInput);
}


if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners);
}


module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
};