System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FightEvent, fightEventMgr, FightConstant, ActionBase, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "../event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  _export("ActionBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FightEvent = _unresolved_2.FightEvent;
    }, function (_unresolved_3) {
      fightEventMgr = _unresolved_3.fightEventMgr;
    }, function (_unresolved_4) {
      FightConstant = _unresolved_4.FightConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b15fcuXA21P0JC9LmM890dN", "ActionBase", undefined);

      /**
       * @description aciton的基类
       */
      _export("ActionBase", ActionBase = class ActionBase {
        constructor() {
          _defineProperty(this, "_doneCallback", null);
        }

        setDoneCallback(callback) {
          this._doneCallback = callback;
        } // 做一些回调工作


        done() {
          if (this._doneCallback) {
            this._doneCallback();
          }

          this._send();

          this.clean();
        }

        _send() {
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Single_Action_Done, null));
        } // 做一些清理工作


        clean() {
          this._doneCallback = null;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActionBase.js.map