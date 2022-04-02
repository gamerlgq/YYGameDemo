System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, instantiate, Vec3, UIOpacity, ResourcesLoader, FightConstant, SpineComponentBase, HeroSpineNode, MonsterSpineNode, _class, _temp, _crd, ccclass, SpineNodeBase;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyy(extras) {
    _reporterNs.report("yy", "../../../define/YYNamespace", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../../fight/FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpineComponentBase(extras) {
    _reporterNs.report("SpineComponentBase", "./SpineComponentBase", _context.meta, extras);
  }

  _export({
    HeroSpineNode: void 0,
    MonsterSpineNode: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      UIOpacity = _cc.UIOpacity;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }, function (_unresolved_3) {
      FightConstant = _unresolved_3.FightConstant;
    }, function (_unresolved_4) {
      SpineComponentBase = _unresolved_4.SpineComponentBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d185e+59BVKtqafFgIsFDvY", "SpineNodeBase", undefined);

      ({
        ccclass
      } = _decorator);

      _export("SpineNodeBase", SpineNodeBase = ccclass(_class = (_temp = class SpineNodeBase extends Node {
        // 阵型孔位
        // 阵营
        set formationIndex(v) {
          this._formationIndex = v;
        }

        get formationIndex() {
          return this._formationIndex;
        }

        get camp() {
          return this._camp;
        }

        set camp(v) {
          this._camp = v;
        }

        get spineCom() {
          return this._spineCom;
        }

        constructor(spineNode) {
          super();

          _defineProperty(this, "_formationIndex", void 0);

          _defineProperty(this, "_camp", void 0);

          _defineProperty(this, "_spineCom", null);

          this.addChild(spineNode);
          this._spineCom = this.getComponentInChildren(_crd && SpineComponentBase === void 0 ? (_reportPossibleCrUseOfSpineComponentBase({
            error: Error()
          }), SpineComponentBase) : SpineComponentBase);
          this.addComponent(UIOpacity);
        }
        /**
         * @description 立即播放当前动画
         * @param actionName spine 动作名称
         * @param isLoop 是否循环播放 默认值false
        */


        play(actionName, isLoop) {
          this._spineCom.play(actionName, isLoop);
        }
        /**
         * @description 添加特效在角色身上
         */


        addEffectFront(node, offset) {
          this._spineCom.addEffectFront(node, offset);
        }
        /**
         * @description 添加特效在角色脚上
         */


        addEffectBack(node, offset) {
          this._spineCom.addEffectBack(node, offset);
        }
        /**
         * addBloodUI
         */


        addBloodUI(path) {
          var _path;

          (_path = path) !== null && _path !== void 0 ? _path : path = "fight/prefabs/ui/hero_blood_ui";
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).load(path, prefab => {
            var node = instantiate(prefab);

            this._spineCom.addBloodUI(node);

            if (this._camp == (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
              error: Error()
            }), FightConstant) : FightConstant).FightUnitType.Defend) {
              node.setScale(new Vec3(-1, 1, 1));
            }
          });
        }
        /**
         * updateBlood
         */


        updateBlood(cur, top) {
          this._spineCom.updateBlood(cur, top);
        }
        /**
         * @description 换皮肤
         * @param skinName:number 皮肤id
         */


        changeSkin(skinName) {
          this._spineCom.changeSkin(skinName);
        }
        /**
         * 
         * @description 更换皮肤的单间装备
         * @param skinName 新皮肤名字（装备所在的皮肤）
         * @param oldSlotName 旧插槽的名字
         * @param newSlotName 新插槽的名字
         */


        changeEquip(skinName, oldSlotName, newSlotName) {
          this._spineCom.changeEquip(skinName, oldSlotName, newSlotName);
        }
        /** 动画开始回调 */


        setAnimateStartCallback(callback) {
          this._spineCom.setAnimateStartCallback(callback);
        }
        /** 动画结束回调 */


        setAnimateEndCallback(callback) {
          this._spineCom.setAnimateEndCallback(callback);
        }
        /** 动画被打断回调 */


        setAnimateInterruptCallback(callback) {
          this._spineCom.setAnimateInterruptCallback(callback);
        }
        /** 动画事件回调 */


        setAnimateEventCallback(callback) {
          this._spineCom.setAnimateEventCallback(callback);
        }

      }, _temp)) || _class); // 武将


      _export("HeroSpineNode", HeroSpineNode = class HeroSpineNode extends SpineNodeBase {}); // 敌方


      _export("MonsterSpineNode", MonsterSpineNode = class MonsterSpineNode extends SpineNodeBase {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpineNodeBase.js.map