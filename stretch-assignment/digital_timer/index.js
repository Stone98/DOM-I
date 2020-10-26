let timer = 0;
let secondTens = null;
let secondOnes = null;
let colon = null;
let msHundreds = null;
let msTens = null;
let handle = null;
// //<div class="digit" id="secondTens">-</div>
// <div class="digit" id="secondOnes">-</div>
// <div class="digit" id="colon">:</div>
// <div class="digit" id="msHundreds">-</div>
// <div class="digit" id="msTens">-</div>

function go() {
    document.getElementById('startButton').disabled = true;
    document.getElementById('resetButton').disabled = false;
    secondTens = document.getElementById('secondTens');
    secondOnes = document.getElementById('secondOnes');
    colon = document.getElementById('colon');
    msHundreds = document.getElementById('msHundreds');
    msTens = document.getElementById('msTens');
    handle = window.setInterval(tick, 10);

}

function tick() {
    if (handle === null) {
        return;
    }
    if (timer >= 10) {
        document.getElementById('resetButton').disabled = false;
        let redItems = document.getElementsByClassName('digits');
        console.log(redItems.length);
        let redItem = redItems[0];
        console.log(redItem.outerHTML);
        redItem.classList.toggle('redDigit');
        console.log(redItem.outerHTML);

        window.clearInterval(handle);
        handle = null;
    } else {
        timer += .01;
        //'12.34'
        let beforeDecimal = Math.floor(timer);
        let afterDecimal = timer - beforeDecimal;
        let tenSeconds = Math.floor(beforeDecimal / 10);
        secondTens.innerHTML = tenSeconds;
        secondOnes.innerHTML = Math.floor(beforeDecimal - (tenSeconds * 10));
        msHundreds.innerHTML = Math.floor(afterDecimal * 10);
        msTens.innerHTML = ((Math.floor(afterDecimal * 100) - Math.floor(afterDecimal * 10)) + "").substring(0, 1);
    }
}

function reset() {
    if (handle != null) {
        window.clearInterval(handle);
        handle = null;
    }
    document.getElementById('resetButton').disabled = true;
    document.getElementById('startButton').disabled = false;
    secondTens.innerHTML = 0;
    secondOnes.innerHTML = 0;
    msHundreds.innerHTML = 0;
    msTens.innerHTML = 0;
    if (timer >= 10) {
        let redItems = document.getElementsByClassName('digits');
        console.log(redItems.length);
        let redItem = redItems[0];
        console.log(redItem.outerHTML);
        redItem.classList.toggle('redDigit');
        console.log(redItem.outerHTML);
    }
    timer = 0;
}