System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tween, ActionBase, ActionHide, _crd;

  function _reportPossibleCrUseOfActionBase(extras) {
    _reporterNs.report("ActionBase", "./ActionBase", _context.meta, extras);
  }

  _export("ActionHide", void 0);

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

      _cclegacy._RF.push({}, "3a4dfhyQCdCQ6k2hrDn2DOM", "ActionHide", undefined);

      _export("ActionHide", ActionHide = class ActionHide extends (_crd && ActionBase === void 0 ? (_reportPossibleCrUseOfActionBase({
        error: Error()
      }), ActionBase) : ActionBase) {
        hide(duration) {
          return tween().to(duration, {
            Opactiy: 0
          }).call(() => {
            this.done();
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActionHide.js.map