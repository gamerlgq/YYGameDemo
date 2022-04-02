System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, Embattled;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8af78FwpZG9aeHfG5vK9WM", "Embattled_1", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Embattled", Embattled = (_dec = ccclass('Embattled'), _dec(_class = (_temp = class Embattled extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_startCallback", null);

          _defineProperty(this, "_endCallback", null);
        }

        start() {
          if (this._startCallback) {
            this._startCallback();
          }
        }
        /**
         * 
         * @param callback 设置回调
         */


        setStartCallback(callback) {
          this._startCallback = callback;
        }
        /**
         * 
         * @param callback 设置回调
         */


        setEndCallback(callback) {
          this._endCallback = callback;
        }

        onEndTriggered(arg) {
          console.log('I am triggered!', arg);

          if (this._endCallback) {
            this._endCallback();
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Embattled_1.js.map