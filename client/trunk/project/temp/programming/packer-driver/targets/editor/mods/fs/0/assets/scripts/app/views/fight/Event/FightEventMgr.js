System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, Singleton, FightConstant, FightEventMgr, _crd, fightEventMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./FightEvent", _context.meta, extras);
  }

  _export("FightEventMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      FightConstant = _unresolved_3.FightConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57bc4P0HYxHAY2x5zV+0sC0", "FightEventMgr", undefined);

      _export("fightEventMgr", fightEventMgr = null);

      _export("FightEventMgr", FightEventMgr = class FightEventMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_eventHandlers", null);
        }

        /**
         * init
         */
        static init() {
          _export("fightEventMgr", fightEventMgr = FightEventMgr.getInstance());

          fightEventMgr._init();
        }

        _init() {
          this._eventHandlers = new Map();
        }

        addEventListener(eventId, handler) {
          let handlerQueue = this._eventHandlers.get(eventId);

          if (!handlerQueue) {
            handlerQueue = new Array();

            this._eventHandlers.set(eventId, handlerQueue);
          }

          handlerQueue.push(handler);
        }

        removeEventListener(eventId, handler) {
          let handlerQueue = this._eventHandlers.get(eventId);

          if (handlerQueue) {
            let idx = handlerQueue.indexOf(handler);

            if (idx != -1) {
              handlerQueue.splice(idx);
            }
          }
        }

        send(event) {
          log("[Debug][FightEvent:]", this._getEventName(event.getEventId()), "=====>", event.getEventData());

          this._dispatchEvent(event);
        }

        _getEventName(eventId) {
          switch (eventId) {
            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Game_Star:
              return "Game_Star";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Game_End:
              return "Game_End";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Game_Pause:
              return "Game_Pause";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Game_Resume:
              return "Game_Resume";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Game_Replay:
              return "Game_Replay";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Round_Start:
              return "Round_Start";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Round_End:
              return "Round_End";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Action_Star:
              return "Action_Star";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Action_End:
              return "Action_End";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Attack_Start:
              return "Attack_Start";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Attack_End:
              return "Attack_End";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Result_Start:
              return "Result_Start";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Result_End:
              return "Result_End";

            case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightEvent.Blood_Change:
              return "Blood_Change";
          }
        }

        _dispatchEvent(event) {
          let eventId = event.getEventId();

          let handlerQueue = this._eventHandlers.get(eventId);

          if (handlerQueue) {
            handlerQueue.forEach(handler => {
              if (handler) {
                handler(event);
              }
            });
          }
        }

        destory() {
          FightEventMgr.destoryInstance();
        }

        clear() {
          _export("fightEventMgr", fightEventMgr = null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightEventMgr.js.map