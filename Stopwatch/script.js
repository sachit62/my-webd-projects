let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msecs = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function () {
    clearInterval(timerId); // Corrected variable name from `timerID` to `timerId`.
});

resetBtn.addEventListener('click', function () {
    clearInterval(timerId); // Corrected variable name from `timerID` to `timerId`.
    timerDisplay.innerHTML = '00 : 00 : 00';
    msecs = secs = mins = 0; // Reset values properly.
});

function startTimer() {
    msecs++;
    if (msecs == 100) {
        msecs = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }
    }

    // Corrected template literal syntax.
    let msecsString = msecs < 10 ? `0${msecs}` : msecs;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecsString}`;
}
