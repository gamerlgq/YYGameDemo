System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, modelEventMgr, ModelBase, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfEventCallback(extras) {
    _reporterNs.report("EventCallback", "../listener/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelEventMgr(extras) {
    _reporterNs.report("modelEventMgr", "../listener/EventMgr", _context.meta, extras);
  }

  _export("ModelBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      modelEventMgr = _unresolved_2.modelEventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "03be8idJ6FGOZshqaF356xJ", "ModelBase", undefined);

      _export("ModelBase", ModelBase = class ModelBase {
        constructor() {
          _defineProperty(this, "_handles", new Map());
        }

        regMsg(eventName, listener) {
          var handle = (_crd && modelEventMgr === void 0 ? (_reportPossibleCrUseOfmodelEventMgr({
            error: Error()
          }), modelEventMgr) : modelEventMgr).addEventListener(eventName, listener);
          if (this._handles.get(handle) != null) return;

          this._handles.set(handle, eventName);
        }

        unRegMsgAll() {
          this._handles.forEach((value, key) => {
            (_crd && modelEventMgr === void 0 ? (_reportPossibleCrUseOfmodelEventMgr({
              error: Error()
            }), modelEventMgr) : modelEventMgr).removeEventListener(value, key);
          });

          this._handles.clear;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ModelBase.js.map