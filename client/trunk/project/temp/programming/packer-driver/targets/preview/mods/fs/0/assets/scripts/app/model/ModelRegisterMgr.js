System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, gameMgr, ModelRegisterMgr, _crd, modelRegisterMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../../framework/core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModelLogin(extras) {
    _reporterNs.report("ModelLogin", "./ModelLogin", _context.meta, extras);
  }

  _export("ModelRegisterMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      gameMgr = _unresolved_3.gameMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed2b3whtCxJFbkv/ksIJbXc", "ModelRegisterMgr", undefined);

      _export("ModelRegisterMgr", ModelRegisterMgr = class ModelRegisterMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "ModelType", void 0);
        }

        loadAllModel() {
          var gmr = _crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr;

          for (var key in this.ModelType) {
            if (Object.prototype.hasOwnProperty.call(this.ModelType, key)) {
              var model = this.ModelType[key];
              gmr.registerModel(model);
            }
          }
        }

        clear() {
          _export("modelRegisterMgr", modelRegisterMgr = null);
        }

      }); // ()();


      _export("modelRegisterMgr", modelRegisterMgr = (() => {
        return ModelRegisterMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ModelRegisterMgr.js.map