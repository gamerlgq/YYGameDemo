System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Component, instantiate, Node, NodePool, ScrollView, UITransform, Vec3, _decorator, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, itemIndex, vec3, ListView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      NodePool = _cc.NodePool;
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5b29c08Za1NzYMGAPcMyKvz", "ListView", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      // temp val
      itemIndex = new Set();
      vec3 = new Vec3();

      _export("ListView", ListView = (_dec = ccclass('ListView'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class ListView extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemTemplate", _descriptor, this);

          _initializerDefineProperty(this, "spaceY", _descriptor2, this);

          _defineProperty(this, "scrollView", void 0);

          _defineProperty(this, "itemHeight", void 0);

          _defineProperty(this, "itemPool", new NodePool());

          _defineProperty(this, "dataSource", []);

          _defineProperty(this, "visibleHeight", void 0);

          _defineProperty(this, "spawnCount", void 0);

          _defineProperty(this, "visibleNodes", new Map());

          _defineProperty(this, "delegate", {
            items: () => []
          });

          _defineProperty(this, "lastY", Number.MIN_SAFE_INTEGER);
        }

        onLoad() {
          this.scrollView = this.getComponent(ScrollView);
          this.itemHeight = this.itemTemplate.getComponent(UITransform).height;
          this.itemPool.put(this.itemTemplate);
          this.visibleHeight = this.node.getComponent(UITransform).height;
          this.spawnCount = Math.round(this.visibleHeight / this.itemHeight) + 1;
          this.ensure(this.spawnCount);
          console.log('ListView visibleHeight:', this.visibleHeight, 'spawnCount:', this.spawnCount, 'itemHeight:', this.itemHeight);
        }

        setDelegate(delegate) {
          this.delegate = delegate;
        }

        reload() {
          this.dataSource = this.delegate.items();
          var totalHeight = this.itemHeight * this.dataSource.length + this.spaceY * Math.max(0, this.dataSource.length - 1);
          this.scrollView.content.getComponent(UITransform).height = totalHeight;
          var children = this.scrollView.content.children.slice();
          children.forEach(c => this.itemPool.put(c)); // [warning] not call unuse
          // @ts-ignore

          this.scrollView.content._children.length = 0;
          this.visibleNodes.clear();
          this.scrollView.stopAutoScroll();
          this.scrollView.scrollToTop(0, false);
          this.lastY = Number.MIN_SAFE_INTEGER;
          console.log('ListView reload totalCount:', this.dataSource.length);
        }

        ensure(count) {
          while (this.itemPool.size() < count) {
            this.itemPool.put(instantiate(this.itemTemplate));
          }
        }

        lateUpdate() {
          var y = Math.floor(this.scrollView.getScrollOffset().y);

          if (this.lastY != y) {
            this.lastY = y;
            this.getVisibleItemIndex(y);
            this.visibleNodes.forEach((node, idx) => {
              if (!itemIndex.has(idx)) {
                this.delegate.unuse && this.delegate.unuse(node);
                this.itemPool.put(node);
                this.visibleNodes.delete(idx);
              }
            });
            itemIndex.forEach(idx => {
              if (!this.visibleNodes.has(idx)) {
                this.ensure(1);
                var node = this.itemPool.get();
                node.getPosition(vec3);
                vec3.y = (-idx - 0.5) * this.itemHeight - this.spaceY * idx;
                node.setPosition(vec3);
                node.parent = this.scrollView.content;
                this.delegate.reuse && this.delegate.reuse(node, this.dataSource[idx]);
                this.visibleNodes.set(idx, node);
              }
            });
          }
        }

        getVisibleItemIndex(y) {
          var minY = Math.max(0, Math.floor(y / (this.itemHeight + this.spaceY)));
          var maxY = minY == 0 ? this.spawnCount : Math.round((y + this.visibleHeight) / (this.itemHeight + this.spaceY));
          var totalCount = this.dataSource.length;
          maxY = Math.min(maxY, totalCount);

          if (maxY == totalCount) {
            minY = Math.max(0, totalCount - this.spawnCount);
          }

          itemIndex.clear();

          for (var i = minY; i < minY + this.spawnCount && i < totalCount; i++) {
            itemIndex.add(i);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spaceY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ListView.js.map