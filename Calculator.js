function calculateGrade() {
    var score = parseInt(document.getElementById('score').value) || 0;
    displayGrade(score);
}
  function displayGrade(score) {
    var message = `Score: ${score}\n`;
    if (score >= 79) {
      alert(message + "Congratulations! Keep up the good work. You got an A");
    } else if (60 <= score && finalScore <= 78) {
      alert(message + "Hooray! You have a B");
    } else if (49 <= score && finalScore <= 59) {
      alert(message + "Pull up your socks! You have a C");
    } else if (40 <= score && finalScore <= 48) {
      alert(message + "Work Harder! You have a D");
    } else if (
        39<=score) {
      alert(message + "Oops! You Failed. You have an E");
    }
}
