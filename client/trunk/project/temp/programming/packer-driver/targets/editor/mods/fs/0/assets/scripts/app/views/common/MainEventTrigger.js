System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, ComponentBase, _dec, _dec2, _class, _crd, ccclass, property, disallowMultiple, MainEventTrigger;

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../framework/ui/ComponentBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f5519u/zlBk4tgGrM4yegK", "MainEventTrigger", undefined);

      ({
        ccclass,
        property,
        disallowMultiple
      } = _decorator);
      /**
       * Predefined variables
       * Name = MainEventTriier
       * DateTime = Tue Mar 22 2022 16:53:08 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = MainEventTriier.ts
       * FileBasenameNoExtension = MainEventTriier
       * URL = db://assets/scripts/app/views/common/MainEventTriier.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       * 全局事件触发注册写在这里
       */

      _export("MainEventTrigger", MainEventTrigger = (_dec = ccclass('MainEventTrigger'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class MainEventTrigger extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        start() {
          super.start();
        } //销毁事件


        onDestroy() {
          super.onDestroy();
        }

      }) || _class) || _class));
      /**
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MainEventTrigger.js.map