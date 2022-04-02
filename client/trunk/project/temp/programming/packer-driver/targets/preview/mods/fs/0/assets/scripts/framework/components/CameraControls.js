System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Animation, Camera, Canvas, Component, find, lerp, Node, UITransform, Vec2, Vec3, view, _decorator, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _temp, _crd, ccclass, property, CameraControls;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Animation = _cc.Animation;
      Camera = _cc.Camera;
      Canvas = _cc.Canvas;
      Component = _cc.Component;
      find = _cc.find;
      lerp = _cc.lerp;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      view = _cc.view;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57cd9j6iQlKgqivqDuUAr5+", "CameraControls", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", CameraControls = (_dec = ccclass("CameraControls"), _dec2 = property({
        type: Node,
        tooltip: "镜头跟随的target"
      }), _dec3 = property(Camera), _dec4 = property(Animation), _dec5 = property({
        tooltip: "角色跳跃后缩放镜头视野"
      }), _dec6 = property({
        tooltip: "初始化时，镜头定位到跟随主角"
      }), _dec7 = property({
        tooltip: "镜头跟随主角移动"
      }), _dec8 = property({
        tooltip: "x轴：镜头相距主角多少距离才是跟随",

        visible() {
          return this.smoothFollow;
        }

      }), _dec9 = property({
        tooltip: "y轴：镜头相距主角多少距离才是跟随",

        visible() {
          return this.smoothFollow;
        }

      }), _dec10 = property({
        tooltip: "最小跟随距离，比这个值小就不跟随了",

        visible() {
          return this.smoothFollow;
        }

      }), _dec11 = property({
        tooltip: "差值比率[0~1],跟随平滑度",

        visible() {
          return this.smoothFollow;
        }

      }), _dec12 = property({
        tooltip: "镜头定位到多个目标的中间位置，总是可以观察到指定的观察目标"
      }), _dec13 = property({
        type: [Node],
        tooltip: "要overview的目标数组",

        visible() {
          return this.overview;
        }

      }), _dec14 = property({
        tooltip: "overview视野的边缘",

        visible() {
          return this.overview;
        }

      }), _dec15 = property({
        tooltip: "镜头随着目标速度变化发生缩放"
      }), _dec16 = property({
        tooltip: "镜头zoom in的速度",

        visible() {
          return this.speedZoom;
        }

      }), _dec17 = property({
        tooltip: "镜头zoom out的速度",

        visible() {
          return this.speedZoom;
        }

      }), _dec18 = property({
        tooltip: "镜头抖动"
      }), _dec19 = property({
        tooltip: "镜头抖动持续时间",

        visible() {
          return this.canShake;
        }

      }), _dec20 = property({
        tooltip: "触摸移动镜头视野"
      }), _dec21 = property({
        tooltip: "x轴的距离乘数",

        visible() {
          return this.pointerPan;
        }

      }), _dec22 = property({
        tooltip: "y轴的距离乘数",

        visible() {
          return this.pointerPan;
        }

      }), _dec23 = property({
        tooltip: "视野的范围，超过了这个方位镜头不动"
      }), _dec24 = property({
        tooltip: "top的范围",

        visible() {
          return this.useBoundaries;
        }

      }), _dec25 = property({
        tooltip: "down的范围",

        visible() {
          return this.useBoundaries;
        }

      }), _dec26 = property({
        tooltip: "left的范围",

        visible() {
          return this.useBoundaries;
        }

      }), _dec27 = property({
        tooltip: "right的范围",

        visible() {
          return this.useBoundaries;
        }

      }), _dec(_class = (_class2 = (_temp = class CameraControls extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "target", _descriptor, this);

          _initializerDefineProperty(this, "camera", _descriptor2, this);

          _initializerDefineProperty(this, "anim", _descriptor3, this);

          _initializerDefineProperty(this, "jumpZoom", _descriptor4, this);

          _initializerDefineProperty(this, "centerAtStart", _descriptor5, this);

          _initializerDefineProperty(this, "smoothFollow", _descriptor6, this);

          _initializerDefineProperty(this, "followX", _descriptor7, this);

          _initializerDefineProperty(this, "followY", _descriptor8, this);

          _initializerDefineProperty(this, "minFollowDist", _descriptor9, this);

          _initializerDefineProperty(this, "followRatio", _descriptor10, this);

          _initializerDefineProperty(this, "overview", _descriptor11, this);

          _initializerDefineProperty(this, "overviewTargets", _descriptor12, this);

          _initializerDefineProperty(this, "overviewMargin", _descriptor13, this);

          _initializerDefineProperty(this, "speedZoom", _descriptor14, this);

          _initializerDefineProperty(this, "zoomInSpeed", _descriptor15, this);

          _initializerDefineProperty(this, "zoomOutSpeed", _descriptor16, this);

          _initializerDefineProperty(this, "canShake", _descriptor17, this);

          _initializerDefineProperty(this, "shakeDuration", _descriptor18, this);

          _initializerDefineProperty(this, "pointerPan", _descriptor19, this);

          _initializerDefineProperty(this, "pointerXMult", _descriptor20, this);

          _initializerDefineProperty(this, "pointerYMult", _descriptor21, this);

          _initializerDefineProperty(this, "useBoundaries", _descriptor22, this);

          _initializerDefineProperty(this, "topBound", _descriptor23, this);

          _initializerDefineProperty(this, "bottomBound", _descriptor24, this);

          _initializerDefineProperty(this, "leftBound", _descriptor25, this);

          _initializerDefineProperty(this, "rightBound", _descriptor26, this);

          _defineProperty(this, "startFollow", null);

          _defineProperty(this, "visibleSize", null);

          _defineProperty(this, "initZoomRatio", null);

          _defineProperty(this, "previousPos", null);

          _defineProperty(this, "pointerPos", null);
        }

        // LIFE-CYCLE CALLBACKS:
        onLoad() {
          this.startFollow = false;
          var canvas = find('Canvas').getComponent(Canvas);
          this.visibleSize = view.getVisibleSize();
          this.initZoomRatio = this.camera.orthoHeight; //place camera on target if centerAtStart

          this.locateTarget();

          if (this.pointerPan) {
            // this.jumpZoom = false;
            this.overview = false;
            this.speedZoom = false;
            canvas.node.on('mousemove', this.onMouseMove, this);
            canvas.node.on('touchmove', this.onTouchMove, this);
            this.pointerPos = null;
          }

          if (this.overview) {
            this.jumpZoom = false;
            this.speedZoom = false;
          }

          if (this.speedZoom) {
            this.jumpZoom = false;
          }
        }

        lateUpdate(dt) {
          if (!this.target) {
            return;
          }

          var targetPos;

          if (this.overview) {
            targetPos = this.target.parent.getComponent(UITransform).convertToWorldSpaceAR(this.getOverviewTargetsMidpoint());
          } else {
            targetPos = this.target.parent.getComponent(UITransform).convertToWorldSpaceAR(this.target.position);
          }

          if (this.pointerPan && this.pointerPos) {
            var xDelta = this.pointerPos.x / (this.visibleSize.width / 2) - 1;
            var yDelta = this.pointerPos.y / (this.visibleSize.height / 2) - 1;
            xDelta *= this.pointerXMult;
            yDelta *= this.pointerYMult;
            targetPos = targetPos.add(new Vec3(xDelta, yDelta));
          } //smooth follow


          if (this.smoothFollow) {
            if (Math.abs(targetPos.x - this.node.position.x) >= this.followX || Math.abs(targetPos.y - this.node.position.y) >= this.followY) {
              //when camera and target distance is larger than max distance
              this.startFollow = true;
            }

            if (this.startFollow) {
              var cameraPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(targetPos); // log("===>cameraPos",cameraPos,targetPos);

              this.node.position = this.node.position.lerp(cameraPos, this.followRatio);

              if (Vec2.distance(targetPos, this.node.position) <= this.minFollowDist) {
                this.startFollow = false;
              }
            }
          } else {
            var _cameraPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(targetPos);

            this.node.position = _cameraPos;
          } //speed zoom


          if (this.speedZoom) {
            var curSpeed = Math.abs(this.previousPos.x - targetPos.x) / dt;
            var ratio = 0;

            if (curSpeed > this.zoomOutSpeed) {
              ratio = 1 - (curSpeed - this.zoomOutSpeed) / (this.zoomInSpeed - this.zoomOutSpeed);
              this.camera.orthoHeight = lerp(this.camera.orthoHeight, ratio, 0.02);
            } else {
              this.camera.orthoHeight = lerp(this.camera.orthoHeight, this.initZoomRatio, 0.02);
            }
          }

          this.previousPos = targetPos; //jump zoom

          if (this.jumpZoom) {
            var _ratio = targetPos.y / view.getVisibleSize().height;

            this.camera.orthoHeight = 1 + (0.6 - _ratio) * 0.35;
          } //boundaries


          if (this.useBoundaries) {
            var width = this.visibleSize.width / 2 / this.camera.orthoHeight;
            var height = this.visibleSize.height / 2 / this.camera.orthoHeight;
            var minX = this.node.position.x - width;
            var maxX = this.node.position.x + width;
            var minY = this.node.position.y - height;
            var maxY = this.node.position.y + height;

            if (minX < this.leftBound) {
              this.node.setPosition(this.leftBound + width, this.node.position.y);
            }

            if (minY < this.bottomBound) {
              this.node.setPosition(this.node.position.x, this.bottomBound + height);
            }

            if (maxX > this.rightBound) {
              this.node.setPosition(this.rightBound - width, this.node.position.y);
            }

            if (maxY > this.topBound) {
              this.node.setPosition(this.node.position.x, this.topBound - height);
            }
          }
        }

        getOverviewTargetsMidpoint() {
          var midPoint = Vec3.ZERO;
          var minX = 99999,
              minY = 99999,
              maxX = -99999,
              maxY = -99999;

          for (var i = 0; i < this.overviewTargets.length; ++i) {
            var target = this.overviewTargets[i];
            maxX = target.position.x > maxX ? target.position.x : maxX;
            minX = target.position.x < minX ? target.position.x : minX;
            maxY = target.position.y > maxY ? target.position.y : maxY;
            minY = target.position.y < minY ? target.position.y : minY;
          }

          maxX += this.overviewMargin;
          minX -= this.overviewMargin;
          maxY += this.overviewMargin;
          minY -= this.overviewMargin;
          var distX = Math.abs(maxX - minX);
          var distY = Math.abs(maxY - minY);
          midPoint = new Vec3(minX + distX / 2, minY + distY / 2);
          var ratio = Math.max(distX / this.visibleSize.width, distY / this.visibleSize.height);
          this.camera.orthoHeight = 1 / ratio;
          return midPoint;
        }

        shakeCamera() {
          if (!this.canShake) return;
          this.anim.play('shake');
          this.scheduleOnce(this.stopShake.bind(this), this.shakeDuration);
        }

        stopShake() {
          this.anim.stop();
          this.camera.node.position = Vec3.ZERO;
        }

        onMouseMove(event) {
          this.pointerPos = event.getLocation();
        }

        onTouchMove(event) {
          this.pointerPos = event.getLocation();
        }

        locateTarget() {
          if (!this.target) {
            return;
          }

          if (this.centerAtStart) {
            var targetPos = this.target.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO);
            var cameraPos = this.node.parent.getComponent(UITransform).convertToNodeSpaceAR(targetPos);
            this.node.position = cameraPos;
          }

          this.previousPos = this.node.position;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "target", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jumpZoom", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "centerAtStart", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "smoothFollow", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "followX", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "followY", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "minFollowDist", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "followRatio", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "overview", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "overviewTargets", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "overviewMargin", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "speedZoom", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "zoomInSpeed", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "zoomOutSpeed", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "canShake", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "shakeDuration", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "pointerPan", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "pointerXMult", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "pointerYMult", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "useBoundaries", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "topBound", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "bottomBound", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "leftBound", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "rightBound", [_dec27], {
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
//# sourceMappingURL=CameraControls.js.map