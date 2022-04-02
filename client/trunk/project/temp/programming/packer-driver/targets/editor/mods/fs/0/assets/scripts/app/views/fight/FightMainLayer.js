System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, instantiate, director, TweenSystem, AnimationManager, audioMgr, ResourcesLoader, LayerBase, Protocol, viewRegisterMgr, fightActionMgr, FightActionMgr, FightData, fightDataMgr, FightDataMgr, fightEventMgr, FightEventMgr, fightBloodMgr, FightBloodMgr, FightConstant, fightController, FightController, FightMainWorld, fightPlayer, FightPlayer, _dec, _class, _temp, _crd, ccclass, property, FightMainLayer;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfaudioMgr(extras) {
    _reporterNs.report("audioMgr", "../../../framework/core/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../../../framework/data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../../../framework/listener/Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../framework/ui/LayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../define/define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightActionMgr(extras) {
    _reporterNs.report("fightActionMgr", "./action/FightActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightActionMgr(extras) {
    _reporterNs.report("FightActionMgr", "./action/FightActionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightDataMgr(extras) {
    _reporterNs.report("fightDataMgr", "./data/FightDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightDataMgr(extras) {
    _reporterNs.report("FightDataMgr", "./data/FightDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "./event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventMgr(extras) {
    _reporterNs.report("FightEventMgr", "./event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightBloodMgr(extras) {
    _reporterNs.report("fightBloodMgr", "./FightBloodMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBloodMgr(extras) {
    _reporterNs.report("FightBloodMgr", "./FightBloodMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "./FightConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightController(extras) {
    _reporterNs.report("fightController", "./FightController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightController(extras) {
    _reporterNs.report("FightController", "./FightController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMainUI(extras) {
    _reporterNs.report("FightMainUI", "./FightMainUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMainWorld(extras) {
    _reporterNs.report("FightMainWorld", "./FightMainWorld", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightPlayer(extras) {
    _reporterNs.report("fightPlayer", "./FightPlayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightPlayer(extras) {
    _reporterNs.report("FightPlayer", "./FightPlayer", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      director = _cc.director;
      TweenSystem = _cc.TweenSystem;
      AnimationManager = _cc.AnimationManager;
    }, function (_unresolved_2) {
      audioMgr = _unresolved_2.audioMgr;
    }, function (_unresolved_3) {
      ResourcesLoader = _unresolved_3.ResourcesLoader;
    }, function (_unresolved_4) {
      LayerBase = _unresolved_4.LayerBase;
    }, function (_unresolved_5) {
      Protocol = _unresolved_5.Protocol;
    }, function (_unresolved_6) {
      viewRegisterMgr = _unresolved_6.viewRegisterMgr;
    }, function (_unresolved_7) {
      fightActionMgr = _unresolved_7.fightActionMgr;
      FightActionMgr = _unresolved_7.FightActionMgr;
    }, function (_unresolved_8) {
      FightData = _unresolved_8.FightData;
    }, function (_unresolved_9) {
      fightDataMgr = _unresolved_9.fightDataMgr;
      FightDataMgr = _unresolved_9.FightDataMgr;
    }, function (_unresolved_10) {
      fightEventMgr = _unresolved_10.fightEventMgr;
      FightEventMgr = _unresolved_10.FightEventMgr;
    }, function (_unresolved_11) {
      fightBloodMgr = _unresolved_11.fightBloodMgr;
      FightBloodMgr = _unresolved_11.FightBloodMgr;
    }, function (_unresolved_12) {
      FightConstant = _unresolved_12.FightConstant;
    }, function (_unresolved_13) {
      fightController = _unresolved_13.fightController;
      FightController = _unresolved_13.FightController;
    }, function (_unresolved_14) {
      FightMainWorld = _unresolved_14.FightMainWorld;
    }, function (_unresolved_15) {
      fightPlayer = _unresolved_15.fightPlayer;
      FightPlayer = _unresolved_15.FightPlayer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d3b7bjFp+BIWbTWzxeD7G+K", "FightMainLayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightMainLayer", FightMainLayer = (_dec = ccclass('FightMainLayer'), _dec(_class = (_temp = class FightMainLayer extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_fightMainWorld", null);

          _defineProperty(this, "_fightMainUI", null);

          _defineProperty(this, "_content", null);

          _defineProperty(this, "_rootNode", null);

          _defineProperty(this, "_gameSpeed", 1);
        }

        onLoad() {
          super.onLoad();
          this._rootNode = this.node.parent;
          this._content = this._rootNode.getChildByName("content");
        }
        /**
         * @description 初始化
         */


        init(report) {
          this._initManagers(report);

          this._initBg();

          this._loadMainWorld();

          this._loadMainUI();

          this._playBgMusic();

          this._addListeners();
        }

        _initManagers(report) {
          // 战报数据管理器
          (_crd && FightDataMgr === void 0 ? (_reportPossibleCrUseOfFightDataMgr({
            error: Error()
          }), FightDataMgr) : FightDataMgr).init();
          (_crd && fightDataMgr === void 0 ? (_reportPossibleCrUseOffightDataMgr({
            error: Error()
          }), fightDataMgr) : fightDataMgr).parse(report, _crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData); // 事件派发器

          (_crd && FightEventMgr === void 0 ? (_reportPossibleCrUseOfFightEventMgr({
            error: Error()
          }), FightEventMgr) : FightEventMgr).init(); // 回合控制器

          (_crd && FightController === void 0 ? (_reportPossibleCrUseOfFightController({
            error: Error()
          }), FightController) : FightController).init(); // 战斗播放器

          (_crd && FightPlayer === void 0 ? (_reportPossibleCrUseOfFightPlayer({
            error: Error()
          }), FightPlayer) : FightPlayer).init(); // action管理器

          (_crd && FightActionMgr === void 0 ? (_reportPossibleCrUseOfFightActionMgr({
            error: Error()
          }), FightActionMgr) : FightActionMgr).init(this); // 飘血管理器

          (_crd && FightBloodMgr === void 0 ? (_reportPossibleCrUseOfFightBloodMgr({
            error: Error()
          }), FightBloodMgr) : FightBloodMgr).init(this);
        }

        _initBg() {}

        _loadMainWorld() {
          this._fightMainWorld = new (_crd && FightMainWorld === void 0 ? (_reportPossibleCrUseOfFightMainWorld({
            error: Error()
          }), FightMainWorld) : FightMainWorld)();

          this._fightMainWorld.init();

          this._content.addChild(this._fightMainWorld);
        }

        _loadMainUI() {
          let viewInfo = null;

          if ((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).Open_Fight_Editor) {
            viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
              error: Error()
            }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("fight", "FightEditorUI");
          } else {
            viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
              error: Error()
            }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("fight", "FightMainUI");
          }

          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            let uiNode = instantiate(data);

            this._content.addChild(uiNode);

            this._fightMainUI = uiNode.getComponentInChildren("FightMainUI");
          });
        }

        _playBgMusic() {
          (_crd && audioMgr === void 0 ? (_reportPossibleCrUseOfaudioMgr({
            error: Error()
          }), audioMgr) : audioMgr).playMusic("fight/avs/zhengzhan_bjyy");
        }

        _addListeners() {
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_Star, this._startGame.bind(this));
          this.addMsgListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Inner.SetAnimationSpeed, this._setSpeed.bind(this));
        }

        _startGame(event) {
          this._fightMainWorld.startGame();

          this._fightMainUI.startGame();
        }
        /**
         * @return FightMainWorld
         */


        getFightMainWorld() {
          return this._fightMainWorld;
        }

        update(dt) {
          var _this$_fightMainWorld;

          (_this$_fightMainWorld = this._fightMainWorld) === null || _this$_fightMainWorld === void 0 ? void 0 : _this$_fightMainWorld.tick(dt);

          if (this._gameSpeed == 2) {
            director.getSystem(TweenSystem.ID).update(dt);
            director.getSystem(AnimationManager.ID).update(dt);
          }
        }

        onDestroy() {
          (_crd && fightController === void 0 ? (_reportPossibleCrUseOffightController({
            error: Error()
          }), fightController) : fightController).destory();
          (_crd && fightDataMgr === void 0 ? (_reportPossibleCrUseOffightDataMgr({
            error: Error()
          }), fightDataMgr) : fightDataMgr).destory();
          (_crd && fightPlayer === void 0 ? (_reportPossibleCrUseOffightPlayer({
            error: Error()
          }), fightPlayer) : fightPlayer).destory();
          (_crd && fightActionMgr === void 0 ? (_reportPossibleCrUseOffightActionMgr({
            error: Error()
          }), fightActionMgr) : fightActionMgr).destory();
          (_crd && fightBloodMgr === void 0 ? (_reportPossibleCrUseOffightBloodMgr({
            error: Error()
          }), fightBloodMgr) : fightBloodMgr).destory();
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).destory();
          (_crd && audioMgr === void 0 ? (_reportPossibleCrUseOfaudioMgr({
            error: Error()
          }), audioMgr) : audioMgr).popMusic();
        }

        _setSpeed(event) {
          let data = event.getRawData();
          this._gameSpeed = data;
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightMainLayer.js.map