System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, EffectBase;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48ceezHv2VBdqha2up+lY6D", "EffectBase", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EffectBase", EffectBase = (_dec = ccclass('EffectBase'), _dec(_class = (_temp = class EffectBase extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_endCallback", null);

          _defineProperty(this, "_startCallback", null);
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
          if (this._endCallback) {
            this._endCallback();
          } // 不做清理，保存在内存中


          this.node.removeFromParent();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EffectBase.js.map