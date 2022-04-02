System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CCBoolean, CCInteger, Component, Label, _decorator, translateMgr, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, TranslateLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftranslateMgr(extras) {
    _reporterNs.report("translateMgr", "../translate/TranslateMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      CCBoolean = _cc.CCBoolean;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      Label = _cc.Label;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      translateMgr = _unresolved_2.translateMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f4d3oNSvBEq7D23+2jKObh", "TranslateLabel", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", TranslateLabel = (_dec = property(CCInteger), _dec2 = property(CCBoolean), ccclass(_class = (_class2 = (_temp = class TranslateLabel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "translateId", _descriptor, this);

          _initializerDefineProperty(this, "isTranslateByCode", _descriptor2, this);
        }

        onLoad() {
          var lbl = this.node.getComponent(Label);

          if (lbl && this.translateId) {
            lbl.string = (_crd && translateMgr === void 0 ? (_reportPossibleCrUseOftranslateMgr({
              error: Error()
            }), translateMgr) : translateMgr).translate(this.translateId);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "translateId", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isTranslateByCode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TranslateLabel.js.map