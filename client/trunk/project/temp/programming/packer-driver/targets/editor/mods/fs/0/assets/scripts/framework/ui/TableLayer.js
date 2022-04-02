System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Node, Widget, widgetManager, TableContentLayer, TableLayer, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfTableContentLayer(extras) {
    _reporterNs.report("TableContentLayer", "./TableContentLayer", _context.meta, extras);
  }

  _export("TableLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      Widget = _cc.Widget;
      widgetManager = _cc.widgetManager;
    }, function (_unresolved_2) {
      TableContentLayer = _unresolved_2.TableContentLayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "09740vnHVdAM5cPIYhl4v9i", "TableLayer", undefined);

      _export("TableLayer", TableLayer = class TableLayer extends Node {
        constructor() {
          super(); //全屏

          _defineProperty(this, "_bgLayer", void 0);

          _defineProperty(this, "_contentLayer", void 0);

          _defineProperty(this, "_uiLayer", void 0);

          _defineProperty(this, "_subContent", void 0);

          _defineProperty(this, "_subContentList", void 0);

          let widget = this.addComponent(Widget);
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
          this._bgLayer = new Node();
          this.addChild(this._bgLayer);
          this._contentLayer = new (_crd && TableContentLayer === void 0 ? (_reportPossibleCrUseOfTableContentLayer({
            error: Error()
          }), TableContentLayer) : TableContentLayer)();
          this.addChild(this._contentLayer);
          this._uiLayer = new Node();
          this.addChild(this._uiLayer);
          this._subContent = new Node();
          this.addChild(this._subContent);
        }

        clearAll() {
          this._bgLayer.removeAllChildren();

          this._contentLayer.clearAll();

          this._uiLayer.removeAllChildren();

          this._subContent.removeAllChildren();
        }

        appendSubContent(layer) {
          this._subContent.addChild(layer);

          this._subContentList.push(layer);

          layer.on("exit", () => {
            // 如果发现顶层没有pop掉就pop一下
            let topLayer = this._subContentList[this._subContentList.length - 1];

            if (topLayer == layer) {
              this._subContentList.pop();
            }
          });
        }

        popSubContent() {
          let layer = this._subContentList.pop();

          if (layer != null) {
            layer.removeFromParent();
            layer.destroy();
            return true;
          }

          return false;
        }

        getSubContent() {
          return this._subContent;
        }

        getUILayer() {
          return this._uiLayer;
        }

        getContentLayer() {
          return this._contentLayer;
        }

        getBgLayer() {
          return this._bgLayer;
        }

        isEmpty() {
          let childCount = this._uiLayer.children.length + this._contentLayer.children.length + this._bgLayer.children.length + this._subContent.children.length;
          return 0 >= childCount;
        }

        setContentLayerVisible(flag) {
          let contentLayer = this.getContentLayer();

          if (flag == false) {
            contentLayer.hide();
          } else {
            contentLayer.show();
          }
        }

        getLayerName() {
          if (this._subContent.name != "New Node") {
            return this._subContent.name;
          }

          if (this._contentLayer.name != "New Node") {
            return this._contentLayer.name;
          }

          if (this._uiLayer.name != "New Node") {
            return this._uiLayer.name;
          }

          if (this._bgLayer.name != "New Node") {
            return this._bgLayer.name;
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TableLayer.js.map