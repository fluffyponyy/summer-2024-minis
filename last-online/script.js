let startBlue = false;
let startPurple = false;

let redCounter = -1;
let blueCounter = -1;
let purpleCounter = -1;

let finalRed = 68;
let finalBlue = 78;
let finalPurple = 57;

let secondFinalRed = 94; //neutral ending
let secondFinalBlue = 99; //bad ending
let secondFinalPurple = 90; //good ending

let redLines = fetch("./redLines.txt")
  .then((r) => r.text())
  .then((text) => {
    return text.split("\n");
  });

let blueLines = fetch("./blueLines.txt")
  .then((r) => r.text())
  .then((text) => {
    return text.split("\n");
  });

let purpleLines = fetch("./purpleLines.txt")
  .then((r) => r.text())
  .then((text) => {
    return text.split("\n");
  });

window.addEventListener("keypress", checkKey);

function checkKey(event) {
  if (secondFinalRed <= redCounter) {
    window.removeEventListener("keypress", checkKey);

    let html = document.getElementsByTagName("html")[0]
    let body = document.getElementsByTagName("body")[0]
    body.remove()
    html.style.backgroundColor = "red";
    setTimeout(function x()  {  alert("Chat had ended.");
    alert("Did you learn anything interesting?")}, 100)
  
  }
  if (secondFinalBlue <= blueCounter) {
        window.removeEventListener("keypress", checkKey);

     let html = document.getElementsByTagName("html")[0]
    let body = document.getElementsByTagName("body")[0]
    body.remove()
    html.style.backgroundColor = "blue";
  setTimeout(function y()  {  alert("Chat had ended.");
    alert("...that wasn't very nice, was it?")}, 100)
    return;

  }
  if (secondFinalPurple <= purpleCounter) {
        window.removeEventListener("keypress", checkKey);

     let html = document.getElementsByTagName("html")[0]
    let body = document.getElementsByTagName("body")[0]
    body.remove()
    html.style.backgroundColor = "purple";  
    setTimeout(function z()  {  alert("Chat had ended.");
    alert("They said it's gonna be a good year.")
    alert("Are you gonna make it a good year?")
    alert("Or are you gonna sit around and stare at a purple screen?")}, 100);
    return;

  }
  if (
    finalRed <= redCounter &&
    finalBlue <= blueCounter &&
    finalPurple <= purpleCounter
  ) {
    window.removeEventListener("keypress", checkKey);

    document.getElementById("red").innerHTML +=
      "hey, you're not talking to <span style='color:#0725e6' id='b'>blue</span>, are you? <br><br>";
    document.getElementById("blue").innerHTML +=
      "...wait ur not texting <span style='color:#770087' id='p'>purple</span> again, r u? <br><br>";
    document.getElementById("purple").innerHTML +=
      "hold on you arent talking to <span style='color:#b00000' id='r'>red</span>, right? <br><br>";

    window.addEventListener("keypress", choiceButtons);

    return;
  }
  if (event.key == " " && finalRed > redCounter) {
    redCounter++;
    nextRed();

    if (redCounter == 46) {
      loadBlue();
    }
  } else if (event.key == "Enter" && startBlue && finalBlue > blueCounter) {
    blueCounter++;
    nextBlue();

    if (blueCounter == 57) {
      loadPurple();
    }
  } else if (event.key == "x" && startPurple && finalPurple > purpleCounter) {
    purpleCounter++;
    nextPurple();
  }
}

function loadBlue() {
  startBlue = true;
  document.getElementById("blue").classList.remove("invisible");
  document.getElementById("blue").innerHTML +=
    'Press "enter" to begin to chat. <br><br>';
}

function loadPurple() {
  startPurple = true;
  document.getElementById("purple").classList.remove("invisible");
  document.getElementById("purple").innerHTML +=
    'Press "x" to begin to chat. <br><br>';
}

function nextRed() {
  redLines.then((lines) => {
    let nextLine = lines[redCounter];
    document.getElementById("red").innerHTML +=
      "<p class='line'>" + nextLine + "</p><br>";
    document.getElementById("red").scrollTop =
      document.getElementById("red").scrollHeight;
  });
}
function nextBlue() {
  blueLines.then((lines) => {
    let nextLine = lines[blueCounter];
    document.getElementById("blue").innerHTML +=
      "<p class='line'>" + nextLine + "</p><br>";
    document.getElementById("blue").scrollTop =
      document.getElementById("blue").scrollHeight;
  });
}
function nextPurple() {
  purpleLines.then((lines) => {
    let nextLine = lines[purpleCounter];
    document.getElementById("purple").innerHTML +=
      "<p class='line'>" + nextLine + "</p><br>";
    document.getElementById("purple").scrollTop =
      document.getElementById("purple").scrollHeight;
  });
}

function choiceButtons(event) {
  if (event.key == "x" || event.key == "Enter" || event.key == " ") {
    document.getElementById("redButton").classList.remove("invisible");
    document.getElementById("blueButton").classList.remove("invisible");
    document.getElementById("purpleButton").classList.remove("invisible");
    window.removeEventListener("keypress", choiceButtons);
  }
}

function redChosen() {
  document.getElementById("purpleButton").classList.add("invisible");
  document.getElementById("redButton").classList.add("invisible");
  document.getElementById("blueButton").classList.add("invisible");

  document.getElementById("blue").classList.add("gone");
  document.getElementById("purple").classList.add("gone");

  document.getElementById("r").style.color = "black";
  document.getElementById("p").style.color = "black";
  
  finalRed = 1000;
  redCounter++;
  nextRed();
  window.addEventListener("keypress", checkKey);
}
function blueChosen() {
  document.getElementById("redButton").classList.add("invisible");
  document.getElementById("blueButton").classList.add("invisible");
  document.getElementById("purpleButton").classList.add("invisible");

  document.getElementById("purple").classList.add("gone");
  document.getElementById("red").classList.add("gone");

  document.getElementById("r").style.color = "black";
  document.getElementById("b").style.color = "black";

    finalBlue = 1000;

  blueCounter++;

  nextBlue();

  window.addEventListener("keypress", checkKey);
}
function purpleChosen() {
  document.getElementById("redButton").classList.add("invisible");
  document.getElementById("blueButton").classList.add("invisible");
  document.getElementById("purpleButton").classList.add("invisible");

  document.getElementById("blue").classList.add("gone");
  document.getElementById("red").classList.add("gone");

  document.getElementById("b").style.color = "black";
  document.getElementById("p").style.color = "black";

  finalPurple = 1000;
  purpleCounter++;
  nextPurple();
  window.addEventListener("keypress", checkKey);
}
