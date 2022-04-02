System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tween, ActionBase, ActionSpineAnim, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfyy(extras) {
    _reporterNs.report("yy", "../../../define/YYNamespace", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionBase(extras) {
    _reporterNs.report("ActionBase", "./ActionBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "./FightActionMgr", _context.meta, extras);
  }

  _export("ActionSpineAnim", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ActionBase = _unresolved_2.ActionBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0766d8/jMxHtabr8Fyl7udc", "ActionSpineAnim", undefined);

      _export("ActionSpineAnim", ActionSpineAnim = class ActionSpineAnim extends (_crd && ActionBase === void 0 ? (_reportPossibleCrUseOfActionBase({
        error: Error()
      }), ActionBase) : ActionBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_callback", null);
        }

        /**
         * 
         * @param data FightActionData
         */
        play(data, callback) {
          var node = data.own;
          var config = data.animCfg;
          var params = config.params;
          var actionName = params[0];
          var isLoop = params[1];
          this._callback = callback;
          node.setAnimateEndCallback(this._done.bind(this));
          return tween(node).call(() => {
            node.play(actionName, isLoop);
          });
        }

        _done(trackEntry) {
          if (this._callback) {
            this._callback(trackEntry);
          }

          this.done();
        }

        done() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActionSpineAnim.js.map