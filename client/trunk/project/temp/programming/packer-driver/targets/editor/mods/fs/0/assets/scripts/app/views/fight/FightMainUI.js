System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, AnimationComponent, Button, Label, CCFloat, js, Sprite, sceneMgr, socketMgr, ComponentBase, Protocol, FightEvent, fightEventMgr, FightConstant, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, FightMainUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketMgr(extras) {
    _reporterNs.report("socketMgr", "../../../framework/net/SocketMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/ui/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../define/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventDataType(extras) {
    _reporterNs.report("FightEventDataType", "./event/FightEventDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "./event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "./FightConstant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AnimationComponent = _cc.AnimationComponent;
      Button = _cc.Button;
      Label = _cc.Label;
      CCFloat = _cc.CCFloat;
      js = _cc.js;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      socketMgr = _unresolved_3.socketMgr;
    }, function (_unresolved_4) {
      ComponentBase = _unresolved_4.ComponentBase;
    }, function (_unresolved_5) {
      Protocol = _unresolved_5.Protocol;
    }, function (_unresolved_6) {
      FightEvent = _unresolved_6.FightEvent;
    }, function (_unresolved_7) {
      fightEventMgr = _unresolved_7.fightEventMgr;
    }, function (_unresolved_8) {
      FightConstant = _unresolved_8.FightConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b96ebmrG8hLXrjMCls+69P+", "FightMainUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightMainUI", FightMainUI = (_dec = ccclass('FightMainUI'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property([CCFloat]), _dec(_class = (_class2 = (_temp = class FightMainUI extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "startBtn", _descriptor, this);

          _initializerDefineProperty(this, "lblRound", _descriptor2, this);

          _initializerDefineProperty(this, "lblSpeed", _descriptor3, this);

          _initializerDefineProperty(this, "spSpeed", _descriptor4, this);

          _initializerDefineProperty(this, "speedList", _descriptor5, this);

          _defineProperty(this, "_root", null);

          _defineProperty(this, "_curSpeedIdx", 0);
        }

        onLoad() {
          this._root = this.node.parent;

          this._addFightListeners();

          this._setSpeed();
        }

        _addFightListeners() {
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Round_Start, this._updateRoundLabel.bind(this));
        } // 设置回合数


        _updateRoundLabel(event) {
          let data = event.getEventData();
          let round = data.Round.toString();
          this.lblRound.setString(round);
        }

        _setSpeed() {
          let speed = 1;

          if (this._curSpeedIdx != 0) {
            speed = this.speedList[this._curSpeedIdx];
          }

          if (speed == 1) {
            this.lblSpeed.enabled = false;
            this.spSpeed.enabled = true;
            return speed;
          }

          this.lblSpeed.enabled = true;
          this.spSpeed.enabled = false;

          if (speed == 0.5) {
            this.lblSpeed.setString("1/2倍");
            return speed;
          }

          this.lblSpeed.setString(js.formatStr("%d倍", speed));
          return speed;
        } // 战斗开始


        startGame() {}

        onClickStartBtn(event, customEventData) {
          this.startBtn.node.active = false;

          let animteComp = this._root.getComponent(AnimationComponent);

          animteComp.play();
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_Star, null));
        }

        onClickCloseBtn(event, customEventData) {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).popTableLayer();
        }

        update(dt) {}

        onClickSpeedBtn(event, customEventData) {
          this._curSpeedIdx += 1;

          if (this._curSpeedIdx >= this.speedList.length) {
            this._curSpeedIdx = 0;
          }

          let speed = this._setSpeed();

          (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
            error: Error()
          }), socketMgr) : socketMgr).sendInnerMsg((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Inner.SetAnimationSpeed, speed);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblRound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speedList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightMainUI.js.map