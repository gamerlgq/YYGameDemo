System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, v3, v2, posAdd, _dec, _class, _temp, _crd, ccclass, property, DInertiaMove;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfposAdd(extras) {
    _reporterNs.report("posAdd", "../utils/functions", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
      v2 = _cc.v2;
    }, function (_unresolved_2) {
      posAdd = _unresolved_2.posAdd;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0ee90D04ShDIq1wz1y6HZrV", "DInertiaMove", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DInertiaMove
       * DateTime = Tue Mar 15 2022 11:02:34 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = DInertiaMove.ts
       * FileBasenameNoExtension = DInertiaMove
       * URL = db://assets/scripts/framework/ui/DInertiaMove.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       * 惯性移动组件
       */

      _export("DInertiaMove", DInertiaMove = (_dec = ccclass('DInertiaMove'), _dec(_class = (_temp = class DInertiaMove extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_autoOffPos", void 0);

          _defineProperty(this, "drag", 0.97);

          _defineProperty(this, "isAutoScrolling", false);

          _defineProperty(this, "_minX", void 0);

          _defineProperty(this, "_maxX", void 0);

          _defineProperty(this, "_onStop", void 0);

          _defineProperty(this, "_increasedPos", void 0);

          _defineProperty(this, "onPosChange", void 0);
        }

        get onStop() {
          return this._onStop;
        }

        set onStop(value) {
          this._onStop = value;
        }

        start() {}

        move(byPos, minX, maxX) {
          this._autoOffPos = byPos;
          this.isAutoScrolling = true;
          this._minX = minX;
          this._maxX = maxX;
        }

        stop() {
          this.isAutoScrolling = false;
          this._autoOffPos = v2(0, 0);
          this.onStop && this.onStop();
        }

        update(deltaTime) {
          if (this.isAutoScrolling) {
            this._autoOffPos = this._autoOffPos.multiplyScalar(this.drag); //判断结束

            let newPos = this.node.position.clone().add(v3(this._autoOffPos.x, this._autoOffPos.y));

            if (this._minX && newPos.x < this._minX) {
              newPos.x = this._minX;
            }

            if (this._maxX && newPos.x > this._maxX) {
              newPos.x = this._maxX;
            }

            this._increasedPos = newPos.subtract(this.node.position);

            let dis = this._increasedPos.length();

            if (dis < 2) this.stop();else {
              (_crd && posAdd === void 0 ? (_reportPossibleCrUseOfposAdd({
                error: Error()
              }), posAdd) : posAdd)(this.node, this._autoOffPos, this._minX, this._maxX);
              this.onPosChange && this.onPosChange(this._increasedPos);
            }
          }
        }

      }, _temp)) || _class));
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
//# sourceMappingURL=DInertiaMove.js.map