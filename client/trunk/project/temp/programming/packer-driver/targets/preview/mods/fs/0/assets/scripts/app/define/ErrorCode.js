System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ErrorCode;

  _export("ErrorCode", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7990cVYjydHBrTm+C5bR4iG", "ErrorCode", undefined);

      (function (ErrorCode) {
        ErrorCode[ErrorCode["OK"] = 0] = "OK";
        ErrorCode[ErrorCode["TIME_OUT"] = 1] = "TIME_OUT";
      })(ErrorCode || _export("ErrorCode", ErrorCode = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ErrorCode.js.map