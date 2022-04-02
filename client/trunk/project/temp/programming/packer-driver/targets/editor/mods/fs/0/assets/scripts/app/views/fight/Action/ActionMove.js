System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tween, Vec3, ActionBase, ActionMove, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfActionBase(extras) {
    _reporterNs.report("ActionBase", "./ActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "./FightActionMgr", _context.meta, extras);
  }

  _export("ActionMove", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ActionBase = _unresolved_2.ActionBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25990KS2PREWb2QEKfJQEug", "ActionMove", undefined);

      _export("ActionMove", ActionMove = class ActionMove extends (_crd && ActionBase === void 0 ? (_reportPossibleCrUseOfActionBase({
        error: Error()
      }), ActionBase) : ActionBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_middlePos", new Vec3());

          _defineProperty(this, "_offset", new Vec3(140, 0, 0));
        }

        /**
         * 
         * @param own 移动节点
         * @param pos 目标位置
         * @param duration 持续时间
         */
        move(data) {
          let own = data.own;
          let config = data.animCfg;
          let params = config.params;
          let pos = params[0];
          let duration = params[1];
          this._middlePos.x = 0;
          this._middlePos.y = pos.y + 80;
          this._middlePos.z = 0;
          return tween().to(duration / 2, {
            position: this._middlePos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }).to(duration / 2, {
            position: pos.subtract(this._offset)
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActionMove.js.map