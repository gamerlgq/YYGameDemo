System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Label, EDITOR, translateMgr, _crd;

  function _reportPossibleCrUseOftranslateMgr(extras) {
    _reporterNs.report("translateMgr", "../../framework/translate/TranslateMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Label = _cc.Label;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      translateMgr = _unresolved_2.translateMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a0bbdeamsVI26kXkX/p5PAg", "PrototypeExtension", undefined);

      Object.defineProperty(Label.prototype, "setString", {
        value: function value(text) {
          if (EDITOR) {
            return;
          } // let lbComp:TranslateLabel = this.node.getComponent(TranslateLabel);
          // if (lbComp && !lbComp?.isTranslateByCode){
          //     return;
          // }
          // let id = lbComp.translateId;


          this.string = (_crd && translateMgr === void 0 ? (_reportPossibleCrUseOftranslateMgr({
            error: Error()
          }), translateMgr) : translateMgr).translateData(text);
        },
        configurable: true
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PrototypeExtension.js.map