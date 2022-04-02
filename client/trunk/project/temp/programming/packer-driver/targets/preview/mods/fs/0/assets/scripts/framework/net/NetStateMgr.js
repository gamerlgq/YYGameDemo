System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, G, Protocol, ModelLogin, GameConfig, Singleton, gameMgr, msgEventMgr, socketMgr, NetStateMgr, _crd, netStateMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfG(extras) {
    _reporterNs.report("G", "../../app/common/GlobalFunction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoubleBtnDialogArgsType(extras) {
    _reporterNs.report("DoubleBtnDialogArgsType", "../../app/define/ConfigType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../app/define/define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModelLogin(extras) {
    _reporterNs.report("ModelLogin", "../../app/model/model", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameConfig(extras) {
    _reporterNs.report("GameConfig", "../../GameConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmsgEventMgr(extras) {
    _reporterNs.report("msgEventMgr", "../listener/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketMgr(extras) {
    _reporterNs.report("socketMgr", "./SocketMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      G = _unresolved_2.G;
    }, function (_unresolved_3) {
      Protocol = _unresolved_3.Protocol;
    }, function (_unresolved_4) {
      ModelLogin = _unresolved_4.ModelLogin;
    }, function (_unresolved_5) {
      GameConfig = _unresolved_5.GameConfig;
    }, function (_unresolved_6) {
      Singleton = _unresolved_6.Singleton;
    }, function (_unresolved_7) {
      gameMgr = _unresolved_7.gameMgr;
    }, function (_unresolved_8) {
      msgEventMgr = _unresolved_8.msgEventMgr;
    }, function (_unresolved_9) {
      socketMgr = _unresolved_9.socketMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de574jXpsZNAZCHvPro2Kob", "NetStateMgr", undefined);

      NetStateMgr = class NetStateMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        // 构造函数;
        constructor() {
          super();

          _defineProperty(this, "_reconnect", void 0);

          _defineProperty(this, "_request_server_info_time", null);

          _defineProperty(this, "_status", void 0);

          (_crd && msgEventMgr === void 0 ? (_reportPossibleCrUseOfmsgEventMgr({
            error: Error()
          }), msgEventMgr) : msgEventMgr).addEventListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Login.identify, this.loginCheck.bind(this));
          (_crd && msgEventMgr === void 0 ? (_reportPossibleCrUseOfmsgEventMgr({
            error: Error()
          }), msgEventMgr) : msgEventMgr).addEventListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Login.login, this.loginHandler.bind(this));
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).addSlowTick(this.slowTickHandler.bind(this));
        }

        loginCheck(data) {
          var resultCode = data.code;

          if (resultCode == 0) {
            var model = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
              error: Error()
            }), G) : G).getModel(_crd && ModelLogin === void 0 ? (_reportPossibleCrUseOfModelLogin({
              error: Error()
            }), ModelLogin) : ModelLogin);

            if (model && model.getEnterGame()) {
              (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
                error: Error()
              }), socketMgr) : socketMgr).send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                error: Error()
              }), Protocol) : Protocol).Login.login);
            }
          }
        }

        loginHandler(data) {
          var resultCode = data.code;

          if (resultCode == 0) {
            var model = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
              error: Error()
            }), G) : G).getModel(_crd && ModelLogin === void 0 ? (_reportPossibleCrUseOfModelLogin({
              error: Error()
            }), ModelLogin) : ModelLogin);

            if (model && model.getEnterGame()) {
              (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
                error: Error()
              }), socketMgr) : socketMgr).sendInnerMsg((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                error: Error()
              }), Protocol) : Protocol).Inner.ReloginSuccess);
            }
          }
        }

        onSocketChange(event) {
          if (event.type == "close") {
            if (event.code == 4888) {
              return;
            }

            var msg = event.reason;

            if (msg == "") {
              msg = "与战车失去联系，请指挥官检查网络再尝试。";
            }

            this.netWorkError(msg);
            (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
              error: Error()
            }), socketMgr) : socketMgr).sendInnerMsg((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
              error: Error()
            }), Protocol) : Protocol).Inner.FightPause);
          } else if (event.type == "open") {
            if (this._reconnect) {
              this.relogin();
              (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
                error: Error()
              }), socketMgr) : socketMgr).sendInnerMsg((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
                error: Error()
              }), Protocol) : Protocol).Inner.FightResume);
            }
          }

          this._status = event.type;
        } // 返回登录界面


        redirectLoginView() {
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).reRun();
        } // 重新链接


        socketReconnect() {
          this._reconnect = true;
          (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
            error: Error()
          }), socketMgr) : socketMgr).reConnect();
        }

        relogin() {
          var model = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).getModel(_crd && ModelLogin === void 0 ? (_reportPossibleCrUseOfModelLogin({
            error: Error()
          }), ModelLogin) : ModelLogin);

          if (model && !model.getEnterGame()) {
            return;
          }

          var loginData = model.getLoginData();
          var deviceInfo = (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).getDeviceInfo();
          (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
            error: Error()
          }), socketMgr) : socketMgr).send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Login.identify, {
            user_id: loginData.user_id,
            user_key: loginData.user_key,
            channel_key: _crd && GameConfig === void 0 ? (_reportPossibleCrUseOfGameConfig({
              error: Error()
            }), GameConfig) : GameConfig,
            device_id: deviceInfo.IMEI
          });
        }

        netWorkError(msg) {
          if (msg == "" || msg == undefined) {
            msg = "与战车失去联系，请指挥官检查网络再尝试。";
          }

          var args = {
            msg: msg,
            leftBtnName: "",
            rightBtnName: "确定",
            leftCallback: () => {// this.redirectLoginView();
            },
            rightCallback: () => {
              // this.socketReconnect();
              this.redirectLoginView();
            },
            hideLeftButton: true
          };
          (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).showDoubleBtnDialog(args);
        } // 请求更新更新服务器时间


        requestServerInfo() {
          if (this._status != "open") {
            return;
          }

          var model = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).getModel(_crd && ModelLogin === void 0 ? (_reportPossibleCrUseOfModelLogin({
            error: Error()
          }), ModelLogin) : ModelLogin);

          if (model && !model.getEnterGame()) {
            return;
          }

          this._request_server_info_time = this._request_server_info_time || new Date().getTime();
          var now = new Date().getTime();
          var spaceTime = Math.abs(now - this._request_server_info_time); // -- 20s同步一次

          if (spaceTime < 20000) {
            return;
          }

          this._request_server_info_time = now;
          (_crd && socketMgr === void 0 ? (_reportPossibleCrUseOfsocketMgr({
            error: Error()
          }), socketMgr) : socketMgr).send((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Server.game_info);
        }

        slowTickHandler(dt) {
          this.requestServerInfo();
        }

        clear() {
          _export("netStateMgr", netStateMgr = null);
        }

      }; // ()();

      _export("netStateMgr", netStateMgr = (() => {
        return NetStateMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetStateMgr.js.map