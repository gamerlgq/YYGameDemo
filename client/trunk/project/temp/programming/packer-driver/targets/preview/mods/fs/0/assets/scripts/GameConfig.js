System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, GameConfig;

  function _reportPossibleCrUseOfGameConfigType(extras) {
    _reporterNs.report("GameConfigType", "./app/define/ConfigType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "740a2QwD2lOYL6UW1CS7Fb3", "GameConfig", undefined);

      /*
       * @Author: liuguoqing
       * @Date: 2022-03-03 15:28:39
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-03 15:34:02
       * @Description: file content
       */
      _export("GameConfig", GameConfig = {
        PartitionKey: "",
        QDKey: "",
        QDName: "",
        SDKLogin: "",
        ServerUrl: "",
        ServerListUrl: "",
        BigUpdateType: ""
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameConfig.js.map