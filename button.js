let clickCount = 0; // more math
function incrementCounter() {
    clickCount++; 
    document.getElementById("counterDisplay").innerText = `Button for clicking clicked ${clickCount} times.`; // Display the count
}

function closePage() {
    window.close(); 
}