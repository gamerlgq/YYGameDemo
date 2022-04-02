System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, singletonMgr, Singleton, _crd;

  function _reportPossibleCrUseOfsingletonMgr(extras) {
    _reporterNs.report("singletonMgr", "./SingletonMgr", _context.meta, extras);
  }

  _export("Singleton", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      singletonMgr = _unresolved_2.singletonMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a0b4sN59FGnZWmhkN+xMZC", "Singleton", undefined);

      _export("Singleton", Singleton = class Singleton {
        static getInstance() {
          if (!this.instance) {
            this.instance = new this();
            (_crd && singletonMgr === void 0 ? (_reportPossibleCrUseOfsingletonMgr({
              error: Error()
            }), singletonMgr) : singletonMgr).sign(this);
          }

          return this.instance;
        }

        static destoryInstance() {
          if (this.instance) {
            this.instance.clear();
            this.instance = null;
            (_crd && singletonMgr === void 0 ? (_reportPossibleCrUseOfsingletonMgr({
              error: Error()
            }), singletonMgr) : singletonMgr).unSign(this);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Singleton.js.map