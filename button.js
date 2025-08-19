let clickCount = 0; 
function incrementCounter() {
    clickCount++; 
    document.getElementById("counterDisplay").innerText = `Button for clicking clicked ${clickCount} times.`; // Display the count
    
    if (clickCount >= 100) {
            document.getElementById("conditionalText").style.display = "block";
}

function closePage() {
    window.close(); 
}


/*
 <p id="conditionalText" style="display: none;">This will become a clicker minigame.</p>
    <script>
        
        
        
           }
// yeah i'm gonna be honest, absolutely zero idea what i'm doing.
    </script>

   
    <button onclick="incrementCounter()">Button for clicking</button>
    <p id="counterDisplay">Button for clicking clicked 0 times.</p>
    */
