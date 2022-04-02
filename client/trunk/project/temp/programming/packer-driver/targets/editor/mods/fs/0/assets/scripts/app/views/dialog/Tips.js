System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, find, UITransform, Label, tween, v3, _dec, _class, _temp, _crd, ccclass, property, Tips;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      find = _cc.find;
      UITransform = _cc.UITransform;
      Label = _cc.Label;
      tween = _cc.tween;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cc60cMG4W9ES6rnsz576Uys", "Tips", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Tips
       * DateTime = Fri Mar 11 2022 15:26:10 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = Tips.ts
       * FileBasenameNoExtension = Tips
       * URL = db://assets/scripts/app/views/common/Tips.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("Tips", Tips = (_dec = ccclass('Tips'), _dec(_class = (_temp = class Tips extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_bg", void 0);

          _defineProperty(this, "_labelNode", void 0);

          _defineProperty(this, "_text", void 0);
        }

        start() {
          // [3]
          let contentNode = find("content", this.node);
          tween(contentNode).by(0.3, {
            position: v3(0, 200, 0)
          }).delay(0.2).call(() => {
            this.node.destroy();
          }).start();
        }

        get text() {
          return this._text;
        }

        set text(value) {
          if (!this._bg) {
            this._bg = find("content/bg", this.node);
            this._labelNode = find("content/Label", this.node);

            this._labelNode.on(Node.EventType.SIZE_CHANGED, () => {
              let width = this._labelNode.getComponent(UITransform).width;

              let bgUITrans = this._bg.getComponent(UITransform);

              bgUITrans.width = width + 10;
            });
          }

          this._text = value;

          let labelComp = this._labelNode.getComponent(Label);

          labelComp.string = value;
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
//# sourceMappingURL=Tips.js.map