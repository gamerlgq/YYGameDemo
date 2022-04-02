System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, JsonAsset, log, sys, director, GameConfig, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Launch;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "./GameConfig", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      JsonAsset = _cc.JsonAsset;
      log = _cc.log;
      sys = _cc.sys;
      director = _cc.director;
    }, function (_unresolved_2) {
      GameConfig = _unresolved_2.GameConfig;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a867bL5iW1JCo9w+6QSwzya", "Launch", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Launch", Launch = (_dec = ccclass('Launch'), _dec2 = property({
        type: JsonAsset
      }), _dec(_class = (_class2 = (_temp = class Launch extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "serverConfig", _descriptor, this);
        }

        onLoad() {
          if (this.serverConfig) {
            var config = this.serverConfig.json;
            log("ServerConfig.json", JSON.stringify(config));
            Object.keys(config).forEach(key => {
              var value = config[key];
              (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
                error: Error()
              }), GameConfig) : GameConfig)[key] = value;
            });
          }
        }

        start() {
          //动态合图
          // dynamicAtlasManager.enabled = false;
          this._keepScreenOn();

          this.scheduleOnce(dt => {
            this._startHotUpdate();
          }, 1);
        } //设置屏幕常亮


        _keepScreenOn() {
          if (sys.isNative) {
            if (sys.os == sys.OS.IOS || sys.os == sys.OS.ANDROID) {
              jsb.device.setKeepScreenOn(true);
            }
          }
        } // 走热更新流程


        _startHotUpdate() {
          director.loadScene("hotUpdate", () => {// 预加载
            // let paths = [
            //     "prefab/tongyong_ui/tongyong_tipsUI_00",
            //     "prefab/tongyong_ui/tongyong_tipsUI_01",
            // ];
            // for (let index = 0; index < paths.length; index++) {
            //     const element = paths[index];
            //     ResourcesLoader.preload(element, () => {});
            // }
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverConfig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Launch.js.map