let clickCount = 0; // more math <-- it wasnt bad :D
function incrementCounter() {
    clickCount++; 
    document.getElementById("counterDisplay").innerText = `Button for clicking clicked ${clickCount} times.`; // Display the count
}

function closePage() {
    window.close(); 
}

