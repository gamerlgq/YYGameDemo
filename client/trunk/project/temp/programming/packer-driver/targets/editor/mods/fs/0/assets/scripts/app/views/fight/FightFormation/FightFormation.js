System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Prefab, instantiate, find, tween, UITransform, v3, sceneMgr, LayerBase, ViewProtocol, GeneralIconShowComp, PosInfo, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, FightFormation;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../../framework/ui/LayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewProtocol(extras) {
    _reporterNs.report("ViewProtocol", "../../../define/ViewProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGeneralIconShowComp(extras) {
    _reporterNs.report("GeneralIconShowComp", "./GeneralIconShowComp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      find = _cc.find;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      LayerBase = _unresolved_3.LayerBase;
    }, function (_unresolved_4) {
      ViewProtocol = _unresolved_4.ViewProtocol;
    }, function (_unresolved_5) {
      GeneralIconShowComp = _unresolved_5.GeneralIconShowComp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "968019oXI1B8bamW4L2SBU/", "FightFormation", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      PosInfo = class PosInfo {
        constructor() {
          _defineProperty(this, "node", void 0);

          _defineProperty(this, "orgGeneralIcon", void 0);
        }

      };

      _export("FightFormation", FightFormation = (_dec = ccclass('FightFormation'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = (_temp = class FightFormation extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listContainer", _descriptor, this);

          _initializerDefineProperty(this, "rewardItemIconPrefab", _descriptor2, this);

          _defineProperty(this, "_posList", []);

          _defineProperty(this, "_upPosMap", new Map());
        }

        start() {
          // [3]
          this._init();
        }

        async _init() {
          // let path = viewRegisterMgr.getViewInfo("commonUI","RewardItemIcon").Path
          // this._rewardItemIconPrefab = await ResourcesLoader.loadPromise(path)
          this._showGerneralIconListByType();

          this._initPosInfo();
        }

        _initPosInfo() {
          for (let index = 0; index < 5; index++) {
            let posNode = find("bottom/pos_" + (index + 1), this.node);
            let posInfo = new PosInfo();
            posInfo.node = posNode;

            this._posList.push(posInfo);

            this._upPosMap.set(posNode, posInfo);

            posNode.on(Node.EventType.TOUCH_END, this.onClickDown.bind(this));
          }
        }

        onClickDown(event) {
          let target = event.target;

          if (target.children.length > 0) {
            let posInfo = this._upPosMap.get(target);

            if (posInfo.orgGeneralIcon) {
              target.removeAllChildren();
              posInfo.orgGeneralIcon.getComponent(_crd && GeneralIconShowComp === void 0 ? (_reportPossibleCrUseOfGeneralIconShowComp({
                error: Error()
              }), GeneralIconShowComp) : GeneralIconShowComp).isSel = false;
              posInfo.orgGeneralIcon.getComponent(_crd && GeneralIconShowComp === void 0 ? (_reportPossibleCrUseOfGeneralIconShowComp({
                error: Error()
              }), GeneralIconShowComp) : GeneralIconShowComp).isShowSelIcon = false;
              posInfo.orgGeneralIcon = null;
            }
          }
        }

        _showGerneralIconListByType() {
          for (let index = 0; index < 20; index++) {
            let icon = instantiate(this.rewardItemIconPrefab);
            icon.addComponent(_crd && GeneralIconShowComp === void 0 ? (_reportPossibleCrUseOfGeneralIconShowComp({
              error: Error()
            }), GeneralIconShowComp) : GeneralIconShowComp);
            this.listContainer.addChild(icon);
            icon.on(Node.EventType.TOUCH_END, this._onUp.bind(this));
          }
        } //上阵


        _onUp(event) {
          let node = event.target;
          let generalIconShowComp = node.getComponent(_crd && GeneralIconShowComp === void 0 ? (_reportPossibleCrUseOfGeneralIconShowComp({
            error: Error()
          }), GeneralIconShowComp) : GeneralIconShowComp);

          if (!generalIconShowComp.isSel) {
            //寻找上阵位置
            let upPos;

            for (const iterator of this._posList) {
              if (!iterator.orgGeneralIcon) {
                upPos = iterator;
                break;
              }
            }

            if (upPos) {
              //可以上阵    
              generalIconShowComp.isSel = true;
              upPos.orgGeneralIcon = node;

              this._playMove(node, upPos.node, () => {});
            }
          }
        }

        _playMove(node, targetNode, endFunc) {
          //复制一个目标
          let nodeTween = instantiate(node);
          let startPos = node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          let endPos = targetNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(endPos);
          this.node.addChild(nodeTween);
          nodeTween.position = startPos;
          tween(nodeTween).to(0.5, {
            position: endPos
          }).call(() => {
            node.getComponent(_crd && GeneralIconShowComp === void 0 ? (_reportPossibleCrUseOfGeneralIconShowComp({
              error: Error()
            }), GeneralIconShowComp) : GeneralIconShowComp).isShowSelIcon = true;
            nodeTween.position = v3(0, 0, 0);
            targetNode.addChild(nodeTween);
            endFunc();
          }).start();
        }

        onClickStart() {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).TransLoadingLayer, [() => {
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).popTableLayer();
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
              error: Error()
            }), ViewProtocol) : ViewProtocol).FightMainLayer);
          }, () => {}]);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardItemIconPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightFormation.js.map