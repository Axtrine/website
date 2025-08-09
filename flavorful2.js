 // i think this works?
 const textOptions = [
    "TACO BELL !!!",
];


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

function stopAutoRotate() {
clearInterval(autoRotateInterval);
}

// Start auto-rotation by default 
// startAutoRotate();


/*

⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠘⠃⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠀⠀⣤⣤⠀⠀⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠿⠿⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⣤⣤⠀⠀⠀⠀⠀⠀⠘⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀
⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⠀
⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀
⠀⠀⣸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣇⠀⠀
⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
The Road to Nowhere. - [O-07-12] [ALEPH] [On escape triggers 4th Trumpet, lowers all Qliphoth counters by 1-3 at random.]
"It's made itself the loneliest place known to man, and the end still isn't clear." 

Management tips                                           | Work Chances                   |  Story Records
__________________________________________________________|________________________________|_______________________________________
                                                          |                                |
In the event an employee doesn't stick to either          | Fortitude:                     | <Strangely enough, an employee who 
their Insight, or Instinct they happened to walk the road | I    - 0%                      | possesed the gift for this abno
, of course, they were never seen again.                  | II   - 0%                      | walked out feeling better than
                                                          | III  - 0%                      | before.>
After this above incident happened a random abnormality's | IV   - 45%                     | 
Qliphoth counter lowered to zero.                         | V    - 65%                     |
                                                          |                                | <Julia, a rather new employee, entered,
<WARNING> IF 6 EMPLOYEES HAVE BEEN LOST TO THE ROAD       |                                | she was only a grade III employee, after
THE EMPLOYEES LOST WILL COME BACK IN AN UNRECOGNIZABLE    | Prudence:                      | a little bit she was never seen again.>
STATE, YOU MUST ELIMINATE THEM IF YOU DON'T WANT TO RISK  | I    - 0%                      |
YOUR POSITION OF MANAGER                                  | II   - 0%                      |
                                                          | III  - 0%                      | <Somehow, the containment cell is the
<WARNING> DO NOT LET AN EMPLOYEE WHO POSSSESSES PRUDENCE  | IV   - 45%                     | normal size it is for everything else
AND OR FORTITUDE III OR LOWER WORK, LAST TIME THIS        | V    - 65%                     | but the road streches on forever.>
HAPPENED THEY PANICKED AND FADED INTO THE ROAD            |                                |
                                                          |                                |                      
<WARNING> IF AN EMPLOYEE PANICS THEY WILL FADE AWAY INTO  | Justice & Temperance:          | <When another abnormality entered the
THE DISTANCE OF THE ROAD                                  | 0% - I-V                       | containment it seemingly wasn't found
                                                          |                                | ever again>
<ESCAPE INFO>                                             |________________________________|_______________________________________
If an employee works The Road to Nowhere with any stats   |
below IV, or they happen to have a bad work day the       | EGO Equipment: 
abnormality's Qliphoth counter lowers by 1 (Max: 6), this |
will also occur if an employee is lost because of the     | Lone Traveler [Armor][300 Boxes] REQ. EX ALL STATS
abnormality. Once the Qliphoth counter reaches zero or    | R: 0.3 [Endured]
six employees are lost to the abnormality it will breach, | W: 0.0 [Immune] 
if it breaches when you haven't had any employees killed  | B: 0.8 [Endured]
by it, it will breach a random WAW or ALEPH abnormality   | P: 0.5 [Endured]
that is currentelly being held in the facility.           |
The only way to raise the Qliphoth counter (but only when | Lone Traveler [Weapon][365 Boxes]
it lowers from work) is to suppress an HE or higher       | Ranged - 18-21 P
abmormality OR clear an Ordeal. All of this carrys        | Close  - 24-27 P
through each day, as always manager, good luck. - A       |
                                                          | Lone Traveler [Gift][2%]
                                                          | HP + 10
Work Damage: 5-12 White | 3-7 Pale                        | SP + 15
                                                          | SR + 5
Work outcome ranges: Good   [34-40]                       |
                     Normal [25-33]                       |
                     Bad      [<24]                       |


                <Isn't it lovely we all look at the same moon?>








⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠘⠃⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠀⠀⣤⣤⠀⠀⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠿⠿⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⣤⣤⠀⠀⠀⠀⠀⠀⠘⣷⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢸⡏⠀⠀⠀⠀⠀⠀⠀⣿⣿⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⡿⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⢿⡀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⢀⣿⣿⡀⠀⠀⠀⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀
⠀⠀⠀⢠⡏⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠀⠀
⠀⠀⠀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢧⠀⠀⠀
⠀⠀⣸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⣇⠀⠀
⠀⢠⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
A faded agent. - [F-02-44] [ALEPH] {Child of "The Road to Nowhere"}
"Left behind is only a memory of the person in an empty husk." 
_______________________________________________________________

Health       -                                                                  [Agent's health + 30]
Damage       -                                                                  [Agent's EGO WP + 10]
Attack speed -                                                             [Agent's attack speed + 0]
Attack type  -                                                      [White (7-13) + Agent's ego gear]
Special      - [When entering a department for the first time, lower all present agents sanity by 70][THROWS ALL EMPLOYEES WITH SP <70 ARE INSTANTLY UNDER PANIC]
Special      -             [When killed lower killers sanity by 20% but boost Prudence by  5 points.][ONCE PER EMPLOYEE AND FLOOR]
Special      -           [If an employee comes out in standard issue gear they'll have preset stats.][130 HP | Fast AS | 9 - 21 P DMG | Defence same as EGO armor.]
Defence      -                                                          [Agent's base + EGO defences]


*/
                     