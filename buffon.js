// Set the needle length (this is also the vertical distance between the paralell lines)
var needleLength = 20;

// The test window's height will be 3 times the needle's length
// Width of the window doesn't matter mathematically, so we'll arbitrarily make it a square
var windowHeight = needleLength * 3;
var windowWidth = needleLength * 3;

// Define the number of dropped needles that the test will run
var numIter = 100000000;

// Defined class for the properties of a needle
// The angle is chosen randomly for 0 - 2 PI radians
// The start point for the needle's ray is randomly selected within the bounds of the window
var needle = function() {
  this.angle = Math.random() * Math.PI * 2;
  this.startX = Math.random() * windowWidth;
  this.startY = Math.random() * windowHeight;
  this.endX = this.startX + Math.cos(this.angle) * needleLength;
  this.endY = this.startY + Math.sin(this.angle) * needleLength;
}

// The needle's line is checked to see if it intersects the base, top, or middle "lines" in the window
// If the needle intersects a line, then it counts as a "hit"
var interceptsLine = function(needle, lineHeight) {
  if ((needle.startY < lineHeight && needle.endY > lineHeight) || (needle.startY > lineHeight && needle.endY < lineHeight)) {
    return true;
  }

  else {
    return false;
  }
}

// Main evaluation function; iterate dropping needles, testing for intersections, and keeping track of hits vs. attempts
// The net approximation of Pi is calculated as:
// 2 * (number of attempts) / (number of needle drops)
var evaluate = function(iterations) {
  var attempts = 0;
  var hits = 0;
  for (i = 0; i < iterations; i++) {
    var n = new needle();
    attempts += 1;
    if (interceptsLine(n, windowHeight / 3) || interceptsLine(n, 2 * windowHeight / 3) || interceptsLine(n, windowHeight) || interceptsLine(n, 0)) {
      hits += 1;
    }
  }
  var piApprox = 2 * attempts / hits;
  console.log("With " + attempts + " iterations, pi is approximated as " + piApprox);
}

evaluate(numIter);
