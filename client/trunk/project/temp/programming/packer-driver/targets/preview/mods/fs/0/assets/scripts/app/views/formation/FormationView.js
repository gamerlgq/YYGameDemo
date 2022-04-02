System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, assert, ComponentBase, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, FormationView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/ui/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      assert = _cc.assert;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2aeffcF5a9DHY4JWEmk6TzO", "FormationView", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FormationView", FormationView = (_dec = ccclass('FormationView'), _dec2 = property([Node]), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = class FormationView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "leftPosList", _descriptor, this);

          _initializerDefineProperty(this, "rightPosList", _descriptor2, this);
        }

        start() {}
        /**
         * 
         * @description 获取攻方部队索引值 (左)
         * @param index 部队所引致
         */


        getAttackPosByIndex(index) {
          var node = this.leftPosList[index];
          assert(node, "FormationView:getAttackPosByIndex() node does not exit [%s]", index.toString());
          return node.position;
        }
        /**
         * 
         * @description 获取守方部队索引值 (右)
         * @param index 部队所引致
         */


        getDefendPosByIndex(index) {
          var node = this.rightPosList[index];
          assert(node, "FormationView:getDefendPosByIndex() node does not exit [%s]", index.toString());
          return node.position;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftPosList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightPosList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FormationView.js.map