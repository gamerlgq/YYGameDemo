System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, sceneMgr, ComponentBase, ViewProtocol, _dec, _class, _crd, ccclass, property, UserAgreementAndPrivacyPolicy;

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/ui/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewProtocol(extras) {
    _reporterNs.report("ViewProtocol", "../../define/ViewProtocol", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      ComponentBase = _unresolved_3.ComponentBase;
    }, function (_unresolved_4) {
      ViewProtocol = _unresolved_4.ViewProtocol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "642cd6g9utJq7hjQwtae9/a", "UserAgreementAndPrivacyPolicy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UserAgreementAndPrivacyPolicy", UserAgreementAndPrivacyPolicy = (_dec = ccclass('UserAgreementAndPrivacyPolicy'), _dec(_class = class UserAgreementAndPrivacyPolicy extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        start() {}

        clickUserAgreement(event, customEventData) {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).UserAgreementLayer);
        }

        clickPrivacyPolicy(event, customEventData) {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).PrivacyPolicyLayer);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UserAgreementAndPrivacyPolicy.js.map