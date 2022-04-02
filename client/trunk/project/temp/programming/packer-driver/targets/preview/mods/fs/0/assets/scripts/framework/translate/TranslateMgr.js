System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, dataMgr, TranslateMgr, _crd, translateMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataMgr(extras) {
    _reporterNs.report("dataMgr", "../data/DataMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      dataMgr = _unresolved_3.dataMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "06b17em9YVHnan2vSxdAkS6", "TranslateMgr", undefined);

      TranslateMgr = class TranslateMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        // 缓存
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_translateCfg", {});
        }

        loadCodeCfg(fileName) {
          this._translateCfg = (_crd && dataMgr === void 0 ? (_reportPossibleCrUseOfdataMgr({
            error: Error()
          }), dataMgr) : dataMgr).getData(fileName);
        } // loadPBCfg(fileName: string) {
        //     this._translatePBCfg = dataMgr.getData(fileName);
        // }
        // getPBStr(key: string) {
        //     return this._translatePBCfg[key] || key;
        // }
        // loadExCfg(fileName: string) {
        //     this._translateExCfg = dataMgr.getData(fileName);
        // }
        // getExStr(key: string) {
        //     return this._translateExCfg[key] || key;
        // }


        translate(id) {
          return this._getTranslateStr("t" + id);
        }

        translateData(key) {
          return this._getTranslateStr(key);
        }

        _getTranslateStr(key) {
          return this._translateCfg[key] || key;
        }

        clear() {
          _export("translateMgr", translateMgr = null);
        }

      }; // 代码翻译
      // export function translate(id: number): string {
      //     return translateMgr.getTranslateStr("t" + id);
      // }
      // // 预制体翻译
      // export function GetTranslatePB(id: number): string {
      //     return TranslateMgr.getInstance().getPBStr("p" + id);
      // }
      // // 数值表翻译
      // export function GetTranslateEx(id: number | string): string {
      //     return TranslateMgr.getInstance().getExStr("e" + id);
      // }
      // ()();

      _export("translateMgr", translateMgr = (() => {
        return TranslateMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TranslateMgr.js.map