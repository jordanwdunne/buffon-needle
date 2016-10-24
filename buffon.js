// Define a 60x60 rectangle
var needleLength = 20;
var windowHeight = needleLength * 3;
var windowWidth = needleLength * 500;

var numIter = 1000000;

var needle = function() {
  this.angle = Math.random() * Math.PI * 2;
  this.startX = Math.random() * windowWidth;
  this.startY = Math.random() * windowHeight;
  this.endX = this.startX + Math.cos(this.angle) * needleLength;
  this.endY = this.startY + Math.sin(this.angle) * needleLength;
}

var interceptsLine = function(needle, lineHeight) {
  if ((needle.startY < lineHeight && needle.endY > lineHeight) || (needle.startY > lineHeight && needle.endY < lineHeight)) {
    return true;
  }

  else {
    return false;
  }
}

var evaluate = function(iterations) {
  var attempts = 0;
  var hits = 0;
  for (i = 0; i < iterations; i++) {
    var n = new needle();
    attempts += 1;
    if (interceptsLine(n, windowHeight / 3) || interceptsLine(n, 2 * windowHeight / 3) || interceptsLine(n, windowHeight) || interceptsLine(n, 0)) {
      hits += 1;
      console.log("gothere");
    }
    console.log("globalAttempts : " + attempts + " globalHit : " + hits);
  }
  var piApprox = 2 * attempts / hits;
  console.log("globalAttempts : " + attempts + " globalHit : " + hits + " piApprox : " + piApprox);
}

evaluate(numIter);
