/******/ (function(modules) { // webpackBootstrap
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
eval("\n\nvar _index = __webpack_require__(1);\n\nvar hmmmm = _interopRequireWildcard(_index);\n\n__webpack_require__(2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nvar cb = hmmmm.startEmojiRandom();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC5qcz80YjQ3Il0sIm5hbWVzIjpbImhtbW1tIiwiY2IiLCJzdGFydEVtb2ppUmFuZG9tIl0sIm1hcHBpbmdzIjoiOztBQUFBOztJQUFZQSxLOztBQUNaOzs7O0FBRUEsSUFBSUMsS0FBS0QsTUFBTUUsZ0JBQU4sRUFBVCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaG1tbW0gZnJvbSAnLi9pbmRleC5qcyc7XG5pbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cbmxldCBjYiA9IGhtbW1tLnN0YXJ0RW1vamlSYW5kb20oKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.isEmoji = isEmoji;\nexports.startEmojiRandom = startEmojiRandom;\nexports.startEmoji = startEmoji;\nfunction randomBetween(x, y) {\n  return Math.floor(Math.random() * y) + x;\n}\n\nfunction randomX() {\n  return randomBetween(0, window.innerWidth) + 'px';\n}\nfunction randomY() {\n  return randomBetween(0, window.innerHeight) + 'px';\n}\nfunction randomAngle() {\n  return randomBetween(-60, 60) + 'deg';\n}\n\nfunction randomContainerPlacement(el) {\n  var flip = randomBetween(0, 2) > 0 ? '-' : '';\n  el.style.transform = 'translate(' + randomX() + ',' + randomY() + ') ' + 'rotate(' + randomAngle() + ') ' + 'scaleX(' + flip + '1)';\n}\n\nvar genCSS = function () {\n  var used = [];\n  return function (emoji) {\n    if (used.indexOf(emoji) > -1) return;\n    used.push(emoji);\n\n    var css = document.createElement('style');\n    css.type = 'text/css';\n\n    var rule = '.' + emoji + '::before, ' + emoji + '::after { content: \"' + emoji + '\"};';\n\n    css.appendChild(document.createTextNode(rule));\n    var elements = document.getElementsByClassName(\"🤔-overlay\")[0].appendChild(css);\n  };\n}();\n\n// From https://stackoverflow.com/questions/18862256/how-to-detect-emoji-using-javascript\nfunction isEmoji(str) {\n  var ranges = ['\\uD83C[\\uDF00-\\uDFFF]', // U+1F300 to U+1F3FF\n  '\\uD83D[\\uDC00-\\uDE4F]', // U+1F400 to U+1F64F\n  '\\uD83D[\\uDE80-\\uDEFF]' // U+1F680 to U+1F6FF\n  ];\n  if (str.match(ranges.join('|'))) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nfunction getOverlay() {\n  var elHmmOverlay = document.createElement('div');\n  elHmmOverlay.className = '🤔-overlay';\n  return document.body.appendChild(elHmmOverlay);\n}\n\nfunction hmm(emoji, elHmmOverlay) {\n  genCSS(emoji);\n\n  var elHmmContainer = document.createElement('div');\n  elHmmContainer.className = '🤔-container';\n  var elHmm = document.createElement('div');\n  elHmm.className = '🤔 ' + emoji;\n  elHmmContainer.appendChild(elHmm);\n  elHmmOverlay.appendChild(elHmmContainer);\n\n  randomContainerPlacement(elHmmContainer);\n\n  setTimeout(function () {\n    elHmmOverlay.removeChild(elHmmContainer);\n  }, 5500);\n}\n\nvar emojiList = ['🤔', '😁', '🤣', '😒', '💕', '🤦', '🤞', '🎶', '😜', '🌹', '🤳', '😊', '❤', '👌', '👍', '🤷', '😉', '👏', '🎉', '🐱', '‍👤', '😂', '😍', '😘', '🙌', '✌', '😎', '💖', '💋', '🎂', '🐱', '💻'];\n\nvar randomEmoji = function () {\n  var i = 0;\n  return function (elHmmOverlay) {\n    hmm(emojiList[i++], elHmmOverlay);\n    if (i == emojiList.length) i = 0;\n  };\n}();\n\nfunction startEmojiRandom() {\n  var overlay = getOverlay();\n  randomEmoji(overlay);\n  var i = setInterval(randomEmoji, 1500, overlay);\n\n  return function () {\n    clearInterval(i);\n    document.body.removeChild(overlay);\n  };\n}\n\nfunction startEmoji(emoji) {\n  var inline = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  var overlay = getOverlay();\n  hmm(emoji, overlay);\n  var i = setInterval(hmm, 1500, emoji, overlay);\n\n  return function () {\n    clearInterval(i);\n    document.body.removeChild(overlay);\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJpc0Vtb2ppIiwic3RhcnRFbW9qaVJhbmRvbSIsInN0YXJ0RW1vamkiLCJyYW5kb21CZXR3ZWVuIiwieCIsInkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21YIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInJhbmRvbVkiLCJpbm5lckhlaWdodCIsInJhbmRvbUFuZ2xlIiwicmFuZG9tQ29udGFpbmVyUGxhY2VtZW50IiwiZWwiLCJmbGlwIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJnZW5DU1MiLCJ1c2VkIiwiZW1vamkiLCJpbmRleE9mIiwicHVzaCIsImNzcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJydWxlIiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUZXh0Tm9kZSIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInN0ciIsInJhbmdlcyIsIm1hdGNoIiwiam9pbiIsImdldE92ZXJsYXkiLCJlbEhtbU92ZXJsYXkiLCJjbGFzc05hbWUiLCJib2R5IiwiaG1tIiwiZWxIbW1Db250YWluZXIiLCJlbEhtbSIsInNldFRpbWVvdXQiLCJyZW1vdmVDaGlsZCIsImVtb2ppTGlzdCIsInJhbmRvbUVtb2ppIiwiaSIsImxlbmd0aCIsIm92ZXJsYXkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpbmxpbmUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBd0NnQkEsTyxHQUFBQSxPO1FBb0RBQyxnQixHQUFBQSxnQjtRQVdBQyxVLEdBQUFBLFU7QUF2R2hCLFNBQVNDLGFBQVQsQ0FBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QjtBQUMzQixTQUFPQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsS0FBZ0JILENBQTNCLElBQWdDRCxDQUF2QztBQUNEOztBQUVELFNBQVNLLE9BQVQsR0FBbUI7QUFDakIsU0FBT04sY0FBYyxDQUFk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QUE5QixDQUFSOztBQUVBLFNBQU8sWUFBTTtBQUNYRSxrQkFBY0osQ0FBZDtBQUNBdkIsYUFBU2UsSUFBVCxDQUFjSyxXQUFkLENBQTBCSyxPQUExQjtBQUNELEdBSEQ7QUFJRCIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmFuZG9tQmV0d2Vlbih4LCB5KSB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHkpICsgeDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tWCgpIHtcclxuICByZXR1cm4gcmFuZG9tQmV0d2VlbigwLCB3aW5kb3cuaW5uZXJXaWR0aCkgKyAncHgnO1xyXG59XHJcbmZ1bmN0aW9uIHJhbmRvbVkoKSB7XHJcbiAgcmV0dXJuIHJhbmRvbUJldHdlZW4oMCwgd2luZG93LmlubmVySGVpZ2h0KSArICdweCc7XHJcbn1cclxuZnVuY3Rpb24gcmFuZG9tQW5nbGUoKSB7XHJcbiAgcmV0dXJuIHJhbmRvbUJldHdlZW4oLTYwLCA2MCkgKyAnZGVnJztcclxufVxyXG5cclxuZnVuY3Rpb24gcmFuZG9tQ29udGFpbmVyUGxhY2VtZW50KGVsKSB7XHJcbiAgdmFyIGZsaXAgPSByYW5kb21CZXR3ZWVuKDAsIDIpID4gMCA/ICctJyA6ICcnO1xyXG4gIGVsLnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAndHJhbnNsYXRlKCcgKyByYW5kb21YKCkgKyAnLCcgKyByYW5kb21ZKCkgKyAnKSAnICtcclxuICAgICdyb3RhdGUoJyArIHJhbmRvbUFuZ2xlKCkgKyAnKSAnICtcclxuICAgICdzY2FsZVgoJyArIGZsaXAgKyAnMSknO1xyXG59XHJcblxyXG52YXIgZ2VuQ1NTID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciB1c2VkID0gW107XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChlbW9qaSkge1xyXG4gICAgaWYgKHVzZWQuaW5kZXhPZihlbW9qaSkgPiAtMSlcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdXNlZC5wdXNoKGVtb2ppKVxyXG5cclxuICAgIHZhciBjc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgY3NzLnR5cGUgPSAndGV4dC9jc3MnO1xyXG5cclxuICAgIHZhciBydWxlID0gJy4nICsgZW1vamkgKyAnOjpiZWZvcmUsICcgKyBlbW9qaSArICc6OmFmdGVyIHsgY29udGVudDogXCInICsgZW1vamkgKyAnXCJ9OydcclxuXHJcbiAgICBjc3MuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocnVsZSkpO1xyXG4gICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIvCfpJQtb3ZlcmxheVwiKVswXS5hcHBlbmRDaGlsZChjc3MpO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8vIEZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTg4NjIyNTYvaG93LXRvLWRldGVjdC1lbW9qaS11c2luZy1qYXZhc2NyaXB0XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Vtb2ppKHN0cikge1xyXG4gICAgdmFyIHJhbmdlcyA9IFtcclxuICAgICAgICAnXFx1ZDgzY1tcXHVkZjAwLVxcdWRmZmZdJywgLy8gVSsxRjMwMCB0byBVKzFGM0ZGXHJcbiAgICAgICAgJ1xcdWQ4M2RbXFx1ZGMwMC1cXHVkZTRmXScsIC8vIFUrMUY0MDAgdG8gVSsxRjY0RlxyXG4gICAgICAgICdcXHVkODNkW1xcdWRlODAtXFx1ZGVmZl0nIC8vIFUrMUY2ODAgdG8gVSsxRjZGRlxyXG4gICAgXTtcclxuICAgIGlmIChzdHIubWF0Y2gocmFuZ2VzLmpvaW4oJ3wnKSkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0T3ZlcmxheSgpIHtcclxuICB2YXIgZWxIbW1PdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxIbW1PdmVybGF5LmNsYXNzTmFtZSA9ICfwn6SULW92ZXJsYXknO1xyXG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsSG1tT3ZlcmxheSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBobW0oZW1vamksIGVsSG1tT3ZlcmxheSkge1xyXG4gIGdlbkNTUyhlbW9qaSk7XHJcblxyXG4gIHZhciBlbEhtbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsSG1tQ29udGFpbmVyLmNsYXNzTmFtZSA9ICfwn6SULWNvbnRhaW5lcic7XHJcbiAgdmFyIGVsSG1tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxIbW0uY2xhc3NOYW1lID0gJ/CfpJQgJyArIGVtb2ppO1xyXG4gIGVsSG1tQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsSG1tKTtcclxuICBlbEhtbU92ZXJsYXkuYXBwZW5kQ2hpbGQoZWxIbW1Db250YWluZXIpO1xyXG5cclxuICByYW5kb21Db250YWluZXJQbGFjZW1lbnQoZWxIbW1Db250YWluZXIpO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZWxIbW1PdmVybGF5LnJlbW92ZUNoaWxkKGVsSG1tQ29udGFpbmVyKTtcclxuICB9LCA1NTAwKTtcclxufVxyXG5cclxuXHJcbmNvbnN0IGVtb2ppTGlzdCA9IFsn8J+klCcsICfwn5iBJywn8J+koycsJ/CfmJInLCfwn5KVJywn8J+kpicsJ/CfpJ4nLCfwn462Jywn8J+YnCcsJ/CfjLknLCfwn6SzJywn8J+YiicsXHJcbiAgICAgICAgICAgICAgICAgJ+KdpCcsICfwn5GMJywn8J+RjScsJ/CfpLcnLCfwn5iJJywn8J+RjycsJ/CfjoknLCfwn5CxJywn4oCN8J+RpCcsJ/CfmIInLCfwn5iNJywn8J+YmCcsXHJcbiAgICAgICAgICAgICAgICAgJ/CfmYwnLCfinIwnLCfwn5iOJywn8J+SlicsJ/CfkosnLCfwn46CJywn8J+QsScsJ/CfkrsnXTtcclxuXHJcbnZhciByYW5kb21FbW9qaSA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgaSA9IDA7XHJcbiAgcmV0dXJuIChlbEhtbU92ZXJsYXkpID0+IHtcclxuICAgIGhtbShlbW9qaUxpc3RbaSsrXSwgZWxIbW1PdmVybGF5KTtcclxuICAgIGlmIChpID09IGVtb2ppTGlzdC5sZW5ndGgpXHJcbiAgICAgIGkgPSAwO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEVtb2ppUmFuZG9tKCkge1xyXG4gIHZhciBvdmVybGF5ID0gZ2V0T3ZlcmxheSgpO1xyXG4gIHJhbmRvbUVtb2ppKG92ZXJsYXkpO1xyXG4gIGxldCBpID0gc2V0SW50ZXJ2YWwocmFuZG9tRW1vamksIDE1MDAsIG92ZXJsYXkpO1xyXG5cclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpKTtcclxuICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0RW1vamkoZW1vamksIGlubGluZT1mYWxzZSkge1xyXG4gIHZhciBvdmVybGF5ID0gZ2V0T3ZlcmxheSgpO1xyXG4gIGhtbShlbW9qaSwgb3ZlcmxheSk7XHJcbiAgbGV0IGkgPSBzZXRJbnRlcnZhbChobW0sIDE1MDAsIGVtb2ppLCBvdmVybGF5KTtcclxuXHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaSk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG92ZXJsYXkpO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz8yMDQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3N0eWxlcy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);