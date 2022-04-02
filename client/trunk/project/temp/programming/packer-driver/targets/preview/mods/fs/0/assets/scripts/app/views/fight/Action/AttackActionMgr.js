System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, tween, Singleton, G, FightEvent, fightEventMgr, FightConstant, fightActionMgr, AttackActionMgr, _crd, attackActionMgr;

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfG(extras) {
    _reporterNs.report("G", "../../../common/GlobalFunction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventDataType(extras) {
    _reporterNs.report("FightEventDataType", "../event/FightEventDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "../event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "./FightActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightActionMgr(extras) {
    _reporterNs.report("fightActionMgr", "./FightActionMgr", _context.meta, extras);
  }

  _export("AttackActionMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      G = _unresolved_3.G;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_unresolved_5) {
      fightEventMgr = _unresolved_5.fightEventMgr;
    }, function (_unresolved_6) {
      FightConstant = _unresolved_6.FightConstant;
    }, function (_unresolved_7) {
      fightActionMgr = _unresolved_7.fightActionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "928a92vL6lDK5Cfz5LQ9pPm", "AttackActionMgr", undefined);

      _export("attackActionMgr", attackActionMgr = null);
      /**
       * @description 攻击行动管理器 
       * */


      _export("AttackActionMgr", AttackActionMgr = class AttackActionMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        static init() {
          _export("attackActionMgr", attackActionMgr = AttackActionMgr.getInstance());
        }

        parse(data) {
          var attackData = data.Attack;
          var attackActionId = attackData[0];

          switch (attackActionId) {
            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightAttackAction.Action_Fail:
              // 攻击失败
              break;

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightAttackAction.Action_Skill:
              //技能攻击
              this._parseSkill(data);

              break;

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightAttackAction.Action_Buff:
              //直接伤害(一些dot，每回合的伤害/每回合治疗等)
              break;
          }
        }

        _parseSkill(data) {
          var attackData = data.Attack;
          var skillId = attackData[1];
          var config = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).getConfig("FightSkill", skillId);
          var skillAnimation = config.skillAnimation;
          var hitConfig = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).getConfig("FightHit", skillAnimation); // 全局技能时间轴

          var skillTimeline = hitConfig.skillTimeline;

          if (skillTimeline.length > 0) {
            this._runSkillTimelineAction(skillTimeline, data);
          } // 攻击单位时间轴


          var unitHitTimeline = hitConfig.attackUnitTimeline;

          if (unitHitTimeline.length > 0) {
            this._runAttackUnitTimelineAction(unitHitTimeline, data);
          }
        }

        _runSkillTimelineAction(skillTimeline, data) {
          var allTimeLine = [];
          var ownUnit = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
            error: Error()
          }), fightActionMgr) : fightActionMgr).getOwnUnit(data);
          var attackData = data.Attack;
          var whom = attackData[2];
          var tarUnit = null;

          if (whom.length > 0) {
            tarUnit = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
              error: Error()
            }), fightActionMgr) : fightActionMgr).getUnit(whom);
          }

          skillTimeline.forEach(animations => {
            var oneTimeTween = tween();
            animations.forEach(anim => {
              var fightActionData = {
                own: ownUnit,
                target: tarUnit,
                result: undefined,
                animCfg: anim
              };
              var tween = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
                error: Error()
              }), fightActionMgr) : fightActionMgr).getAnimation(fightActionData);
              oneTimeTween.then(tween);
            });
            allTimeLine.push(oneTimeTween);
          });

          if (allTimeLine.length > 1) {
            var parallel = tween(ownUnit).parallel(...allTimeLine);
            parallel.call(() => {
              log("attack action finished!"); // 攻击结束

              (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
                error: Error()
              }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
                error: Error()
              }), FightConstant) : FightConstant).FightEvent.Attack_End, data));
            }).start();
          } else {
            var t = allTimeLine[0];
            t.target(ownUnit).call(() => {
              log("attack action finished!"); // 攻击结束

              (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
                error: Error()
              }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
                error: Error()
              }), FightConstant) : FightConstant).FightEvent.Attack_End, data));
            }).start();
          }
        }

        _runAttackUnitTimelineAction(unitTimeline, data) {
          var allTimeLine = [];
          var ownUnit = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
            error: Error()
          }), fightActionMgr) : fightActionMgr).getOwnUnit(data);
          var attackData = data.Attack;
          var whom = attackData[2];
          var tarUnit = null;

          if (whom.length > 0) {
            tarUnit = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
              error: Error()
            }), fightActionMgr) : fightActionMgr).getUnit(whom);
          }

          unitTimeline.forEach(animations => {
            var oneTimeTween = tween();
            animations.forEach(anim => {
              var fightActionData = {
                own: ownUnit,
                target: tarUnit,
                result: undefined,
                animCfg: anim
              };
              var tween = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
                error: Error()
              }), fightActionMgr) : fightActionMgr).getAnimation(fightActionData);
              oneTimeTween.then(tween);
            });
            allTimeLine.push(oneTimeTween);
          });

          if (allTimeLine.length > 1) {
            var parallel = tween(ownUnit).parallel(...allTimeLine);
            parallel.call(() => {
              log("attack action finished!"); // 攻击结束

              (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
                error: Error()
              }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
                error: Error()
              }), FightConstant) : FightConstant).FightEvent.Attack_End, data));
            }).start();
          } else {
            var t = allTimeLine[0];
            t.target(ownUnit).call(() => {
              log("attack action finished!"); // 攻击结束

              (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
                error: Error()
              }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
                error: Error()
              }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
                error: Error()
              }), FightConstant) : FightConstant).FightEvent.Attack_End, data));
            }).start();
          }
        }

        destory() {
          AttackActionMgr.destoryInstance();
        }

        clear() {
          _export("attackActionMgr", attackActionMgr = null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AttackActionMgr.js.map