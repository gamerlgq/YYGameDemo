System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, Label, Prefab, instantiate, FightActionTypeName, TimeSetPanel, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TimeLineItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightActionTypeName(extras) {
    _reporterNs.report("FightActionTypeName", "../scripts/app/define/FightConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeSetPanel(extras) {
    _reporterNs.report("TimeSetPanel", "./TimeSetPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      FightActionTypeName = _unresolved_2.FightActionTypeName;
    }, function (_unresolved_3) {
      TimeSetPanel = _unresolved_3.TimeSetPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26d446ndOZKpp+mcCdJqbNz", "TimeLineItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TimeLineItem
       * DateTime = Wed Mar 09 2022 14:25:09 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TimeLineItem.ts
       * FileBasenameNoExtension = TimeLineItem
       * URL = db://assets/skill_eitor/TimeLineItem.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("TimeLineItem", TimeLineItem = (_dec = ccclass('TimeLineItem'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = class TimeLineItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "setTimePanelPrefab", _descriptor, this);

          _defineProperty(this, "_type", void 0);

          _defineProperty(this, "_time", 0);
        }

        start() {// [3]
        } //Action类型


        get type() {
          return this._type;
        }

        set type(value) {
          this._type = value;
          let labelNode = find("Button/Label", this.node);
          labelNode.getComponent(Label).string = (_crd && FightActionTypeName === void 0 ? (_reportPossibleCrUseOfFightActionTypeName({
            error: Error()
          }), FightActionTypeName) : FightActionTypeName).get(value);
        }

        get time() {
          return this._time;
        }

        set time(value) {
          this._time = value;
          let labelNode = find("timeBtn/Label", this.node);
          labelNode.getComponent(Label).string = value + "s";
        }

        onClick() {}

        onClickSetTime() {
          let setTimePanel = instantiate(this.setTimePanelPrefab);
          let setTimePanelComp = setTimePanel.getComponent(_crd && TimeSetPanel === void 0 ? (_reportPossibleCrUseOfTimeSetPanel({
            error: Error()
          }), TimeSetPanel) : TimeSetPanel);
          setTimePanelComp.callBack = this.onSetTimeFinish.bind(this);
          let canvas = find("Canvas");
          canvas.addChild(setTimePanel);
        }

        onSetTimeFinish(sec) {
          this.time = sec;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "setTimePanelPrefab", [_dec2], {
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
//# sourceMappingURL=TimeLineItem.js.map