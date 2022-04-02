System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioClip, AudioSource, Tween, _decorator, ResourcesLoader, audioMgr, _dec, _class, _temp, _crd, ccclass, menu, AudioMusic;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioMgr(extras) {
    _reporterNs.report("audioMgr", "./AudioManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Tween = _cc.Tween;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }, function (_unresolved_3) {
      audioMgr = _unresolved_3.audioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", undefined);

      ({
        ccclass,
        menu
      } = _decorator);
      /** 背景音乐 */

      _export("AudioMusic", AudioMusic = (_dec = ccclass('AudioMusic'), _dec(_class = (_temp = class AudioMusic extends AudioSource {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "onComplete", null);

          _defineProperty(this, "_progress", 0);

          _defineProperty(this, "_url", null);

          _defineProperty(this, "_isPlay", false);

          _defineProperty(this, "_tweenVo", void 0);
        }

        /**
         * 设置音乐当前播放进度
         * @param progress 进度百分比(0~1)
         */
        get progress() {
          this._progress = this.currentTime / this.duration;
          return this._progress;
        }

        set progress(value) {
          this._progress = value;
          this.currentTime = value * this.duration;
        }

        load(url, isLoop = true, callback) {
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).load(url, data => {
            this._fadeOut(() => {
              this.clip = data;
              this.currentTime = 0;
              this.play();
              this.loop = isLoop;
              callback && callback();
              this._url = url;

              this._fadeIn();
            });
          }, AudioClip);
        }

        _fadeOut(onFin) {
          if (this.playing) {
            var _this$_tweenVo;

            (_this$_tweenVo = this._tweenVo) === null || _this$_tweenVo === void 0 ? void 0 : _this$_tweenVo.stop();
            this._tweenVo = new Tween(this);

            this._tweenVo.to(1, {
              volume: 0
            }, {
              onComplete: tar => {
                this._tweenVo = null;
                this.stop();
                (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
                  error: Error()
                }), ResourcesLoader) : ResourcesLoader).release(this._url);
                onFin();
              }
            }).start();
          } else {
            onFin();
          }
        }

        _fadeIn() {
          var _this$_tweenVo2;

          (_this$_tweenVo2 = this._tweenVo) === null || _this$_tweenVo2 === void 0 ? void 0 : _this$_tweenVo2.stop();
          this._tweenVo = new Tween(this);
          this.volume = 0;

          this._tweenVo.to(1, {
            volume: (_crd && audioMgr === void 0 ? (_reportPossibleCrUseOfaudioMgr({
              error: Error()
            }), audioMgr) : audioMgr).musicVolume
          }, {
            onComplete: () => {
              this._tweenVo = null;
            }
          }).start();
        }

        update(dt) {
          if (this.currentTime > 0) {
            this._isPlay = true;
          }

          if (this._isPlay && this.playing == false) {
            this._isPlay = false;
            this.onComplete && this.onComplete();
          }
        }

        release() {
          if (this._url) {
            (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).release(this._url);
            this._url = null;
          }
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioMusic.js.map