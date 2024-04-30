const secondHand = document.getElementById('second');
const minuteHand = document.getElementById('minute');
const hourHand = document.getElementById('hour');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds()/60;
    const minutes = (seconds + date.getMinutes())/60;
    const hours = (minutes + date.getHours())/12;

    rotateClockHand(secondHand,seconds);
    rotateClockHand(minuteHand,minutes);
    rotateClockHand(hourHand,hours);
}

function rotateClockHand(element,rotation) {
    element.style.setProperty('--rotate', rotation * 360);
}
 setInterval(clockTick,1000);