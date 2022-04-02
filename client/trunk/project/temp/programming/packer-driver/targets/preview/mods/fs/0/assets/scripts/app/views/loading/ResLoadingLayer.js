System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ProgressBar, Label, sceneMgr, ResourcesLoader, ViewProtocol, viewRegisterMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ResLoadingLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewProtocol(extras) {
    _reporterNs.report("ViewProtocol", "../../define/ViewProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../define/ViewRegisterMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      ResourcesLoader = _unresolved_3.ResourcesLoader;
    }, function (_unresolved_4) {
      ViewProtocol = _unresolved_4.ViewProtocol;
    }, function (_unresolved_5) {
      viewRegisterMgr = _unresolved_5.viewRegisterMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f6bevBYoJHZ7pWrS8+lq/v", "ResLoadingLayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResLoadingLayer", ResLoadingLayer = (_dec = ccclass('ResLoadingLayer'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class ResLoadingLayer extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "percent", _descriptor, this);

          _initializerDefineProperty(this, "bar", _descriptor2, this);

          _defineProperty(this, "_loadingResList", null);
        }

        start() {
          this.bar.progress = 0;
          this.percent.string = "0%";

          this._getLoadingList();

          this._startPreload();
        }

        _getLoadingList() {
          this._loadingResList = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getMaincityPreloadList();
        }

        _startPreload() {
          if (!this._loadingResList || this._loadingResList.length == 0) {
            return this._goGameView();
          }

          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadList(this._loadingResList, (finishNum, maxNum) => {
            var oldVal = this.bar.progress;
            var newVal = finishNum / maxNum;

            if (newVal < oldVal) {
              newVal = oldVal;
            }

            this.bar.progress = newVal;
            this.percent.string = Math.floor(newVal * 100) + "%";
          }, () => {
            this._goGameView();
          });
        }

        _goGameView() {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).MainCityLayer); // let modelNewGuide: ModelNewGuide = GameMgr.getInstance().getModel(
          //     "ModelNewGuide"
          // );
          // let task = modelNewGuide.getNewGuideTask(1);
          // task._guideID = 1;        
          // if (
          //     !modelNewGuide.isGuideFinish(task._guideID) &&
          //     SceneMgr.getInstance().getNewGuideLayer()
          // ) {
          //     this.node.active = false;
          //     let godGuide = SceneMgr.getInstance()
          //         .getNewGuideLayer()
          //         .getComponent("GodGuide");
          //     godGuide.setTask(task);
          //     godGuide.run(() => {
          //         //打点
          //         logDot(DotIDS.enterGame);
          //         SceneMgr.getInstance().openUI(ViewFlags.FightMain);
          //     });
          // } else {
          //     //打点
          //     logDot(DotIDS.enterGame);
          //     SceneMgr.getInstance().openUI(ViewFlags.FightMain);
          // }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "percent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResLoadingLayer.js.map