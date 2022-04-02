System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Node, Widget, widgetManager, setNodeVisible, TableContentLayer, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfsetNodeVisible(extras) {
    _reporterNs.report("setNodeVisible", "../utils/functions", _context.meta, extras);
  }

  _export("TableContentLayer", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      Widget = _cc.Widget;
      widgetManager = _cc.widgetManager;
    }, function (_unresolved_2) {
      setNodeVisible = _unresolved_2.setNodeVisible;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9105NvzlpH4JG6FI1QIgWR", "TableContentLayer", undefined);

      /*
       * @Author: Gino
       * @Date: 2020-09-21 20:08:11
       * @LastEditTime: 2022-03-05 15:12:00
       * @LastEditors: liuguoqing
       */
      _export("TableContentLayer", TableContentLayer = class TableContentLayer extends Node {
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_contentLayerMap", void 0);

          _defineProperty(this, "_displayLayer", void 0);

          this._contentLayerMap = new Map(); //全屏

          let widget = this.addComponent(Widget);
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
        }

        add(layer, key) {
          if (key == null) {
            key = layer.name;
          }

          this._contentLayerMap.set(key, layer);

          this.addChild(layer);

          if (this._displayLayer == null) {
            this._displayLayer = layer;
          }
        }

        findByKey(key) {
          return this._contentLayerMap.get(key);
        }

        switch(key) {
          let layer = this._contentLayerMap.get(key);

          if (layer != null) {
            this._displayLayer = layer;
          }
        }

        hide() {
          this._contentLayerMap.forEach(layer => {
            (_crd && setNodeVisible === void 0 ? (_reportPossibleCrUseOfsetNodeVisible({
              error: Error()
            }), setNodeVisible) : setNodeVisible)(layer, false);
          });
        }

        show() {
          if (this._displayLayer == null) {
            return;
          }

          this._contentLayerMap.forEach(layer => {
            (_crd && setNodeVisible === void 0 ? (_reportPossibleCrUseOfsetNodeVisible({
              error: Error()
            }), setNodeVisible) : setNodeVisible)(layer, false);
            layer.setSiblingIndex(0);
          }); // this._displayLayer.opacity = 255;
          // this._displayLayer.zIndex = 10;


          (_crd && setNodeVisible === void 0 ? (_reportPossibleCrUseOfsetNodeVisible({
            error: Error()
          }), setNodeVisible) : setNodeVisible)(this._displayLayer, true);

          this._displayLayer.setSiblingIndex(10);
        }

        clearAll() {
          this._contentLayerMap.forEach(layer => {
            layer.removeFromParent();
            layer.destroy();
          });

          this._contentLayerMap.clear();

          this._displayLayer = null;
        }

        getDisplayLayer() {
          return this._displayLayer;
        }

        isEmpty() {
          if (!this._contentLayerMap || this._contentLayerMap.size == 0) {
            return true;
          }

          return false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TableContentLayer.js.map