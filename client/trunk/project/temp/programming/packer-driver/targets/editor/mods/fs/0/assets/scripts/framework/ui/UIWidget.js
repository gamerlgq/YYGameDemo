System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Widget, widgetManager, find, _dec, _class, _temp, _crd, ccclass, UIWidget;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Widget = _cc.Widget;
      widgetManager = _cc.widgetManager;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e88f6LkylHErvkR/QOnmMj", "UIWidget", undefined);

      ({
        ccclass
      } = _decorator);

      _export("UIWidget", UIWidget = (_dec = ccclass('UIWidget'), _dec(_class = (_temp = class UIWidget extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_root", void 0);
        }

        start() {
          this._root = this.node.parent; //全屏

          let widget = this.node.addComponent(Widget);
          let canvas = find("Canvas");
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
          widget.target = canvas;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=UIWidget.js.map