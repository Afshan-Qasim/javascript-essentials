let count = 0;
function increaseCount() {
  count++;
  displayCount();
  checkCountValue();
}
function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  } else if (count === 30) {
    alert(
      "Your Instagram post gained 50 followers! Amazing work! Afshan Qasim "
    );
  }
}
function displayCount() {
  document.getElementById("countDisplay").innerHTML = count;
}
