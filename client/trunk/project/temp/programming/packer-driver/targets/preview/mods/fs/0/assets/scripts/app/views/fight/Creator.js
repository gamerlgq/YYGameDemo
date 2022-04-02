System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, sceneMgr, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, FightMainLayer, FightCreator, _crd;

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
    _reporterNs.report("ViewProtocol", "../../define/define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMainLayer(extras) {
    _reporterNs.report("FightMainLayer", "./FightMainLayer", _context.meta, extras);
  }

  _export("FightCreator", void 0);

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
    }, function (_unresolved_7) {
      FightMainLayer = _unresolved_7.FightMainLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8b48kBzx1IHa45HtAJlziz", "Creator", undefined);

      _export("FightCreator", FightCreator = class FightCreator extends (_crd && ViewCreatorBase === void 0 ? (_reportPossibleCrUseOfViewCreatorBase({
        error: Error()
      }), ViewCreatorBase) : ViewCreatorBase) {
        onInit() {
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).FightMainLayer, this._onCreateFightMainLayer.bind(this));
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).FightFormation, this.onCreateFormationView.bind(this));
        }

        _onCreateFightMainLayer(event) {
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("fight", "FightMainLayer");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            var bgNode = instantiate(data);
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).pushNewTableLayer();
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).replaceTableContent(bgNode, viewInfo.View);
            var com = bgNode.getComponentInChildren(_crd && FightMainLayer === void 0 ? (_reportPossibleCrUseOfFightMainLayer({
              error: Error()
            }), FightMainLayer) : FightMainLayer);
            (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).load("fight/datas/report", json => {
              com.init(json);
            });
          });
        }

        onCreateFormationView(event) {
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("fight", "FightFormation");
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Creator.js.map