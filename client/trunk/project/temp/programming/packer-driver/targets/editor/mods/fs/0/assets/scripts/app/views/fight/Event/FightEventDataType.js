System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, FightEventDataType;

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "../action/FightActionMgr", _context.meta, extras);
  }

  _export("FightEventDataType", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70244WkoBxD569RD7+Olntc", "FightEventDataType", undefined);

      (function (_FightEventDataType) {
        // 每个action返回的结构[[谁]，[[对哪些人]]，[做了什么],[[结果1],[结果2]]]
        //飘血相关
        // 显示对话框
        let FightAttackActionDataType;

        (function (_FightAttackActionDataType) {})(FightAttackActionDataType || (FightAttackActionDataType = _FightEventDataType.FightAttackActionDataType || (_FightEventDataType.FightAttackActionDataType = {})));

        let FightResultActionDataType;

        (function (_FightResultActionDataType) {})(FightResultActionDataType || (FightResultActionDataType = _FightEventDataType.FightResultActionDataType || (_FightEventDataType.FightResultActionDataType = {})));
      })(FightEventDataType || _export("FightEventDataType", FightEventDataType = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightEventDataType.js.map