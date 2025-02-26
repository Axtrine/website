// Keybinds
document.addEventListener('keydown', (event) => {
    if (event.key === 'R' || event.key === 'r') {
    startAutoRotate(); // Start auto-rotate
    } else if (event.key === 'P' || event.key === 'p') {
    pauseAutoRotate(); // Pause auto-rotate
    } else if (event.key === 'D' || event.key === 'd') {
    loadText(90); // Cheating are we? 
    }  else if (event.key === ' ') { 
    loadRandomText(); 
    }  else if (event.key === 'M' || event.key === 'm') { 
    loadText(144); // wrong
    }  else if (event.key === 'S' || event.key === 's') { 
    loadText(143); // it was all a lie  
    }  else if (event.key === 'W' || event.key === 'w') { 
    loadText(146); // dun dun dunnnnnnnnnn  
    // i hate myself, it's evident
    
    
    } 
    });