const speedControl = document.getElementById('speed');
const fontSizeControl = document.getElementById('fontSize');
const backgroundColorControl = document.getElementById('backgroundColor');
const fontColorControl = document.getElementById('fontColor');
const scrollButton = document.getElementById('scrollButton');
const mirrorButton = document.getElementById('mirrorButton');
const resetButton = document.getElementById('resetButton');
const fullscreenButton = document.getElementById('fullscreenButton');
const text = document.getElementById('text');

let speed = 5;
let fontSize = 36;
let backgroundColor = '#000000';
let fontColor = '#ffffff';
let isScrolling = false;
let lastTime = 0; // Add this for time-based animation

// Load saved script from localStorage
if (localStorage.getItem('teleprompterScript')) {
  text.value = localStorage.getItem('teleprompterScript');
}

function updateStyles() {
  text.style.fontSize = `${fontSize}px`;
  text.style.backgroundColor = backgroundColor;
  text.style.color = fontColor;
}

// NEW: Time-based scroll function
function scroll(time) {
  if (isScrolling) {
    if (!lastTime) {
      lastTime = time;
    }
    const deltaTime = time - lastTime;
    lastTime = time;

    // The speed value (1-10) is used to calculate pixels per second.
    // Let's map 1-10 to a reasonable pixels-per-second range, e.g., 20-200.
    const scrollSpeed = speed * 20;
    text.scrollTop += (scrollSpeed * deltaTime) / 1000;

    requestAnimationFrame(scroll);
  }
}

function toggleScrolling() {
  isScrolling = !isScrolling;
  if (isScrolling) {
    scrollButton.textContent = 'Stop';
    lastTime = 0; // Reset lastTime when starting
    requestAnimationFrame(scroll); // Start the animation loop
  } else {
    scrollButton.textContent = 'Start';
  }
}

scrollButton.addEventListener('click', toggleScrolling);

mirrorButton.addEventListener('click', () => {
  // Mirror the text area, not the container
  text.style.transform = text.style.transform === 'scaleX(-1)' ? '' : 'scaleX(-1)';
});

resetButton.addEventListener('click', () => {
  // Reset the text area's scroll position
  text.scrollTop = 0;
});

fullscreenButton.addEventListener('click', () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    // Request fullscreen on the main document element
    document.documentElement.requestFullscreen();
  }
});

speedControl.addEventListener('input', (e) => {
  speed = parseFloat(e.target.value);
});

fontSizeControl.addEventListener('input', (e) => {
  fontSize = e.target.value;
  updateStyles();
});

backgroundColorControl.addEventListener('input', (e) => {
  backgroundColor = e.target.value;
  updateStyles();
});

fontColorControl.addEventListener('input', (e) => {
  fontColor = e.target.value;
  updateStyles();
});

// Save script to localStorage on input
text.addEventListener('input', () => {
  localStorage.setItem('teleprompterScript', text.value);
});

// Keyboard controls
window.addEventListener('keydown', (e) => {
  // Use e.code for layout-independent key recognition
  if (e.code === 'Space') {
    e.preventDefault();
    toggleScrolling();
  } else if (e.code === 'ArrowUp') {
    e.preventDefault();
    speedControl.value = Math.min(parseInt(speedControl.max), parseInt(speedControl.value) + 1);
    speed = parseFloat(speedControl.value);
  } else if (e.code === 'ArrowDown') {
    e.preventDefault();
    speedControl.value = Math.max(parseInt(speedControl.min), parseInt(speedControl.value) - 1);
    speed = parseFloat(speedControl.value);
  } else if (e.code === 'ArrowRight') {
    e.preventDefault();
    // Jump forward in the text area
    text.scrollTop += 100;
  } else if (e.code === 'ArrowLeft') {
    e.preventDefault();
    // Jump backward in the text area
    text.scrollTop -= 100;
  }
});

updateStyles();