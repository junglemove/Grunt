"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        /**
         * Created by Administrateur on 13/12/2016.
         */
        var math = require('./math.js');

        var MonBouton = function () {
            function MonBouton() {
                _classCallCheck(this, MonBouton);

                this.cpt = 0;
            }

            _createClass(MonBouton, [{
                key: "toString",
                value: function toString() {
                    return "<button>" + this.cpt + "</button>";
                }
            }, {
                key: "click",
                value: function click() {
                    this.cpt = math.increment(this.cpt);
                }
            }]);

            return MonBouton;
        }();

        module.exports = MonBouton; //
    }, { "./math.js": 3 }], 2: [function (require, module, exports) {
        /**
         * Created by Administrateur on 13/12/2016.
         */
        var MonBouton = require('./Monbouton.js'); // si c'est un module que l'on a créé, indiquer l'arboressence (../ ou ./ etc.)
        // les module node.js ou importés par npm sont automatiquement proposés par ctrl+space
        var myBtn = new MonBouton();

        myBtn.click();
        myBtn.click();
        myBtn.click();
        myBtn.click();
        myBtn.click();

        console.log(myBtn.toString()); // <button>3</button>
    }, { "./Monbouton.js": 1 }], 3: [function (require, module, exports) {
        /**
         * Created by Administrateur on 13/12/2016.
         */
        module.exports.increment = function (i) {
            return i + 1;
        };
    }, {}] }, {}, [2]);
//# sourceMappingURL=index-browser-es5.js.map
