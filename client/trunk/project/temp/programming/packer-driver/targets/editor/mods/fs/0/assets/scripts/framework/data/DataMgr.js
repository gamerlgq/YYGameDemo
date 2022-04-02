System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, log, Singleton, DataBase, DataMgr, _crd, dataMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataBase(extras) {
    _reporterNs.report("DataBase", "./DataBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataCallback(extras) {
    _reporterNs.report("DataCallback", "./DataBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataParserBase(extras) {
    _reporterNs.report("DataParserBase", "./DataParserBase", _context.meta, extras);
  }

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
      DataBase = _unresolved_3.DataBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8373b0nsYtBeYRz/fsYpcs4", "DataMgr", undefined);

      DataMgr = class DataMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();

          _defineProperty(this, "_dataMap", void 0);

          this._dataMap = new Map();
        }

        registerDataFile(dataHandlerName, path, parser) {
          let data = new (_crd && DataBase === void 0 ? (_reportPossibleCrUseOfDataBase({
            error: Error()
          }), DataBase) : DataBase)(dataHandlerName, path, parser);

          this._dataMap.set(dataHandlerName, data);
        }

        loadData(dataHandlerName, pair, done) {
          let start = pair[0];
          let ended = pair[1];

          if (start && ended) {
            this._loadDataWithIndex(dataHandlerName, pair, done);
          } else {
            this._loadDataWithDataHandlerName(dataHandlerName, done);
          }
        }

        getData(dataHandlerName, namekey) {
          let key = (namekey === null || namekey === void 0 ? void 0 : namekey.toString()) || "";

          let data = this._getDataCache(dataHandlerName);

          if (data) {
            return data.getData(key);
          } else {
            error("Calling getData() fail! Data can't Find ! [ %s ] [ %s ] ", dataHandlerName, key);
          }
        }

        delData(dataHandlerName, namekey) {
          let key = (namekey === null || namekey === void 0 ? void 0 : namekey.toString()) || "";

          let data = this._getDataCache(dataHandlerName);

          if (data) {
            return data.delData(key);
          } else {
            error("Calling delData() fail! Data can't Find ! [ %s ] [ %s ] ", dataHandlerName, key);
          }
        }

        showAll() {
          log(this._dataMap);
        }

        _getDataCache(dataHandlerName) {
          if (!this._dataMap.has(dataHandlerName)) {
            error("Data does not be registered[ %s ]", dataHandlerName);
            return null;
          }

          let data = this._dataMap.get(dataHandlerName);

          return data;
        }

        _loadDataWithIndex(dataHandlerName, pair, done) {
          let data = this._getDataCache(dataHandlerName);

          if (data) {
            let start = pair[0];
            let ended = pair[1];

            for (let index = start; index <= ended; index++) {
              if (index == ended) {
                data.loadDataWithNameKey(index.toString(), done);
              } else {
                data.loadDataWithNameKey(index.toString());
              }
            }
          }
        }

        _loadDataWithDataHandlerName(dataHandlerName, done) {
          let data = this._getDataCache(dataHandlerName);

          if (data) {
            data.loadDataWithNameKey("", done);
          }
        }

        clear() {
          _export("dataMgr", dataMgr = null);
        }

      }; // ()();

      _export("dataMgr", dataMgr = (() => {
        return DataMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataMgr.js.map