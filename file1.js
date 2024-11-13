function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
var start = new Date().getTime();
function move(){
    var left;
    var top;
    left = Math.random()*300 ;
    top = Math.random()*300 ;
    document.getElementById("shape").style.left = left;
    document.getElementById("shape").style.top = top;
    document.getElementById("shape").style.display = "block";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    start = new Date().getTime();
}
document.getElementById("shape").onclick = function(){
    document.getElementById("shape").style.display ="none";
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;
    if (timeTaken >= 1.2) {
        showMessage(timeTaken + " seconds - you lost the game! What would you like to do?");
    } else {
        move(); 
    }
   };
document.getElementById("tryAgainButton").onclick = function() {
    hideMessage();
    move();
};

document.getElementById("quitButton").onclick = function() {
    hideMessage(); 
};

function showMessage(message) {
    document.getElementById("messageText").innerText = message;
    document.getElementById("messageBox").style.display = "block";
}

function hideMessage() {
    document.getElementById("messageBox").style.display = "none";
}

function restartGame() {
    hideMessage();
    move();
}
move();