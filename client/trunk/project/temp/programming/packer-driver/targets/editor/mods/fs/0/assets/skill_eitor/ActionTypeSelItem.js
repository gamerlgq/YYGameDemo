System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, ActionTypeSelItem;

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
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8d64axz4rBHL5M2Qm9f0Ez6", "ActionTypeSelItem", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ActionTypeSelItem
       * DateTime = Wed Mar 09 2022 16:33:02 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ActionTypeSelItem.ts
       * FileBasenameNoExtension = ActionTypeSelItem
       * URL = db://assets/skill_eitor/ActionTypeSelItem.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("ActionTypeSelItem", ActionTypeSelItem = (_dec = ccclass('ActionTypeSelItem'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class ActionTypeSelItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelNode", _descriptor, this);

          _initializerDefineProperty(this, "selNode", _descriptor2, this);

          _defineProperty(this, "_txt", void 0);

          _defineProperty(this, "_type", void 0);

          _defineProperty(this, "_isSel", void 0);
        }

        get txt() {
          return this._txt;
        }

        set txt(value) {
          this._txt = value;
          let labelComp = this.labelNode.getComponent(Label);
          labelComp.string = value;
        }

        get type() {
          return this._type;
        }

        set type(value) {
          this._type = value;
        }

        get isSel() {
          return this._isSel;
        }

        set isSel(value) {
          this._isSel = value;
          this.selNode.active = value;
        }

        start() {
          // [3]
          this.isSel = false;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selNode", [_dec3], {
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
//# sourceMappingURL=ActionTypeSelItem.js.map