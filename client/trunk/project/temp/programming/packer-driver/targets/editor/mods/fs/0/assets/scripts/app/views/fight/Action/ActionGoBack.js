System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tween, Vec3, FightConstant, ActionBase, fightActionMgr, ActionGoBack, _crd;

  function _reportPossibleCrUseOfHeroSpineNode(extras) {
    _reporterNs.report("HeroSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterSpineNode(extras) {
    _reporterNs.report("MonsterSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionBase(extras) {
    _reporterNs.report("ActionBase", "./ActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "./FightActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightActionMgr(extras) {
    _reporterNs.report("fightActionMgr", "./FightActionMgr", _context.meta, extras);
  }

  _export("ActionGoBack", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      FightConstant = _unresolved_2.FightConstant;
    }, function (_unresolved_3) {
      ActionBase = _unresolved_3.ActionBase;
    }, function (_unresolved_4) {
      fightActionMgr = _unresolved_4.fightActionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "846c5wUjuFFv4CcWo3XIoUW", "ActionGoBack", undefined);

      _export("ActionGoBack", ActionGoBack = class ActionGoBack extends (_crd && ActionBase === void 0 ? (_reportPossibleCrUseOfActionBase({
        error: Error()
      }), ActionBase) : ActionBase) {
        /**
         * 
         * @param own 移动节点
         * @param pos 阵型孔位置
         * @param duration 持续时间
         */
        goBack(data) {
          let own = data.own;
          let pos = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
            error: Error()
          }), fightActionMgr) : fightActionMgr).getUnitPos([own.camp, own.formationIndex]);
          let config = data.animCfg;
          let params = config.params;
          let duration = params[0];

          let _scale = this._getScale(own);

          return tween().parallel(tween().to(duration, {
            position: pos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }), tween().to(duration, {
            scale: _scale
          }), tween().call(() => {
            own.setSiblingIndex(own.formationIndex);
          }));
        }

        _getScale(own) {
          if (own.camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Attack) {
            return new Vec3(1, 1, 1);
          } else if (own.camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Defend) {
            return new Vec3(-1, 1, 1);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActionGoBack.js.map