System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, Node, FightLayerBase, TopEffectLayer, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfFightLayerBase(extras) {
    _reporterNs.report("FightLayerBase", "./FightLayerBase", _context.meta, extras);
  }

  _export("TopEffectLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      FightLayerBase = _unresolved_2.FightLayerBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "204c3DtJv1N5bZA8cwa6CHU", "TopEffectLayer", undefined);

      _export("TopEffectLayer", TopEffectLayer = class TopEffectLayer extends (_crd && FightLayerBase === void 0 ? (_reportPossibleCrUseOfFightLayerBase({
        error: Error()
      }), FightLayerBase) : FightLayerBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_actionNode", null);

          _defineProperty(this, "_isPlayerTween", false);
        }

        init() {
          this._actionNode = new Node();
          this.node.addChild(this._actionNode);
        }

        popActionNode() {
          if (this._isPlayerTween) {
            error("this._actionNode:isPlayerTween return null!");
            return null;
          }

          this._isPlayerTween = true;
          return this._actionNode;
        }

        pushActionNode() {
          this._isPlayerTween = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TopEffectLayer.js.map