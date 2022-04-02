System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, sceneMgr, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, Tips, DialogCreator, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  function _reportPossibleCrUseOfTips(extras) {
    _reporterNs.report("Tips", "./Tips", _context.meta, extras);
  }

  _export("DialogCreator", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
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
      Tips = _unresolved_7.Tips;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51114ZvCApA57CqEAiMD+ep", "Creator", undefined);

      _export("DialogCreator", DialogCreator = class DialogCreator extends (_crd && ViewCreatorBase === void 0 ? (_reportPossibleCrUseOfViewCreatorBase({
        error: Error()
      }), ViewCreatorBase) : ViewCreatorBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_tipsQueue", new Array());

          _defineProperty(this, "_tempTipsQueue", new Array());

          _defineProperty(this, "_timer", null);
        }

        // private _isDispatching:boolean = false;
        onInit() {
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).DoubleBtnDialog, this.onCreateDoubleBtnDialogView.bind(this));
          this.regMsg((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).Tips, this.onCreateTips.bind(this));
        }

        onCreateDoubleBtnDialogView(event) {
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("dialog", "DoubleBtnDialog");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            data.addRef();
            var node = instantiate(data); // let com = node.getComponent("DoubleBtnDialog").updateDialog(event.getRawData[0]);

            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).pushNewTableLayer();
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).replaceTableContent(node, viewInfo.View);
          });
        }

        onCreateTips(event) {
          var isScheduled = this._timer ? true : false;

          if (isScheduled) {
            // 暂存队列
            this._tempTipsQueue.push(event);

            return;
          }

          this._tipsQueue.push(event);

          this._timer = setInterval(this._tipsTick.bind(this), 100);
        }

        _tipsTick() {
          if (this._tipsQueue.length == 0) {
            if (this._tempTipsQueue.length == 0) {
              clearInterval(this._timer);
              this._timer = null;
              return;
            }

            this._tipsQueue = this._tempTipsQueue;
            this._tempTipsQueue.length = 0;
          }

          var event = this._tipsQueue.shift();

          if (event) {
            var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
              error: Error()
            }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("dialog", "Tips");
            (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
              var tipsNode = instantiate(data);
              var str = event.getRawData();
              tipsNode.getComponent(_crd && Tips === void 0 ? (_reportPossibleCrUseOfTips({
                error: Error()
              }), Tips) : Tips).text = str;
              (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
                error: Error()
              }), sceneMgr) : sceneMgr).getTipsLayer().addChild(tipsNode);
            }, Prefab);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Creator.js.map