
function changeBackgroundColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  document.body.style.backgroundColor = randomColor;
}


function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}


function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  if (display) {
    display.textContent = `You pressed: ${event.key}`;
  }
}


function displayUserInput(event) {
  const display = document.getElementById('textInputDisplay');
  if (display) {
    display.textContent = `You typed: ${event.target.value}`;
  }
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