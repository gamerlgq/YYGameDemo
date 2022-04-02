System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, find, _dec, _class, _temp, _crd, ccclass, property, GeneralIconShowComp;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de895dv6j9LWZ/6lRtEWxdT", "GeneralIconShowComp", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = NewComponent
       * DateTime = Thu Mar 10 2022 16:22:35 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = NewComponent.ts
       * FileBasenameNoExtension = NewComponent
       * URL = db://assets/scripts/app/views/formation/NewComponent.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("GeneralIconShowComp", GeneralIconShowComp = (_dec = ccclass('NewComponent'), _dec(_class = (_temp = class GeneralIconShowComp extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_isSel", void 0);

          _defineProperty(this, "_isShowSelIcon", void 0);
        }

        get isSel() {
          return this._isSel;
        }

        set isSel(value) {
          this._isSel = value;
        }

        get isShowSelIcon() {
          return this._isShowSelIcon;
        }

        set isShowSelIcon(value) {
          this._isShowSelIcon = value;
          let selIcon = find("board/gou", this.node);
          selIcon.active = value;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
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
//# sourceMappingURL=GeneralIconShowComp.js.map