System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, CameraLock;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2c5394f8IBAoJ25m3lWBS4G", "CameraLock", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CameraLock", CameraLock = (_dec = ccclass('CameraLock'), _dec(_class = (_temp = class CameraLock extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_endCallback", null);
        }

        setEndCallback(endCallback) {
          this._endCallback = endCallback;
        }

        onEndCallback() {
          if (this._endCallback) {
            this._endCallback();

            this._endCallback = null;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=CameraLock.js.map