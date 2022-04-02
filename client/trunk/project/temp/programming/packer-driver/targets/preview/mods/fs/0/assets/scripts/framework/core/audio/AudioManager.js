System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, game, Node, storage, AudioEffect, AudioMusic, AudioManager, _crd, LOCAL_STORE_KEY, audioMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfstorage(extras) {
    _reporterNs.report("storage", "../storage/Storage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioEffect(extras) {
    _reporterNs.report("AudioEffect", "./AudioEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMusic(extras) {
    _reporterNs.report("AudioMusic", "./AudioMusic", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      game = _cc.game;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      storage = _unresolved_2.storage;
    }, function (_unresolved_3) {
      AudioEffect = _unresolved_3.AudioEffect;
    }, function (_unresolved_4) {
      AudioMusic = _unresolved_4.AudioMusic;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "252f0z+vPNL8Y/jsLYmomtw", "AudioManager", undefined);

      LOCAL_STORE_KEY = "game_audio";
      AudioManager = class AudioManager extends Node {
        constructor() {
          super(...arguments);

          _defineProperty(this, "local_data", {});

          _defineProperty(this, "_volume_music", 1);

          _defineProperty(this, "_volume_effect", 1);

          _defineProperty(this, "_switch_music", true);

          _defineProperty(this, "_switch_effect", true);

          _defineProperty(this, "_uuid", "10000");

          _defineProperty(this, "_localStorageTag", "");

          _defineProperty(this, "_musicQueue", null);
        }

        static getInstance() {
          if (!AudioManager._instance) {
            AudioManager._instance = new AudioManager();
          }

          return AudioManager._instance;
        }
        /**
         * init
         */


        init() {
          game.addPersistRootNode(AudioManager._instance);

          AudioManager._instance.addComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
            error: Error()
          }), AudioMusic) : AudioMusic);

          this.music = AudioManager._instance.getComponent(_crd && AudioMusic === void 0 ? (_reportPossibleCrUseOfAudioMusic({
            error: Error()
          }), AudioMusic) : AudioMusic);

          AudioManager._instance.addComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
            error: Error()
          }), AudioEffect) : AudioEffect);

          this.effect = AudioManager._instance.getComponent(_crd && AudioEffect === void 0 ? (_reportPossibleCrUseOfAudioEffect({
            error: Error()
          }), AudioEffect) : AudioEffect);

          AudioManager._instance.__init();
        }

        __init() {
          var data = (_crd && storage === void 0 ? (_reportPossibleCrUseOfstorage({
            error: Error()
          }), storage) : storage).get(this._localStorageTag);

          if (data) {
            try {
              this.local_data = JSON.parse(data);
              this._volume_music = this.local_data.volume_music;
              this._volume_effect = this.local_data.volume_effect;
              this._switch_music = this.local_data.switch_music;
              this._switch_effect = this.local_data.switch_effect;
            } catch (e) {
              this.local_data = {};
              this._volume_music = 1;
              this._volume_effect = 1;
              this._switch_music = true;
              this._switch_effect = true;
            }

            this.music.volume = this._volume_music;
            this.effect.volume = this._volume_effect;
          }

          this._musicQueue = new Array();
        }
        /** 设置玩家唯一标识 */


        setUuid(value) {
          this._uuid = value;
          this._localStorageTag = LOCAL_STORE_KEY + "_" + this._uuid;
        }
        /**
         *  播放背景音乐
         * @param url        资源地址
         * @param callback   音乐播放完成事件
         */


        playMusic(url, callback) {
          this._musicQueue.push(url);

          this._playMusic(url, callback);
        }
        /**
         * 推出场景需要在onDestory pop一下
         */


        popMusic() {
          this._musicQueue.pop();

          var lastIndex = this._musicQueue.length - 1;
          var url = this._musicQueue[lastIndex];

          if (url) {
            this._playMusic(url);
          }
        }

        _playMusic(url, callback) {
          if (this._switch_music) {
            this.music.load(url);
            this.music.onComplete = callback;
          }
        }
        /**
         * 播放音效
         * @param url        资源地址
         */


        playEffect(url) {
          if (this._switch_effect) {
            this.effect.load(url);
          }
        }
        /** 背景音乐音量 */


        get musicVolume() {
          return this._volume_music;
        }

        set musicVolume(value) {
          this._volume_music = value;
          this.music.volume = value;
        }
        /** 音效音量 */


        get effectVolume() {
          return this._volume_effect;
        }

        set effectVolume(value) {
          this._volume_effect = value;
          this.effect.volume = value;
        }
        /** 音乐开关 */


        getSwitchMusic() {
          return this._switch_music;
        }

        setSwitchMusic(value) {
          this._switch_music = value;
          if (value == false) this.music.stop();
        }
        /** 音效开关 */


        getSwitchEffect() {
          return this._switch_effect;
        }

        setSwitchEffect(value) {
          this._switch_effect = value;
          if (value == false) this.effect.stop();
        }

        resumeAll() {
          if (this.music) {
            this.music.play();
            this.effect.play();
          }
        }

        pauseAll() {
          if (this.music) {
            this.music.pause();
            this.effect.pause();
          }
        }

        stopAll() {
          if (this.music) {
            this.music.stop();
            this.effect.stop();
          }
        }

        save() {
          this.local_data.volume_music = this._volume_music;
          this.local_data.volume_effect = this._volume_effect;
          this.local_data.switch_music = this._switch_music;
          this.local_data.switch_effect = this._switch_effect;
          var data = JSON.stringify(this.local_data);
          (_crd && storage === void 0 ? (_reportPossibleCrUseOfstorage({
            error: Error()
          }), storage) : storage).set(this._localStorageTag, data);
        }

      };

      _defineProperty(AudioManager, "_instance", null);

      _export("audioMgr", audioMgr = (() => {
        return AudioManager.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=AudioManager.js.map