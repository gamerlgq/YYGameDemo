System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Camera, director, find, game, input, log, sys, singletonMgr, audioMgr, gameMgr, sceneMgr, netLoadingMgr, GameConfig, dataRegisterMgr, ViewProtocol, viewRegisterMgr, modelRegisterMgr, EnterApp, _crd;

  function _reportPossibleCrUseOfsingletonMgr(extras) {
    _reporterNs.report("singletonMgr", "../framework/components/SingletonMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfaudioMgr(extras) {
    _reporterNs.report("audioMgr", "../framework/core/audio/AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../framework/core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetLoadingMgr(extras) {
    _reporterNs.report("netLoadingMgr", "../framework/net/NetLoadingMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataRegisterMgr(extras) {
    _reporterNs.report("dataRegisterMgr", "./define/DataRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewProtocol(extras) {
    _reporterNs.report("ViewProtocol", "./define/ViewProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "./define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelRegisterMgr(extras) {
    _reporterNs.report("modelRegisterMgr", "./model/ModelRegisterMgr", _context.meta, extras);
  }

  _export("EnterApp", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Camera = _cc.Camera;
      director = _cc.director;
      find = _cc.find;
      game = _cc.game;
      input = _cc.input;
      log = _cc.log;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      singletonMgr = _unresolved_2.singletonMgr;
    }, function (_unresolved_3) {
      audioMgr = _unresolved_3.audioMgr;
    }, function (_unresolved_4) {
      gameMgr = _unresolved_4.gameMgr;
    }, function (_unresolved_5) {
      sceneMgr = _unresolved_5.sceneMgr;
    }, function (_unresolved_6) {
      netLoadingMgr = _unresolved_6.netLoadingMgr;
    }, function (_unresolved_7) {
      GameConfig = _unresolved_7.GameConfig;
    }, function (_unresolved_8) {
      dataRegisterMgr = _unresolved_8.dataRegisterMgr;
    }, function (_unresolved_9) {
      ViewProtocol = _unresolved_9.ViewProtocol;
    }, function (_unresolved_10) {
      viewRegisterMgr = _unresolved_10.viewRegisterMgr;
    }, function (_unresolved_11) {
      modelRegisterMgr = _unresolved_11.modelRegisterMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46137csGNxPpLF/lWydBES5", "EnterApp", undefined);

      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 16:36:11
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-02 18:00:01
       * @Description: file content
       */
      _export("EnterApp", EnterApp = class EnterApp {
        constructor() {
          this.run();
        }

        run() {
          this.init();
          this.loadDefine();
          this.loadAllDataFile();
          this.initSDKHelper();
        }

        reRun() {
          (_crd && singletonMgr === void 0 ? (_reportPossibleCrUseOfsingletonMgr({
            error: Error()
          }), singletonMgr) : singletonMgr).destoryAll();
          let scene = director.getScene();
          (_crd && audioMgr === void 0 ? (_reportPossibleCrUseOfaudioMgr({
            error: Error()
          }), audioMgr) : audioMgr).stopAll(); // let main = scene.getComponentInChildren("Main");
          // gameMgr.setCamera("default", main.defaultCamera);
          // gameMgr.setCamera("fight", main.fightCamera);
          // this.run();

          director.loadScene("HotUpdate");
        }

        init() {
          var _find, _find$getChildByName, _find2, _find2$getChildByName;

          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).init();
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).setApp(this);
          (_crd && audioMgr === void 0 ? (_reportPossibleCrUseOfaudioMgr({
            error: Error()
          }), audioMgr) : audioMgr).init();
          (_crd && netLoadingMgr === void 0 ? (_reportPossibleCrUseOfnetLoadingMgr({
            error: Error()
          }), netLoadingMgr) : netLoadingMgr).init(); //玩家ID，保存音效设置
          // audioMgr.setUuid("3998857")

          let uiCamera = (_find = find("Canvas")) === null || _find === void 0 ? void 0 : (_find$getChildByName = _find.getChildByName("UICamera")) === null || _find$getChildByName === void 0 ? void 0 : _find$getChildByName.getComponent(Camera);
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).setCamera("UICamera", uiCamera);
          let fightCamera = (_find2 = find("Canvas")) === null || _find2 === void 0 ? void 0 : (_find2$getChildByName = _find2.getChildByName("MainCamera")) === null || _find2$getChildByName === void 0 ? void 0 : _find2$getChildByName.getComponent(Camera);
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).setCamera("MainCamera", fightCamera);
        }

        loadDefine() {
          (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).registerAllCreator();
        }

        loadAllDataFile() {
          log("loading config.."); // logDot(DotIDS.configLoadingStart);

          (_crd && dataRegisterMgr === void 0 ? (_reportPossibleCrUseOfdataRegisterMgr({
            error: Error()
          }), dataRegisterMgr) : dataRegisterMgr).loadAllData(() => {
            log("loading config is done"); // logDot(DotIDS.configLoadingFinish);

            this.loadAllModel();
            this.loadAllRedGuide();
            this.done();
          });
        }

        loadAllRedGuide() {// RedGuideReg.loadAllRedGuide();
        }

        loadAllModel() {
          (_crd && modelRegisterMgr === void 0 ? (_reportPossibleCrUseOfmodelRegisterMgr({
            error: Error()
          }), modelRegisterMgr) : modelRegisterMgr).loadAllModel();
        }

        done() {
          // if (cc.sys.isMobile) {
          //     cc.macro.ENABLE_MULTI_TOUCH = false;
          // }
          game.frameRate = 60;
          input.setAccelerometerEnabled(true);
          log("进入游戏");
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).LoginLayer);
        }

        initSDKHelper() {
          let SDKHelper;

          if (sys.isNative && (_crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
            error: Error()
          }), GameConfig) : GameConfig).SDKLogin) {
            if (sys.os == sys.OS.IOS) {//         let content = require("../SDK/SDKIosHelper");
              //         SDKHelper = content.SDKHelper;
              //         window["SDKHelper"] = SDKHelper.getInstance();
            } else if (sys.os == sys.OS.ANDROID) {//         let content = require("../SDK/SDKAndroidHelper");
              //         SDKHelper = content.SDKHelper;
              //         window["SDKHelper"] = SDKHelper.getInstance();
              //         window["SDKHelper"].SDKInit();
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=EnterApp.js.map