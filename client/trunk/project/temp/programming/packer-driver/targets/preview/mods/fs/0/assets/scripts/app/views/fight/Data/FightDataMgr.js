System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, FightDataMgr, _crd, Parse, fightDataMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightDataBase(extras) {
    _reporterNs.report("FightDataBase", "./FightDataBase", _context.meta, extras);
  }

  _export("FightDataMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "95ac4ppWkpNN4tJVb93Rk6G", "FightDataMgr", undefined);

      Parse = (report, clas) => new clas(report);

      _export("fightDataMgr", fightDataMgr = null);

      _export("FightDataMgr", FightDataMgr = class FightDataMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_reportData", void 0);
        }

        static init() {
          _export("fightDataMgr", fightDataMgr = FightDataMgr.getInstance());
        }
        /**
         * @description 解析战报
         * @param data 战报数据
         */


        parse(report, clas, isNotCache) {
          var rp = Parse(report, clas); // 默认缓存

          if (!isNotCache) {
            this._reportData = rp;
            this._reportData;
          }

          return rp;
        }
        /**
         * 
         * @param clas T extends typeof FightDataBase
         * @returns intstances of clas
         */


        getFightData(clas) {
          return this._reportData;
        }

        destory() {
          FightDataMgr.destoryInstance();
        }

        clear() {
          _export("fightDataMgr", fightDataMgr = null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightDataMgr.js.map