// $(".testButton").click(console.log("button was clicked, hero")
// )
$('.timerCard').on('click', '.timerToggle', function() {
    console.log("Button was clicked.")
    let toggle = true
    let ms = 0
    let s = 0
    let m = 0
    let h = 0
    let sc = ":"
    let count = h + sc + m + sc + s + sc + ms
    
    setInterval(function() {
            if (toggle == true) {
            // console.log(h + ":" + m + ":" + s + ":" + ms)
            count = h + sc + m + sc + s + sc + ms
            console.log(count)
            // document.getElementById("timerCount").textContent(count)
            if (ms >= 0 && ms <= 999) {
                ms = ms + 1
            } 
            if (ms === 10) {
                ms = 0
                s = s + 1
                // console.log("beep")
            }
            if (s === 60) {
                s = 0
                m = m + 1
            }
            if (m === 60) {
                m = 0
                h = h +1
            }
            $('.timerCard').on('click', '.timerToggle', toggle = false)
        }
    }, 100)
})