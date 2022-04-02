System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, FightActionType, FightActionTypeName;

  _export("FightActionType", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4e4dEhr3VL7pfuORs6sEu6", "FightConst", undefined);

      (function (FightActionType) {
        FightActionType[FightActionType["delay"] = 0] = "delay";
        FightActionType[FightActionType["move"] = 1] = "move";
      })(FightActionType || _export("FightActionType", FightActionType = {}));

      _export("FightActionTypeName", FightActionTypeName = new Map());

      FightActionTypeName.set(FightActionType.delay, "延迟");
      FightActionTypeName.set(FightActionType.move, "移动"); // FightActionTypeName[FightActionType.delay] = "延迟"
      // FightActionTypeName[FightActionType.delay] = "移动"

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightConst.js.map