System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, EditBox, error, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, TimeSetPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      EditBox = _cc.EditBox;
      error = _cc.error;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d9cf3DcoWhHjYjUsWLxH0XJ", "TimeSetPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TimeSetPanel
       * DateTime = Wed Mar 09 2022 15:04:15 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TimeSetPanel.ts
       * FileBasenameNoExtension = TimeSetPanel
       * URL = db://assets/skill_eitor/TimeSetPanel.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("TimeSetPanel", TimeSetPanel = (_dec = ccclass('TimeSetPanel'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class TimeSetPanel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "editBoxNode", _descriptor, this);

          _defineProperty(this, "callBack", void 0);
        }

        start() {// [3]
        }

        onClickCancle() {
          this.node.destroy();
        }

        onClickOk() {
          var editBoxComp = this.editBoxNode.getComponent(EditBox);
          var sec;
          sec = Number(editBoxComp.string);
          sec || error("请出入数字");
          this.callBack(sec);
          this.node.destroy();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editBoxNode", [_dec2], {
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
//# sourceMappingURL=TimeSetPanel.js.map