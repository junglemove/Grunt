"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){var d=a("./math.js"),e=function(){function a(){_classCallCheck(this,a),this.cpt=0}return _createClass(a,[{key:"toString",value:function(){return"<button>"+this.cpt+"</button>"}},{key:"click",value:function(){this.cpt=d.increment(this.cpt)}}]),a}();b.exports=e},{"./math.js":3}],2:[function(a,b,c){var d=a("./Monbouton.js"),e=new d;e.click(),e.click(),e.click(),console.log(e.toString())},{"./Monbouton.js":1}],3:[function(a,b,c){b.exports.increment=function(a){return a+1}},{}]},{},[2]);