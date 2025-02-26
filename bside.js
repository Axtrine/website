
// i think this works?
const textOptions = [
    "The end.",
    "The end.",
    "The end.",
    "The end².",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end?",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "God, I hate this stupid ass place.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "<a href='index.html' target='_blank'>Wanna break from the loop?.</a>",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end.",
    "The end."
];


// Text-to-speech
const textCounters = new Array(textOptions.length).fill(0);
function speakText(index) {
const utterance = new SpeechSynthesisUtterance(textOptions[index]);
speechSynthesis.speak(utterance);
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
// speakText(index);
console.error(`Index out of bounds. Please provide a number between 0 and ${textOptions.length - 1}.`);
}
// Cycle on keypress
}
document.addEventListener('keydown', (event) => {
if (event.key === 'ArrowRight') {
loadRandomText(); 
} else if (event.key === 'ArrowLeft') {
loadText(0); 
}
});
// i done forgor
function escapeHTML(html) {
const div = document.createElement('div');
div.textContent = html;
return div.innerHTML;
}
loadRandomText();

window.loadText = loadText;
window.loadRandomText = loadRandomText;

let autoRotateInterval = null;

function startAutoRotate(interval = 5000) {
if (autoRotateInterval) clearInterval(autoRotateInterval);
autoRotateInterval = setInterval(() => {
const randomIndex = Math.floor(Math.random() * textOptions.length);
loadText(randomIndex);
}, interval);
}
textCounters[index]++;
console.log(`"${textOptions[index]}" has been displayed ${textCounters[index]} times.`);

function stopAutoRotate() {
clearInterval(autoRotateInterval);
}

