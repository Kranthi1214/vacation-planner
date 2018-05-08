var name = window.prompt('Hello! Please Enter Your Name'),
    greeting = document.getElementById('greeting');
greeting.innerHTML += ',' + name;
var daysInput = document.getElementById("days");
var daysMessage = document.getElementById("daysMessage"),
    hoursMessage = document.getElementById("hoursMessage"),
    minutesMessage = document.getElementById("minutesMessage"),
    secondsMessage = document.getElementById("secondsMessage"),
    timingNext = document.getElementById("timingNext");

var enterDays = document.getElementById('enterDays');
enterDays.onclick = function () {
    calculateDays();
};


timingNext.onclick = function () {
    document.getElementById("budgetSection").removeAttribute("hidden");
};

var budgetInput = document.getElementById("tripBudget"),
    enterBudget = document.getElementById("enterBudget"),
    tripExchangeMsg = document.getElementById("tripExchangeMsg"),
    dailyExchangeMsg = document.getElementById("dailyExchangeMsg"),
    exchange10Msg = document.getElementById("exchange10Msg"),
    exchange500Msg = document.getElementById("exchange500Msg"),
    budgetNext = document.getElementById("budgetNext"),
    exchange10 = 10 * 1.45,
    exchange500 = 500 * 1.45;

enterBudget.onclick = calculateBudget;
var images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg", "images/image4.jpg"],
    currentImage = 0;

function changeImage() {
    currentImage++;
    if (currentImage > images.length - 1) {
        currentImage = 0;
    }
    document.body.style.backgroundImage = "url(" + images[currentImage] + ")";
}

setInterval(changeImage, 3000);

function calculateBudget() {
    var days = daysInput.value;
    var budget = budgetInput.value;
    var tripExchange = budget * 1.45;
    var dailyExchange = tripExchange / Number(days);

    tripExchangeMsg.innerHTML = "That means you’ll need " + tripExchange + " NZD for your trip.";
    dailyExchangeMsg.innerHTML = "That means you can spend " + dailyExchange + " NZD per day.";
    exchange10Msg.innerHTML = "You'll need " + exchange10 + " NZD for an item that would cost you 10 USD.";
    exchange500Msg.innerHTML = "You'll need " + exchange500 + " NZD for an item that would cost you 500 USD.";
    budgetNext.removeAttribute('hidden');
}

function calculateDays() {
    var days = daysInput.value;
    var hours = days * 24;
    var minutes = hours * 60;
    var seconds = minutes * 60;

    if (days < 4) {
        daysMessage.innerHTML = "Short trips are always worth it!";
    }
    else if (days < 7) {
        daysMessage.innerHTML = "Cool, you'll be there for almost a week!";
    }
    else {
        daysMessage.innerHTML = "You'll have plenty of time to relax and have fun!";
    }
    hoursMessage.innerHTML = "That means you’ll be traveling for " + hours + " hours.";
    minutesMessage.innerHTML = "That means you’ll be traveling for " + minutes + " minutes.";
    secondsMessage.innerHTML = "That means you’ll be traveling for " + seconds + " seconds.";
    timingNext.removeAttribute('hidden');

}
