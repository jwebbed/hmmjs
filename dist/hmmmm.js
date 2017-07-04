(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["hmmmm"] = factory(require("lodash"));
	else
		root["hmmmm"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["isEmoji"] = isEmoji;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



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
  el.style.transform = 'translate(' + randomX() + ',' + randomY() + ') ' + 'rotate(' + randomAngle() + ') ' + 'scaleX(' + flip + '1)';
}

function appendCSS(selector, styles, overlay) {
  var stylestr = __WEBPACK_IMPORTED_MODULE_0_lodash__["reduce"](styles, function (total, row) {
    return total + (row[0] + ': ' + row[1] + ';');
  }, '');
  var style = '.' + selector + ' { ' + stylestr + ' }';
  console.log(style);
}

var genCSS = function () {
  var used = [];
  return function (emoji, overlay) {
    if (used.indexOf(emoji) > -1) return;
    used.push(emoji);

    var css = document.createElement('style');
    css.type = 'text/css';

    var rule = '.🤔-' + emoji + '::before, .🤔-' + emoji + '::after { content: "' + emoji + '"};';

    css.appendChild(document.createTextNode(rule));
    var elements = overlay.appendChild(css);
  };
}();

function getOverlay() {
  var elHmmOverlay = document.createElement('div');
  elHmmOverlay.className = '🤔-overlay';
  return document.body.appendChild(elHmmOverlay);
}

function hmm(emoji, elHmmOverlay) {
  genCSS(emoji, elHmmOverlay);

  var elHmmContainer = document.createElement('div');
  elHmmContainer.className = '🤔-container';
  var elHmm = document.createElement('div');
  elHmm.className = '🤔 🤔-' + emoji;
  elHmmContainer.appendChild(elHmm);
  elHmmOverlay.appendChild(elHmmContainer);

  randomContainerPlacement(elHmmContainer);

  setTimeout(function () {
    elHmmOverlay.removeChild(elHmmContainer);
  }, 5500);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function randomIter(length) {
  var nums = [].concat(_toConsumableArray(Array(length).keys()));
  return function () {
    if (nums.length === 0) nums = [].concat(_toConsumableArray(Array(length).keys()));

    var index = getRandomInt(nums.length);
    var val = nums[index];

    nums.splice(index, 1);
    return val;
  };
}

function linearIter(length) {
  var nums = [].concat(_toConsumableArray(Array(length).keys()));
  return function () {
    if (nums.length === 0) nums = [].concat(_toConsumableArray(Array(length).keys()));
    var val = nums[0];
    nums.splice(0, 1);
    return val;
  };
}

var emojiList = ['🤔', '😁', '🤣', '😒', '💕', '🤦', '🤞', '🎶', '😜', '🌹', '🤳', '😊', '❤', '👌', '👍', '🤷', '😉', '👏', '🎉', '🐱', '‍👤', '😂', '😍', '😘', '🙌', '✌', '😎', '💖', '💋', '🎂', '🐱', '💻'];

function genCb(interval, overlay) {
  return function () {
    var smooth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    clearInterval(interval);
    if (!smooth) {
      document.body.removeChild(overlay);
    }
  };
}

/*
* exposed functions
*/

// From https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
// A convenience function that is likely useful in any real application of this library
function isEmoji(str) {
  var ranges = ['\uD83C[\uDF00-\uDFFF]', // U+1F300 to U+1F3FF
  '\uD83D[\uDC00-\uDE4F]', // U+1F400 to U+1F64F
  '\uD83D[\uDE80-\uDEFF]' // U+1F680 to U+1F6FF
  ];
  if (str.match(ranges.join('|'))) {
    return true;
  } else {
    return false;
  }
}

var defaultConfig = {
  emojis: emojiList,
  random: true,
  interval: 1500,
  duration: 5500
};

function startEmoji() {
  var _config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultConfig;

  var config = _extends({}, defaultConfig, _config);
  console.log(config);

  // Config handling
  var emojis = config.emojis;
  var iter = config.random ? randomIter(emojis.length) : linearIter(emojis.length);

  appendCSS('🤔', [['animation', '🤔 5000ms linear forwards']]);

  var overlay = getOverlay();
  hmm(emojis[iter()], overlay);
  var i = setInterval(function () {
    // hmm(emojiList[iter()], elHmmOverlay);
    hmm(emojis[iter()], overlay);
  }, config.interval);

  return genCb(i, overlay);
}

/* harmony default export */ __webpack_exports__["default"] = (startEmoji);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ })
/******/ ]);
});