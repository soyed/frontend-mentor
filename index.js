const canvas = document.getElementById('draw');

// Note: Canvas render a 2-d layout
const context = canvas.getContext('2d');

// Set canvas width and height to that of the current window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set canvas stroke colour
context.strokeStyle = '#BADA55';

// this is used to style the stroke shape
context.lineJoin = 'round';
context.lineCap = 'round';

context.lineWidth = 100;

// Note: to track when drawing is complete
// it is similar to the 'keyup' eventListener

let isDrawing = false;

// Set the starting coordinates of a drawing on the canvas

let lastX = 0;
let lastY = 0;
let hue = 0;

let direction = true;

const draw = (event) => {
  if (!isDrawing) return;
  const { offsetX, offsetY } = event;
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  context.beginPath();
  context.moveTo(lastX, lastY);
  context.lineTo(offsetX, offsetY);
  context.stroke();
  // update last X and last y
  [lastX, lastY] = [offsetX, offsetY];

  hue > 360 ? (hue = 0) : hue++;
  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? context.lineWidth++ : context.lineWidth--;

  console.log(context.lineWidth);
};

// This tracks when drawing on the canvas
canvas.addEventListener('mousedown', (event) => {
  isDrawing = true;
  const { offsetX, offsetY } = event;
  // set the starting point to the point clicked on the canvas
  [lastX, lastY] = [offsetX, offsetY];
});

canvas.addEventListener('mousemove', draw);
// These two eventListeners track when drawing has finished
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
