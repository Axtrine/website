// let autoRotateInterval = null;

// function startAutoRotate(interval = 5000) {
//  if (autoRotateInterval) clearInterval(autoRotateInterval);
//  autoRotateInterval = setInterval(() => {
//    const randomIndex = Math.floor(Math.random() * textOptions.length);
//    loadText(randomIndex);
//  }, interval);
// }
// textCounters[index]++;
// console.log(`"${textOptions[index]}" has been displayed ${textCounters[index]} times.`);
// Start auto-rotation by default 
// startAutoRotate();
// speakText(index);
// Text-to-speech
const textCounters = new Array(textOptions.length).fill(0);
function speakText(index) {
const utterance = new SpeechSynthesisUtterance(textOptions[index]);
speechSynthesis.speak(utterance);
}