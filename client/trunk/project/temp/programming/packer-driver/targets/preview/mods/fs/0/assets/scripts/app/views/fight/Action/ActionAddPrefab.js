System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, tween, ResourcesLoader, FightEvent, fightEventMgr, fightBloodMgr, FightConstant, ActionBase, ActionAddPrefab, _crd;

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectBase(extras) {
    _reporterNs.report("EffectBase", "../effect/Effect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventDataType(extras) {
    _reporterNs.report("FightEventDataType", "../event/FightEventDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "../event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightBloodMgr(extras) {
    _reporterNs.report("fightBloodMgr", "../FightBloodMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionBase(extras) {
    _reporterNs.report("ActionBase", "./Action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionData(extras) {
    _reporterNs.report("FightActionData", "./FightActionMgr", _context.meta, extras);
  }

  _export("ActionAddPrefab", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }, function (_unresolved_3) {
      FightEvent = _unresolved_3.FightEvent;
    }, function (_unresolved_4) {
      fightEventMgr = _unresolved_4.fightEventMgr;
    }, function (_unresolved_5) {
      fightBloodMgr = _unresolved_5.fightBloodMgr;
    }, function (_unresolved_6) {
      FightConstant = _unresolved_6.FightConstant;
    }, function (_unresolved_7) {
      ActionBase = _unresolved_7.ActionBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e42e7TL9gdBN7neslfmjXFH", "ActionAddPrefab", undefined);

      ;

      _export("ActionAddPrefab", ActionAddPrefab = class ActionAddPrefab extends (_crd && ActionBase === void 0 ? (_reportPossibleCrUseOfActionBase({
        error: Error()
      }), ActionBase) : ActionBase) {
        /**
         * 
         * @param data FightActionData
         * @returns Tween<Node>
         */
        add(data) {
          var animCfg = data.animCfg;
          var url = animCfg.params[0];
          return tween().call(() => {
            (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).load(url, prefab => {
              var node = instantiate(prefab);

              this._customSetting(data, node);
            });
          });
        }

        _customSetting(data, node, startCallback, endcallback) {
          var animCfg = data.animCfg;
          var name = animCfg.layer;

          switch (name) {
            case "ROLE":
              this._setRoleEffect(data, node);

              break;

            case "DIALOG":
              this._setDialog(data, node);

              break;
          }
        } // 设置角色身上特效


        _setRoleEffect(data, node) {
          var tar = data.target; // let com = node.getComponent(EffectBase) as EffectBase;

          var config = data.animCfg;
          var addPart = config[2]; //添加部位

          if (addPart) {
            switch (addPart) {
              case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
                error: Error()
              }), FightConstant) : FightConstant).FightUnitEffectPart.Front:
                tar.addEffectFront(node);
                break;

              case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
                error: Error()
              }), FightConstant) : FightConstant).FightUnitEffectPart.Head:
                break;

              case (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
                error: Error()
              }), FightConstant) : FightConstant).FightUnitEffectPart.Floot:
                tar.addEffectBack(node);
                break;
            }
          } else {
            // 默认特效添加在胸前
            tar.addEffectFront(node);
          }

          (_crd && fightBloodMgr === void 0 ? (_reportPossibleCrUseOffightBloodMgr({
            error: Error()
          }), fightBloodMgr) : fightBloodMgr).check(data);
        } // 设置对话框


        _setDialog(data, node) {
          var _ref;

          var animCfg = data.animCfg;
          var params = {
            PrefabNode: node,
            Desc: animCfg.params[1]
          };
          (_ref = _crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr) === null || _ref === void 0 ? void 0 : _ref.send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Show_Dialog, params));
        } // EffectBase 组件有两个 callback 可以设置


        _setCallbacks(com, startCallback, endCallback) {
          com.setStartCallback(() => {
            if (startCallback) {
              startCallback();
            }
          });
          com.setEndCallback(() => {
            if (endCallback) {
              endCallback();
            }
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ActionAddPrefab.js.map