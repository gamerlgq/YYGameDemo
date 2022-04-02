System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, tween, Singleton, G, FightEvent, fightEventMgr, FightConstant, fightActionMgr, ResultActionMgr, _crd, resultActionMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

  _export("ResultActionMgr", void 0);

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

      _cclegacy._RF.push({}, "ab768WPkGlGEZZdm7NLuDqE", "ResultActionMgr", undefined);

      _export("resultActionMgr", resultActionMgr = null);
      /**
       * @description 攻击行动管理器 
       * */


      _export("ResultActionMgr", ResultActionMgr = class ResultActionMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_parseResultDataRecord", null);
        }

        static init() {
          _export("resultActionMgr", resultActionMgr = ResultActionMgr.getInstance());

          resultActionMgr._init();
        }

        _init() {
          this._parseResultDataRecord = {
            resultNum: 0,
            targetNum: 0
          };
        }

        parse(data) {
          let resultDatas = data.Result;

          for (let index = 0; index < resultDatas.length; index++) {
            this._parseResultDataRecord.resultNum = index + 1;
            const resultData = resultDatas[index];

            let animationConfig = this._getAnimationConfig(data, resultData);

            this._parseResultAction(data, animationConfig, resultData);
          }

          ;
        }

        _getAnimationConfig(data, resultData) {
          let attackData = data.Attack;
          let skillId = attackData[1];
          let config = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).getConfig("FightSkill", skillId);
          let resultActionId = resultData[0];

          switch (resultActionId) {
            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightReultAction.Action_Dodge:
              // 闪避
              return (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
                error: Error()
              }), G) : G).getConfig("FightEmbattled", config.dodgeAnimation);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightReultAction.Action_Block:
              //格挡
              return (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
                error: Error()
              }), G) : G).getConfig("FightEmbattled", config.blockAnimation);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightReultAction.Action_HP:
              //hp变化
              return (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
                error: Error()
              }), G) : G).getConfig("FightEmbattled", config.embattledAnimation);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightReultAction.Action_Dead:
              //死亡
              return null;

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightReultAction.Action_Hit_Back:
              //反击
              return (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
                error: Error()
              }), G) : G).getConfig("FightEmbattled", config.hitbackAnimation);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightReultAction.Action_Buff:
              //直接伤害(添加/删除buff)
              return null;

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightReultAction.Action_Lock:
              //无法行动
              return null;
          }
        }

        _parseResultAction(data, config, resultData) {
          // 全局技能时间轴
          let skillTimeline = config.skillTimeline;

          if (skillTimeline.length > 0) {
            this._runSkillTimelineAction(skillTimeline, data, resultData);
          } // 受击单位时间轴


          let defendUnitTimeline = config.defendUnitTimeline;

          if (defendUnitTimeline.length > 0) {
            this._runUnitDefendimelineAction(defendUnitTimeline, data, resultData);
          }
        }

        _runSkillTimelineAction(skillTimeline, data, resultData) {
          let allTimeLine = [];
          let camp = resultData[1];
          let targets = resultData[2];
          let tarUnits = [];
          targets.forEach(target => {
            let tarUnit = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
              error: Error()
            }), fightActionMgr) : fightActionMgr).getUnit([camp, target[0]]);
            tarUnits.push(tarUnit);
          });

          for (let index = 0; index < tarUnits.length; index++) {
            const tarUnit = tarUnits[index];
            skillTimeline.forEach(animations => {
              let oneTimeTween = tween();
              animations.forEach(anim => {
                let target = targets[index];
                let fightActionData = {
                  own: tarUnit,
                  target: tarUnit,
                  result: target[1],
                  animCfg: anim
                };
                let tween = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
                  error: Error()
                }), fightActionMgr) : fightActionMgr).getAnimation(fightActionData);
                oneTimeTween.then(tween);
              });
              allTimeLine.push(oneTimeTween);
            });

            if (allTimeLine.length > 1) {
              let parallel = tween(tarUnit).parallel(...allTimeLine);
              parallel.start();
            } else {
              let t = allTimeLine[0];
              t.target(tarUnit).start();
            }
          }
        }

        _runUnitDefendimelineAction(unitTimeline, data, resultData) {
          let allTimeLine = [];
          let camp = resultData[1];
          let targets = resultData[2];
          let tarUnits = [];
          targets.forEach(target => {
            let tarUnit = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
              error: Error()
            }), fightActionMgr) : fightActionMgr).getUnit([camp, target[0]]);
            tarUnits.push(tarUnit);
          });

          for (let index = 0; index < tarUnits.length; index++) {
            const tarUnit = tarUnits[index];
            let target = targets[index];
            this._parseResultDataRecord.targetNum = index + 1;
            unitTimeline.forEach(animations => {
              let oneTimeTween = tween();
              animations.forEach(anim => {
                let fightActionData = {
                  own: tarUnit,
                  target: tarUnit,
                  result: target[1],
                  animCfg: anim
                };
                let tween = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
                  error: Error()
                }), fightActionMgr) : fightActionMgr).getAnimation(fightActionData);
                oneTimeTween.then(tween);
              });
              allTimeLine.push(oneTimeTween);
            });

            if (allTimeLine.length > 1) {
              let parallel = tween(tarUnit).parallel(...allTimeLine);
              parallel.then(tween().call(() => {
                // 结果结束
                this._endCallback(data);
              })).start();
            } else {
              let t = allTimeLine[0];
              t.target(tarUnit).then(tween().call(() => {
                this._endCallback(data);
              })).start();
            }
          }
        }

        _endCallback(data) {
          if (this._checkIsEnd(data)) {
            log("result action finished!"); // 结果结束

            (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
              error: Error()
            }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Result_End, data));
          }
        }

        _checkIsEnd(data) {
          let resultData = data === null || data === void 0 ? void 0 : data.Result; // 最后一个结果

          if (this._parseResultDataRecord.resultNum == (resultData === null || resultData === void 0 ? void 0 : resultData.length)) {
            var _targetInfo$;

            let targetInfo = resultData[resultData.length - 1];
            let targets = (_targetInfo$ = targetInfo[2]) === null || _targetInfo$ === void 0 ? void 0 : _targetInfo$.length;

            if (this._parseResultDataRecord.targetNum == targets) {
              return true;
            }
          }

          return false;
        }

        destory() {
          ResultActionMgr.destoryInstance();
        }

        clear() {
          _export("resultActionMgr", resultActionMgr = null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResultActionMgr.js.map