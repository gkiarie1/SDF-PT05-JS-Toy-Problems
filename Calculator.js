function displayGrade() {
  var score = parseInt(document.getElementById('score').value) || 0;
  var message = `SCORE: ${score}\n`;
  
 if (score > 79 && score<=100) {
  showNotification(message + "Congratulations! Keep up the good work.\n You got an A");
  } else if (score >=60 && score <= 79) {
    showNotification(message + "Hooray! You have a B");
  } else if (score >=50 && score <= 59) {
    showNotification(message + "Pull up your socks! You have a C");
  } else if (score >=40 && score <= 49) {
    showNotification(message + "Work Harder! You have a D");
  } else if (
     score >=0 && score <=39) {
      showNotification(message + "Oops! You Failed. You have an E");
  }
}

function showNotification(message) {

const notificationBar = document.getElementById('notificationBar');

notificationBar.innerHTML = message;

notificationBar.style.display = 'block';

setTimeout(() => {
    notificationBar.style.display = 'none';
}, 3000);
}
