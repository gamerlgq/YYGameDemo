System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BlockInputEventsComponent, ComponentBase, UIWidget, _dec, _class, _crd, ccclass, property, LayerBase;

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "./ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIWidget(extras) {
    _reporterNs.report("UIWidget", "./UIWidget", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      BlockInputEventsComponent = _cc.BlockInputEventsComponent;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      UIWidget = _unresolved_3.UIWidget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "73fe3uP4DBKEJNhLr9cE7hE", "LayerBase", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LayerBase", LayerBase = (_dec = ccclass('LayerBase'), _dec(_class = class LayerBase extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        // private _eventMsgListeners: Map<string, number>;
        constructor() {
          super();
        }
        /**
         * 在组件加载的时候调用addMsgListener来监听消息
         */


        onLoad() {
          super.onLoad();
          this.addComponent(BlockInputEventsComponent);
          this.addComponent(_crd && UIWidget === void 0 ? (_reportPossibleCrUseOfUIWidget({
            error: Error()
          }), UIWidget) : UIWidget);
        } // 是否吞没点击
        // setSwallTouches(flag: boolean) {
        //     this.node.on(
        //         Node.EventType.TOUCH_START,
        //         (touch) => {
        //             return true;
        //         },
        //         this
        //     );
        //     this.node["_touchListener"].swallowTouches = flag;
        // }
        // btnClose(event, customEventData) {
        //     SceneMgr.getInstance().removeTableLayer();
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LayerBase.js.map