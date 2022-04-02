System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, Vec3, ResourcesLoader, fightActionMgr, BloodEffect, fightEventMgr, FightConstant, FightLayerBase, RoleLayer, BloodLayer, _crd, Blood_Number_Prefab_Path, Blood_Number_Offest;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightActionMgr(extras) {
    _reporterNs.report("fightActionMgr", "../action/FightActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBloodEffect(extras) {
    _reporterNs.report("BloodEffect", "../effect/Effect", _context.meta, extras);
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

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLayerBase(extras) {
    _reporterNs.report("FightLayerBase", "./FightLayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleLayer(extras) {
    _reporterNs.report("RoleLayer", "./RoleLayer", _context.meta, extras);
  }

  _export("BloodLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }, function (_unresolved_3) {
      fightActionMgr = _unresolved_3.fightActionMgr;
    }, function (_unresolved_4) {
      BloodEffect = _unresolved_4.BloodEffect;
    }, function (_unresolved_5) {
      fightEventMgr = _unresolved_5.fightEventMgr;
    }, function (_unresolved_6) {
      FightConstant = _unresolved_6.FightConstant;
    }, function (_unresolved_7) {
      FightLayerBase = _unresolved_7.FightLayerBase;
    }, function (_unresolved_8) {
      RoleLayer = _unresolved_8.RoleLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e50f9PNWvVNfbvKkuMY/IhQ", "BloodLayer", undefined);

      Blood_Number_Prefab_Path = {
        [(_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
          error: Error()
        }), FightConstant) : FightConstant).FightHPAction.Action_HP_Damage]: "fight/prefabs/effect/numbers",
        [(_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
          error: Error()
        }), FightConstant) : FightConstant).FightHPAction.Action_HP_Cure]: "fight/prefabs/effect/numbers",
        [(_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
          error: Error()
        }), FightConstant) : FightConstant).FightHPAction.Action_HP_Crit]: "fight/prefabs/effect/numbers",
        [(_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
          error: Error()
        }), FightConstant) : FightConstant).FightHPAction.Action_HP_Absort]: "fight/prefabs/effect/numbers"
      };
      Blood_Number_Offest = new Vec3(0, 250, 0);

      _export("BloodLayer", BloodLayer = class BloodLayer extends (_crd && FightLayerBase === void 0 ? (_reportPossibleCrUseOfFightLayerBase({
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
          }), FightConstant) : FightConstant).FightEvent.Blood_Change, this._onBloodChange.bind(this));
        }

        _onBloodChange(event) {
          var data = event.getEventData();

          this._showBloodChange(data);
        }

        _showBloodChange(fightEventData) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var data = fightEventData.Data;
            var result = data.result;
            var bloodType = result[1] || (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightHPAction.Action_HP_Damage; // load prefab

            var path = Blood_Number_Prefab_Path[bloodType];
            var prefab = yield (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).loadPromise(path, Prefab);
            var prefabNode = instantiate(prefab);

            _this.node.addChild(prefabNode); // set prefab node position


            var tar = data.target;
            var roleLayer = (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
              error: Error()
            }), fightActionMgr) : fightActionMgr).getCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightLayer.ROLE, _crd && RoleLayer === void 0 ? (_reportPossibleCrUseOfRoleLayer({
              error: Error()
            }), RoleLayer) : RoleLayer);
            var pos = roleLayer.getFomationPos(tar.camp, tar.formationIndex);
            pos = pos.add(Blood_Number_Offest);
            prefabNode.position = pos; // set blood info

            var num = result[4];
            var com = prefabNode.getComponent(_crd && BloodEffect === void 0 ? (_reportPossibleCrUseOfBloodEffect({
              error: Error()
            }), BloodEffect) : BloodEffect);
            com.setType(bloodType);
            com.setNumber(num);
            com.show();
          })();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BloodLayer.js.map