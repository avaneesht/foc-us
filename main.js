console.log("JavaScript Ready!");

let sec = 1800
function restart() {
  sec = 1800
}

/*JavaScript for Timer*/
function start() {
    countDown = setInterval(function () {
      secpass();
    }, 1000);

  secpass();

  function secpass() {
    /*Declaring the overall minutes and the minutes and seconds remaining.*/
    var min = Math.floor(sec / 60);
    var remSec = sec % 60;

    /*Checking for certain timestamps*/
    if (remSec < 10) {
      remSec = "0" + remSec;
    }

    if (sec < 300) {
      document.querySelector("#timer_text").textContent =
        "5 minutes Break Time!";
    }

    if (remSec == 0) {
      console.log("1 minute complete!");
    }
    if (min < 10) {
      min = "0" + min;
    }
    document.getElementById("timer").innerHTML = min + ":" + remSec;

    if (sec > 0) {
      sec = sec - 1;
    } else {
      clearInterval(countDown);

      document.getElementById("timer").innerHTML = "30 minutes complete!";
    }
  }
  
}

/*All the soundboard audio playing functions*/
const Rain_Drizzling = new Audio("Audio/Rain.mp3");
const Water_Flowing = new Audio("Audio/Water Flowing.mp3");
const Fire_Crackling = new Audio("Audio/Fire Crackling.mp3");
const Leaves_Rustling = new Audio("Audio/Leaves Rustling.mp3");
const Coffee_Shop = new Audio("Audio/Coffee Shop Sounds.mp3");
const Airplane_Ambience = new Audio("Audio/Airplane Ambience.mp3");

function water_audio() {
  document.querySelector("#water").textContent = "Double Click";
  Water_Flowing.play();
  Water_Flowing.volume = 0.15;
  Water_Flowing.loop = true;
  current_sound = Water_Flowing;
}

function fire_audio() {
  Fire_Crackling.volume = 0.4;
  document.querySelector("#fire").textContent = "Double Click";
  Fire_Crackling.play();
  Fire_Crackling.loop = true;
  current_sound = Fire_Crackling;
}

function leaves_audio() {
  document.querySelector("#leaves").textContent = "Double Click";
  Leaves_Rustling.play();
  Leaves_Rustling.loop = true;
  current_sound = Leaves_Rustling;
}

function coffee_audio() {
  document.querySelector("#coffee").textContent = "Double Click";
  Coffee_Shop.play();
  Coffee_Shop.loop = true;
  current_sound = Coffee_Shop;
}

function airplane_audio() {
  Airplane_Ambience.volume = 0.2;
  document.querySelector("#airplane").textContent = "Double Click";
  Airplane_Ambience.play();
  Airplane_Ambience.loop = true;
  current_sound = Airplane_Ambience;
}

function rain_audio() {
  document.querySelector("#rain").textContent = "Double Click";
  Rain_Drizzling.play();
  Rain_Drizzling.loop = true;
  current_sound = Rain_Drizzling;
}

function pause_audio() {
  Rain_Drizzling.pause();
  document.querySelector("#rain").textContent = "Rain Drizzling";
  Airplane_Ambience.pause();
  document.querySelector("#airplane").textContent = "Airplane Ambience";
  Leaves_Rustling.pause();
  document.querySelector("#leaves").textContent = "Leaves Rustling";
  Fire_Crackling.pause();
  document.querySelector("#fire").textContent = "Fire Crackling";
  Water_Flowing.pause();
  document.querySelector("#water").textContent = "Water Flowing";
  Coffee_Shop.pause();
  document.querySelector("#coffee").textContent = "Coffee Shop";
}

/*Pausing specific audio*/
function pause_coffee() {
  document.querySelector("#coffee").textContent = "Coffee Shop";
  Coffee_Shop.pause();
}

function pause_fire() {
  document.querySelector("#fire").textContent = "Fire Crackling";
  Fire_Crackling.pause();
}

function pause_leaves() {
  document.querySelector("#leaves").textContent = "Leaves Rustling";
  Leaves_Rustling.pause();
}

function pause_rain() {
  document.querySelector("#rain").textContent = "Rain Drizzling";
  Rain_Drizzling.pause();
}

function pause_water() {
  document.querySelector("#water").textContent = "Water Flowing";
  Water_Flowing.pause();
}

function pause_airplane() {
  document.querySelector("#airplane").textContent = "Airplane Ambience";
  Airplane_Ambience.pause();
}
