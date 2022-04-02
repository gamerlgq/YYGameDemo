System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, EditBox, sceneMgr, storage, LayerBase, G, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, LoginAccountLayer;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstorage(extras) {
    _reporterNs.report("storage", "../../../framework/core/storage/Storage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../framework/ui/LayerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfG(extras) {
    _reporterNs.report("G", "../../common/GlobalFunction", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      storage = _unresolved_3.storage;
    }, function (_unresolved_4) {
      LayerBase = _unresolved_4.LayerBase;
    }, function (_unresolved_5) {
      G = _unresolved_5.G;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c0d37C7exKZ6j6aPNj6qaI", "LoginAccountLayer", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginAccountLayer", LoginAccountLayer = (_dec = ccclass('LoginAccountLayer'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(EditBox), _dec(_class = (_class2 = (_temp = class LoginAccountLayer extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "editAccount", _descriptor, this);

          _initializerDefineProperty(this, "editPassword", _descriptor2, this);

          _initializerDefineProperty(this, "editDirectLogin", _descriptor3, this);
        }

        onLoad() {
          super.onLoad();
        }

        start() {
          let userName = (_crd && storage === void 0 ? (_reportPossibleCrUseOfstorage({
            error: Error()
          }), storage) : storage).get("LoginUserName");

          if (userName) {
            this.editAccount.string = userName;
          }

          let pwd = (_crd && storage === void 0 ? (_reportPossibleCrUseOfstorage({
            error: Error()
          }), storage) : storage).get("LoginPassWord");

          if (pwd) {
            this.editPassword.string = pwd;
          }
        }

        onEditDirectLoginEnded(editbox, customEventData) {//登录串
          // let directLoginKey = this.editDirectLogin.string;
          // gameMgr.getModel(ModelLogin).setDirectLoginKey(directLoginKey);
        }

        onClickRegBtn() {
          (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).showMsgTips("暂未开启!");
        }

        onClickLoginBtn() {
          let userName = this.editAccount.string;
          let passWord = this.editPassword.string;

          if (userName == "") {
            (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
              error: Error()
            }), G) : G).showMsgTips("账号不能为空!");
            return;
          }

          if (passWord == "") {
            (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
              error: Error()
            }), G) : G).showMsgTips("密码不能为空!");
            return;
          }

          this._login(userName, passWord);
        }

        _login(userName, passWord) {
          //@ts-ignore
          // let url = GameConfig.ServerUrl + "/client/login";
          // httpMgr.post(
          //     (msg) => {
          //         log(msg);
          //         if (msg.code == 0) {
          //             log(msg.data);
          //             if (msg.data.result_code == 0) {
          (_crd && storage === void 0 ? (_reportPossibleCrUseOfstorage({
            error: Error()
          }), storage) : storage).set("LoginUserName", userName);
          (_crd && storage === void 0 ? (_reportPossibleCrUseOfstorage({
            error: Error()
          }), storage) : storage).set("LoginPassWord", passWord); //                 let model = gameMgr.getModel(ModelLogin);
          // model.setLoginData(msg.data);
          // sceneMgr.removeTableLayer();
          // sceneMgr.sendCreateView()
          // GlobalFunction.ShowMsgTips(GetTranslateCode(174));
          //打点

          this._checkShowIDVerify(0); //msg.data.user_id);
          // } else {
          // GlobalFunction.ShowMsgTips(msg.data.msg);
          // }
          // }
          // },
          // url,
          // {
          // username: userName,
          // password: passWord,
          // }
          // );

        } // 实名认证


        _checkShowIDVerify(userId) {
          // 实名验证开关
          // let sw = storage.get("idcard_verify");
          // if (sw == null || sw == undefined) {
          //     sw = 1;
          // }
          // if (sw == 0) {
          //     this._showNotice();
          //     return;
          // }
          //@ts-ignore
          // let url = GameConfig.ServerUrl + "/client/is_verify?youai_id=" + userId;
          // httpMgr.get((msg) => {
          //     log(msg);
          //     let code = msg.data.code;
          //     if (code == 1) {
          //         // 1提交了没出结果
          //         sceneMgr.sendCreateView(ViewProtocol.IDCardWaitTips, {
          //             callback: () => {
          // this._showNotice();
          // },
          // });
          // } else if (code == 2) {
          // "code": -1后台出错 0没记录需要提交 1提交了没出结果 2认证通过(才有下面数据) 3认证不通过
          // "birthday" "1999-01-01'
          // "age": 年龄
          // msg.age = 17;
          // if (msg.data.age < 18) {
          //     let args = {
          //         msg: GetTranslateCode(170),
          //         hideLeftButton: true,
          //         rightBtnName: GetTranslateCode(136),
          //         rightCallback: () => {
          //             sceneMgr.sendCreateView(ViewProtocol.AccountLayer);
          //         },
          //     };
          //     G.ShowDoubleBtnDialog(args);
          // } else {
          this._showNotice(); // }
          // } else {
          // sceneMgr.endCreateView(ViewProtocol.IDCardLayer, {
          // callback: () => {
          // this._showNotice();
          // },
          // });
          // }
          // }, url);

        }

        _showNotice() {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).popTableLayer();
          (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).showNotice();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "editAccount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "editPassword", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "editDirectLogin", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LoginAccountLayer.js.map