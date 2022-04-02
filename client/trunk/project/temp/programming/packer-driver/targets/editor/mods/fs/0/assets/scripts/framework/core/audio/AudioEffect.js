System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AudioClip, AudioSource, _decorator, ResourcesLoader, _dec, _class, _temp, _crd, ccclass, menu, AudioEffect;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../data/ResourcesLoader", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ResourcesLoader = _unresolved_2.ResourcesLoader;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", undefined);

      ({
        ccclass,
        menu
      } = _decorator);
      /**
       * 注：用playOneShot播放的音乐效果，在播放期间暂时没办法即时关闭音乐
       */

      /** 游戏音效 */

      _export("AudioEffect", AudioEffect = (_dec = ccclass('AudioEffect'), _dec(_class = (_temp = class AudioEffect extends AudioSource {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "effects", new Map());
        }

        load(url, callback) {
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).load(url, data => {
            this.effects.set(url, data);
            this.playOneShot(data, this.volume);
            callback && callback();
          }, AudioClip);
        }

        release() {
          for (let key in this.effects) {
            (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).release(key);
          }

          this.effects.clear();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioEffect.js.map