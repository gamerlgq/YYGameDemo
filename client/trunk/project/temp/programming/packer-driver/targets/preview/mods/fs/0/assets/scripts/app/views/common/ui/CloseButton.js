System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, sceneMgr, _dec, _class, _crd, ccclass, property, CloseButton;

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../../framework/core/SceneMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a1d5fLZQVJBfIVKNaJLwRWo", "CloseButton", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CloseButton
       * DateTime = Thu Mar 10 2022 15:38:36 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = CloseButton.ts
       * FileBasenameNoExtension = CloseButton
       * URL = db://assets/scripts/app/views/common/CloseButton.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("CloseButton", CloseButton = (_dec = ccclass('CloseButton'), _dec(_class = class CloseButton extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onClick() {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).popTableLayer();
        }

      }) || _class));
      /**
       * [1] Class member could be defined like this.
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
//# sourceMappingURL=CloseButton.js.map