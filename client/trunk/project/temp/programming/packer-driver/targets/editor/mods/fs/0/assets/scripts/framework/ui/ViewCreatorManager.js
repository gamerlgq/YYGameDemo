System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, ViewCreatorManager, _crd, viewCreatorMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewCreatorBase(extras) {
    _reporterNs.report("ViewCreatorBase", "./ViewCreatorBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "98e29wPNGNAn4Uv9KYT1smK", "ViewCreatorManager", undefined);

      ViewCreatorManager = class ViewCreatorManager extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();

          _defineProperty(this, "_creatorList", void 0);

          this._creatorList = new Array();
        }

        registeredCreator(creator) {
          creator.onInit();

          this._creatorList.push(creator);
        }

        unregisteredCreator() {
          this._creatorList.forEach(creator => {
            creator.unRegMsgAll();
          });
        }

        clear() {
          _export("viewCreatorMgr", viewCreatorMgr = null);
        }

      };

      _export("viewCreatorMgr", viewCreatorMgr = (() => {
        return ViewCreatorManager.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ViewCreatorManager.js.map