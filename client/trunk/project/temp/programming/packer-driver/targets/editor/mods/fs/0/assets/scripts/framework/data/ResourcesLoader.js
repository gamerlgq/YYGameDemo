System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, assetManager, error, game, resources, netLoadingMgr, ResourcesLoader, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfViewInfoType(extras) {
    _reporterNs.report("ViewInfoType", "../../app/define/ConfigType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetLoadingMgr(extras) {
    _reporterNs.report("netLoadingMgr", "../net/NetLoadingMgr", _context.meta, extras);
  }

  _export("ResourcesLoader", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      assetManager = _cc.assetManager;
      error = _cc.error;
      game = _cc.game;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      netLoadingMgr = _unresolved_2.netLoadingMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5eb547JXAdLg68G+AjDDMe7", "ResourcesLoader", undefined);

      _export("ResourcesLoader", ResourcesLoader = class ResourcesLoader {
        // 内存限制
        // 下载资源
        static preload(path, doneFunc) {
          resources.preload(path, (err, dataAsset) => {
            if (err) {
              error("ResourcesLoader preload error:", err.message);
            }

            doneFunc(dataAsset);
          });
        }
        /**
         * @description resources需要动态加载的资源(使用此方法，需要手动管理资源释放)
         */


        static load(path, doneFunc, type) {
          if (type == undefined) {
            resources.load(path, (err, dataAsset) => {
              if (err) {
                error("ResourcesLoader load error:", err.message);
              }

              doneFunc(dataAsset, err);
            });
            return;
          }

          resources.load(path, type, (err, dataAsset) => {
            if (err) {
              error("ResourcesLoader load error:", err.message);
            }

            doneFunc(dataAsset, err);
          });
        }

        static get(path, type, bundleName = "resources") {
          var bundle = assetManager.getBundle(bundleName);
          return bundle.get(path, type);
        }
        /**
         * @description 创建界面一定使用此方法 resources需要动态加载的资源(使用此方法，引擎底层资源释放)
         */


        static loadWithViewInfo(viewInfo, doneFunc, isShowLoading = true, type) {
          let path = viewInfo.Path;

          if (isShowLoading) {
            (_crd && netLoadingMgr === void 0 ? (_reportPossibleCrUseOfnetLoadingMgr({
              error: Error()
            }), netLoadingMgr) : netLoadingMgr).addMsgLoading("load view:" + path, 0);
          }

          if (type == undefined) {
            resources.load(path, (err, dataAsset) => {
              if (err) {
                error("ResourcesLoader load error:", err.message);
              } // 添加自动释放


              ResourcesLoader._autoReleaseRes(viewInfo, dataAsset);

              doneFunc(dataAsset); //加载转圈

              (_crd && netLoadingMgr === void 0 ? (_reportPossibleCrUseOfnetLoadingMgr({
                error: Error()
              }), netLoadingMgr) : netLoadingMgr).removeMsgLoading("load view:" + path);
            });
            return;
          }

          resources.load(path, type, (err, dataAsset) => {
            if (err) {
              error("ResourcesLoader load error:", err.message);
            } // 添加自动释放


            ResourcesLoader._autoReleaseRes(viewInfo, dataAsset);

            doneFunc(dataAsset); //加载转圈

            (_crd && netLoadingMgr === void 0 ? (_reportPossibleCrUseOfnetLoadingMgr({
              error: Error()
            }), netLoadingMgr) : netLoadingMgr).removeMsgLoading("load view:" + path);
          });
        }

        static loadList(pathList, onProcess, onComplete, bundleName = "resources") {
          var bundle = assetManager.getBundle(bundleName);
          bundle.load(pathList, onProcess, onComplete);
        }

        static loadDir(path, onProcess, onComplete, bundleName = "resources") {
          var bundle = assetManager.getBundle(bundleName);
          bundle.loadDir(path, onProcess, onComplete);
        } //释放单个资源


        static release(path, bundleName = "resources") {
          var bundle = assetManager.getBundle(bundleName);
          bundle === null || bundle === void 0 ? void 0 : bundle.release(path);
        }

        static loadPromise(path, type) {
          return new Promise((resolve, rejected) => {
            this.load(path, data => {
              resolve(data);
            }, type);
          });
        } //是否需要释放内存


        static checkNeedToRelease() {
          //暂时用了1GB内存需要释放
          let mb = 1024 * 1024;

          if (game._gfxDevice.memoryStatus.textureSize / mb > ResourcesLoader._CacheMaxMemory) {
            return true;
          }

          return false;
        } // 引用计数+1


        static addResRef(layerName) {
          let asset = ResourcesLoader._ResCounter.get(layerName);

          if (asset) {
            asset.addRef();
          }
        } // 引用计数-1
        //单纯减少引用，纹理统一释放


        static decResRef(layerName) {
          let asset = ResourcesLoader._ResCounter.get(layerName);

          if (asset) {
            asset.decRef(false);

            ResourcesLoader._ResCounter.delete(layerName);
          }
        } //所有引用清除


        static clearAllRef() {
          ResourcesLoader._ResCounter.forEach(element => {
            element.decRef(false);
          });

          ResourcesLoader._ResCounter.clear();
        }

        static releaseUnusedAssets() {
          resources.releaseUnusedAssets();
        }

        static _autoReleaseRes(viewInfo, asset) {
          let cache = viewInfo.Cache;

          if (!cache) {
            if (!ResourcesLoader._ResCounter.get(viewInfo.View)) {
              ResourcesLoader._ResCounter.set(viewInfo.View, asset);
            }
          } else {
            // 永久缓存 >1 即可
            asset.addRef();
          }
        }

      });

      _defineProperty(ResourcesLoader, "_ResCounter", new Map());

      _defineProperty(ResourcesLoader, "_CacheMaxMemory", 1024);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ResourcesLoader.js.map