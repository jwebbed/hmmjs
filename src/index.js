/*
* convience functions
*/

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

    var rule = '.🤔-' + emoji + '::before, ' + emoji + '::after { content: "' + emoji + '"};'

    css.appendChild(document.createTextNode(rule));
    var elements = document.getElementsByClassName("🤔-overlay")[0].appendChild(css);
  }
})();

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
  elHmm.className = '🤔 🤔-' + emoji;
  elHmmContainer.appendChild(elHmm);
  elHmmOverlay.appendChild(elHmmContainer);

  randomContainerPlacement(elHmmContainer);

  setTimeout(function() {
    elHmmOverlay.removeChild(elHmmContainer);
  }, 5500);
}

// from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  max = Math.floor(max);
  return Math.floor(Math.random() * max); //The maximum is exclusive and the minimum is inclusive
}

function rng(length) {
  let nums = [...Array(length).keys()];
  console.log(nums);

  return () => {
    if (nums.length === 0)
      nums = [...Array(length).keys()];

    const index = getRandomInt(nums.length);
    const val = nums[index];

    console.log(nums)
    console.log(index);
    console.log(val);

    nums.splice(index, 1);
    return val;
  }
}

const emojiList = ['🤔', '😁','🤣','😒','💕','🤦','🤞','🎶','😜','🌹','🤳','😊',
                 '❤', '👌','👍','🤷','😉','👏','🎉','🐱','‍👤','😂','😍','😘',
                 '🙌','✌','😎','💖','💋','🎂','🐱','💻'];

var randomEmoji = (function() {
  const iter = rng(emojiList.length);
  return (elHmmOverlay) => {
    hmm(emojiList[iter()], elHmmOverlay);
  }
})();

function genCb(interval, overlay) {
  return (smooth=false) => {
    clearInterval(interval);
    if (!smooth) {
      document.body.removeChild(overlay);
    }
  }
}


/*
* exposed functions
*/

// From https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
// A convience function that is likely useful in any real application of this library
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

export function startEmojiRandom(config={}) {
  var overlay = getOverlay();
  randomEmoji(overlay);
  let i = setInterval(randomEmoji, 1500, overlay);

  return genCb(i, overlay);
}

const defaultConfig = {
  random: false,
  interval: 1500,
  duration: 5500
}

export function startEmoji(emoji, _config=defaultConfig) {
  const config = { ...defaultConfig, ..._config };
  console.log(config);

  var overlay = getOverlay();
  hmm(emoji, overlay);
  let i = setInterval(hmm, 1500, emoji, overlay);

  return genCb(i, overlay);
}
