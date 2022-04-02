System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, EncryptUtil;

  _export("EncryptUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a74a1TprtpLx54W8v7hpLkn", "EncryptUtil", undefined);

      (function (_EncryptUtil) {
        function aesEncrypt(msg, key, iv) {
          var encrypt = CryptoJS.AES.encrypt(msg, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          return encrypt.toString();
        }

        _EncryptUtil.aesEncrypt = aesEncrypt;

        function aesDecrypt(str, key, iv) {
          var decrypt = CryptoJS.AES.decrypt(str, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          return CryptoJS.enc.Utf8.stringify(decrypt);
        }

        _EncryptUtil.aesDecrypt = aesDecrypt;

        function utf8Parse(utf8Str) {
          return CryptoJS.enc.Utf8.parse(utf8Str);
        }
      })(EncryptUtil || _export("EncryptUtil", EncryptUtil = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EncryptUtil.js.map