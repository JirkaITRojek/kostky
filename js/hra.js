const dice = document.getElementById('dice');
const playButton = document.getElementById('play');
const hrejButton = document.getElementById('hrej');
const result = document.getElementById('result');
let turn = [];
let timer = false;
let round1 = 0;
let round2 = 0;
let score = 0;
let one = 0;
let two = 0;
let three = 0;
let four= 0;
let five = 0;
let six = 0;

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
function diceNumber0(){
    if (turn[0] > 0 && turn[0] < 2){
       return one = one + 1;
       } 
       if (turn[0] > 1 && turn[0] < 3){
        return two = two + 1;
       } 
       if (turn[0] > 2 && turn[0] < 4){
        return three = three + 1;
       } 
       if (turn[0] > 3 && turn[0] < 5){
        return four = four + 1;
       } 
       if (turn[0] > 4 && turn[0] < 6){
        return five = five + 1;
       } 
       if (turn[0] > 5 && turn[0] < 7){
        return six = six + 1;
       } 
}
function diceNumber1(){
    if (turn[1] > 0 && turn[1] < 2){
       return  one = one + 1;
       } 
       if (turn[1] > 1 && turn[1] < 3){
        return two = two + 1;
       } 
       if (turn[1] > 2 && turn[1] < 4){
        return three = three + 1;
       } 
       if (turn[1] > 3 && turn[1] < 5){
        return four = four + 1;
       } 
       if (turn[1] > 4 && turn[1] < 6){
        return five = five + 1;
       } 
       if (turn[1] > 5 && turn[1] < 7){
        return six = six + 1;
       } 
}
function diceNumber2(){
    if (turn[2] > 0 && turn[2] < 2){
       return one = one + 1;
       } 
       if (turn[2] > 1 && turn[2] < 3){
        return two = two + 1;
       } 
       if (turn[2] > 2 && turn[2] < 4){
        return three = three + 1;
       } 
       if (turn[2] > 3 && turn[2] < 5){
        return four = four + 1;
       } 
       if (turn[2] > 4 && turn[2] < 6){
        return five = five + 1;
       } 
       if (turn[2] > 5 && turn[2] < 7){
        return six = six + 1;
       } 
}
function diceNumber3(){
    if (turn[3] > 0 && turn[3] < 2){
       return one = one + 1;
       } 
       if (turn[3] > 1 && turn[3] < 3){
        return two = two + 1;
       } 
       if (turn[3] > 2 && turn[3] < 4){
        return three = three + 1;
       } 
       if (turn[3] > 3 && turn[3] < 5){
        return four = four + 1;
       } 
       if (turn[2] > 4 && turn[3] < 6){
        return five = five + 1;
       } 
       if (turn[3] > 5 && turn[3] < 7){
        return six = six + 1;
       } 
}
function diceNumber4(){
    if (turn[4] > 0 && turn[4] < 2){
       return one = one + 1;
       } 
       if (turn[4] > 1 && turn[4] < 3){
        return two = two + 1;
       } 
       if (turn[4] > 2 && turn[4] < 4){
        return three = three + 1;
       } 
       if (turn[4] > 3 && turn[4] < 5){
        return four = four + 1;
       } 
       if (turn[4] > 4 && turn[4] < 6){
        return five = five + 1;
       } 
       if (turn[4] > 5 && turn[4] < 7){
        return six = six + 1;
       } 
}
function diceNumber5(){
    if (turn[5] > 0 && turn[5] < 2){
       return one = one + 1;
       } 
       if (turn[5] > 1 && turn[5] < 3){
        return two = two + 1;
       } 
       if (turn[5] > 2 && turn[5] < 4){
        return three = three + 1;
       } 
       if (turn[5] > 3 && turn[5] < 5){
        return four = four + 1;
       } 
       if (turn[5] > 4 && turn[5] < 6){
        return five = five + 1;
       } 
       if (turn[5] > 5 && turn[5] < 7){
        return six = six + 1;
       } 
}
function scoreO(){
   if (one == 1){
    return score = score + 100;
   }
   if (one == 2){
    return score = score + 200;
   }
   if (one == 3){
    return score = score + 1000;
   }
   if (one == 4){
    return score = score + 1100;
   }
   if (one == 5){
    return score = score + 1200;
   }
   if (one == 6){
    return score = score + 2000;
   }
   return 0;
}
function scoreT(){
    if (two == 1){
     return score = score + 0;
    }
    if (two == 2){
     return score = score + 0;
    }
    if (two == 3){
     return score = score + 200;
    }
    if (two == 4){
     return score = score + 200;
    }
    if (two == 5){
     return score = score + 200;
    }
    if (two == 6){
     return score = score + 2000;
    }
    return 0;
 }
 function scoreTh(){
    if (three == 1){
     return score = score + 0;
    }
    if (three == 2){
     return score = score + 0;
    }
    if (three == 3){
     return score = score + 300;
    }
    if (three == 4){
     return score = score + 300;
    }
    if (three == 5){
     return score = score + 300;
    }
    if (three == 6){
     return score = score + 3000;
    }
    return 0;
 }
 function scoreF(){
    if (four == 1){
     return score = score + 0;
    }
    if (four == 2){
     return score = score + 0;
    }
    if (four == 3){
     return score = score + 400;
    }
    if (four == 4){
     return score = score + 400;
    }
    if (four == 5){
     return score = score + 400;
    }
    if (four == 6){
     return score = score + 4000;
    }
    return 0;
 }
 function scoreFi(){
    if (five == 1){
     return score = score + 50;
    }
    if (five == 2){
     return score = score + 100;
    }
    if (five == 3){
     return score = score + 500;
    }
    if (five == 4){
     return score = score + 550;
    }
    if (five == 5){
     return score = score + 600;
    }
    if (five == 6){
     return score = score + 5000;
    }
    return 0;
 }function scoreSi(){
    if (six == 1){
     return score = score + 0;
    }
    if (six == 2){
     return score = score + 0;
    }
    if (six == 3){
     return score = score + 600;
    }
    if (six == 4){
     return score = score + 600;
    }
    if (six == 5){
     return score = score + 600;
    }
    if (six == 6){
     return score = score + 6000;
    }
    return 0;
 }

