// Introduction of the user
function showInput() {
      document.getElementById('name_input').style.display = "none";
      document.getElementById('display').innerHTML = "Hello " + document.getElementById("user_input").value;
      window.setTimeout(showIntro, 500);


}

function showIntro()  {
  document.getElementById('intro').style.display = "block";
}

function showInstructions() {
  document.getElementById('display').style.display = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('instructions').style.display = "block";
  window.setTimeout(startGame, 10000);
}

function startGame()  {
  document.getElementById('display').style.display = "none";
  document.getElementById('intro').style.display = "none";
  document.getElementById('start').style.display = "block";
  window.setTimeout(showEnter, 1000);
}

function showEnter()  {
  document.getElementById('madLibsQuestion').style.display = "block";
}

function  getMadLibsInput() {
  document.getElementById('instructions').style.display = "none";
  document.getElementById('start').style.display = "none";
  document.getElementById('madLibsQuestion').style.display = "none";
  document.getElementById('test').innerHTML = `
  So what we ${document.getElementById("user_input_verb1").value} drunk <br>
  So what we smoke ${document.getElementById("user_input_noun1").value} <br>
  We're just having ${document.getElementById("user_input_noun2").value} <br>
  We don't care who ${document.getElementById("user_input_verb2").value} <br>
  So what we go out <br>
  That's how its supposed to be <br>
  Living ${document.getElementById("user_input_adjective1").value} and ${document.getElementById("user_input_adjective2").value} and ${document.getElementById("user_input_adjective3").value} <br>
`
  window.setTimeout(playAgain, 5000)
}

function playAgain()  {
  document.getElementById('play_again').style.display = "block";
}

function startAgain() {
  document.getElementById('test').style.display = "none";
  document.getElementById('play_again').style.display = "none";
  showEnter();
}
