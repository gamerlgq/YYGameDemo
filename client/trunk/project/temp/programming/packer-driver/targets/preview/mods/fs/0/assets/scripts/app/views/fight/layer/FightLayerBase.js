System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ComponentBase, FightLayerBase, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/ui/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMainWorld(extras) {
    _reporterNs.report("FightMainWorld", "../FightMainWorld", _context.meta, extras);
  }

  _export("FightLayerBase", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2efb9bYgrpL+50CVmSbZRKa", "FightLayerBase", undefined);

      _export("FightLayerBase", FightLayerBase = class FightLayerBase extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_mainWorld", null);
        }

        onLoad() {
          this._mainWorld = this.node.parent;
          ;
        }

        startGame() {}

        updateView(data) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightLayerBase.js.map