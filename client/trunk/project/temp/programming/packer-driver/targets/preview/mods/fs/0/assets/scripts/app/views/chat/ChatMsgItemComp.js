System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, find, RichText, UITransform, _dec, _class, _temp, _crd, ccclass, property, ChatMsgItemComp;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      RichText = _cc.RichText;
      UITransform = _cc.UITransform;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "39b1fLEjCBA6LsNKS3lAXiy", "ChatMsgItemComp", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ChatMsgItemComp
       * DateTime = Thu Mar 17 2022 14:58:17 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ChatMsgItemComp.ts
       * FileBasenameNoExtension = ChatMsgItemComp
       * URL = db://assets/scripts/app/views/chat/ChatMsgItemComp.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("ChatMsgItemComp", ChatMsgItemComp = (_dec = ccclass('ChatMsgItemComp'), _dec(_class = (_temp = class ChatMsgItemComp extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_playerName", "");

          _defineProperty(this, "_text", "");

          _defineProperty(this, "_richMaxWidth", void 0);

          _defineProperty(this, "_richLabel", void 0);
        }

        get playerName() {
          return this._playerName;
        }

        set playerName(value) {
          this._playerName = value;
        }

        get text() {
          return this._text;
        }

        set text(value) {
          this._text = value;
          var richNode = find("RichText", this.node);
          var richTxtComp = richNode.getComponent(RichText);
          richTxtComp.string = value;
        }

        onLoad() {}

        start() {}

        setRichLabelMaxWidth(width) {
          if (!this._richLabel) {
            this._richLabel = find("RichText", this.node);
          }

          this._richMaxWidth = width - this._richLabel.position.x - 10;
          this._richLabel.getComponent(RichText).maxWidth = this._richMaxWidth;
        }

        getRichHeight() {
          return this._richLabel.getComponent(UITransform).height;
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
//# sourceMappingURL=ChatMsgItemComp.js.map