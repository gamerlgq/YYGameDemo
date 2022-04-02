System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, sceneMgr, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, LoginCreator, _crd;

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../../../framework/listener/Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewCreatorBase(extras) {
    _reporterNs.report("ViewCreatorBase", "../../../framework/ui/ViewCreatorBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewProtocol(extras) {
    _reporterNs.report("ViewProtocol", "../../define/ViewProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNoticeView(extras) {
    _reporterNs.report("NoticeView", "./NoticeView", _context.meta, extras);
  }

  _export("LoginCreator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      ResourcesLoader = _unresolved_3.ResourcesLoader;
    }, function (_unresolved_4) {
      ViewCreatorBase = _unresolved_4.ViewCreatorBase;
    }, function (_unresolved_5) {
      ViewProtocol = _unresolved_5.ViewProtocol;
    }, function (_unresolved_6) {
      viewRegisterMgr = _unresolved_6.viewRegisterMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "08dafVRV0lIIo3dTejhgl2o", "Creator", undefined);

      _export("LoginCreator", LoginCreator = class LoginCreator extends (_crd && ViewCreatorBase === void 0 ? (_reportPossibleCrUseOfViewCreatorBase({
        error: Error()
      }), ViewCreatorBase) : ViewCreatorBase) {
        onInit() {
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).LoginLayer, this.onCreateLoginView.bind(this));
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).LoginAccountLayer, this.onCreateAccountLayer.bind(this));
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).UserAgreementLayer, this.onCreateUserAgreementLayer.bind(this));
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).PrivacyPolicyLayer, this.onCreatePrivacyPolicyLayer.bind(this));
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).NoticeView, this.onCreateNoticeView.bind(this));
        }

        onCreateLoginView(event) {
          //创建登录界面
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("login", "LoginLayer");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            var node = instantiate(data);
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).replaceMainLayer(node, viewInfo.View);
          });
        }

        onCreateAccountLayer(event) {
          //账号界面
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("login", "LoginAccountLayer");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            var node = instantiate(data);
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).pushNewTableLayer();
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).replaceTableContent(node, viewInfo.View);
          });
        }

        onCreateUserAgreementLayer(event) {
          //用户协议
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("login", "UserAgreementLayer");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            var node = instantiate(data);
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).pushNewTableLayer();
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).replaceTableContent(node, viewInfo.View);
          });
        }

        onCreatePrivacyPolicyLayer(event) {
          //隐私政策
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("login", "PrivacyPolicyLayer");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            var node = instantiate(data);
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).pushNewTableLayer();
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).replaceTableContent(node, viewInfo.View);
          });
        }

        onCreateNoticeView(event) {
          //隐私政策
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("login", "NoticeView");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            var node = instantiate(data);
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).pushNewTableLayer();
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).replaceTableContent(node, viewInfo.View);
            var msg = event.getRawData();
            var child = node.getChildByName("ScriptNode");
            var comp = child.getComponent("NoticeView");
            comp.updateView(msg);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Creator.js.map