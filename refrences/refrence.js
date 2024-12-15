// bleh

// Clock
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(j) {
    if (j < 10)  {j = "0" + j};  
    return j;
  }
  

   
        // Click counter
    let clickCount = 0;

    function incrementCounter() {
        clickCount++; 
        document.getElementById("counterDisplay").innerText = `Button for clicking clicked ${clickCount} times.`; // Display the count
    }
    
        // i think this works?
        const textOptions = [
            "No more splarg :(",
            "John Cena",
            "Did you know there's no limit to the length of this?",
            "Do you know who else-",
            "Steam friend code: 1264049544",
            "Thy stol my fucking   ky",
            "Eight equal sign equal sign capital d",
            "MEDIC!",
            "Oh boy I sure I hope I don't have any DCMA emails…",
            "I know where you live~",
            "I know what you are~",
            "I've come to make an announcement, shadow the hedgehog is a bitchass motherfucker. He pissed on my fucking wife, that's right he took his hedgehog quilly dick out and he pissed on my fucking wife and he said his dick was “this big” and I said that's disgusting, so I'm making a callout post on my twitter dot com. Shadow the hedgehog you got a small dick, it's the size of this wallnut except way smaller, and guess what? Here's what my dong looks like. That's right baby tall point, no quills and no pillows. Look at that it looks like two balls and a dong. He clubbed my wife so guess what? I'm gonna fuck the earth. That's right that's what you get my super laser piss. Expect I'm not gonna piss on the earth I'm gonna go higher IM PISSING ON THE MOON!! HOW DO YOU LIKE THAT OBAMA? I PISSED ON THE MOON YOU IDIOT! You have 23 hours before the piss droplets hit the fucking earth. Now get out of my fucking sight before I piss on you too.",
            "Click for nothing",
            "staff-furry-rp is NOT real",
            "Five. Hundred. Cigarettes.",
            "Make a news ticker? I don't have that many unique ideas.",
            "This broke and didn't work 83 times and counting.",
            "Isn't this just worse ripped.guide? Well yes, but it's updated and neater in my opinion.",
            "C:/Windows/Users/Adrian/Documents/nothing_to_see_here.txt",
            "C:/Windows/Users/Adrian/Desktop/guh/flargapiracysite.html",
            "A shrimp (pl.: shrimp (US) or shrimps (UK)) is a crustacean (a form of shellfish) with an elongated body and a primarily swimming mode of locomotion  typically belonging to the Caridea or Dendrobranchiata of the order Decapoda, although some crustaceans outside of this order are also referred to as shrimp. The shrimp Palaemon serratus of the infraorder Caridea. More narrow definitions may be restricted to Caridea, to smaller species of either group or to only the marine species. Under a broader definition, shrimp may be synonymous with prawn, covering stalk-eyed swimming crustaceans with long, narrow muscular tails (abdomens), long whiskers (antennae), and slender legs.[1] Any small crustacean which resembles a shrimp tends to be called one.[2] They swim forward by paddling with swimmerets on the underside of their abdomens, although their escape response is typically repeated flicks with the tail driving them backwards very quickly. Crabs and lobsters have strong walking legs, whereas shrimp have thin, fragile legs which they use primarily for perching.[3]. Shrimp are widespread and abundant. There are thousands of species adapted to a wide range of habitats. They can be found feeding near the seafloor on most coasts and estuaries, as well as in rivers and lakes. To escape predators, some species flip off the seafloor and dive into the sediment.[3] They usually live from one to seven years.[4] Shrimp are often solitary, though they can form large schools during the spawning season.[3][5] They play important roles in the food chain and are an important food source for larger animals ranging from fish to whales. The muscular tails of many shrimp are edible to humans, and they are widely caught and farmed for human consumption. Commercial shrimp species support an industry worth 50 billion dollars a year,[3] and in 2010 the total commercial production of shrimp was nearly 7 million tonnes. Shrimp farming became more prevalent during the 1980s, particularly in China, and by 2007 the harvest from shrimp farms exceeded the capture of wild shrimp. There are significant issues with excessive bycatch when shrimp are captured in the wild, and with pollution damage done to estuaries when they are used to support shrimp farming. Many shrimp species are small as the term shrimp suggests, about 2 cm (0.79 in) long, but some shrimp exceed 25 cm (9.8 in). Larger shrimp are more likely to be targeted commercially and are often referred to as prawns, particularly in the Commonwealth of Nations and former British colonies.",
            "I was nowhere during September 11th 2001",
            "i need ideas :<",
            "https://discord.gg/3zKJBDfDsY",
            "this is NOT steam happy",
            "France isn't real",
            "https://youtu.be/JE37e1eK2mY?si=-KFKgdTFFoPvO1cG",
            "Jerry's bait shop, you'd know the place.",
            "yeag",
            "I need an adult.",
            "I am an adult.",
            "I need an adultier adult",
            "              ",
            "I hate this.",
            "Axtrine is NOT a femboy.",
            "Update coming: never",
            "No.",
            "https://discord.gg/gzTEU3pAE7  <--- join",
            "Frieza as head of foreign relations.",
            "You thought there was a cycle here but no it was I DIO!",
            "ara~ ara~",
            "smoke_alarm_sound.wav",
            "I have a shrimp fry!",
            "const randomIndex = Math.floor(Math.random() * textOptions.length);console.log(randomIndex, textOptions[randomIndex]);  // debugging :>document.getElementById('dynamicText').innerText = textOptions[randomIndex];",
            "java is very fun!",
            "Line 79 is a lie.",
            "Flarg eh?",
            "thedoctor6926 is a femboy.",
            "guh",
            "heyyy, the top text works ^^^^^ yippee",
            "'Is that the Albuquerque backround?!' Yes, yes it is.",
            "Adobe flash o7",
            "freaky",
            "Math floor.",
            "GREGORY OPEN THE DOOR, MY FAZBALLS ARE STUCK.",
            "Remember when <h1 id='headertext'>said oh it seems were this far?</h1> as filler text?",
            "well golly.",
            "me when i lie"
 ];

        const randomIndex = Math.floor(Math.random() * textOptions.length);
        console.log(randomIndex, textOptions[randomIndex]);  // debugging :>

        // yippee? yippee.
        document.getElementById('dynamicText').innerText = textOptions[randomIndex];
    