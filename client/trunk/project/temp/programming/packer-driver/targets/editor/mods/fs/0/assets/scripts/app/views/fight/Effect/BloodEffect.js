System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EffectBase, _decorator, Label, AnimationComponent, _dec, _dec2, _class, _class2, _descriptor, _class3, _temp, _crd, ccclass, property, BloodEffect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEffectBase(extras) {
    _reporterNs.report("EffectBase", "./EffectBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_unresolved_2) {
      EffectBase = _unresolved_2.EffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "70b11ZLPANOEJKsZOAR4a9J", "BloodEffect", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BloodEffect", BloodEffect = (_dec = ccclass('BloodEffect'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = _class3 = class BloodEffect extends (_crd && EffectBase === void 0 ? (_reportPossibleCrUseOfEffectBase({
        error: Error()
      }), EffectBase) : EffectBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lblblood", _descriptor, this);

          _defineProperty(this, "_bloodType", BloodEffect.BloodType.Hurt);
        }

        start() {}
        /**
         * 
         * @param bloodType 设置类型
         */


        setType(bloodType) {
          this._bloodType = bloodType;
        }
        /**
         * 
         * @param num number 数字
         */


        setNumber(num) {
          this.lblblood.setString(num.toString());
        }

        show() {
          let com = this.getComponent(AnimationComponent);
          com.play(this._getAnimationClipName());
        }

        _getAnimationClipName() {
          if (this._bloodType == BloodEffect.BloodType.Hurt) {
            return "numbers_crit";
          } else if (this._bloodType == BloodEffect.BloodType.Double) {
            return "numbers_double";
          }
        }

      }, _defineProperty(_class3, "BloodType", {
        Hurt: 0,
        //伤害
        Double: 1 //连击

      }), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblblood", [_dec2], {
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
//# sourceMappingURL=BloodEffect.js.map