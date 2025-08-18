let clickCount = 0; // more math <-- it wasnt bad :D
function incrementCounter() {
    clickCount++; 
    document.getElementById("counterDisplay").innerText = `Button for clicking clicked ${clickCount} times.`; // Display the count
    if (clickCount === 10) {
        console.log("counter is strictly equal to 10");
}

function closePage() {
    window.close(); 
}

