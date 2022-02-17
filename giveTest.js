var alphabet = "QWERTYUIOPASDFGHJKLZXCVBNM".split("").sort();
var numAttempts;
var numCorrect;
var leftLetter;
var rightLetter;

function giveTest() {
    document.getElementById("startButtonWrap").style.display = "none";
    document.getElementById("gameOverArea").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
    numAttempts = 0;
    numCorrect = 0;
    var alph = alphabet.slice()
    var leftIndex = Math.floor(Math.random()*26)
    leftLetter = alph[leftIndex];
    var swapTemp = alph[25]
    alph[25] = alph[leftIndex]
    alph[leftIndex] = swapTemp
    rightLetter = alph[Math.floor(Math.random()*25)]
    document.getElementById("leftButton").innerHTML = leftLetter
    document.getElementById("rightButton").innerHTML = rightLetter
    setTimeout(gameOver, 60000)
}

function gameOver() {
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("scoreSpan").innerHTML = (numCorrect - (numAttempts - numCorrect)).toString();
    document.getElementById("numCorrectSpan").innerHTML = numCorrect.toString();
    document.getElementById("numAttemptsSpan").innerHTML = numAttempts.toString();
    document.getElementById("percentCorrectSpan").innerHTML = Math.floor(100*numCorrect/numAttempts).toString();
    document.getElementById("gameOverArea").style.display = "block";
    setTimeout(function(){document.getElementById("replayButton").disabled = false;}, 2000)
}

function answer(left) {
    numCorrect += left*(alphabet.indexOf(leftLetter) < alphabet.indexOf(rightLetter)) + (1 - left)*(alphabet.indexOf(leftLetter) > alphabet.indexOf(rightLetter));
    numAttempts++;
    var alph = alphabet.slice()
    var leftIndex = Math.floor(Math.random()*26)
    leftLetter = alph[leftIndex];
    var swapTemp = alph[25]
    alph[25] = alph[leftIndex]
    alph[leftIndex] = swapTemp
    rightLetter = alph[Math.floor(Math.random()*25)]
    document.getElementById("leftButton").innerHTML = leftLetter
    document.getElementById("rightButton").innerHTML = rightLetter
}