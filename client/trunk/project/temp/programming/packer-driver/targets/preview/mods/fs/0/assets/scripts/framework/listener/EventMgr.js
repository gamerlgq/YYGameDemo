System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, Singleton, EventMgr, ModelEventMgr, MsgEventMgr, ViewEventMgr, _crd, modelEventMgr, msgEventMgr, viewEventMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "./Message", _context.meta, extras);
  }

  _export("EventMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5101R9k4tCmrTbf5/Pp+o2", "EventMgr", undefined);

      _export("EventMgr", EventMgr = class EventMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        // 字段
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_listeners", void 0);

          _defineProperty(this, "_listenerHandleIndex", void 0);

          _defineProperty(this, "_isDispatchEventing", false);

          _defineProperty(this, "_waitAddListeners", void 0);

          _defineProperty(this, "_waitDelListeners", void 0);

          this._listeners = new Map();
          this._listenerHandleIndex = 0;
          this._waitAddListeners = [];
          this._waitDelListeners = new Map();
        } // 方法


        addEventListener(eventName, listener) {
          if (this._listeners.get(eventName) == null) {
            this._listeners.set(eventName, new Map());
          }

          ++this._listenerHandleIndex;
          var handle = "HANDLE_" + this._listenerHandleIndex;

          if (this._isDispatchEventing) {
            this._waitAddListeners.push([eventName, listener, handle]);

            return handle;
          }

          this._listeners.get(eventName).set(handle, listener);

          return handle;
        }

        removeEventListener(eventName, key) {
          if (this._isDispatchEventing) {
            this._waitDelListeners.set(key, eventName);

            return;
          }

          var cellMap = this._listeners.get(eventName);

          if (cellMap == null) return;
          var iterator = cellMap.entries();
          var r;

          while (r = iterator.next(), !r.done) {
            // cc.log(r);
            var v = r.value;
            var handle = v[0];
            var listener = v[1];

            if (key == handle || key == listener) {
              cellMap.delete(handle);
              break;
            }
          }
        }

        dispatchEvent(event) {
          this._isDispatchEventing = true;
          var eventName = event.msgId;

          if (this._listeners.get(eventName) == null) {
            this._isDispatchEventing = false;
            return;
          }

          var cellMap = this._listeners.get(eventName);

          if (cellMap == null) return;
          var iterator = cellMap.entries();
          var r;

          while (r = iterator.next(), !r.done) {
            // cc.log(r);
            var v = r.value;
            var handle = v[0];
            var listener = v[1]; // is wait del, don't callback

            if (this._waitDelListeners.get(handle) == null) {
              var ret = listener(event);

              if (ret == false) {
                log("Break: handle ", handle, "  eventName", eventName);
                break;
              } else if (ret == "__REMOVE__") {
                cellMap.delete(handle);
              }
            }
          } //dispatchEvent end


          this._isDispatchEventing = false;

          this._waitAddListeners.forEach(value => {
            this._listeners.get(value[0]).set(value[2], value[1]);
          });

          this._waitDelListeners.forEach((value, key) => {
            this.removeEventListener(value, key);
          });

          this._waitAddListeners.splice(0, this._waitAddListeners.length);

          this._waitDelListeners.clear();
        }

        clear() {}

      });

      ModelEventMgr = class ModelEventMgr extends EventMgr {
        clear() {
          _export("modelEventMgr", modelEventMgr = null);
        }

      };
      MsgEventMgr = class MsgEventMgr extends EventMgr {
        clear() {
          _export("msgEventMgr", msgEventMgr = null);
        }

      };
      ViewEventMgr = class ViewEventMgr extends EventMgr {
        clear() {
          _export("viewEventMgr", viewEventMgr = null);
        }

      };

      _export("modelEventMgr", modelEventMgr = (() => {
        return ModelEventMgr.getInstance();
      })());

      _export("msgEventMgr", msgEventMgr = (() => {
        return MsgEventMgr.getInstance();
      })());

      _export("viewEventMgr", viewEventMgr = (() => {
        return ViewEventMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EventMgr.js.map