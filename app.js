// Create const to get the DOM element, canvas.
const canvas = document.getElementById('my-canvas');

// Getting the 2d context (grid).
const ctx = canvas.getContext('2d');

// To draw a little rectangle: 
// ctx.fillStyle = 'purple';       // color of the object
// ctx.fillRect(0, 0, 50, 50);    //  position x, y (1st side), x, y (2nd size) 

// Our looper control.
let looper;

// Out X value that will be incremented.
let rectX = 0;

// Stops the animation.
const stopLooper = () => clearInterval(looper);

// Function that draws the rectangle.
const drawRectangle = (x) => {
  // Stops the animation when the rectangle reaches the end.
  if (x > canvas.width - 50) {
    stopLooper();
  }
  ctx.fillStyle = 'grey';
  ctx.fillRect(x, 0, 50, 50);
};

// motor da animação - limpa a tela e desenha de novo um retangulo novo
// Each loop we call render function.
const render = () => {
  // We clean everything in the canvas.
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Call the function that draws the rectangle incrementing x.
  drawRectangle(rectX += 1);
}

// Starting looper.
looper = setInterval(render, 10);  //a cada 10 milisegundos, chama render