function stats(index) {
    let results = `<p>Score ${score}</p>`;
    return results;
}

playButton.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animation, 40);
        playButton.innerText = 'STOP';
    } else {
        diceNumber0 (turn[0],one,two,three,four,five,six);
        diceNumber1 (turn[1],one,two,three,four,five,six);
        diceNumber2 (turn[2],one,two,three,four,five,six);
        diceNumber3 (turn[3],one,two,three,four,five,six);
        diceNumber4 (turn[4],one,two,three,four,five,six);
        diceNumber5 (turn[5],one,two,three,four,five,six);
        clearInterval(timer);
        timer = false;
        playButton.innerText = 'HREJ';
        scoreO(score,one);
        scoreT(score,two);
        scoreTh(score,three);
        scoreF(score,four);
        scoreFi(score,five);
        scoreSi(score,six);
        one = 0;
        two = 0;
        three = 0;
        four = 0;
        five = 0;
        six = 0;
        round1 = round1 + 1;
        rounda1.innerHTML = round1;
        scores1.innerHTML = stats(0);
    }
});
hrejButton.addEventListener('click', function() {
    if (!timer) {
        timer = setInterval(animation, 40);
        hrejButton.innerText = 'STOP';
    } else {
        diceNumber0 (turn[0],one,two,three,four,five,six);
        diceNumber1 (turn[1],one,two,three,four,five,six);
        diceNumber2 (turn[2],one,two,three,four,five,six);
        diceNumber3 (turn[3],one,two,three,four,five,six);
        diceNumber4 (turn[4],one,two,three,four,five,six);
        diceNumber5 (turn[5],one,two,three,four,five,six);
        clearInterval(timer);
        timer = false;
        hrejButton.innerText = 'HREJ';
        scoreO(score,one);
        scoreT(score,two);
        scoreTh(score,three);
        scoreF(score,four);
        scoreFi(score,five);
        scoreSi(score,six);
        one = 0;
        two = 0;
        three = 0;
        four = 0;
        five = 0;
        six = 0;
        round2 = round2 + 1;
        rounda2.innerHTML = round2;
        scores2.innerHTML = stats(0);
    }
});