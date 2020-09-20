//Landing Page
var allPages = ["rickroll2.html", "useless.html", "perry.html", "potion.html", "mask.html", "barbee.html", "bbjuice.html"]

randomPage = allPages[Math.floor(Math.random() * allPages.length)]

function randomize() {
  document.getElementById("bigButton").setAttribute("href", randomPage
  ); 
}


// Perry the Platypus

var a;

function change() {
    if (a == 0) {
        document.getElementById("ptp").style.display = "initial";
        document.getElementById("ptp2").style.display = "none";

        document.getElementById("titleA").style.display = "initial";
        document.getElementById("titleB").style.display = "none";
        return a = 0;
    }
    else {
        document.getElementById("ptp").style.display = "none";
        document.getElementById("ptp2").style.display = "initial";

        document.getElementById("titleB").style.display = "initial";
        document.getElementById("titleA").style.display = "none";
        return a = 1;
    }
};


// Useless Button 
var count = 0;
function useless() {
  if (count == 0) {
    alert("What did you expect?")
    console.log(count)
  }
  count++
  if (count == 1) {
    alert("Why did you do this?");
  }
  count++
  if (count == 2) {
    alert("See you wouldn't be stuck in this loop if you didn't push the button.");
  }
  count++
  if (count == 3) {
    alert("Dis u: 🤡");
  }
  count++
  if (count == 4) {
    alert("I hope you learned your lesson");
  }
  count++
  if (count == 5) {
    alert("Stop going around pressing random buttons");
  }
  count++
  if (count == 6) {
    alert("Have a great day");
  }
}

// Big Brain Juice

// I don't know how to pull data from API's yet
// But I got these facts from https://github.com/sameerkumar18/useless-facts-api 
// this dude!! just to have a working prototype
// I'll update this and use the API properly when I figure it out haha

var factoids = ["No word in the English language rhymes with month, orange, silver and purple.",
    "The word 'samba' means 'to rub navels together.'",
    "Mel Blanc (the voice of Bugs Bunny) was allergic to carrots.",
    "The electric chair was invented by a dentist.",
    "The very first bomb dropped by the Allies on Berlin during World War II Killed the only elephant in the Berlin Zoo.",
    "More people are killed annually by donkeys than airplane crashes.",
    "A 'jiffy' is a unit of time for 1/100th of a second.", "A whale's penis is called a dork.",
    "Because of the rotation of the earth, an object can be thrown farther if it is thrown west.",
    "The average person spends 6 months of their life sitting at red lights.",
    "In 1912 a law passed in Nebraska where drivers in the country at night were required to stop every 150 yards, send up a skyrocket, wait eight minutes for the road to clear before proceeding cautiously, all the while blowing their horn and shooting off flares.",
    "More Monopoly money is printed in a year, than real money throughout the world.",
    "Caesar salad has nothing to do with any of the Caesars. It was first concocted in a bar in Tijuana, Mexico, in the 1920's.",
    "One quarter of the bones in your body are in your feet.",
    "Crocodiles and alligators are surprisingly fast on land.  Although they are rapid, they are not agile.  So, if being chased by one, run in a zigzag line to lose him or her.",
    "Seattle’s Fremont Bridge rises up and down more than any drawbridge in the world.",
    "Right-handed people live, on average; nine years longer than left handed people.",
    "Ten percent of the Russian government's income comes from the sale of vodka.",
    "In the United States, a pound of potato chips costs two hundred times more than a pound of potatoes.",
    "A giraffe can go without water longer than a camel."]

var number = 0

function addIq() {
  fact = factoids[Math.floor(Math.random() * factoids.length)]
  number++
  
  if(number<10) {
    document.getElementById("iq").innerHTML = `IQ: ${number}`;
    document.getElementById("facts").innerHTML = `Did you know: ${fact}`
  }
  else {
  document.getElementById("iq").innerHTML = `The box is empty :/`;
  document.getElementById("facts").innerHTML = `Did you know: You're gulping air. Way to go, I guess.`
  }
}
