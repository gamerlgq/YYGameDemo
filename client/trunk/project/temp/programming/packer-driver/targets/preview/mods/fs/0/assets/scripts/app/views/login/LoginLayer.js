System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Animation, gameMgr, sceneMgr, LayerBase, G, Protocol, ViewProtocol, ModelLogin, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, LoginLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../../../framework/core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../framework/ui/LayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfG(extras) {
    _reporterNs.report("G", "../../common/GlobalFunction", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProtocol(extras) {
    _reporterNs.report("Protocol", "../../define/Protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewProtocol(extras) {
    _reporterNs.report("ViewProtocol", "../../define/ViewProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModelLogin(extras) {
    _reporterNs.report("ModelLogin", "../../model/model", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      gameMgr = _unresolved_2.gameMgr;
    }, function (_unresolved_3) {
      sceneMgr = _unresolved_3.sceneMgr;
    }, function (_unresolved_4) {
      LayerBase = _unresolved_4.LayerBase;
    }, function (_unresolved_5) {
      G = _unresolved_5.G;
    }, function (_unresolved_6) {
      Protocol = _unresolved_6.Protocol;
    }, function (_unresolved_7) {
      ViewProtocol = _unresolved_7.ViewProtocol;
    }, function (_unresolved_8) {
      ModelLogin = _unresolved_8.ModelLogin;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e311uFCKpJ7qVxFozPyvzF", "LoginLayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginLayer", LoginLayer = (_dec = ccclass('LoginLayer'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class LoginLayer extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "serverName", _descriptor, this);

          _initializerDefineProperty(this, "versionLbl", _descriptor2, this);

          _defineProperty(this, "_rootNode", null);
        }

        start() {
          // super.onLoad();
          this._rootNode = this.node.parent; // set version

          if (this.versionLbl) {// FileHelper.load("Txt/showVer", (data) => {
            //     cc.log("showVer txt:", data.text);
            //     let showVer = data.text || "1.0";
            //     let realVer = GameConfig.realVer || "0.0";
            //     this.versionLbl.string = "ver " + showVer.toString() + "." + realVer.toString();
            // });
          }

          this.addMsgListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Login.identify, this._onIdentifyHandler.bind(this));
          this.addMsgListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Login.login, this._onLoginHandler.bind(this));
          this.addMsgListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Inner.SelectServer, this._onSelectServerHandler.bind(this));
          this.addMsgListener((_crd && Protocol === void 0 ? (_reportPossibleCrUseOfProtocol({
            error: Error()
          }), Protocol) : Protocol).Inner.CloseNoticeView, this.playShowEnterBtnAnimate.bind(this)); // 新手引导层

          this._addNewGuideLayer(() => {
            this._serverInfoRequest();
          });
        }

        _onIdentifyHandler(data) {// let model = gameMgr.getModel(ModelLogin);
          // let serverData = model.getSelectServerData();
          // let param: any = {};
          // let serverInfo: any = {};
          // serverInfo.address = serverData.address;
          // serverInfo.port = serverData.port;
          // serverInfo.id = serverData.id;
          // param.serverInfo = serverInfo;
          // socketMgr.send(Protocol.Login.login);
        }

        _onLoginHandler(data) {
          // if (data.code == 0) {
          this._enterGame(); // } else if (data.code == 1) {
          // SocketMgr.getInstance().send(Protocol.Login.creator);
          // }

        }

        _onSelectServerHandler(data) {// let model = gameMgr.getModel(ModelLogin);
          // let serverData = model.getSelectServerData();
          // this.serverName.string = serverData.name;
          // storage.set("SelectServerData",serverData)
        }

        _addNewGuideLayer(cb) {
          // ResourcesLoader.load("prefab/xinshou_ui/xinshou_mai_ui", (prefab: Prefab) => {
          //     let layer = instantiate(prefab);
          //     sceneMgr.setNewGuideLayer(layer);
          cb(); // });
        }

        _serverInfoRequest() {
          // httpMgr.get((msg) => {
          // if (msg.code == 0) {
          //     let data = msg.data;
          //     let serverList = data.sg[0].sl;
          //     if (!serverList || serverList.length == 0) {
          //         GlobalFunction.ShowMsgTips(GetTranslateCode(175));
          //         return;
          //     }
          // let model = gameMgr.getModel(ModelServerInfo);
          // model.setSeverList(serverList);
          this._openLoginAccount(); // } else {
          //     GlobalFunction.ShowMsgTips(GetTranslateCode(176));
          // }
          // }, GameConfig.ServerListUrl + "/static/server/" + GameConfig.QDKey + ".json");

        }

        _openLoginAccount() {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).LoginAccountLayer);
        }

        _connectServer() {
          var model = (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).getModel(_crd && ModelLogin === void 0 ? (_reportPossibleCrUseOfModelLogin({
            error: Error()
          }), ModelLogin) : ModelLogin);
          var loginData = model.getLoginData(); // GET service + /client/which_server?user_id=xxx&channel_key=xxxxx&version=yyyy
          // user_id 账号唯一标识 内网包是上面接口的user_id sdk包是sdk唯一用户id
          // channel_key 渠道key
          // version 客户端版本
          // let realVer = GameConfig.realVer || "0.0";
          // let channelKey = GameConfig.QDKey;
          // let url =
          //     GameConfig.ServerUrl +
          //     "/client/which_server?user_id=" +
          //     loginData.user_id +
          //     "&channel_key=" +
          //     channelKey +
          //     "&version=" +
          //     realVer;
          // httpMgr.get((msg) => {
          //     if (msg.code == 0) {
          //         if (msg.data.result_code == 0) {
          //             let serverId = msg.data.server_id;
          //             let modelServer = gameMgr.getModel(ModelServerInfo);
          //             let serverData = modelServer.getServerInfoById(serverId);
          //             model.setSelectServerData(serverData);
          //             socketMgr.connect(
          //                 serverData.address,
          //                 serverData.port,
          //                 (event) => {
          //                     //打点
          //                     let param: any = {};
          //                     let serverInfo: any = {};
          //                     serverInfo.address = serverData.address;
          //                     serverInfo.port = serverData.port;
          //                     serverInfo.id = serverData.id;
          //                     param.serverInfo = serverInfo;

          this._loginServer(); //                 },
          //                 (event) => {
          //                     log(event);
          //                 }
          //             );
          //         } else {
          //             G.showMsgTips(GetTranslateCode(178));
          //         }
          //     }
          // }, url);

        }

        _loginServer() {
          // let model = gameMgr.getModel(ModelLogin);
          // let loginData = model.getLoginData();
          // let deviceInfo = gameMgr.getDeviceInfo();
          // socketMgr.send(Protocol.Login.identify, {
          //     user_id: loginData.user_id,
          //     user_key: loginData.user_key,
          //     channel_key: GameConfig.QDKey,
          //     device_id: deviceInfo.IMEI,
          // });
          // 单机模式直接进入游戏
          this._enterGame();
        }

        _enterGame() {
          //打点
          // logDot(DotIDS.loginGameSuccess);
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).ResLoadingLayer); // 功能开启监听层
          // sceneMgr.sendCreateView(ViewProtocol.SystemOpenLayer);
          // model.setEnterGame(true);
          // NotifyHelper.getInstance().startNotify();
        } // 点击进入游戏


        onClickEnterGameBtn(event, customEventData) {
          this._enterGame();
        } // 点击打开服务器列表


        onClickServerListBtn(event, customEventData) {
          (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).showMsgTips("系统未开发");
        }

        playShowEnterBtnAnimate() {
          var com = this._rootNode.getComponent(Animation);

          com.play();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "versionLbl", [_dec3], {
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
//# sourceMappingURL=LoginLayer.js.map