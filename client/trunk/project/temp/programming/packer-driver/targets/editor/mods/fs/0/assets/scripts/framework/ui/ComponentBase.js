System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, msgEventMgr, ComponentBase, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfmsgEventMgr(extras) {
    _reporterNs.report("msgEventMgr", "../listener/EventMgr", _context.meta, extras);
  }

  _export("ComponentBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      msgEventMgr = _unresolved_2.msgEventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22bafaZ0nhIC6eN8eReU5Z5", "ComponentBase", undefined);

      _export("ComponentBase", ComponentBase = class ComponentBase extends Component {
        constructor() {
          super();

          _defineProperty(this, "_eventMsgListeners", void 0);

          this._eventMsgListeners = new Map();
        }

        start() {}
        /**
         * 在组件加载的时候调用addMsgListener来监听消息
         */


        onLoad() {}

        onEnable() {}

        onDisable() {}
        /**
         * 记得如果需要要重写此方法 注意必须调用super.onDestroy(),
         * 组件删除前会自动删除所有消息监听
         */


        onDestroy() {
          this.removeAllMsgListener();
        }
        /**
         * 添加网络消息监听
         */


        addMsgListener(msgId, listener) {
          let handle = (_crd && msgEventMgr === void 0 ? (_reportPossibleCrUseOfmsgEventMgr({
            error: Error()
          }), msgEventMgr) : msgEventMgr).addEventListener(msgId, listener);
          if (this._eventMsgListeners.get(handle) != null) return;

          this._eventMsgListeners.set(handle, msgId);
        }
        /**
         * 移除对这个消息的监听
         * 某些情况node里面需要动态加减某个消息监听
         */


        removeMsgListener(msgId) {
          this._eventMsgListeners.forEach((value, key) => {
            if (value == msgId) {
              (_crd && msgEventMgr === void 0 ? (_reportPossibleCrUseOfmsgEventMgr({
                error: Error()
              }), msgEventMgr) : msgEventMgr).removeEventListener(value, key);

              this._eventMsgListeners.delete(key);
            }
          });
        }
        /**
         * 去掉所有网络消息监听
         */


        removeAllMsgListener() {
          this._eventMsgListeners.forEach((value, key) => {
            (_crd && msgEventMgr === void 0 ? (_reportPossibleCrUseOfmsgEventMgr({
              error: Error()
            }), msgEventMgr) : msgEventMgr).removeEventListener(value, key);

            this._eventMsgListeners.delete(key);
          });

          this._eventMsgListeners.clear;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ComponentBase.js.map