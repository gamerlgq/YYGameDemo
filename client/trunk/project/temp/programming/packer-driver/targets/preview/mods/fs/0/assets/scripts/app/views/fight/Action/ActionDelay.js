System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tween, ActionBase, ActionDelay, _crd;

  function _reportPossibleCrUseOfActionBase(extras) {
    _reporterNs.report("ActionBase", "./ActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "./FightActionMgr", _context.meta, extras);
  }

  _export("ActionDelay", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ActionBase = _unresolved_2.ActionBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d6efb1my+lPWr4oQ/A1Qixu", "ActionDelay", undefined);

      _export("ActionDelay", ActionDelay = class ActionDelay extends (_crd && ActionBase === void 0 ? (_reportPossibleCrUseOfActionBase({
        error: Error()
      }), ActionBase) : ActionBase) {
        /**
         * 
         * @param own 移动节点
         * @param duration 持续时间
         */
        delay(data) {
          var animCfg = data.animCfg;
          var param = animCfg.params;
          var duration = param[0];
          return tween().delay(duration);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActionDelay.js.map