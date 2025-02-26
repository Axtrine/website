let autoRotateInterval = null;
let currentIndex = 0; 
let isAutoRotateActive = false; 

function startAutoRotate() {
if (isAutoRotateActive) {
console.log("Auto-rotate is already active.");
return;
}

isAutoRotateActive = true;
autoRotateInterval = setInterval(() => {
loadText(currentIndex);
currentIndex = (currentIndex + 1) % textOptions.length; // Loop back to start
console.log(`Rotating to index: ${currentIndex}`);
}, 2000);

console.log("Auto-rotate started.");
updateRotationStatus(true);
}


function pauseAutoRotate() {
if (autoRotateInterval) {
clearInterval(autoRotateInterval);
autoRotateInterval = null;
isAutoRotateActive = false;
console.log("Auto-rotate paused.");
updateRotationStatus(false);
}
}
function loadText(index) {
if (index < 0 || index >= textOptions.length) {
console.error(`Invalid index: ${index}. Must be between 0 and ${textOptions.length - 1}.`);
return;
}
document.getElementById('dynamicText').innerText = textOptions[index];
}

function updateRotationStatus(isActive) {
const statusElement = document.getElementById('rotationStatus');
if (statusElement) {
statusElement.innerText = isActive ? "Auto-rotate: ON" : "Auto-rotate: OFF";
}
}
// Text loading
function loadRandomText() {
const randomIndex = Math.floor(Math.random() * textOptions.length);
loadText(randomIndex);

}
console.log("uhhhh, hi?")

function loadText(index) {
const dynamicText = document.getElementById('dynamicText');
if (index >= 0 && index < textOptions.length) {
dynamicText.classList.add('hidden'); 

setTimeout(() => {
dynamicText.innerHTML = textOptions[index];
dynamicText.classList.remove('hidden'); 
}, 300); 

dynamicText.innerHTML = escapeHTML(textOptions[index]);
} else {

console.error(`Index out of bounds. Please provide a number between 0 and ${textOptions.length - 1}.`);
}
// Cycle on keypress
}
document.addEventListener('keydown', (event) => {


}

);
// i done forgor
function escapeHTML(html) {
const div = document.createElement('div');
div.textContent = html;
return div.innerHTML;
}
loadRandomText();

window.loadText = loadText;
window.loadRandomText = loadRandomText;
function stopAutoRotate() {
clearInterval(autoRotateInterval);
}

