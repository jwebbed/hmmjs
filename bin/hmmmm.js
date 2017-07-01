(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hmmmm"] = factory();
	else
		root["hmmmm"] = factory();
})(this, function() {
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isEmoji = isEmoji;
exports.startEmoji = startEmoji;
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

var genCSS = function () {
  var used = [];
  return function (emoji) {
    if (used.indexOf(emoji) > -1) return;
    used.push(emoji);

    var css = document.createElement('style');
    css.type = 'text/css';

    var rule = '.' + emoji + '::before, ' + emoji + '::after { content: "' + emoji + '"};';

    css.appendChild(document.createTextNode(rule));
    var elements = document.getElementsByClassName("🤔-overlay")[0].appendChild(css);
  };
}();

// From https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript
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

  setTimeout(function () {
    elHmmOverlay.removeChild(elHmmContainer);
  }, 5500);
}

var randomEmoji = function () {
  var emojiList = ['🤔', '😁', '🤣', '😒', '💕', '🤦', '🤞', '🎶', '😜', '🌹', '🤳', '😊', '❤', '👌', '👍', '🤷', '😉', '👏', '🎉', '🐱', '‍👤', '😂', '😍', '😘', '🙌', '✌', '😎', '💖', '💋', '🎂', '🐱', '💻'];
  var i = 0;
  return function (elHmmOverlay) {
    hmm(emojiList[i++], elHmmOverlay);
    if (i == emojiList.length) i = 0;
  };
}();

function startEmoji() {
  var overlay = getOverlay();
  randomEmoji(overlay);
  setInterval(randomEmoji, 1500, overlay);
}

/***/ })
/******/ ]);
});