let breakScore = 0
document.getElementById('output').innerHTML = breakScore;

function red() {
  breakScore += 1;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}

function yellow() {
  breakScore += 2;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}

function green() {
  breakScore += 3;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}

function brown() {
  breakScore += 4;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}

function blue() {
  breakScore += 5;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}

function pink() {
  breakScore += 6;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}

function black() {
  breakScore += 7;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}
function reset() {
  breakScore = 0;
  document.getElementById('output').innerHTML = breakScore;
  onefourseven();
}


function onefourseven(){
  if (breakScore >= 147) {
    breakScore = 147;
    document.getElementById('output').innerHTML = breakScore;
    alert("Congratulations! You have reached the maximum break score of 147. You have mastered the art of snooker!");
    reset();
  }
  
}
