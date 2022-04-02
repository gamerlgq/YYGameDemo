System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, js, v3, yy, RoleSpineFactory, HeroSpineNode, MonsterSpineNode, FightData, fightDataMgr, fightEventMgr, FightConstant, FightLayerBase, FomationLayer, RoleLayer, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfyy(extras) {
    _reporterNs.report("yy", "../../../define/YYNamespace", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleSpineFactory(extras) {
    _reporterNs.report("RoleSpineFactory", "../../common/spine/RoleSpineFactory", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSpineNode(extras) {
    _reporterNs.report("HeroSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterSpineNode(extras) {
    _reporterNs.report("MonsterSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "../action/FightActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightFormationData(extras) {
    _reporterNs.report("FightFormationData", "../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightDataMgr(extras) {
    _reporterNs.report("fightDataMgr", "../data/FightDataMgr", _context.meta, extras);
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

  function _reportPossibleCrUseOfFightLayerBase(extras) {
    _reporterNs.report("FightLayerBase", "./FightLayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFomationLayer(extras) {
    _reporterNs.report("FomationLayer", "./FomationLayer", _context.meta, extras);
  }

  _export("RoleLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      js = _cc.js;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      yy = _unresolved_2.yy;
    }, function (_unresolved_3) {
      RoleSpineFactory = _unresolved_3.RoleSpineFactory;
    }, function (_unresolved_4) {
      HeroSpineNode = _unresolved_4.HeroSpineNode;
      MonsterSpineNode = _unresolved_4.MonsterSpineNode;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }, function (_unresolved_6) {
      fightDataMgr = _unresolved_6.fightDataMgr;
    }, function (_unresolved_7) {
      fightEventMgr = _unresolved_7.fightEventMgr;
    }, function (_unresolved_8) {
      FightConstant = _unresolved_8.FightConstant;
    }, function (_unresolved_9) {
      FightLayerBase = _unresolved_9.FightLayerBase;
    }, function (_unresolved_10) {
      FomationLayer = _unresolved_10.FomationLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "372e0T28HhM1pt5QZBq0JMy", "RoleLayer", undefined);

      _export("RoleLayer", RoleLayer = class RoleLayer extends (_crd && FightLayerBase === void 0 ? (_reportPossibleCrUseOfFightLayerBase({
        error: Error()
      }), FightLayerBase) : FightLayerBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_attackRoleList", new Array());

          _defineProperty(this, "_defendRoleList", new Array());
        }

        init() {
          this._addListeners();

          this._loadRoles();
        }

        _addListeners() {
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Blood_Change, this._onBloodChange.bind(this));
        }

        _onBloodChange(event) {
          const data = event.getEventData();
          const fightActionData = data.Data;
          const tar = fightActionData.target;
          const camp = tar.camp;
          const idx = tar.formationIndex;
          const result = fightActionData.result;
          let cur = result[2];
          let max = result[3];
          const role = this.getRole(camp, idx);

          if (role) {
            role.updateBlood(cur, max);
          }
        }

        _loadRoles() {
          let rp = (_crd && fightDataMgr === void 0 ? (_reportPossibleCrUseOffightDataMgr({
            error: Error()
          }), fightDataMgr) : fightDataMgr).getFightData(_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData);
          let attackers = rp.getAttackFormationDatas();

          this._loadAttackers(attackers);

          let defenders = rp.getDefendFormationDatas();

          this._loadDefenders(defenders);
        }

        async _loadAttackers(attackers) {
          for (let index = 0; index < attackers.length; index++) {
            let attackInfo = attackers[index];
            let heroId = attackInfo.getHeroId();

            if (heroId == -1) {
              return error(js.formatStr("RoleLayer:_loadAttackers heroId = -1 index:[%d]", index));
            }

            let node = await (_crd && RoleSpineFactory === void 0 ? (_reportPossibleCrUseOfRoleSpineFactory({
              error: Error()
            }), RoleSpineFactory) : RoleSpineFactory).create(_crd && HeroSpineNode === void 0 ? (_reportPossibleCrUseOfHeroSpineNode({
              error: Error()
            }), HeroSpineNode) : HeroSpineNode, heroId);
            this.node.addChild(node);

            this._setPosition(node, index, (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitType.Attack);

            this._attackRoleList.push(node);

            node.addBloodUI();
            node.setSiblingIndex(-1);
            node.formationIndex = index;
            node.camp = (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitType.Attack;
          }
        }

        async _loadDefenders(defenders) {
          for (let index = 0; index < defenders.length; index++) {
            let defenderInfo = defenders[index];
            let heroId = defenderInfo.getHeroId();

            if (heroId == -1) {
              return error(js.formatStr("RoleLayer:_loadDefenders heroId = -1 index:[%d]", index));
            }

            let node = await (_crd && RoleSpineFactory === void 0 ? (_reportPossibleCrUseOfRoleSpineFactory({
              error: Error()
            }), RoleSpineFactory) : RoleSpineFactory).create(_crd && MonsterSpineNode === void 0 ? (_reportPossibleCrUseOfMonsterSpineNode({
              error: Error()
            }), MonsterSpineNode) : MonsterSpineNode, heroId);
            this.node.addChild(node);

            this._setPosition(node, index, (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitType.Defend);

            this._defendRoleList.push(node);

            node.setScale(v3(-1, 1, 1));
            node.changeSkin("2");
            node.addBloodUI();
            node.setSiblingIndex(-1);
            node.formationIndex = index;
            node.camp = (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitType.Defend;
          }
        }

        _setPosition(node, idx, camp) {
          let pos = this.getFomationPos(camp, idx);
          node.position = pos;
        }

        startGame() {
          this._attackRoleList.forEach(element => {
            element.play((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
              error: Error()
            }), yy) : yy).macro.HeroAnimate.Idle, true);
            element.changeEquip("2", "dao2", "dao2");
          });

          this._defendRoleList.forEach(element => {
            element.play((_crd && yy === void 0 ? (_reportPossibleCrUseOfyy({
              error: Error()
            }), yy) : yy).macro.HeroAnimate.Idle, true);
            element.changeEquip("2", "dao2", "dao2");
          });
        }

        updateView(data) {}

        getRoleAttacker(index) {
          return this._attackRoleList[index];
        }

        getRoleDefender(index) {
          return this._defendRoleList[index];
        }
        /**
         * getRole
         */


        getRole(camp, index) {
          if (camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Attack) {
            return this.getRoleAttacker(index);
          } else if (camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Defend) {
            return this.getRoleDefender(index);
          }
        }
        /**
         * 
         * @param idx number 阵型索引
         * @param camp number 所在阵营 
         */


        getFomationPos(camp, idx) {
          let isAttacker = camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitType.Attack;

          let com = this._mainWorld.getCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.FORMATION, _crd && FomationLayer === void 0 ? (_reportPossibleCrUseOfFomationLayer({
            error: Error()
          }), FomationLayer) : FomationLayer);

          let pos = isAttacker ? com.getAttackPosByIndex(idx) : com.getDefendPosByIndex(idx);
          return pos.clone();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoleLayer.js.map