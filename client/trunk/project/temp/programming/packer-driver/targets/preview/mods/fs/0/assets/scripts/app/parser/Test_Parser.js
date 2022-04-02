System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, DataParserBase, Test_Parser, _crd;

  function _reportPossibleCrUseOfDataParserBase(extras) {
    _reporterNs.report("DataParserBase", "../../framework/data/DataParserBase", _context.meta, extras);
  }

  _export("Test_Parser", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      DataParserBase = _unresolved_2.DataParserBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a55e9fxmDRAbJuo36gZWeBF", "Test_Parser", undefined);

      _export("Test_Parser", Test_Parser = class Test_Parser extends (_crd && DataParserBase === void 0 ? (_reportPossibleCrUseOfDataParserBase({
        error: Error()
      }), DataParserBase) : DataParserBase) {
        parse(jsonObject, dataHandlerName, namekey) {
          if (dataHandlerName == "Test") {
            jsonObject.test = "你好!";
          }

          return jsonObject;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Test_Parser.js.map