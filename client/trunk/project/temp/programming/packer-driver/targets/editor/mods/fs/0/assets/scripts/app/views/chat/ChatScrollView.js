System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, log, Prefab, UITransform, ChatMsgItemNode, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, requireComponent, itemIndex, ChatScrollView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfChatMsgItemNode(extras) {
    _reporterNs.report("ChatMsgItemNode", "./ChatMsgItemNode", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ScrollView = _cc.ScrollView;
      log = _cc.log;
      Prefab = _cc.Prefab;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ChatMsgItemNode = _unresolved_2.ChatMsgItemNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73d1bdi8pdNwrTGqryPM09D", "ChatScrollView", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);
      /**
       * Predefined variables
       * Name = ChatLayer
       * DateTime = Thu Mar 17 2022 14:13:20 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ChatLayer.ts
       * FileBasenameNoExtension = ChatLayer
       * URL = db://assets/scripts/app/views/common/ui/ChatLayer.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      itemIndex = new Set();

      _export("ChatScrollView", ChatScrollView = (_dec = ccclass('ChatScrollView'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = class ChatScrollView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spaceY", _descriptor, this);

          _initializerDefineProperty(this, "ChatItemPrefab", _descriptor2, this);

          _defineProperty(this, "scrollView", void 0);

          _defineProperty(this, "visibleHeight", void 0);

          _defineProperty(this, "_itemList", []);

          _defineProperty(this, "visibleNodes", new Map());

          _defineProperty(this, "lastY", void 0);
        }

        onLoad() {
          this.scrollView = this.getComponent(ScrollView);
          this.visibleHeight = this.scrollView.getComponent(UITransform).height;
        }

        start() {
          for (let index = 0; index < 100; index++) {
            if (index % 2 == 0) {
              this.addChatMsg("玩家1：", "<color=#00ff00>Rich</color>", index);
            } else {
              this.addChatMsg("玩家2：", "撒大声地撒大所奥术大师多奥术大师多大时代实打实撒大声地撒大所奥术大师多奥术大师多大时代实打实", index);
            }
          }

          this.scrollView.scrollToTop();
        }

        addChatMsg(name, text, idx) {
          let msgNode = new (_crd && ChatMsgItemNode === void 0 ? (_reportPossibleCrUseOfChatMsgItemNode({
            error: Error()
          }), ChatMsgItemNode) : ChatMsgItemNode)(this.ChatItemPrefab);
          msgNode.setData(idx, name, text);

          this._itemList.push(msgNode);

          this.scrollView.content.addChild(msgNode);
        }

        lateUpdate() {
          const y = Math.floor(this.scrollView.getScrollOffset().y);

          if (this.lastY == y) {
            return;
          }

          this.lastY = y; //更新可见item索引

          this.getVisibleItemIndex(y);
          this.visibleNodes.forEach((node, idx) => {
            if (!itemIndex.has(idx)) {
              node.unuse();
              this.visibleNodes.delete(idx); // console.log("丢弃:",idx );
            }
          });
          itemIndex.forEach(idx => {
            if (!this.visibleNodes.has(idx)) {
              let msgNode = this._itemList[idx];
              msgNode.reuse();
              this.visibleNodes.set(idx, msgNode);
            }
          });
        }

        getVisibleItemIndex(y) {
          itemIndex.clear();
          let curH = 0;

          this._itemList.forEach((element, k) => {
            let itemH = element.getComponent(UITransform).height;
            curH += itemH;

            if (curH > y && curH - itemH < y + this.visibleHeight) {
              itemIndex.add(k);
            }
          });
        }

        onDestory() {
          log("ChatScrollView clear");
          (_crd && ChatMsgItemNode === void 0 ? (_reportPossibleCrUseOfChatMsgItemNode({
            error: Error()
          }), ChatMsgItemNode) : ChatMsgItemNode).chatMsgNodePool.clear();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spaceY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ChatItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
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
//# sourceMappingURL=ChatScrollView.js.map