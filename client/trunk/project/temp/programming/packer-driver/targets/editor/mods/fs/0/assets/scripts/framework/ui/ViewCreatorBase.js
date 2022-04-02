System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, viewEventMgr, ViewCreatorBase, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEventCallback(extras) {
    _reporterNs.report("EventCallback", "../listener/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewEventMgr(extras) {
    _reporterNs.report("viewEventMgr", "../listener/EventMgr", _context.meta, extras);
  }

  _export("ViewCreatorBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      viewEventMgr = _unresolved_2.viewEventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d82fdLc5a1LKplLFvj4/3Zc", "ViewCreatorBase", undefined);

      _export("ViewCreatorBase", ViewCreatorBase = class ViewCreatorBase {
        constructor() {
          _defineProperty(this, "_handles", void 0);

          this._handles = new Map();
        } //重写


        onInit() {}

        regMsg(eventName, listener) {
          let handle = (_crd && viewEventMgr === void 0 ? (_reportPossibleCrUseOfviewEventMgr({
            error: Error()
          }), viewEventMgr) : viewEventMgr).addEventListener(eventName, listener);
          if (this._handles.get(handle) != null) return;

          this._handles.set(handle, eventName);
        }

        unRegMsgAll() {
          this._handles.forEach((value, key) => {
            (_crd && viewEventMgr === void 0 ? (_reportPossibleCrUseOfviewEventMgr({
              error: Error()
            }), viewEventMgr) : viewEventMgr).removeEventListener(value, key);
          });

          this._handles.clear;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ViewCreatorBase.js.map