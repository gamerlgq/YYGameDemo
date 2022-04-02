System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ModelBase, ModelLogin, _crd;

  function _reportPossibleCrUseOfModelBase(extras) {
    _reporterNs.report("ModelBase", "../../framework/data/ModelBase", _context.meta, extras);
  }

  _export("ModelLogin", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ModelBase = _unresolved_2.ModelBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d94c98ozCJJy7Ii+rxZyUIv", "ModelLogin", undefined);

      _export("ModelLogin", ModelLogin = class ModelLogin extends (_crd && ModelBase === void 0 ? (_reportPossibleCrUseOfModelBase({
        error: Error()
      }), ModelBase) : ModelBase) {
        constructor() {
          super(); // this.regMsg(Protocol.Server.game_info)
        }

        getEnterGame() {
          return true;
        }

        getLoginData() {
          return {
            user_id: 0,
            user_key: "123"
          };
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ModelLogin.js.map