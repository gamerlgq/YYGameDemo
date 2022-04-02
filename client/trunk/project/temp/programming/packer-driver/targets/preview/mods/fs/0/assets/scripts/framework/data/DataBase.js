System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, log, resources, ResourcesLoader, DataBase, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDataParserBase(extras) {
    _reporterNs.report("DataParserBase", "./DataParserBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "./ResourcesLoader", _context.meta, extras);
  }

  _export("DataBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      log = _cc.log;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3b96F0AQ5AaLuebTpE3n79", "DataBase", undefined);

      _export("DataBase", DataBase = class DataBase {
        // 配置表handle name
        // 配置表文件名
        // 多语言解析器
        // 缓存起来(key:namekey,value:配置表内容) 例如:hero_01.json,filename:hero_,namekey:01
        constructor(dataHandlerName, fileName, parser) {
          _defineProperty(this, "_dataHandlerName", "");

          _defineProperty(this, "_fileName", "");

          _defineProperty(this, "_parser", null);

          _defineProperty(this, "_data", new Map());

          this._dataHandlerName = dataHandlerName;
          this._fileName = fileName;
          this._parser = parser;
        } // 加载


        loadDataWithNameKey(namekey, func) {
          this._parseFileName(namekey, func);
        }

        getData(namekey) {
          if (namekey === void 0) {
            namekey = "";
          }

          namekey = namekey.toString();

          if (this._data.has(namekey)) {
            return this._data.get(namekey);
          }

          return error("Can't Find Json File:", this._fileName + namekey);
        }

        delData(namekey) {
          var dataHandlerName = this._fileName + namekey;

          if (this._data.has(dataHandlerName)) {
            this._data.delete(dataHandlerName);
          }
        }

        getAllData() {
          return this._data;
        }

        showAll() {
          log(this._data);
        }

        _parseFileName(namekey, func) {
          // filename = genral_(this._fileName) + 1(namekey) 
          var fileName = this._fileName + namekey;

          this._loadFile(fileName, namekey, func);
        } // 加载json


        _loadFile(fileName, namekey, func) {
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).load(fileName, jsonData => {
            if (!jsonData) {
              func(false);
              return;
            }

            var jsonAsset = jsonData;
            var data = jsonAsset.json;

            if (this._parser) {
              data = this._parser.parse(data, this._dataHandlerName, namekey);
            }

            this._data.set(namekey.toString(), data);

            if (func) {
              func(true);
            }

            resources.release(fileName);
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataBase.js.map