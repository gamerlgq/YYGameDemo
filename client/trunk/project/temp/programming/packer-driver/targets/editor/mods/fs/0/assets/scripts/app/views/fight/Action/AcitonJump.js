System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tween, Vec3, FightConstant, ActionBase, fightActionMgr, AcitonJump, _crd;

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

  _export("AcitonJump", void 0);

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

      _cclegacy._RF.push({}, "6c05asnZhdLf77UtXGAWaFC", "AcitonJump", undefined);

      _export("AcitonJump", AcitonJump = class AcitonJump extends (_crd && ActionBase === void 0 ? (_reportPossibleCrUseOfActionBase({
        error: Error()
      }), ActionBase) : ActionBase) {
        /**
         * 
         * @param data FightActionData
         * @param callback 可选,回调函数
         * @returns Tween<Node>
         */
        jump(data, callback) {
          this.setDoneCallback(callback);
          let own = data.own;
          let config = data.animCfg;
          let params = config.params;
          let duration = params[0];
          let offset = params[1];
          let tar = data.target;

          let tarPos = this._getTargetPos(tar);

          let _middlePos = this._getMiddlePos(tarPos);

          let _scale = this._getScale(own);

          let _endPos = this._getEndPos(own, tarPos, new Vec3(...offset));

          return tween().parallel(tween().to(duration / 2, {
            position: _middlePos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }).to(duration / 2, {
            position: _endPos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }), tween().call(() => {
            own.setSiblingIndex(10);
            own.play("jump");
          }), tween().to(duration, {
            scale: _scale
          })).call(() => {
            this.done();
          });
        }

        _getTargetPos(tar) {
          return (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
            error: Error()
          }), fightActionMgr) : fightActionMgr).getUnitPos([tar.camp, tar.formationIndex]);
        }

        _getMiddlePos(tarPos) {
          let _middlePos = new Vec3();

          _middlePos.y = tarPos.y + 80;
          return _middlePos;
        }

        _getScale(own) {
          if (own.camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Attack) {
            return new Vec3(1.08, 1.08, 1);
          } else if (own.camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Defend) {
            return new Vec3(-1.08, 1.08, 1);
          }
        }

        _getEndPos(own, tarPos, offset) {
          if (own.camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Attack) {
            return tarPos.subtract(offset);
          } else if (own.camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Defend) {
            return tarPos.add(offset);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AcitonJump.js.map