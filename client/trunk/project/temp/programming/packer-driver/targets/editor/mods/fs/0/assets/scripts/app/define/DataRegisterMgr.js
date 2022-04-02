System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, log, Singleton, dataMgr, Test_Parser, DataRegisterMgr, _crd, dataRegisterMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataMgr(extras) {
    _reporterNs.report("dataMgr", "../../framework/data/DataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTest_Parser(extras) {
    _reporterNs.report("Test_Parser", "../parser/Test_Parser", _context.meta, extras);
  }

  _export("DataRegisterMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      log = _cc.log;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      dataMgr = _unresolved_3.dataMgr;
    }, function (_unresolved_4) {
      Test_Parser = _unresolved_4.Test_Parser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a586dekw5ZOr5dkLaILVXwz", "DataRegisterMgr", undefined);

      _export("DataRegisterMgr", DataRegisterMgr = class DataRegisterMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "DataType", {
            /**
             * @param [0] data handler name:"Test";
             * @param [1] data path:"Raw/map/buff_card";
             * @param [2] array<number>:"[0,100]" //[file start index,file ended index] 例如:genral_0 ~ genral_100(加载101个武将配置); 默认值[]
             * @param [3] parser new xxx_parser() //多语言解析器;
             */
            Test: ["Test", "test/datas/test", [], new (_crd && Test_Parser === void 0 ? (_reportPossibleCrUseOfTest_Parser({
              error: Error()
            }), Test_Parser) : Test_Parser)()],
            Translate: ["Translate", "translate/data/translate", []],
            FightSkill: ["FightSkill", "fight/datas/skill/skill_", [1, 2]],
            FightHit: ["FightHit", "fight/datas/hit/hit_", [1, 2]],
            FightEmbattled: ["FightEmbattled", "fight/datas/embattled/embattled_", [1, 1]],
            MaincityPreload: ["MaincityPreload", "maincity/datas/preload", []]
          });
        }

        loadAllData(doneFunc) {
          let startTS = new Date().getMilliseconds();
          let length = Object.keys(this.DataType).length;

          for (const key in this.DataType) {
            if (Object.prototype.hasOwnProperty.call(this.DataType, key)) {
              const value = this.DataType[key];
              let dataHandlerName = value[0];
              let path = value[1];
              let pair = value[2];
              let parser = value[3];
              (_crd && dataMgr === void 0 ? (_reportPossibleCrUseOfdataMgr({
                error: Error()
              }), dataMgr) : dataMgr).registerDataFile(dataHandlerName, path, parser);
              (_crd && dataMgr === void 0 ? (_reportPossibleCrUseOfdataMgr({
                error: Error()
              }), dataMgr) : dataMgr).loadData(dataHandlerName, pair, isDone => {
                if (!isDone) {
                  error("DataRegisterMgr loadData error:[ %s ]", dataHandlerName);
                }

                length--;

                if (length == 0) {
                  if (doneFunc) {
                    let endTS = new Date().getMilliseconds();
                    log("Load all date file cost [ %s ]ms", endTS - startTS);
                    doneFunc();
                  }
                }
              });
            }
          }
        }

        clear() {
          _export("dataRegisterMgr", dataRegisterMgr = null);
        }

      }); // ()();


      _export("dataRegisterMgr", dataRegisterMgr = (() => {
        return DataRegisterMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataRegisterMgr.js.map