function displayGrade() {
    var score = parseInt(document.getElementById('score').value) || 0;
    var message = `Score: ${score}\n`;
    if (score >79) {
      alert(message + "Congratulations! Keep up the good work. You got an A");
    } else if (score >=60 && score <= 79) {
      alert(message + "Hooray! You have a B");
    } else if (score >=50 && score <= 59) {
      alert(message + "Pull up your socks! You have a C");
    } else if (score >=40 && score <= 49) {
      alert(message + "Work Harder! You have a D");
    } else if (
        score >=0 && score <=39) {
      alert(message + "Oops! You Failed. You have an E");
    }
}
