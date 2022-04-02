System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, log, Prefab, find, instantiate, FightActionTypeName, ActionTypeSelItem, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, ActionTypeSelPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfFightActionTypeName(extras) {
    _reporterNs.report("FightActionTypeName", "../scripts/app/define/FightConst", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionTypeSelItem(extras) {
    _reporterNs.report("ActionTypeSelItem", "./ActionTypeSelItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      log = _cc.log;
      Prefab = _cc.Prefab;
      find = _cc.find;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      FightActionTypeName = _unresolved_2.FightActionTypeName;
    }, function (_unresolved_3) {
      ActionTypeSelItem = _unresolved_3.ActionTypeSelItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9a91eig9xpPVr02LJV+yTP0", "ActionTypeSelPanel", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ActionTypeSelPanel
       * DateTime = Wed Mar 09 2022 17:00:59 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ActionTypeSelPanel.ts
       * FileBasenameNoExtension = ActionTypeSelPanel
       * URL = db://assets/skill_eitor/ActionTypeSelPanel.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("ActionTypeSelPanel", ActionTypeSelPanel = (_dec = ccclass('ActionTypeSelPanel'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = class ActionTypeSelPanel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "actionTypeSelItemPrefab", _descriptor, this);

          _defineProperty(this, "_callBack", void 0);

          _defineProperty(this, "_container", void 0);

          _defineProperty(this, "_selItem", void 0);
        }

        get callBack() {
          return this._callBack;
        }

        set callBack(value) {
          this._callBack = value;
        }

        start() {
          // [3]
          this._container = find("Layout", this.node);
          this.showAllItems();
        }

        showAllItems() {
          (_crd && FightActionTypeName === void 0 ? (_reportPossibleCrUseOfFightActionTypeName({
            error: Error()
          }), FightActionTypeName) : FightActionTypeName).forEach((v, k) => {
            var item = instantiate(this.actionTypeSelItemPrefab);
            var itemComp = item.getComponent(_crd && ActionTypeSelItem === void 0 ? (_reportPossibleCrUseOfActionTypeSelItem({
              error: Error()
            }), ActionTypeSelItem) : ActionTypeSelItem);
            itemComp.txt = v;
            itemComp.type = k;

            this._container.addChild(item);

            item.on(Node.EventType.TOUCH_END, this.onSelItem, this);
          });
        }

        onSelItem(touch) {
          log("sel item===");

          if (this._selItem) {
            this._selItem.getComponent(_crd && ActionTypeSelItem === void 0 ? (_reportPossibleCrUseOfActionTypeSelItem({
              error: Error()
            }), ActionTypeSelItem) : ActionTypeSelItem).isSel = false;
          }

          this._selItem = touch.target;
          this._selItem.getComponent(_crd && ActionTypeSelItem === void 0 ? (_reportPossibleCrUseOfActionTypeSelItem({
            error: Error()
          }), ActionTypeSelItem) : ActionTypeSelItem).isSel = true;
        }

        onClickOk() {
          if (this._selItem) {
            this.callBack(this._selItem.getComponent(_crd && ActionTypeSelItem === void 0 ? (_reportPossibleCrUseOfActionTypeSelItem({
              error: Error()
            }), ActionTypeSelItem) : ActionTypeSelItem).type);
            this.node.destroy();
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "actionTypeSelItemPrefab", [_dec2], {
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
//# sourceMappingURL=ActionTypeSelPanel.js.map