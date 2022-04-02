System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, FightEvent, fightEventMgr, FightConstant, FightBloodMgr, _crd, fightBloodMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "./action/FightActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventDataType(extras) {
    _reporterNs.report("FightEventDataType", "./event/FightEventDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "./event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "./FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMainLayer(extras) {
    _reporterNs.report("FightMainLayer", "./FightMainLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMainWorld(extras) {
    _reporterNs.report("FightMainWorld", "./FightMainWorld", _context.meta, extras);
  }

  _export("FightBloodMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      FightEvent = _unresolved_3.FightEvent;
    }, function (_unresolved_4) {
      fightEventMgr = _unresolved_4.fightEventMgr;
    }, function (_unresolved_5) {
      FightConstant = _unresolved_5.FightConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fc413wRgpH9ayZNCuvBHdk", "FightBloodMgr", undefined);

      _export("fightBloodMgr", fightBloodMgr = null);

      _export("FightBloodMgr", FightBloodMgr = class FightBloodMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_fightMainLayer", null);

          _defineProperty(this, "_fightMainWorld", null);
        }

        /**
         * init
         */
        static init(mainLayer) {
          _export("fightBloodMgr", fightBloodMgr = FightBloodMgr.getInstance());

          fightBloodMgr._init(mainLayer);
        }

        _init(mainLayer) {
          this._fightMainLayer = mainLayer;
          this._fightMainWorld = this._fightMainLayer.getFightMainWorld();

          this._initListeners();
        }

        _initListeners() {}
        /**
         * check
         */


        check(data) {
          let result = data.result;
          let resultActionId = result[0];

          if (resultActionId == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightReultAction.Action_HP) {
            this._sendEvent(data);
          }
        }

        _sendEvent(data) {
          var _ref;

          let args = {
            Data: data
          };
          (_ref = _crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr) === null || _ref === void 0 ? void 0 : _ref.send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Blood_Change, args));
        }

        destory() {
          FightBloodMgr.destoryInstance();
        }

        clear() {
          _export("fightBloodMgr", fightBloodMgr = null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightBloodMgr.js.map