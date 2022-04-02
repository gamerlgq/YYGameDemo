System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, error, log, sys, warn, Logger, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      log = _cc.log;
      sys = _cc.sys;
      warn = _cc.warn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c397fvD7+tJEJUMNWMt2wl/", "Logger", undefined);

      _export("default", Logger = class Logger {
        static get lv() {
          return this._lv;
        }

        static set lv(value) {
          this._lv = value;
        }

        static i(message, ...op) {
          if (this.lv >= 3) {
            if (sys.isNative) {
              if (typeof message === "object") {
                let s = JSON.stringify(message);
                log(s, op);
              } else {
                log(message, op);
              }
            } else {
              log(message, op);
            }
          }
        }

        static e(message) {
          if (this.lv >= 1) {
            error(message);
          }
        }

        static w(message) {
          if (this.lv >= 2) {
            warn(message);
          }
        }

        static net(message) {
          if (this.lv >= 4) {
            log(message);
          }
        }

      });

      _defineProperty(Logger, "_lv", 4);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Logger.js.map