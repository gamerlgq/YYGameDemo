System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, sp, Vec2, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Jitter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sp = _cc.sp;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99af1PEPLdN/LqW3ZkwkN8W", "Jitter", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 抖动效果
       */

      _export("Jitter", Jitter = (_dec = ccclass('Jitter'), _dec2 = property({
        type: sp.Skeleton
      }), _dec3 = property(Vec2), _dec(_class = (_class2 = (_temp = class Jitter extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "skeleton", _descriptor, this);

          _initializerDefineProperty(this, "jitter", _descriptor2, this);

          _defineProperty(this, "_jitterEffect", void 0);
        }

        start() {
          this._jitterEffect = new sp.VertexEffectDelegate(); // 设置好抖动参数。

          this._jitterEffect.initJitter(this.jitter.x, this.jitter.y); // 调用 Skeleton 组件的 setVertexEffectDelegate 方法设置效果。


          this.skeleton.setVertexEffectDelegate(this._jitterEffect);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jitter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Jitter.js.map