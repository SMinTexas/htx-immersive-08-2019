// Stopwatch
// Create a simple stopwatch app that starts the timer and shows the stopped time.

// Start the stopwatch with a promise
// End the stopwatch on a random time between 1-10 seconds
// When the stopwatch stops, display the time it took

var time = 0;

var startStopwatch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(start());
    }, 100);
});

function start() {
    let countTime = Number(stopTime());
    console.log("countTime", countTime);
    while (time < countTime) {
        timer();
    }
}

function stopTime() {
    return Math.floor((Math.random() * 10) + 1);
}

function timer() {
    time++;
    var sec = time % 100;
    if (sec == 1) {
        timerLabel.innerHTML = sec + " second";
    } else {
        timerLabel.innerHTML = sec + " seconds";
    }

}