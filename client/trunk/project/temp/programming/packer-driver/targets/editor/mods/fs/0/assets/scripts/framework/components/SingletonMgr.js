System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, SingletonMgr, _crd, singletonMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "23bb4nRwttHAI+x3riigC0+", "SingletonMgr", undefined);

      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 16:35:22
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-20 20:52:15
       * @Description: file content
       */
      SingletonMgr = class SingletonMgr {
        static getInstance() {
          if (this._instance == null) {
            this._instance = new SingletonMgr();
          }

          return this._instance;
        }

        constructor() {
          _defineProperty(this, "_index", 0);

          _defineProperty(this, "_singletonList", void 0);

          this._singletonList = [];
        }

        sign(T) {
          this._index++;
          T.sIndex = this._index;

          this._singletonList.push(T);
        }

        unSign(T) {
          for (let i = 0; i < this._singletonList.length; i++) {
            let s = this._singletonList[i];

            if (s._sIndex == T.sIndex) {
              this._singletonList.splice(i, 1);

              i--;
              break;
            }
          }
        }

        destoryAll() {
          while (this._singletonList.length > 0) {
            let singleton = this._singletonList.pop();

            singleton.clear();
            singleton.destoryInstance();
            singleton.instance = null;
          }
        }

        clear() {
          _export("singletonMgr", singletonMgr = null);
        }

      }; // ()();

      _defineProperty(SingletonMgr, "_instance", void 0);

      _export("singletonMgr", singletonMgr = (() => {
        return SingletonMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SingletonMgr.js.map