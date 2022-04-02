System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, instantiate, Prefab, ResourcesLoader, viewRegisterMgr, RoleSpineFactory, _crd, factory;

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../../define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineNodeBase(extras) {
    _reporterNs.report("SpineNodeBase", "./SpineNodeBase", _context.meta, extras);
  }

  _export("RoleSpineFactory", void 0);

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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eee15z9hPZLMZSX7XRm2a/r", "RoleSpineFactory", undefined);

      // 工厂方法
      factory = (cls, node) => new cls(node);

      _export("RoleSpineFactory", RoleSpineFactory = class RoleSpineFactory {
        /**
         * 
         * @param cls 类型 HeroSpineNode or MonsterSpineNode 继承SpineNodeBase
         * @param id number
         * @returns 异步函数
         * @example 
         * onLoad(){
         *    this._loadAttackers();
         * }
         * 
         * private async _loadAttackers(){
         *     let node = await RoleSpineFactory.create(HeroSpineNode,heroId);  
         *     this.node.addChild(node); 
         * }
         */
        static async create(cls, id) {
          let node = await RoleSpineFactory._loadPromise(id);
          return factory(cls, node);
        }

        static async _loadPromise(id) {
          let info = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("hero", "HeroSpinePrefab");
          let file = info.Path + id.toString();
          let prefab = await (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadPromise(file, Prefab);
          let spineNode = instantiate(prefab);
          return spineNode;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RoleSpineFactory.js.map