let clickCount = 0; // more math <-- it wasnt bad :D
function incrementCounter() {
    clickCount++; 
    document.getElementById("counterDisplay").innerText = `Button for clicking clicked ${clickCount} times.`; // Display the count
}

function closePage() {
    window.close(); 
}

  let count = 0;
    const button = document.getElementById("counterDisplay");
    const countDisplay = document.getElementById("clickCount");
    const message = document.getElementById("");

    button.addEventListener("click", () => {
      count++;
      countDisplay.textContent = count;

      if (count === 100) {
        message.style.display = "block";
      }
    }

