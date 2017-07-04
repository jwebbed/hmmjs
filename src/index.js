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

var genCSS = (function() {
  var used = [];
  return function (emoji) {
    if (used.indexOf(emoji) > -1)
      return;
    used.push(emoji)

    var css = document.createElement('style');
    css.type = 'text/css';

    var rule = '.' + emoji + '::before, ' + emoji + '::after { content: "' + emoji + '"};'

    css.appendChild(document.createTextNode(rule));
    var elements = document.getElementsByClassName("🤔-overlay")[0].appendChild(css);
  }
})();

// From https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
export function isEmoji(str) {
    var ranges = [
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
    ];
    if (str.match(ranges.join('|'))) {
        return true;
    } else {
        return false;
    }
}


function getOverlay() {
  var elHmmOverlay = document.createElement('div');
  elHmmOverlay.className = '🤔-overlay';
  return document.body.appendChild(elHmmOverlay);
}


function hmm(emoji, elHmmOverlay) {
  genCSS(emoji);

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


const emojiList = ['🤔', '😁','🤣','😒','💕','🤦','🤞','🎶','😜','🌹','🤳','😊',
                 '❤', '👌','👍','🤷','😉','👏','🎉','🐱','‍👤','😂','😍','😘',
                 '🙌','✌','😎','💖','💋','🎂','🐱','💻'];

var randomEmoji = (function() {
  var i = 0;
  return function(elHmmOverlay) {
    hmm(emojiList[i++], elHmmOverlay);
    if (i == emojiList.length)
      i = 0;
  }
})();

export function startEmojiRandom() {
  var overlay = getOverlay();
  randomEmoji(overlay);
  let i = setInterval(randomEmoji, 1500, overlay);

  return () => {
    clearInterval(i);
     document.body.removeChild(overlay);
  }
}

export function startEmoji(emoji, inline=true) {
  var overlay = getOverlay();
  hmm(emoji, overlay);
  let i = setInterval(hmm, 1500, emoji, overlay);

  return () => {
    clearInterval(i);
    document.body.removeChild(overlay);
  }
}
