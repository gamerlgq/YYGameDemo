System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DataParserBase, _crd;

  _export("DataParserBase", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15e69eVihtG14K7IlY9goh8", "DataParserBase", undefined);

      /*
       * @Author: liuguoqing
       * @Date: 2022-03-03 09:05:47
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-05 14:24:13
       * @Description: file content
       */
      // 解析翻译
      _export("DataParserBase", DataParserBase = class DataParserBase {
        // 只会在读取Json数值表的时候才会解析一次翻译表，解析完就永久缓存起来
        parse(jsonObject, dataHandlerName, namekey) {
          return jsonObject;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DataParserBase.js.map