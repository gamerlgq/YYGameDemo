System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Animation, _dec, _class, _temp, _crd, ccclass, property, TouchEffect;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b9761pFQjdC2KQCiU7qXwTb", "TouchEffect", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TouchEffect
       * DateTime = Tue Mar 22 2022 19:43:46 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TouchEffect.ts
       * FileBasenameNoExtension = TouchEffect
       * URL = db://assets/scripts/app/views/common/TouchEffect.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("TouchEffect", TouchEffect = (_dec = ccclass('TouchEffect'), _dec(_class = (_temp = class TouchEffect extends Component {
        constructor() {
          super();

          _defineProperty(this, "_clip", void 0);
        }

        onLoad() {
          this._clip = this.node.parent.getComponent(Animation);

          this._clip.on(Animation.EventType.FINISHED, this.onPlayFinish.bind(this));
        }

        start() {}

        play() {
          this.node.parent.active = true;

          this._clip.play("ToucheEffect");
        }

        onPlayFinish() {
          this.node.parent.active = false;
        }

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
//# sourceMappingURL=TouchEffect.js.map