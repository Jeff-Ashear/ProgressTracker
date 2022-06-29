let x
let startstop = 0

$('.timerCard').on('click', '#timerToggle', function() {
    startStop()
})

function startStop() {
    startstop = startstop + 1
    console.log("Start?Stop clicked")
    console.log(startstop)

    if (startstop === 1) {
        start()
        document.getElementById("timerToggle").innerHTML = "Stop"
    } else if (startstop === 2) {
        document.getElementById("timerToggle").innerHTML = "Start"
        startstop = 0
        stop()
    }
}

// starts and stops the stopwatch
function start() {
    x = setInterval(timer, 10);
}

function stop() {
    clearInterval(x)
    localStorage.setItem(hour, min, sec, milisec)
}

let milisec = 0
let sec = 0
let min = 0
let hour = 0

let miliSecOut = 0
let secOut = 0
let minOut = 0
let hourOut = 0

document.onload(function() {
    localStorage.getItem(hour, min, sec, milisec)

})

// main timer function
function timer() {

    miliSecOut = checkTime(milisec)
    secOut = checkTime(sec)
    minOut = checkTime(min)
    hourOut = checkTime(hour)

    milisec = ++milisec

    if (milisec === 100) {
        milisec = 0
        sec = ++sec
    }
    if (sec === 60) {
        sec = 0
        min = ++min
    }
    if (min === 60) {
        min = 0
        hour = ++hour   
    }
    console.log(hourOut + ":" + minOut + ":" + secOut + ":" + miliSecOut)
    document.getElementById("miliSec").innerHTML = miliSecOut
    document.getElementById("sec").innerHTML = secOut
    document.getElementById("min").innerHTML = minOut
    document.getElementById("hour").innerHTML = hourOut
}

// adds a zero if value is <10
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}