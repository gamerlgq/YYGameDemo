System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, WebView, sceneMgr, socketMgr, LayerBase, Protocol, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, NoticeView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketMgr(extras) {
    _reporterNs.report("socketMgr", "../../../framework/net/SocketMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../framework/ui/LayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../define/Protocol", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      WebView = _cc.WebView;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      socketMgr = _unresolved_3.socketMgr;
    }, function (_unresolved_4) {
      LayerBase = _unresolved_4.LayerBase;
    }, function (_unresolved_5) {
      Protocol = _unresolved_5.Protocol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "253d5HPniVK1aenoGsMPyZk", "NoticeView", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NoticeView", NoticeView = (_dec = ccclass('NoticeView'), _dec2 = property(WebView), _dec(_class = (_class2 = (_temp = class NoticeView extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "webview", _descriptor, this);

          _defineProperty(this, "_callback", null);
        }

        updateView(data) {
          let msgData = data[0];
          this._callback = data[1];
          let htmlID = msgData.html_id;
          this.webview.url = data[0]; //`${GameConfig.ServerListUrl}/static/new_notice/html/${htmlID}.html`;
        }

        close() {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).popTableLayer();

          if (this._callback) {
            this._callback();
          }

          (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
            error: Error()
          }), socketMgr) : socketMgr).sendInnerMsg((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Inner.CloseNoticeView);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "webview", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NoticeView.js.map