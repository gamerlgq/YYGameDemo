System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, sp, ComponentBase, Protocol, yy, FightBloodUI, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, SpineComponentBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../../../../framework/listener/Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/ui/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../../define/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyy(extras) {
    _reporterNs.report("yy", "../../../define/YYNamespace", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBloodUI(extras) {
    _reporterNs.report("FightBloodUI", "../../fight/ui/FightBloodUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      Protocol = _unresolved_3.Protocol;
    }, function (_unresolved_4) {
      yy = _unresolved_4.yy;
    }, function (_unresolved_5) {
      FightBloodUI = _unresolved_5.FightBloodUI;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7bac13IP9lG0KdzKdlL8OUY", "SpineComponentBase", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpineComponentBase", SpineComponentBase = (_dec = ccclass('SpineComponentBase'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class SpineComponentBase extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spineNode", _descriptor, this);

          _initializerDefineProperty(this, "effectFontNode", _descriptor2, this);

          _initializerDefineProperty(this, "effectBackNode", _descriptor3, this);

          _defineProperty(this, "_spine", null);

          _defineProperty(this, "_root", null);

          _defineProperty(this, "_animateStartCallback", null);

          _defineProperty(this, "_animateEndCallback", null);

          _defineProperty(this, "_animiateInterruptCallback", null);

          _defineProperty(this, "_animiateEventCallback", null);

          _defineProperty(this, "_mixTime", 0.1);
        }

        //动作融合时间
        onLoad() {
          this._init();

          this.addMsgListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Inner.SetAnimationSpeed, this._setSpineAnimationSpeed.bind(this));
        }

        _setSpineAnimationSpeed(event) {
          let speed = event.getRawData();
          this._spine.timeScale = speed;
        }

        _init() {
          this._root = this.node.parent;
          let spine = this.spineNode.getComponent(sp.Skeleton);
          this._spine = spine;

          this._initSpineListener();

          this._initMix();
        }

        _initSpineListener() {
          if (!this._spine) {
            return;
          }

          this._spine.setStartListener(this._onAnimateStartCallback.bind(this));

          this._spine.setEndListener(this._onAnimateEndCallback.bind(this));

          this._spine.setInterruptListener(this._onAnimateInterruptCallback.bind(this));

          this._spine.setEventListener(this._onAnimateEventCallback.bind(this));
        }

        _initMix() {
          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Idle, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Run);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Idle, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Die);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Idle, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Hurt);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Idle, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Jump);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Idle, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Skill01);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Idle, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Skill02);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Run, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Hurt);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Run, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Die);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Run, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Attack);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Run, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Jump);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Run, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Skill01);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Run, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Skill02);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Attack, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Idle);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Attack, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Die);

          this._setMix((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Attack, (_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
            error: Error()
          }), yy) : yy).macro.HeroAnimate.Hurt);
        } // 动作开始回调


        _onAnimateStartCallback(trackEntry) {
          if (this._animateStartCallback) {
            this._animateStartCallback(trackEntry);
          }
        } // 动作播放完回调


        _onAnimateEndCallback(trackEntry) {
          if (this._animateEndCallback) {
            this._animateEndCallback(trackEntry);
          }
        } // 动作被打断回调


        _onAnimateInterruptCallback(trackEntry) {
          if (this._animiateInterruptCallback) {
            this._animiateInterruptCallback(trackEntry);
          }
        } // 帧事件回调


        _onAnimateEventCallback(trackEntry, event) {
          if (this._animiateEventCallback) {
            this._animiateEventCallback(trackEntry, event);
          }
        } // 动作融合


        _setMix(anim1, anim2, mixTime) {
          if (this._spine.findAnimation(anim1) && this._spine.findAnimation(anim2)) {
            this._spine.setMix(anim1, anim2, mixTime || this._mixTime);

            this._spine.setMix(anim2, anim1, mixTime || this._mixTime);
          }
        }
        /**
         * @description 立即播放当前动画
         * @param actionName spine 动作名称
         * @param isLoop 是否循环播放 默认值false
         */


        play(actionName, isLoop) {
          if (this._spine) {
            let trackIndex = 0;

            this._spine.setAnimation(trackIndex, actionName, isLoop !== null && isLoop !== void 0 ? isLoop : false);
          }
        }
        /**
         * @description 暂停当前动画
         */


        stop() {
          this._spine.paused = true;
        }
        /**
         * @description 继续播放当前动画
         */


        resume() {
          this._spine.paused = false;
        }
        /**
         * @description 清理当前动画
         * @param trackIndex 播放动作队列索引，默认0，即当前动画
         */


        clear(trackIndex = 0) {
          this._spine.clearTrack(trackIndex);
        }
        /**
         * @description 清理作队列索引
         */


        clearAll() {
          this._spine.clearTracks();
        }
        /** 动画开始回调 */


        setAnimateStartCallback(callback) {
          this._animateStartCallback = callback;
        }
        /** 动画结束回调 */


        setAnimateEndCallback(callback) {
          this._animateEndCallback = callback;
        }
        /** 动画被打断回调 */


        setAnimateInterruptCallback(callback) {
          this._animiateInterruptCallback = callback;
        }
        /** 动画事件回调 */


        setAnimateEventCallback(callback) {
          this._animiateEventCallback = callback;
        }

        addEffectFront(node, offset) {
          var _this$effectFontNode;

          (_this$effectFontNode = this.effectFontNode) === null || _this$effectFontNode === void 0 ? void 0 : _this$effectFontNode.addChild(node);

          if (offset) {
            node.position = offset;
          }
        }

        addEffectBack(node, offset) {
          var _this$effectBackNode;

          (_this$effectBackNode = this.effectBackNode) === null || _this$effectBackNode === void 0 ? void 0 : _this$effectBackNode.addChild(node);

          if (offset) {
            node.position = offset;
          }
        }
        /**
         * addBloodUI
         */


        addBloodUI(node) {
          let node_blood_ui = this._root.getChildByName("node_blood_ui");

          node_blood_ui.addChild(node);
        }
        /**
         * updateBlood
         */


        updateBlood(cur, top) {
          let com = this._root.getComponentInChildren(_crd && FightBloodUI === void 0 ? (_reportPossibleCrUseOfFightBloodUI({
            error: Error()
          }), FightBloodUI) : FightBloodUI);

          com === null || com === void 0 ? void 0 : com.updateBlood(cur, top);
        }
        /**
         * @description 换皮肤
         * @param skinName:string 皮肤id
         */


        changeSkin(skinName) {
          this._spine.setSkin(skinName);
        }
        /**
         * @description 查找插槽
         */


        findSlot(name) {
          return this._spine.findSlot(name);
        }
        /**
         * 
         * @description 更换皮肤的单间装备
         * @param skinName 新皮肤名字（装备所在的皮肤）
         * @param oldSlotName 旧插槽的名字
         * @param newSlotName 新插槽的名字
         */


        changeEquip(skinName, oldSlotName, newSlotName) {
          let skin_origin = this._spine._skeleton.skin.name;
          let slot_origin = this.findSlot(oldSlotName);
          this.changeSkin(skinName);
          let slot_new = this.findSlot(newSlotName);
          let attachment_new = slot_new.getAttachment();
          this.changeSkin(skin_origin);
          slot_origin.setAttachment(attachment_new);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectFontNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectBackNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpineComponentBase.js.map