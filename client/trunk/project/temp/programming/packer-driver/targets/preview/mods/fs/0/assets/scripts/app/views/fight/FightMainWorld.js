System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, error, Node, UITransform, UIWidget, FightConstant, BloodLayer, DialogLayer, FomationLayer, RoleLayer, TopEffectLayer, FightMainWorld, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfUIWidget(extras) {
    _reporterNs.report("UIWidget", "../../../framework/ui/UIWidget", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "./FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBloodLayer(extras) {
    _reporterNs.report("BloodLayer", "./layer/BloodLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogLayer(extras) {
    _reporterNs.report("DialogLayer", "./layer/DialogLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFomationLayer(extras) {
    _reporterNs.report("FomationLayer", "./layer/FomationLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleLayer(extras) {
    _reporterNs.report("RoleLayer", "./layer/RoleLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTopEffectLayer(extras) {
    _reporterNs.report("TopEffectLayer", "./layer/TopEffectLayer", _context.meta, extras);
  }

  _export("FightMainWorld", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      error = _cc.error;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      UIWidget = _unresolved_2.UIWidget;
    }, function (_unresolved_3) {
      FightConstant = _unresolved_3.FightConstant;
    }, function (_unresolved_4) {
      BloodLayer = _unresolved_4.BloodLayer;
    }, function (_unresolved_5) {
      DialogLayer = _unresolved_5.DialogLayer;
    }, function (_unresolved_6) {
      FomationLayer = _unresolved_6.FomationLayer;
    }, function (_unresolved_7) {
      RoleLayer = _unresolved_7.RoleLayer;
    }, function (_unresolved_8) {
      TopEffectLayer = _unresolved_8.TopEffectLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "171f2vOJ1NNlpzYFrjAdaGR", "FightMainWorld", undefined);

      _export("FightMainWorld", FightMainWorld = class FightMainWorld extends Node {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_layerMap", new Map());

          _defineProperty(this, "_formationLayer", null);

          _defineProperty(this, "_roleLayer", null);

          _defineProperty(this, "_topEffectLayer", null);

          _defineProperty(this, "_bloodLayer", null);

          _defineProperty(this, "_dialogLayer", null);
        }

        /**
         * @description 初始化
         */
        init() {
          this.addComponent(UITransform);
          this.addComponent(_crd && UIWidget === void 0 ? (_reportPossibleCrUseOfUIWidget({
            error: Error()
          }), UIWidget) : UIWidget);

          this._initLayers();

          this._addLayers();
        }

        _initLayers() {
          this._layerMap.set((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.FORMATION, this._createNode("FORMATION")); //布阵层


          this._layerMap.set((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.BOTTM_EFFECT, this._createNode("BOTTM_EFFECT")); //底层特效层


          this._layerMap.set((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.ROLE, this._createNode("ROLE")); //角色层


          this._layerMap.set((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.TOP_EFFECT, this._createNode("TOP_EFFECT")); //上层特效层


          this._layerMap.set((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.BLOOD, this._createNode("BLOOD")); //数字层


          this._layerMap.set((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightLayer.DIALOG, this._createNode("Dailog")); //对话层

        }

        _createNode(name) {
          var node = new Node();
          node.name = name;
          node.addComponent(UITransform);
          node.addComponent(_crd && UIWidget === void 0 ? (_reportPossibleCrUseOfUIWidget({
            error: Error()
          }), UIWidget) : UIWidget);
          this.addChild(node);
          return node;
        }

        _addLayers() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // 布阵
            _this._formationLayer = _this.addCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightLayer.FORMATION, _crd && FomationLayer === void 0 ? (_reportPossibleCrUseOfFomationLayer({
              error: Error()
            }), FomationLayer) : FomationLayer);
            yield _this._formationLayer.init(); // 角色

            _this._roleLayer = _this.addCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightLayer.ROLE, _crd && RoleLayer === void 0 ? (_reportPossibleCrUseOfRoleLayer({
              error: Error()
            }), RoleLayer) : RoleLayer);

            _this._roleLayer.init(); // 上册技能层


            _this._topEffectLayer = _this.addCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightLayer.TOP_EFFECT, _crd && TopEffectLayer === void 0 ? (_reportPossibleCrUseOfTopEffectLayer({
              error: Error()
            }), TopEffectLayer) : TopEffectLayer);

            _this._topEffectLayer.init(); // 上册技能层


            _this._bloodLayer = _this.addCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightLayer.BLOOD, _crd && BloodLayer === void 0 ? (_reportPossibleCrUseOfBloodLayer({
              error: Error()
            }), BloodLayer) : BloodLayer);

            _this._bloodLayer.init(); // 对话框层


            _this._dialogLayer = _this.addCommonentInLayer((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightLayer.DIALOG, _crd && DialogLayer === void 0 ? (_reportPossibleCrUseOfDialogLayer({
              error: Error()
            }), DialogLayer) : DialogLayer);

            _this._dialogLayer.init();
          })();
        }
        /**
         * game start
         */


        startGame() {
          this._formationLayer.startGame();

          this._roleLayer.startGame();
        }
        /**
         * tick
         */


        tick(dt) {}
        /**
         * @description 根据层索引返回层节点
         * @param index:number 层索引
         * @return Node | null
         */


        getLayer(index) {
          if (!this._layerMap.get(index)) {
            error("There is not exist layer in FightMainWorld! index:[ %s ]", index.toString());
            return null;
          }

          return this._layerMap.get(index);
        }
        /**
         * 
         * @param layerName string 层级名称
         * @return Node | null
         */


        getLayerByName(layerName) {
          return this.getChildByName(layerName);
        }
        /**
         * @description 根据层索引往层中添加节点
         * @param index 层索引
         * @param node  需要添加的节点
         * @param siblingIndex? 设置当前节点在父节点的 children 数组中的位置。
         */


        insertChildInLayer(index, child, siblingIndex) {
          var layer = this.getLayer(index);

          if (layer) {
            layer.addChild(child);
            layer.setSiblingIndex(siblingIndex);
          }
        }
        /**
        * @description 根据层索引往层中添加组件
        * @param index 层索引
        * @param com  组件
        */


        addCommonentInLayer(index, com) {
          var layer = this.getLayer(index);

          if (layer) {
            return layer.addComponent(com);
          }
        }
        /**
         * @description 根据层索引往层中添加组件
         * @param index 层索引
         * @param com  组件
         */


        getCommonentInLayer(index, com) {
          var layer = this.getLayer(index);

          if (layer) {
            var comp = layer.getComponent(com);
            return comp;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightMainWorld.js.map