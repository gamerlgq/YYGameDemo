System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, instantiate, UITransform, ResourcesLoader, v2ToV3, viewRegisterMgr, TouchEffect, _dec, _dec2, _class, _temp, _crd, ccclass, property, disallowMultiple, TouchMain;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfv2ToV(extras) {
    _reporterNs.report("v2ToV3", "../../../framework/utils/functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTouchEffect(extras) {
    _reporterNs.report("TouchEffect", "./TouchEffect", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }, function (_unresolved_3) {
      v2ToV3 = _unresolved_3.v2ToV3;
    }, function (_unresolved_4) {
      viewRegisterMgr = _unresolved_4.viewRegisterMgr;
    }, function (_unresolved_5) {
      TouchEffect = _unresolved_5.TouchEffect;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "07f96QCi8NPXKI0euATCSL4", "TouchMain", undefined);

      ({
        ccclass,
        property,
        disallowMultiple
      } = _decorator);
      /**
       * Predefined variables
       * Name = TouchMain
       * DateTime = Tue Mar 22 2022 19:57:53 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TouchMain.ts
       * FileBasenameNoExtension = TouchMain
       * URL = db://assets/scripts/app/views/common/TouchMain.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("TouchMain", TouchMain = (_dec = ccclass('TouchMain'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = (_temp = class TouchMain extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "_touchEffectNode", void 0);

          _defineProperty(this, "_touchEffectComp", void 0);
        }

        onLoad() {}

        start() {
          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("commonUI", "TouchEffect");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, pre => {
            this._touchEffectNode = instantiate(pre);
            this.node.addChild(this._touchEffectNode);
            this._touchEffectNode.active = false;
            this._touchEffectComp = this._touchEffectNode.getChildByName("ScriptNode").getComponent(_crd && TouchEffect === void 0 ? (_reportPossibleCrUseOfTouchEffect({
              error: Error()
            }), TouchEffect) : TouchEffect);
          }, false);
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this); // this.node.eventProcessor
          // input.on(Input.EventType.MOUSE_UP, this.onTouchEnd, this)
        }

        onTouchEnd(event) {
          event.preventSwallow = true;
        }

        onTouchStart(event) {
          event.preventSwallow = true;

          if (!this._touchEffectNode) {
            return;
          }

          var pos = event.getUILocation();
          var nodePos = this.node.getComponent(UITransform).convertToNodeSpaceAR((_crd && v2ToV3 === void 0 ? (_reportPossibleCrUseOfv2ToV({
            error: Error()
          }), v2ToV3) : v2ToV3)(pos));
          this._touchEffectNode.position = nodePos;

          this._touchEffectComp.play();
        }

        onTouchMove(event) {
          event.preventSwallow = true;
        }

        onTouchCancel(event) {
          event.preventSwallow = true;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TouchMain.js.map