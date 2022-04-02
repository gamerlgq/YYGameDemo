System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, log, v2, audioMgr, sceneMgr, LayerBase, MulitMoveingBgs, sceneTriggerMgr, viewRegisterMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, MainCityLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfaudioMgr(extras) {
    _reporterNs.report("audioMgr", "../../../framework/core/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDInertiaMove(extras) {
    _reporterNs.report("DInertiaMove", "../../../framework/ui/DInertiaMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../framework/ui/LayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMulitMoveingBgs(extras) {
    _reporterNs.report("MulitMoveingBgs", "../../../framework/ui/MulitMoveingBgs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneTriggerMgr(extras) {
    _reporterNs.report("sceneTriggerMgr", "../../../framework/utils/SceneTriggerMgr", _context.meta, extras);
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
      Node = _cc.Node;
      log = _cc.log;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      audioMgr = _unresolved_2.audioMgr;
    }, function (_unresolved_3) {
      sceneMgr = _unresolved_3.sceneMgr;
    }, function (_unresolved_4) {
      LayerBase = _unresolved_4.LayerBase;
    }, function (_unresolved_5) {
      MulitMoveingBgs = _unresolved_5.MulitMoveingBgs;
    }, function (_unresolved_6) {
      sceneTriggerMgr = _unresolved_6.sceneTriggerMgr;
    }, function (_unresolved_7) {
      viewRegisterMgr = _unresolved_7.viewRegisterMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ed88bJhf1BE87llYZ1cuyC7", "MainCityLayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MainCityLayer
       * DateTime = Tue Mar 08 2022 14:26:57 GMT+0800 (中国标准时间)
       * Author = Steven_Greeard
       * FileBasename = MainCityLayer.ts
       * FileBasenameNoExtension = MainCityLayer
       * URL = db://assets/scripts/app/views/maincity/MainCityLayer.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("MainCityLayer", MainCityLayer = (_dec = ccclass('MainCityLayer'), _dec2 = property(_crd && MulitMoveingBgs === void 0 ? (_reportPossibleCrUseOfMulitMoveingBgs({
        error: Error()
      }), MulitMoveingBgs) : MulitMoveingBgs), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class MainCityLayer extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "mulitBgComp", _descriptor, this);

          _initializerDefineProperty(this, "mainCityLayer", _descriptor2, this);

          _defineProperty(this, "_deltaPos", void 0);

          _defineProperty(this, "_bgDInertiaMove", void 0);
        }

        onLoad() {
          //触发器写在onLoad，否则切换刚加入主场景的时候，start还没开始执行
          (_crd && sceneTriggerMgr === void 0 ? (_reportPossibleCrUseOfsceneTriggerMgr({
            error: Error()
          }), sceneTriggerMgr) : sceneTriggerMgr).addTriggrt((_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("maincity", "MainCityLayer").System, this.onTrigger.bind(this), 1);
        }

        start() {
          // [3]
          (_crd && audioMgr === void 0 ? (_reportPossibleCrUseOfaudioMgr({
            error: Error()
          }), audioMgr) : audioMgr).playMusic("maincity/avs/bgm_liyuan");

          this._initBgTouch(); //全局事件监听


          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).addMainEventTrigger();
        }

        onTrigger() {
          log("main city trigger");
        }

        _initBgTouch() {
          this.mainCityLayer.on(Node.EventType.TOUCH_START, this.onBgTouchStart.bind(this));
          this.mainCityLayer.on(Node.EventType.TOUCH_MOVE, this.onBgTouchMove.bind(this));
          this.mainCityLayer.on(Node.EventType.TOUCH_END, this.onBgTouchEnd.bind(this));
        }

        onBgTouchStart() {
          this._deltaPos = null;
          this.mulitBgComp.stop();
        }

        onBgTouchMove(event) {
          this._deltaPos = event.getDelta();

          this._deltaPos.multiplyScalar(1.5);

          this._deltaPos = v2(this._deltaPos.x, 0);
          this.mulitBgComp.move(this._deltaPos, false);
        }

        onBgTouchEnd() {
          if (!this._deltaPos) {
            return;
          }

          this.mulitBgComp.move(this._deltaPos, true);
        }

        update(deltaTime) {// [4]
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mulitBgComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCityLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainCityLayer.js.map