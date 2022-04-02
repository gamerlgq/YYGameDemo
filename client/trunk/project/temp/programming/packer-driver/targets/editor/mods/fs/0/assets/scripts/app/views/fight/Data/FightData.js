System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FightDataBase, FightFormationDataBase, FightPlayerDataBase, FightData, FightPlayerData, FightFormationData, _crd;

  function _reportPossibleCrUseOfFightDataBase(extras) {
    _reporterNs.report("FightDataBase", "./FightDataBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightFormationDataBase(extras) {
    _reporterNs.report("FightFormationDataBase", "./FightDataBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightPlayerDataBase(extras) {
    _reporterNs.report("FightPlayerDataBase", "./FightDataBase", _context.meta, extras);
  }

  _export({
    FightData: void 0,
    FightPlayerData: void 0,
    FightFormationData: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FightDataBase = _unresolved_2.FightDataBase;
      FightFormationDataBase = _unresolved_2.FightFormationDataBase;
      FightPlayerDataBase = _unresolved_2.FightPlayerDataBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84b2b8Ihn5IXL6h3WkR26nk", "FightData", undefined);

      _export("FightData", FightData = class FightData extends (_crd && FightDataBase === void 0 ? (_reportPossibleCrUseOfFightDataBase({
        error: Error()
      }), FightDataBase) : FightDataBase) {});

      _export("FightPlayerData", FightPlayerData = class FightPlayerData extends (_crd && FightPlayerDataBase === void 0 ? (_reportPossibleCrUseOfFightPlayerDataBase({
        error: Error()
      }), FightPlayerDataBase) : FightPlayerDataBase) {});

      _export("FightFormationData", FightFormationData = class FightFormationData extends (_crd && FightFormationDataBase === void 0 ? (_reportPossibleCrUseOfFightFormationDataBase({
        error: Error()
      }), FightFormationDataBase) : FightFormationDataBase) {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightData.js.map