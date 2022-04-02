System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, sys, PREVIEW, EncryptUtil, md5, _crd, storage;

  function _reportPossibleCrUseOfEncryptUtil(extras) {
    _reporterNs.report("EncryptUtil", "./EncryptUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmd(extras) {
    _reporterNs.report("md5", "./Md5", _context.meta, extras);
  }

  _export("storage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      sys = _cc.sys;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_2) {
      EncryptUtil = _unresolved_2.EncryptUtil;
    }, function (_unresolved_3) {
      md5 = _unresolved_3.md5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e515YSSlVPaKX/A6/ZssEQ", "Storage", undefined);

      (function (_storage) {
        let _key = null;
        let _iv = null;

        let _id = -1;
        /**
         * 初始化密钥
         * @param key aes加密的key 
         * @param iv  aes加密的iv
         */


        function init(key, iv) {
          _key = (_crd && md5 === void 0 ? (_reportPossibleCrUseOfmd({
            error: Error()
          }), md5) : md5)(key);
          _iv = (_crd && md5 === void 0 ? (_reportPossibleCrUseOfmd({
            error: Error()
          }), md5) : md5)(iv);
        }

        _storage.init = init;

        function setUser(id) {
          _id = id;
        }

        _storage.setUser = setUser;

        function set(key, value) {
          key = `${key}_${_id}`;

          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          if (!PREVIEW) {
            key = (_crd && md5 === void 0 ? (_reportPossibleCrUseOfmd({
              error: Error()
            }), md5) : md5)(key);
          }

          if (null == value) {
            console.warn("存储的值为空，则直接移除该存储");
            remove(key);
            return;
          }

          if (typeof value === 'function') {
            console.error("储存的值不能为方法");
            return;
          }

          if (typeof value === 'object') {
            try {
              value = JSON.stringify(value);
            } catch (e) {
              console.error(`解析失败，str = ${value}`);
              return;
            }
          } else if (typeof value === 'number') {
            value = value + "";
          }

          if (!PREVIEW && null != _key && null != _iv) {
            try {
              value = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
                error: Error()
              }), EncryptUtil) : EncryptUtil).aesEncrypt(value, _key, _iv);
            } catch (e) {
              value = null;
            }
          }

          sys.localStorage.setItem(key, value);
        }

        _storage.set = set;

        function get(key, defaultValue) {
          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          key = `${key}_${_id}`;

          if (!PREVIEW) {
            key = (_crd && md5 === void 0 ? (_reportPossibleCrUseOfmd({
              error: Error()
            }), md5) : md5)(key);
          }

          let str = sys.localStorage.getItem(key);

          if (null != str && '' !== str && !PREVIEW && null != _key && null != _iv) {
            try {
              str = (_crd && EncryptUtil === void 0 ? (_reportPossibleCrUseOfEncryptUtil({
                error: Error()
              }), EncryptUtil) : EncryptUtil).aesDecrypt(str, _key, _iv);
            } catch (e) {
              str = null;
            }
          }

          if (null == defaultValue || typeof defaultValue === 'string') {
            return str;
          }

          if (null === str) {
            return defaultValue;
          }

          if (typeof defaultValue === 'number') {
            return Number(str) || 0;
          }

          if (typeof defaultValue === 'boolean') {
            return "true" == str; // 不要使用Boolean("false");
          }

          if (typeof defaultValue === 'object') {
            try {
              return JSON.parse(str);
            } catch (e) {
              console.error("解析数据失败,str=" + str);
              return defaultValue;
            }
          }

          return str;
        }

        _storage.get = get;

        function remove(key) {
          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          key = `${key}_${_id}`;

          if (!PREVIEW) {
            key = (_crd && md5 === void 0 ? (_reportPossibleCrUseOfmd({
              error: Error()
            }), md5) : md5)(key);
          }

          sys.localStorage.removeItem(key);
        }

        _storage.remove = remove;

        function clear() {
          sys.localStorage.clear();
        }

        _storage.clear = clear;
      })(storage || _export("storage", storage = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Storage.js.map