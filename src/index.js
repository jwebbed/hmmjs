import { reduce } from 'lodash/fp';

/*
* convenience functions
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

const cssTextGen = reduce((total, row) => {
  return total + `${row[0]}: ${row[1]};`;
}, '');

function appendCSS(selector, styles, overlay) {
  let stylestr = cssTextGen(styles);
  let rule = `.${selector} { ${stylestr} }`;
  console.log(rule);

  var css = document.createElement('style');
  css.type = 'text/css';

  css.appendChild(document.createTextNode(rule));
  overlay.appendChild(css);
}

function cssStringToElement(s){
  const css = document.createElement('style');
  css.type = 'text/css';
  css.appendChild(document.createTextNode(s));
  return css;
}

function getAnimationCSS(config) {
  const styles1 = cssTextGen([
   ['animation', `🤔 ${config.duration}ms linear forwards`],
   ['display', 'inline-block'],
   ['will-change', 'transform'],
   ['pointer-events', 'none'],
  ]);
  const styles2 = cssTextGen([
    ['animation', `🤔🤔 ${config.duration}ms linear forwards`],
    ['height', '6.5em'],
    ['width', '6.5em'],
    ['position', 'absolute'],
    ['left', '-1.5em'],
    ['top', '-0.75em'],
    ['opacity', '0.5'],
    ['z-index', '-1'],
  ]);
  return cssStringToElement(`.🤔 { ${styles1} } .🤔::after { ${styles2}`);
}

function getCSSGenerator(overlay) {
  var used = [];
  return function (emoji) {
    if (used.indexOf(emoji) > -1)
      return;
    used.push(emoji)

    var css = document.createElement('style');
    css.type = 'text/css';

    var rule = '.🤔-' + emoji + '::before, .🤔-' + emoji + '::after { content: "' + emoji + '"};'

    css.appendChild(document.createTextNode(rule));
    var elements = overlay.appendChild(css);
  }
};

function getKeyframeCss() {
  let keyframes = document.createElement('style');
  keyframes.type = 'text/css';
  keyframes.appendChild(document.createTextNode(`@keyframes 🤔 {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(200%);
    }
  }

  @keyframes 🤔🤔 {
    100% {
      transform: translateX(20%);
    }
  }`));
  return keyframes;
}

function getBeforeAfterCss() {
  let css = document.createElement('style');
  css.type = 'text/css';
  css.appendChild(document.createTextNode(`.🤔::before, .🤔::after {
    display: inline-block;
    font-size: 4em;
  }

  .🤔::before {
    height: 5em;
    width: 5em;
  }`));
  return css;
}

function getOverlay(config) {
  var overlay = document.createElement('div');
  overlay.setAttribute('style', `position: fixed;top: 0;left: 0;  height: 100vh;width: 100vw;z-index: ${config.zbase};overflow: hidden;pointer-events: none;`)
  overlay.appendChild(getKeyframeCss());
  overlay.appendChild(getBeforeAfterCss());
  overlay.appendChild(getAnimationCSS(config));
  return document.body.appendChild(overlay);
}


function genContainer() {
  let container = document.createElement('div');
  container.setAttribute('style', "display: inline-block;position:absolute;transform-origin:center;pointer-events: none;")
  return container;
}

function emojiOverlayGenerator(overlay, config) {
  const genCSS = getCSSGenerator(overlay);
  return (emoji) => {
    genCSS(emoji);

    var elHmmContainer = genContainer();
    var elHmm = document.createElement('div');
    elHmm.className = '🤔 🤔-' + emoji;
    elHmmContainer.appendChild(elHmm);
    overlay.appendChild(elHmmContainer);

    randomContainerPlacement(elHmmContainer);

    setTimeout(function() {
      overlay.removeChild(elHmmContainer);
    }, config.duration + (config.duration * 0.1));
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomIter(length) {
  let nums = [...Array(length).keys()];
  return () => {
    if (nums.length === 0)
      nums = [...Array(length).keys()];

    const index = getRandomInt(nums.length);
    const val = nums[index];

    nums.splice(index, 1);
    return val;
  }
}

function linearIter(length) {
  let i = 0;
  return () => {
    if (i === length)
      i = 0;
    return i++;
  }
}

const emojiList = ['🤔', '😁','🤣','😒','💕','🤦','🤞','🎶','😜','🌹','🤳','😊',
                 '❤', '👌','👍','🤷','😉','👏','🎉','🐱','‍👤','😂','😍','😘',
                 '🙌','✌','😎','💖','💋','🎂','🐱','💻'];

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
// A convenience function that is likely useful in any real application of this library
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

const defaultConfig = {
  emojis: emojiList,
  random: true,
  interval: 1500,
  duration: 5000,
  zbase: 10
}

export default function startEmoji(_config=defaultConfig) {
  const config = { ...defaultConfig, ..._config };
  console.log(config);

  // Get the overlay
  const overlay = getOverlay(config);

  // Config handling
  const emojis = config.emojis;
  let iter = config.random ? randomIter(emojis.length) :  linearIter(emojis.length);

  const hmm = emojiOverlayGenerator(overlay, config);
  hmm(emojis[iter()]);
  let i = setInterval(() => {
    // hmm(emojiList[iter()], elHmmOverlay);
    hmm(emojis[iter()]);
  }, config.interval);

  return genCb(i, overlay);
}
