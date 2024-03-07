let breakScore = 0
document.getElementById('output').innerHTML = breakScore;

function score() {
  breakScore += 1;
  document.getElementById('output').innerHTML = breakScore;
}

function reset() {
  breakScore = 0;
  document.getElementById('output').innerHTML = breakScore;
}