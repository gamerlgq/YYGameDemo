System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, FightEvent, fightEventMgr, FightConstant, RoleLayer, AcitonJump, ActionAddPrefab, ActionDelay, ActionGoBack, ActionMove, ActionSpineAnim, ActionHide, ActionShow, attackActionMgr, AttackActionMgr, resultActionMgr, ResultActionMgr, FightActionMgr, _crd, fightActionMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSpineNode(extras) {
    _reporterNs.report("HeroSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterSpineNode(extras) {
    _reporterNs.report("MonsterSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineNodeBase(extras) {
    _reporterNs.report("SpineNodeBase", "../../common/spine/SpineNodeBase", _context.meta, extras);
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

  function _reportPossibleCrUseOfFightMainLayer(extras) {
    _reporterNs.report("FightMainLayer", "../FightMainLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMainWorld(extras) {
    _reporterNs.report("FightMainWorld", "../FightMainWorld", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLayerBase(extras) {
    _reporterNs.report("FightLayerBase", "../layer/FightLayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleLayer(extras) {
    _reporterNs.report("RoleLayer", "../layer/RoleLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAcitonJump(extras) {
    _reporterNs.report("AcitonJump", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionAddPrefab(extras) {
    _reporterNs.report("ActionAddPrefab", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionBase(extras) {
    _reporterNs.report("ActionBase", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionDelay(extras) {
    _reporterNs.report("ActionDelay", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionGoBack(extras) {
    _reporterNs.report("ActionGoBack", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionMove(extras) {
    _reporterNs.report("ActionMove", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionSpineAnim(extras) {
    _reporterNs.report("ActionSpineAnim", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionHide(extras) {
    _reporterNs.report("ActionHide", "./ActionHide", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionShow(extras) {
    _reporterNs.report("ActionShow", "./ActionShow", _context.meta, extras);
  }

  function _reportPossibleCrUseOfattackActionMgr(extras) {
    _reporterNs.report("attackActionMgr", "./AttackActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAttackActionMgr(extras) {
    _reporterNs.report("AttackActionMgr", "./AttackActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfresultActionMgr(extras) {
    _reporterNs.report("resultActionMgr", "./ResultActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResultActionMgr(extras) {
    _reporterNs.report("ResultActionMgr", "./ResultActionMgr", _context.meta, extras);
  }

  _export("FightActionMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      FightEvent = _unresolved_3.FightEvent;
    }, function (_unresolved_4) {
      fightEventMgr = _unresolved_4.fightEventMgr;
    }, function (_unresolved_5) {
      FightConstant = _unresolved_5.FightConstant;
    }, function (_unresolved_6) {
      RoleLayer = _unresolved_6.RoleLayer;
    }, function (_unresolved_7) {
      AcitonJump = _unresolved_7.AcitonJump;
      ActionAddPrefab = _unresolved_7.ActionAddPrefab;
      ActionDelay = _unresolved_7.ActionDelay;
      ActionGoBack = _unresolved_7.ActionGoBack;
      ActionMove = _unresolved_7.ActionMove;
      ActionSpineAnim = _unresolved_7.ActionSpineAnim;
    }, function (_unresolved_8) {
      ActionHide = _unresolved_8.ActionHide;
    }, function (_unresolved_9) {
      ActionShow = _unresolved_9.ActionShow;
    }, function (_unresolved_10) {
      attackActionMgr = _unresolved_10.attackActionMgr;
      AttackActionMgr = _unresolved_10.AttackActionMgr;
    }, function (_unresolved_11) {
      resultActionMgr = _unresolved_11.resultActionMgr;
      ResultActionMgr = _unresolved_11.ResultActionMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da876KakvtGQZGN/fA5i6Kc", "FightActionMgr", undefined);

      _export("fightActionMgr", fightActionMgr = null);
      /**
       * @description 行动管理器 
       * */


      _export("FightActionMgr", FightActionMgr = class FightActionMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_fightMainLayer", null);

          _defineProperty(this, "_fightMainWorld", null);

          _defineProperty(this, "_tempActionList", null);
        }

        static init(mainLayer) {
          _export("fightActionMgr", fightActionMgr = FightActionMgr.getInstance());

          fightActionMgr._init(mainLayer);
        }

        _init(mainLayer) {
          this._fightMainLayer = mainLayer;
          this._fightMainWorld = this._fightMainLayer.getFightMainWorld();
          this._tempActionList = new Array();
          (_crd && AttackActionMgr === void 0 ? (_reportPossibleCrUseOfAttackActionMgr({
            error: Error()
          }), AttackActionMgr) : AttackActionMgr).init();
          (_crd && ResultActionMgr === void 0 ? (_reportPossibleCrUseOfResultActionMgr({
            error: Error()
          }), ResultActionMgr) : ResultActionMgr).init();

          this._initListeners();
        }

        _initListeners() {
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Attack_Start, this._onAttackStart.bind(this));
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Attack_End, this._onAttackEnd.bind(this));
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Result_Start, this._onResultStart.bind(this));
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Result_End, this._onResultEnd.bind(this));
        }

        _onAttackStart(event) {
          if (!this._fightMainWorld) {
            this._fightMainWorld = this._fightMainLayer.getFightMainWorld();
          }

          let data = event.getEventData();

          this._parseAttack(data);
        }

        _onAttackEnd(event) {}

        _onResultStart(event) {
          let data = event.getEventData();

          this._parseResult(data);
        }

        _onResultEnd(event) {
          // 做些清理工作;
          this._tempActionList.length = 0;
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Action_End, null));
        }

        _parseAttack(data) {
          (_crd && attackActionMgr === void 0 ? (_reportPossibleCrUseOfattackActionMgr({
            error: Error()
          }), attackActionMgr) : attackActionMgr).parse(data);
        }
        /**
         * 
         * @param data 播放结果
         */


        _parseResult(data) {
          (_crd && resultActionMgr === void 0 ? (_reportPossibleCrUseOfresultActionMgr({
            error: Error()
          }), resultActionMgr) : resultActionMgr).parse(data);
        }

        getAnimation(data) {
          let animCfg = data.animCfg;
          let cmd = animCfg.cmd;

          let cmdEnum = this._getUnitActionEnumByName(cmd);

          switch (cmdEnum) {
            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.AddPrefab:
              return this.getUnitAction(_crd && ActionAddPrefab === void 0 ? (_reportPossibleCrUseOfActionAddPrefab({
                error: Error()
              }), ActionAddPrefab) : ActionAddPrefab).add(data);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.Delay:
              return this.getUnitAction(_crd && ActionDelay === void 0 ? (_reportPossibleCrUseOfActionDelay({
                error: Error()
              }), ActionDelay) : ActionDelay).delay(data);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.SpineAnimation:
              return this.getUnitAction(_crd && ActionSpineAnim === void 0 ? (_reportPossibleCrUseOfActionSpineAnim({
                error: Error()
              }), ActionSpineAnim) : ActionSpineAnim).play(data);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.Color:
              return;

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.GoBack:
              return this.getUnitAction(_crd && ActionGoBack === void 0 ? (_reportPossibleCrUseOfActionGoBack({
                error: Error()
              }), ActionGoBack) : ActionGoBack).goBack(data);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.Hide:
              return this.getUnitAction(_crd && ActionHide === void 0 ? (_reportPossibleCrUseOfActionHide({
                error: Error()
              }), ActionHide) : ActionHide).hide(animCfg.params[0]);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.Show:
              return this.getUnitAction(_crd && ActionShow === void 0 ? (_reportPossibleCrUseOfActionShow({
                error: Error()
              }), ActionShow) : ActionShow).show(animCfg.params[0]);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.Move:
              return this.getUnitAction(_crd && ActionMove === void 0 ? (_reportPossibleCrUseOfActionMove({
                error: Error()
              }), ActionMove) : ActionMove).move(data);

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitAction.Jump:
              return this.getUnitAction(_crd && AcitonJump === void 0 ? (_reportPossibleCrUseOfAcitonJump({
                error: Error()
              }), AcitonJump) : AcitonJump).jump(data);
          }
        }

        getUnitAction(clas) {
          let anim = new clas(); // wait fot delet

          this._tempActionList.push(anim);

          return anim;
        }

        getOwnUnit(data) {
          return this.getUnit(data.Who);
        }

        getUnit(who) {
          let camp = who[0];
          let index = who[1];

          let com = this._fightMainWorld.getCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.ROLE, _crd && RoleLayer === void 0 ? (_reportPossibleCrUseOfRoleLayer({
            error: Error()
          }), RoleLayer) : RoleLayer);

          if (camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Attack) {
            return com.getRoleAttacker(index);
          } else if (camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Defend) {
            return com.getRoleDefender(index);
          }
        }

        getUnitPos(who) {
          let camp = who[0];
          let index = who[1];

          let com = this._fightMainWorld.getCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.ROLE, _crd && RoleLayer === void 0 ? (_reportPossibleCrUseOfRoleLayer({
            error: Error()
          }), RoleLayer) : RoleLayer);

          let pos = com.getFomationPos(camp, index);

          if (pos) {
            return pos;
          }
        }

        _getUnitActionEnumByName(name) {
          return (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitActionString[name];
        }
        /**
         * name
         */


        getCommonentInLayer(layerIndex, layerCtor) {
          return this._fightMainWorld.getCommonentInLayer(layerIndex, layerCtor);
        }

        destory() {
          FightActionMgr.destoryInstance();
          (_crd && attackActionMgr === void 0 ? (_reportPossibleCrUseOfattackActionMgr({
            error: Error()
          }), attackActionMgr) : attackActionMgr).destory();
          (_crd && resultActionMgr === void 0 ? (_reportPossibleCrUseOfresultActionMgr({
            error: Error()
          }), resultActionMgr) : resultActionMgr).destory();
        }

        clear() {
          _export("fightActionMgr", fightActionMgr = null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightActionMgr.js.map