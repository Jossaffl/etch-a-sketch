const divContainer = document.getElementById('container');
const button = document.getElementById('options');
const resetter = document.getElementById('resetter');
const boxes = document.getElementsByClassName('untraced');
const eraser = document.getElementById('eraser');
const pencil = document.getElementById('pencil');

function GridResolution(resolution) {
  for (i = 0; i < resolution * resolution; ++i) {
    const splitDiv = document.createElement('div');
    splitDiv.classList.add('untraced');
    splitDiv.setAttribute('style', `height:${Math.sqrt(262144 / (resolution * resolution))}px; width: ${Math.sqrt(262144 / (resolution * resolution))}px;`);
    divContainer.appendChild(splitDiv);
  }
}

button.addEventListener('click', (e) => {
  // eslint-disable-next-line no-alert
  const question = prompt('Please select the number of squares to work with');
  GridResolution(question);
});

resetter.addEventListener('click', () => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < boxes.length; ++i) {
    boxes[i].setAttribute('style', 'backGround-color:white;');
  }
});

function pen() {
  divContainer.querySelectorAll('div').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.classList.remove('untraced');
      element.classList.add('traced');
    });
  });
}

function erased() {
  divContainer.querySelectorAll('div').forEach((element) => {
    element.addEventListener('mouseover', () => {
      element.classList.remove('traced');
      element.classList.add('untraced');
    });
  });
}

pencil.addEventListener('click', pen);
eraser.addEventListener('click', erased);
