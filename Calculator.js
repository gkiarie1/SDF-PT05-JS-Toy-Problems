function calculateGrade() {
    var html = parseInt(document.getElementById('html').value) || 0;
    var css = parseInt(document.getElementById('css').value) || 0;
    var javascript = parseInt(document.getElementById('javascript').value) || 0;
  
    var finalScore = html + css + javascript;
    displayGrade(html, css, javascript, finalScore);
}
  function displayGrade(html, css, javascript,finalScore) {
    var message = `HTML: ${html}\nCSS: ${css}\nJavaScript: ${javascript}\nTotal Score: ${finalScore}\n\n`;
    if (finalScore>90)
    alert(message + "Must be nice! You showoff");
    else if (finalScore >= 79) {
      alert(message + "Congratulations! Keep up the good work. You got an A");
    } else if (60 <= finalScore && finalScore <= 78) {
      alert(message + "Hooray! You have a B");
    } else if (49 <= finalScore && finalScore <= 59) {
      alert(message + "Pull up your socks! You have a C");
    } else if (40 <= finalScore && finalScore <= 48) {
      alert(message + "Work Harder! You have a D");
    } else if (
        39<=finalScore) {
      alert(message + "Oops! You Failed. You have an E");
    }
}
