System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, log, find, ActionTypeSelPanel, TimeLineItem, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, TimeLine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightActionType(extras) {
    _reporterNs.report("FightActionType", "../scripts/app/define/FightConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionTypeSelPanel(extras) {
    _reporterNs.report("ActionTypeSelPanel", "./ActionTypeSelPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeLineItem(extras) {
    _reporterNs.report("TimeLineItem", "./TimeLineItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      log = _cc.log;
      find = _cc.find;
    }, function (_unresolved_2) {
      ActionTypeSelPanel = _unresolved_2.ActionTypeSelPanel;
    }, function (_unresolved_3) {
      TimeLineItem = _unresolved_3.TimeLineItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e835BT2zZPqrfagjLou8c/", "TimeLine", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = time_line
       * DateTime = Wed Mar 09 2022 11:51:22 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = time_line.ts
       * FileBasenameNoExtension = time_line
       * URL = db://assets/skill_eitor/time_line.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("TimeLine", TimeLine = (_dec = ccclass('TimeLine'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = (_temp = class TimeLine extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemContainer", _descriptor, this);

          _initializerDefineProperty(this, "timeLineItemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "actionSelPanel", _descriptor3, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onClickAddItem() {
          log("onClickAddItem"); //添加选择Action面板
          // this._actionSelPanel  && error("_actionSelPanel is null")

          var actionSelPanel = instantiate(this.actionSelPanel);
          actionSelPanel.getComponent(_crd && ActionTypeSelPanel === void 0 ? (_reportPossibleCrUseOfActionTypeSelPanel({
            error: Error()
          }), ActionTypeSelPanel) : ActionTypeSelPanel).callBack = this.onSelAction.bind(this);
          var canvas = find("Canvas");
          canvas.addChild(actionSelPanel);
        }

        onSelAction(type) {
          log("选择类型：" + type);
          var tlItem = instantiate(this.timeLineItemPrefab);
          var tlItemComp = tlItem.getComponent(_crd && TimeLineItem === void 0 ? (_reportPossibleCrUseOfTimeLineItem({
            error: Error()
          }), TimeLineItem) : TimeLineItem);
          tlItemComp.type = type;
          this.itemContainer.addChild(tlItem);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeLineItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "actionSelPanel", [_dec4], {
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
//# sourceMappingURL=TimeLine.js.map