System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, fightEventMgr, FightConstant, FightDialogUI, FightLayerBase, DialogLayer, _crd;

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventDataType(extras) {
    _reporterNs.report("FightEventDataType", "../event/FightEventDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "../event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightDialogUI(extras) {
    _reporterNs.report("FightDialogUI", "../ui/FightDialogUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLayerBase(extras) {
    _reporterNs.report("FightLayerBase", "./FightLayerBase", _context.meta, extras);
  }

  _export("DialogLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      fightEventMgr = _unresolved_2.fightEventMgr;
    }, function (_unresolved_3) {
      FightConstant = _unresolved_3.FightConstant;
    }, function (_unresolved_4) {
      FightDialogUI = _unresolved_4.FightDialogUI;
    }, function (_unresolved_5) {
      FightLayerBase = _unresolved_5.FightLayerBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0b29bBo+D5LJoGEhZxkQYRB", "DialogLayer", undefined);

      _export("DialogLayer", DialogLayer = class DialogLayer extends (_crd && FightLayerBase === void 0 ? (_reportPossibleCrUseOfFightLayerBase({
        error: Error()
      }), FightLayerBase) : FightLayerBase) {
        init() {
          this._initListeners();
        }

        _initListeners() {
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Show_Dialog, this._showDialog.bind(this));
        }

        _showDialog(event) {
          var data = event.getEventData();
          this.show(data.PrefabNode, data.Desc);
        }
        /**
         * 
         * @param dialog 预制体节点
         * @param desc 富文本描述
         */


        show(dialog, desc) {
          var com = dialog.getComponent(_crd && FightDialogUI === void 0 ? (_reportPossibleCrUseOfFightDialogUI({
            error: Error()
          }), FightDialogUI) : FightDialogUI);
          com.setDesc(desc);
          this.node.addChild(dialog);
          com.show();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=DialogLayer.js.map