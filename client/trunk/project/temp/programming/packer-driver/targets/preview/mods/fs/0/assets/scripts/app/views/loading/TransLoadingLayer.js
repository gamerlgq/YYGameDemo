System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Animation, Label, ProgressBar, _decorator, sceneMgr, ResourcesLoader, LayerBase, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TransLoadingLayer;

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

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../framework/ui/LayerBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Animation = _cc.Animation;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      ResourcesLoader = _unresolved_3.ResourcesLoader;
    }, function (_unresolved_4) {
      LayerBase = _unresolved_4.LayerBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7fbefS+mJxK4JPPan0zEAj2", "TransLoadingLayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TransLoadingLayer", TransLoadingLayer = (_dec = ccclass('TransLoadingLayer'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class TransLoadingLayer extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "percent", _descriptor, this);

          _initializerDefineProperty(this, "bar", _descriptor2, this);

          _defineProperty(this, "_enterCallback", null);

          _defineProperty(this, "_completeCallback", null);

          _defineProperty(this, "_loadingResList", null);
        }

        // 自定义加载列表,如果为空则播放动画后显示场景
        setResLoadingList(list) {
          this._loadingResList = list;
        }

        start() {
          if (!this._loadingResList || this._loadingResList.length == 0) {
            return this._playTransAnimation();
          }

          this._loadingRes();
        }

        _playTransAnimation() {
          var ani = this.node.getComponent(Animation);
          ani.play();
        }

        _loadingRes() {
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadList(this._loadingResList, (finishNum, max) => {
            var oldVal = this.bar.progress;
            var newVal = finishNum / max;

            if (newVal < oldVal) {
              newVal = oldVal;
            }

            this.bar.progress = newVal;
            this.percent.string = Math.floor(newVal * 100) + "%";
          }, () => {
            this._playTransAnimation();
          });
        }

        setEnterCalback(cb) {
          this._enterCallback = cb;
        }

        setCompleteCallback(cb) {
          this._completeCallback = cb;
        }

        onEnterCallback() {
          if (this._enterCallback) {
            this._enterCallback();
          }
        }

        onTransComplete(data) {
          if (this._completeCallback) {
            this._completeCallback();
          }

          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).removeTransitionLayer();
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
//# sourceMappingURL=TransLoadingLayer.js.map