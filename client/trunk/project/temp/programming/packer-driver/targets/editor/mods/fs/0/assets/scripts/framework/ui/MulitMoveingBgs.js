System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, v3, CCFloat, posAdd, v3ToV2, DInertiaMove, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _dec4, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp2, _crd, ccclass, property, BgTarget, MulitMoveingBgs;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfposAdd(extras) {
    _reporterNs.report("posAdd", "../utils/functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv3ToV(extras) {
    _reporterNs.report("v3ToV2", "../utils/functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDInertiaMove(extras) {
    _reporterNs.report("DInertiaMove", "./DInertiaMove", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      v3 = _cc.v3;
      CCFloat = _cc.CCFloat;
    }, function (_unresolved_2) {
      posAdd = _unresolved_2.posAdd;
      v3ToV2 = _unresolved_2.v3ToV2;
    }, function (_unresolved_3) {
      DInertiaMove = _unresolved_3.DInertiaMove;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f76c4bSHmJHE6S/Ii810Y7Z", "MulitMoveingBgs", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = MulitMoveingBgs
       * DateTime = Mon Mar 14 2022 17:34:40 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = MulitMoveingBgs.ts
       * FileBasenameNoExtension = MulitMoveingBgs
       * URL = db://assets/scripts/app/views/common/MulitMoveingBgs.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      BgTarget = (_dec = ccclass('BgTarget'), _dec2 = property(Node), _dec3 = property(CCFloat), _dec(_class = (_class2 = (_temp = class BgTarget {
        constructor() {
          _initializerDefineProperty(this, "bgNode", _descriptor, this);

          _initializerDefineProperty(this, "moveScale", _descriptor2, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class);

      _export("MulitMoveingBgs", MulitMoveingBgs = (_dec4 = ccclass('MulitMoveingBgs'), _dec5 = property({
        type: [BgTarget]
      }), _dec6 = property(Node), _dec7 = property(CCFloat), _dec8 = property(CCFloat), _dec4(_class4 = (_class5 = (_temp2 = class MulitMoveingBgs extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "subBg", _descriptor3, this);

          _initializerDefineProperty(this, "mainBg", _descriptor4, this);

          _initializerDefineProperty(this, "minX", _descriptor5, this);

          _initializerDefineProperty(this, "maxX", _descriptor6, this);
        }

        start() {
          this.mainBg.addComponent(_crd && DInertiaMove === void 0 ? (_reportPossibleCrUseOfDInertiaMove({
            error: Error()
          }), DInertiaMove) : DInertiaMove).onPosChange = this.onMainBgChangePos.bind(this);
        }

        onMainBgChangePos(insreasedPos) {
          this.subBg.forEach(element => {
            let subMovePos = insreasedPos.clone().multiplyScalar(element.moveScale);
            (_crd && posAdd === void 0 ? (_reportPossibleCrUseOfposAdd({
              error: Error()
            }), posAdd) : posAdd)(element.bgNode, (_crd && v3ToV2 === void 0 ? (_reportPossibleCrUseOfv3ToV({
              error: Error()
            }), v3ToV2) : v3ToV2)(subMovePos));
          });
        }

        move(byPos, isDInertia) {
          // 惯性移动
          if (isDInertia) {
            let dInertiaMoveComp = this.mainBg.getComponent(_crd && DInertiaMove === void 0 ? (_reportPossibleCrUseOfDInertiaMove({
              error: Error()
            }), DInertiaMove) : DInertiaMove);
            dInertiaMoveComp.move(byPos, this.minX, this.maxX);
          } else {
            // 非惯性移动
            //判断结束
            let newPos = this.mainBg.position.clone().add(v3(byPos.x, byPos.y));

            if (this.minX && newPos.x < this.minX) {
              newPos.x = this.minX;
            }

            if (this.maxX && newPos.x > this.maxX) {
              newPos.x = this.maxX;
            }

            let insreasedPos = newPos.subtract(this.mainBg.position);
            let dis = insreasedPos.length();

            if (dis != 0) {
              (_crd && posAdd === void 0 ? (_reportPossibleCrUseOfposAdd({
                error: Error()
              }), posAdd) : posAdd)(this.mainBg, byPos, this.minX, this.maxX);
              this.onMainBgChangePos(insreasedPos);
            }
          }
        }

        stop() {
          this.mainBg.addComponent(_crd && DInertiaMove === void 0 ? (_reportPossibleCrUseOfDInertiaMove({
            error: Error()
          }), DInertiaMove) : DInertiaMove).stop();
        }

      }, _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "subBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "mainBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "minX", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "maxX", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class5)) || _class4));
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
//# sourceMappingURL=MulitMoveingBgs.js.map