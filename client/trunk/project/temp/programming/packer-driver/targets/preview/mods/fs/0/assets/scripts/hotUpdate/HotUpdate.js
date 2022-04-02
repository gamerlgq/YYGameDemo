System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, director, Label, sys, log, ProgressBar, EnterApp, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, HotUpdate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnterApp(extras) {
    _reporterNs.report("EnterApp", "../app/EnterApp", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
      sys = _cc.sys;
      log = _cc.log;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      EnterApp = _unresolved_2.EnterApp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46713ZV+7pBwIsgkPT26Z52", "HotUpdate", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HotUpdate
       * DateTime = Tue Mar 08 2022 10:55:51 GMT+0800 (中国标准时间)
       * Author = Steven_Greeard
       * FileBasename = HotUpdate.ts
       * FileBasenameNoExtension = HotUpdate
       * URL = db://assets/scripts/hotUpdate/HotUpdate.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("HotUpdate", HotUpdate = (_dec = ccclass('HotUpdate'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class HotUpdate extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tipsLabel", _descriptor, this);

          _initializerDefineProperty(this, "progressBar", _descriptor2, this);

          _defineProperty(this, "_am", null);

          _defineProperty(this, "_storagePath", '');
        }

        start() {
          if (sys.isNative) {
            this.checkUpdate();
          } else {
            this.tipsLabel.string = "更新完成.";
            this.progressBar.progress = 1;
            this.goMainScene();
          }
        }

        onLoad() {
          if (!sys.isNative) {
            return;
          }

          this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'hotupdate';
          console.log('Storage path for remote asset : ' + this._storagePath); // Setup your own version compare handler, versionA and B is versions in string
          // if the return value greater than 0, versionA is greater than B,
          // if the return value equals 0, versionA equals to B,
          // if the return value smaller than 0, versionA is smaller than B.

          var versionCompareHandle = function versionCompareHandle(versionA, versionB) {
            console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');

            for (var i = 0; i < vA.length; ++i) {
              var a = parseInt(vA[i]);
              var b = parseInt(vB[i] || '0');

              if (a === b) {
                continue;
              } else {
                return a - b;
              }
            }

            if (vB.length > vA.length) {
              return -1;
            } else {
              return 0;
            }
          }; // Init with empty manifest url for testing custom manifest


          this._am = new jsb.AssetsManager('', this._storagePath, versionCompareHandle);

          this._am.setVerifyCallback(function (path, asset) {
            // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed; // Retrieve the correct md5 value.

            var expectedMD5 = asset.md5; // asset.path is relative path and path is absolute.

            var relativePath = asset.path; // The size of asset file, but this value could be absent.

            var size = asset.size;

            if (compressed) {
              log("Verification passed : " + relativePath);
              return true;
            }

            var data = jsb.fileUtils.getDataFromFile(path);
            var md5Str = MD5_2(data);
            log("expectedMD5:" + expectedMD5 + "  md5Str:" + md5Str);

            if (expectedMD5 != md5Str) {
              log("验证失败");
              return false;
            }

            return true;
          });
        }

        checkCb(event) {
          console.log('Code: ' + event.getEventCode());

          switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              this.tipsLabel.string = "No local manifest file found, hot update skipped.";
              break;

            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
              this.tipsLabel.string = "下载更新文件失败";
              break;

            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
              this.tipsLabel.string = "更新完成.";
              this.progressBar.progress = 1;
              this.goMainScene();
              break;

            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
              if (sys.NetworkType.WWAN == jsb.device.getNetworkType()) {} else {
                this.tipsLabel.string = '正准备更新...';
                this.hotUpdate();
              }

              break;

            default:
              return;
          }
        }

        getDownloadByteStr(byte) {
          var suffix = "B"; //kb

          if (byte > 1024) {
            suffix = "KB";
            byte /= 1024; //mb

            if (byte > 1024) {
              suffix = "M";
              byte /= 1024;
            }

            return byte.toFixed(1) + suffix;
          }

          return byte + suffix;
        }

        updateCb(event) {
          var needRestart = false;
          var failed = false;

          switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
              this.tipsLabel.string = 'No local manifest file found, hot update skipped.';
              failed = true;
              break;

            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
              var downloadByte = event.getDownloadedBytes();
              var totalByte = event.getTotalBytes();
              log("updateing... ", downloadByte, " " + totalByte);
              this.tipsLabel.string = this.getDownloadByteStr(downloadByte) + "/" + this.getDownloadByteStr(totalByte);
              this.progressBar.progress = downloadByte / totalByte;
              break;

            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
              this.tipsLabel.string = '获取更新文件失败';
              failed = true;
              break;

            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
              this.tipsLabel.string = 'Already up to date with the latest remote version.';
              failed = true;
              break;

            case jsb.EventAssetsManager.UPDATE_FINISHED:
              this.tipsLabel.string = '更新完成.';
              needRestart = true;
              break;

            case jsb.EventAssetsManager.UPDATE_FAILED:
              this.tipsLabel.string = '更新失败: ' + event.getMessage();
              failed = true;
              break;

            case jsb.EventAssetsManager.ERROR_UPDATING:
              this.tipsLabel.string = '更新失败: ' + event.getAssetId() + ', ' + event.getMessage();
              break;

            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
              this.tipsLabel.string = event.getMessage();
              break;

            default:
              break;
          }

          if (failed) {
            this._am.setEventCallback(null);
          }

          if (needRestart) {
            this._am.setEventCallback(null); // Prepend the manifest's search path


            var searchPaths = jsb.fileUtils.getSearchPaths();

            var newPaths = this._am.getLocalManifest().getSearchPaths();

            console.log(JSON.stringify(newPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths); // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.

            localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            this.goMainScene();
          }
        }

        hotUpdate() {
          log("hotupdate start...");

          this._am.setEventCallback(this.updateCb.bind(this));

          this._am.update();
        }

        checkUpdate() {
          this.progressBar.progress = 0;
          this.tipsLabel.string = "正在检查更新...";

          if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            this._am.loadLocalManifest('project.manifest');
          }

          if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            this.tipsLabel.string = "Failed to load local manifest ...";
            return;
          }

          this._am.setEventCallback(this.checkCb.bind(this));

          this._am.checkUpdate();
        }

        goMainScene() {
          if (this._am) {
            this._am.setEventCallback(null);
          }

          this.scheduleOnce(dt => {
            director.loadScene("main", () => {
              new (_crd && EnterApp === void 0 ? (_reportPossibleCrUseOfEnterApp({
                error: Error()
              }), EnterApp) : EnterApp)();
            });
          }, 1);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tipsLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec3], {
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
//# sourceMappingURL=HotUpdate.js.map