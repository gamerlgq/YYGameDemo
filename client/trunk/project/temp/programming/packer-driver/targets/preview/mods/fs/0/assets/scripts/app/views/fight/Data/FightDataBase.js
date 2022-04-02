System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FightPlayerDataBase, FightFormationDataBase, FightDataBase, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export({
    FightPlayerDataBase: void 0,
    FightFormationDataBase: void 0,
    FightDataBase: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "84f5f/Y/3lIcq2fqQNOWpGI", "FightDataBase", undefined);

      _export("FightPlayerDataBase", FightPlayerDataBase = class FightPlayerDataBase {
        // 玩家信息[玩家ID，玩家名字，玩家等级，是否为玩家，战力,...]
        constructor(params) {
          _defineProperty(this, "_info", null);

          this._info = params;
        }

        getPlayerId() {
          var _this$_info$;

          return (_this$_info$ = this._info[0]) !== null && _this$_info$ !== void 0 ? _this$_info$ : -1;
        }

        getPlayerName() {
          var _this$_info$2;

          return (_this$_info$2 = this._info[1]) !== null && _this$_info$2 !== void 0 ? _this$_info$2 : "";
        }

        getPlayerLvl() {
          var _this$_info$3;

          return (_this$_info$3 = this._info[2]) !== null && _this$_info$3 !== void 0 ? _this$_info$3 : -1;
        }

        getIsPlayer() {
          var _this$_info$4;

          return (_this$_info$4 = this._info[3]) !== null && _this$_info$4 !== void 0 ? _this$_info$4 : false;
        }

        getPlayerBattleValue() {
          var _this$_info$5;

          return (_this$_info$5 = this._info[4]) !== null && _this$_info$5 !== void 0 ? _this$_info$5 : -1;
        }

      });

      _export("FightFormationDataBase", FightFormationDataBase = class FightFormationDataBase {
        // 玩家信息[阵位置索引,武将id,当前hp,总hp,武将战力,...]
        constructor(params) {
          _defineProperty(this, "_info", null);

          this._info = params;
        }

        getFormationIndex() {
          var _this$_info$6;

          return (_this$_info$6 = this._info[0]) !== null && _this$_info$6 !== void 0 ? _this$_info$6 : -1;
        }

        getHeroId() {
          var _this$_info$7;

          return (_this$_info$7 = this._info[1]) !== null && _this$_info$7 !== void 0 ? _this$_info$7 : -1;
        }

        getHeroCurHp() {
          var _this$_info$8;

          return (_this$_info$8 = this._info[2]) !== null && _this$_info$8 !== void 0 ? _this$_info$8 : -1;
        }

        getHeroTopHp() {
          var _this$_info$9;

          return (_this$_info$9 = this._info[3]) !== null && _this$_info$9 !== void 0 ? _this$_info$9 : -1;
        }

        getHeroBattleValue() {
          var _this$_info$10;

          return (_this$_info$10 = this._info[4]) !== null && _this$_info$10 !== void 0 ? _this$_info$10 : -1;
        }

      });

      _export("FightDataBase", FightDataBase = class FightDataBase {
        // 对战双方信息
        // 对战布阵信息
        //p: 对战双方信息:p[0]攻方信息,p[1]守方信息
        // m:Array<number>对战布阵信息:m[0]攻方信息,m[1]守方信息
        //r:Array<number>//每回合描述[[大回合1的描述],...],每个大回合的行动描述[[行动1],...]
        //rl:number //战斗结果 0功方胜利 1守方胜利
        //t:number //战报类型
        constructor(data) {
          _defineProperty(this, "_fightData", null);

          _defineProperty(this, "_attackData", null);

          _defineProperty(this, "_defendData", null);

          _defineProperty(this, "_attackFormationData", new Array());

          _defineProperty(this, "_defendFormationData", new Array());

          var json = data.json;
          this._fightData = json;
          this._attackData = new FightPlayerDataBase(this._fightData.p[0]);
          this._defendData = new FightPlayerDataBase(this._fightData.p[1]);

          this._fightData.m[0].forEach(element => {
            var data = new FightFormationDataBase(element);

            this._attackFormationData.push(data);
          });

          this._fightData.m[1].forEach(element => {
            var data = new FightFormationDataBase(element);

            this._defendFormationData.push(data);
          });
        }
        /**
         * 
         * @returns 返回攻方玩家信息
         */


        getAttackPlayerData() {
          return this._attackData;
        }
        /**
         * 
         * @returns 返回守方玩家信息
         */


        getDefendPlayerData() {
          return this._defendData;
        }
        /**
         * 
         * @returns 返回攻方布阵信息
         */


        getAttackFormationDatas() {
          return this._attackFormationData;
        }
        /**
         * 
         * @returns 返回守方布阵信息
         */


        getDefendFormationDatas() {
          return this._defendFormationData;
        }
        /**
         * 
         * @returns 返回战斗结果
         */


        getFightResult() {
          return this._fightData.rl;
        }
        /**
         * 
         * @returns 返回战报类型
         */


        getFightReprotType() {
          return this._fightData.t;
        }
        /**
         * 
         * @returns 返回回合集合
         */


        getRoundData() {
          return this._fightData.r;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightDataBase.js.map