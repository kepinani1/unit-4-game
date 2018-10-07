$(document).ready(function () {
  var Random = Math.floor(Math.random() * 120) + 18;
  //selects random number at start of game between 18 and 120
  $("#randomNumber").text(Random);
  var crystal1 = Math.floor(Math.random() * 12) + 1;
  var crystal2 = Math.floor(Math.random() * 12) + 1;
  var crystal3 = Math.floor(Math.random() * 12) + 1;
  var crystal4 = Math.floor(Math.random() * 12) + 1;
  $("#crystal1").text(crystal1);
  $("#crystal2").text(crystal2);
  $("#crystal3").text(crystal3);
  $("#crystal4").text(crystal4);
  //generates random number between 1 and 12
  var myTotal = 0;
  var wins = 0;
  var losses = 0;
  //sets users total, wins, and losses to 0 at start of game
  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);
  //declared variables
  function reset() {
    var Random = Math.floor(Math.random() * 120) + 18;
    $("#randomNumber").text(Random);
    var crystal1 = Math.floor(Math.random() * 12) + 1;
    var crystal2 = Math.floor(Math.random() * 12) + 1;
    var crystal3 = Math.floor(Math.random() * 12) + 1;
    var crystal4 = Math.floor(Math.random() * 12) + 1;
    $("#crystal1").text(crystal1);
    $("#crystal2").text(crystal2);
    $("#crystal3").text(crystal3);
    $("#crystal4").text(crystal4);
    var myTotal = 0;
    $("#finalTotal").text(myTotal);
  }
  function winnersCorner() {
    wins++;
    alert("Yeah, you won!");
    $("#numberWins").text(wins);
  }
  function losersCorner() {
    losses++;
    alert("Bummer, you lost!");
    $("#numberLosses").text(losses);
  }
  function addCrystalValue(text) {
    myTotal += text;
    $("#finalTotal").text(myTotal);
  }
  $("#crystal1, #crystal2, #crystal3, #crystal4").on("click", function () {
    addCrystalValue(crystal1);
    addCrystalValue(crystal2);
    addCrystalValue(crystal3);
    addCrystalValue(crystal4);
    if (myTotal < Random) {
      $("#finalTotal").text(myTotal);
    } else if (myTotal === Random) {
      winnersCorner();
      $("#finalTotal").text(myTotal);
    }
    else if (myTotal != Random) {
      losersCorner();
      $("#finalTotal").text(myTotal);
    }
  });
});