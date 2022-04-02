System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, ResourcesLoader, viewRegisterMgr, FormationView, FightLayerBase, FomationLayer, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../../define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormationView(extras) {
    _reporterNs.report("FormationView", "../../formation/FormationView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightLayerBase(extras) {
    _reporterNs.report("FightLayerBase", "./FightLayerBase", _context.meta, extras);
  }

  _export("FomationLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }, function (_unresolved_3) {
      viewRegisterMgr = _unresolved_3.viewRegisterMgr;
    }, function (_unresolved_4) {
      FormationView = _unresolved_4.FormationView;
    }, function (_unresolved_5) {
      FightLayerBase = _unresolved_5.FightLayerBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5e70JW4eVIo71rMBE9rzhH", "FomationLayer", undefined);

      _export("FomationLayer", FomationLayer = class FomationLayer extends (_crd && FightLayerBase === void 0 ? (_reportPossibleCrUseOfFightLayerBase({
        error: Error()
      }), FightLayerBase) : FightLayerBase) {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_fomationCom", null);
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var prefab = yield _this._loadPrefab();
            var node = instantiate(prefab);

            _this.node.addChild(node);

            _this._fomationCom = _this.node.getComponentInChildren(_crd && FormationView === void 0 ? (_reportPossibleCrUseOfFormationView({
              error: Error()
            }), FormationView) : FormationView);
          })();
        }

        _loadPrefab() {
          return _asyncToGenerator(function* () {
            var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
              error: Error()
            }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("formation", "FormationView");
            return (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).loadPromise(viewInfo.Path, Prefab);
          })();
        }
        /**
         * 
         * @description 获取攻方部队索引值 (左)
         * @param index 部队所引致
         */


        getAttackPosByIndex(index) {
          return this._fomationCom.getAttackPosByIndex(index);
        }
        /**
         * 
         * @description 获取守方部队索引值 (右)
         * @param index 部队所引致
         */


        getDefendPosByIndex(index) {
          return this._fomationCom.getDefendPosByIndex(index);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FomationLayer.js.map