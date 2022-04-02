System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, NodePool, UITransform, instantiate, Widget, widgetManager, v3, ChatMsgItemComp, ChatMsgItemNode, _crd, ccclass, property;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfChatMsgItemComp(extras) {
    _reporterNs.report("ChatMsgItemComp", "./ChatMsgItemComp", _context.meta, extras);
  }

  _export("ChatMsgItemNode", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      Widget = _cc.Widget;
      widgetManager = _cc.widgetManager;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      ChatMsgItemComp = _unresolved_2.ChatMsgItemComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "796553iQwlPHJp6OhdboLKX", "ChatMsgItemNode", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = ChatMsgItem
       * DateTime = Thu Mar 17 2022 14:32:09 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ChatMsgItem.ts
       * FileBasenameNoExtension = ChatMsgItem
       * URL = db://assets/scripts/app/views/chat/ChatMsgItem.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("ChatMsgItemNode", ChatMsgItemNode = class ChatMsgItemNode extends Node {
        constructor(prefab) {
          super();

          _defineProperty(this, "_chatMsgItemPrefab", void 0);

          _defineProperty(this, "_chatMsgItemNode", void 0);

          _defineProperty(this, "_uiTransComp", void 0);

          _defineProperty(this, "_playerName", void 0);

          _defineProperty(this, "_text", void 0);

          this._chatMsgItemPrefab = prefab;
          this._uiTransComp = this.addComponent(UITransform);
          this._uiTransComp.anchorX = 0;
          this._uiTransComp.height = 50;
          var widget = this.addComponent(Widget);
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL;
          widget.left = 0;
          widget.right = 0;
          this.on(Node.EventType.SIZE_CHANGED, this._updateView.bind(this));
        }

        setData(idx, name, text) {
          this._playerName = name;
          this._text = text;

          this._updateView();
        }

        _updateView() {
          if (this._chatMsgItemNode) {
            //更新数据
            var nodeComp = this._chatMsgItemNode.getComponent(_crd && ChatMsgItemComp === void 0 ? (_reportPossibleCrUseOfChatMsgItemComp({
              error: Error()
            }), ChatMsgItemComp) : ChatMsgItemComp);

            nodeComp.playerName = this._playerName;
            nodeComp.text = this._text; //更新富文本长度

            nodeComp.setRichLabelMaxWidth(this._uiTransComp.width);
            this._uiTransComp.height = nodeComp.getRichHeight(); //置顶

            this._chatMsgItemNode.position = v3(this._chatMsgItemNode.position.x, this._uiTransComp.height / 2, 0);
          }
        } //刷新item


        reuse() {
          if (this._chatMsgItemNode) {
            return;
          }

          var msgNode = ChatMsgItemNode.chatMsgNodePool.get();

          if (!msgNode) {
            msgNode = instantiate(this._chatMsgItemPrefab);
          }

          this.addChild(msgNode);
          this._chatMsgItemNode = msgNode;

          this._updateView();
        }

        unuse() {
          if (this._chatMsgItemNode) {
            ChatMsgItemNode.chatMsgNodePool.put(this._chatMsgItemNode);
          }

          this._chatMsgItemNode = null;
        }

        createNode() {}

      });
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


      _defineProperty(ChatMsgItemNode, "chatMsgNodePool", new NodePool());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ChatMsgItemNode.js.map