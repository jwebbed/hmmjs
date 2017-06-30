function randomBetween(x, y) {
  return Math.floor(Math.random() * y) + x;
}

function randomX() {
  return randomBetween(0, window.innerWidth) + 'px';
}
function randomY() {
  return randomBetween(0, window.innerHeight) + 'px';
}
function randomAngle() {
  return randomBetween(-60, 60) + 'deg';
}

function randomContainerPlacement(el) {
  var flip = randomBetween(0, 2) > 0 ? '-' : '';
  el.style.transform =
    'translate(' + randomX() + ',' + randomY() + ') ' +
    'rotate(' + randomAngle() + ') ' +
    'scaleX(' + flip + '1)';
}

function genCSS(emoji) {
  var css = document.createElement('style');
  css.type = 'text/css';

  var rule = '.' + emoji + '::before, ' + emoji + '::after { content: "' + emoji + '"};'
  console.log(rule);

  css.appendChild(document.createTextNode(rule)); // Support for the rest
  document.getElementsByTagName("head")[0].appendChild(css); // Specifies where to place the css
}

var emoji = "🙃";
genCSS(emoji);

var elHmmOverlay = document.createElement('div');
elHmmOverlay.className = '🤔-overlay';
document.body.appendChild(elHmmOverlay);

function hmm(emoji) {
  var elHmmContainer = document.createElement('div');
  elHmmContainer.className = '🤔-container';
  var elHmm = document.createElement('div');
  elHmm.className = '🤔 ' + emoji;
  elHmmContainer.appendChild(elHmm);
  elHmmOverlay.appendChild(elHmmContainer);

  randomContainerPlacement(elHmmContainer);

  setTimeout(function() {
    elHmmOverlay.removeChild(elHmmContainer);
  }, 5500);
}

hmm(emoji);
setInterval(hmm, 1500, emoji);
