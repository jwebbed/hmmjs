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

function hmm() {
  var elHmmOverlay = document.createElement('div');
  elHmmOverlay.className = '.🤔-overlay';
  document.body.appendChild(elHmmOverlay);

  var elHmmContainer = document.createElement('div');
  elHmmContainer.className = '🤔-container';
  var elHmm = document.createElement('div');
  elHmm.className = '🤔';
  elHmmContainer.appendChild(elHmm);
  elHmmOverlay.appendChild(elHmmContainer);

  randomContainerPlacement(elHmmContainer);

  setTimeout(function() {
    elHmmOverlay.removeChild(elHmmContainer);
  }, 5500);
}

hmm();
setInterval(hmm, 1500);
