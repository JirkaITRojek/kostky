const dice = document.getElementById('dice');
const playButton = document.getElementById('play');
const result = document.getElementById('result');
let turn = [];
let timer = false;
let rounds = [];
rounds[0] = [];
rounds[1] = [];

function animation() {
    turn[0] = Math.ceil(Math.random() * 6);
    dice1.src = `img/kostka${turn[0]}.png`;
    turn[1] = Math.ceil(Math.random() * 6);
    dice2.src = `img/kostka${turn[1]}.png`;
    turn[2] = Math.ceil(Math.random() * 6);
    dice3.src = `img/kostka${turn[2]}.png`; 
    turn[3] = Math.ceil(Math.random() * 6);
    dice4.src = `img/kostka${turn[3]}.png`; 
    turn[4] = Math.ceil(Math.random() * 6);
    dice5.src = `img/kostka${turn[4]}.png`; 
    turn[5] = Math.ceil(Math.random() * 6);
    dice6.src = `img/kostka${turn[5]}.png`; 
}

function sum(index) {
    let s = 0;
    for (i = 0; i < rounds[index].length; i++) {
        s += rounds[index][i];
    }
    return s;
}

function max(index) {
   let mx = 1;
   rounds[index].forEach(function(value) {
       if (value > mx) mx = value;
   }) 
   return mx;
}
function min(index) {
    let mn = 6;
    rounds[index].forEach(function(value) {
        if (value < mn) mn = value;
    }) 
    return mn;
 }

function stats(index) {
    player1.style.left = `${sum(0) * 10}px`;
    player2.style.left = `${sum(1) * 10}px`;
    let results = `<p>Aktuální hod: ${turn[index]}</p>`;
    results += `<p>Hody: ${rounds[index]}</p>`;
    results += `<p>Počet hodů: ${rounds[index].length}</p>`;
    results += `<p>Součet hodů: ${sum(index)}</p>`;
    results += `<p>Průměr hodů: ${(sum(index)/rounds[index].length).toFixed(2)}</p>`;
    results += `<p>Nejvyšší hod: ${(max(index))}</p>`;
    results += `<p>Nejnižší hod: ${(min(index))}</p>`;
    return results;
}

playButton.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animation, 40);
        playButton.innerText = 'STOP';
    } else {
        clearInterval(timer);
        timer = false;
        playButton.innerText = 'HREJ';
        rounds[0].push(turn[0]);
        rounds[1].push(turn[1]);
        result1.innerHTML = stats(0);
        result2.innerHTML = stats(1);
        console.log(rounds);
    }
});