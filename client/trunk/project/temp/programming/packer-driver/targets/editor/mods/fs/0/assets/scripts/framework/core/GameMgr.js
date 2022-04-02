System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, Game, game, log, Scheduler, sys, Singleton, modelEventMgr, msgEventMgr, sceneMgr, GameMgr, _crd, gameMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfDeviceInfoType(extras) {
    _reporterNs.report("DeviceInfoType", "../../app/define/ConfigType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyy(extras) {
    _reporterNs.report("yy", "../../app/define/YYNamespace", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnterApp(extras) {
    _reporterNs.report("EnterApp", "../../app/EnterApp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModelBase(extras) {
    _reporterNs.report("ModelBase", "../data/ModelBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmodelEventMgr(extras) {
    _reporterNs.report("modelEventMgr", "../listener/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgEventMgr(extras) {
    _reporterNs.report("msgEventMgr", "../listener/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../listener/Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "./SceneMgr", _context.meta, extras);
  }

  _export("GameMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
      Game = _cc.Game;
      game = _cc.game;
      log = _cc.log;
      Scheduler = _cc.Scheduler;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      modelEventMgr = _unresolved_3.modelEventMgr;
      msgEventMgr = _unresolved_3.msgEventMgr;
    }, function (_unresolved_4) {
      sceneMgr = _unresolved_4.sceneMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3a889sg5BFD/r5+/4PVXgnK", "GameMgr", undefined);

      _export("GameMgr", GameMgr = class GameMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        // ISchedulable
        // 服务端消息队列
        // 内部消息队列
        //进入后台时间计时器ID
        // 构造函数
        constructor() {
          super(); // camera

          _defineProperty(this, "id", void 0);

          _defineProperty(this, "uuid", void 0);

          _defineProperty(this, "_modelMapName", void 0);

          _defineProperty(this, "_slowTickList", void 0);

          _defineProperty(this, "_fastTickList", void 0);

          _defineProperty(this, "_cameraMap", void 0);

          _defineProperty(this, "_serverMessageQueue", void 0);

          _defineProperty(this, "_innerMessageQueue", void 0);

          _defineProperty(this, "_app", void 0);

          _defineProperty(this, "_deviceInfo", void 0);

          _defineProperty(this, "_curTimeoutID", void 0);

          this._cameraMap = new Map(); // model

          this._modelMapName = new Map(); // event tick

          this._slowTickList = [];
          this._fastTickList = []; // message queue

          this._innerMessageQueue = [];
          this._serverMessageQueue = []; // scheduler

          let s = director.getScheduler();
          Scheduler.enableForTarget(this); // slow tick

          s.schedule(dt => {
            this._slowTick(dt);
          }, this, 1); // quick tick

          s.schedule(dt => {
            this._fastTick(dt);
          }, this, 0); // game on foreground

          game.on(Game.EVENT_SHOW, this._enterForeground.bind(this), this); // game on background

          game.on(Game.EVENT_HIDE, this._enterBackground.bind(this), this);
        }

        setApp(app) {
          this._app = app;
        }

        addNetMessage(msg) {
          this._serverMessageQueue.push(msg);
        }

        addInnerMessage(msg) {
          this._innerMessageQueue.push(msg);
        }

        addSlowTick(func) {
          this._slowTickList.push(func);
        }
        /**
         * 把消息id绑定指定的model
         */


        registerModel(modelConstructor) {
          this._modelMapName.set(modelConstructor.name, new modelConstructor());
        }
        /**
         * 获取model
         */


        getModel(modelConstructor) {
          return this._modelMapName.get(modelConstructor.name);
        }
        /**
         * 获取摄像机
         */


        setCamera(key, camera) {
          this._cameraMap.set(key, camera);
        }
        /**
         * 获取摄像机
         */


        getCamera(key) {
          return this._cameraMap.get(key);
        }

        reRun() {
          log("GameMgr reRunRun0");
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).removeAllTableLayer();
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).setSystemOpenLayer(null);
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).setNewGuideLayer(null);

          if (this._app) {
            log("GameMgr reRunRun1");

            this._app.reRun();
          } else {
            log("GameMgr reRunRun2");
            director.loadScene("HotUpdate");
          }
        }

        getDeviceInfo(refresh) {
          if (this._deviceInfo && !refresh) {
            return this._deviceInfo;
          }

          let info = {
            DeviceModel: "",
            IMEI: "",
            NetWork: "",
            SystemVer: ""
          };
          let infoStr;

          if (sys.isNative) {
            if (sys.os == sys.OS.IOS) {// infoStr = jsb.reflection.callStaticMethod("MyOcHelper", "get_device_info");
            } else if (sys.os == sys.OS.ANDROID) {
              // todo
              infoStr = jsb.reflection.callStaticMethod("com/youai/lib/Helper", "getDeviceInfo", "()Ljava/lang/String;");
            }
          }

          if (infoStr) {
            let keys = ["DeviceModel", "IMEI", "NetWork", "SystemVer"];
            let infoArray = infoStr.split("|");

            if (infoArray) {
              for (let index = 0; index < infoArray.length; index++) {
                const element = infoArray[index];
                info[keys[index]] = element;
              }
            }
          }

          this._deviceInfo = info;
          return info;
        }

        _enterForeground() {
          console.log("游戏进入前台"); // NotifyHelper.getInstance().gameEnterForeground();

          if (this._curTimeoutID) {
            clearTimeout(this._curTimeoutID);
          }
        }

        _enterBackground() {
          console.log("游戏进入后台"); // NotifyHelper.getInstance().gameEnterBackground();
          //5分钟后埋点登出

          this._curTimeoutID = setTimeout(() => {
            if (window["SDKHelper"]) {
              window["SDKHelper"].trackLogoutEvent();
            }
          }, 3000);
        } // 慢tick


        _slowTick(dt) {
          this._slowTickList.forEach(hdl => {
            hdl(dt);
          });
        } // 快tick


        _fastTick(dt) {
          // handler inner msg
          let innerlenght = this._innerMessageQueue.length;

          while (innerlenght > 0) {
            let msgEvent = this._innerMessageQueue.shift();

            this._dispatchMsgEvent(msgEvent);

            innerlenght = this._innerMessageQueue.length;
          } // handler server msg


          let serverlenght = this._serverMessageQueue.length;

          while (serverlenght > 0) {
            let msgEvent = this._serverMessageQueue.shift();

            this._dispatchMsgEvent(msgEvent);

            serverlenght = this._serverMessageQueue.length;
          }

          this._fastTickList.forEach(hdl => {
            hdl(dt);
          });
        }

        _dispatchMsgEvent(msg) {
          // model msg
          (_crd && modelEventMgr === void 0 ? (_reportPossibleCrUseOfmodelEventMgr({
            error: Error()
          }), modelEventMgr) : modelEventMgr).dispatchEvent(msg); // view msg

          (_crd && msgEventMgr === void 0 ? (_reportPossibleCrUseOfmsgEventMgr({
            error: Error()
          }), msgEventMgr) : msgEventMgr).dispatchEvent(msg); // redGuide msg
          // SFRedGuideMgr.dispatchEvent(msg);
        }

        clear() {
          _export("gameMgr", gameMgr = null);
        }

      }); // ()();


      _export("gameMgr", gameMgr = (() => {
        return GameMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GameMgr.js.map