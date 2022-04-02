System.register("chunks:///_virtual/ModelBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, modelEventMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      modelEventMgr = module.modelEventMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "03be8idJ6FGOZshqaF356xJ", "ModelBase", undefined);

      class ModelBase {
        constructor() {
          _defineProperty(this, "_handles", new Map());
        }

        regMsg(eventName, listener) {
          let handle = modelEventMgr.addEventListener(eventName, listener);
          if (this._handles.get(handle) != null) return;

          this._handles.set(handle, eventName);
        }

        unRegMsgAll() {
          this._handles.forEach((value, key) => {
            modelEventMgr.removeEventListener(value, key);
          });

          this._handles.clear;
        }

      }

      exports('ModelBase', ModelBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainCityUI.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ViewProtocol.ts', './ComponentBase.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, ViewProtocol, ComponentBase, sceneMgr;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "03d504BvJdIb71Nc2fZz7eP", "MainCityUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let MainCityUI = exports('MainCityUI', (_dec = ccclass('MainCityUI'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class MainCityUI extends ComponentBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "roleName", _descriptor, this);
        }

        start() {
          this.roleName.setString("麦坤雄");
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onClickBattleBtn(event, customEventData) {
          sceneMgr.sendCreateView(ViewProtocol.FightFormation);
        }

        onClickQuestionBtn(event, customEventData) {
          sceneMgr.sendCreateView(ViewProtocol.PreviewReward);
        }

        onClickAddRes1Btn(event, customEventData) {
          sceneMgr.sendCreateView(ViewProtocol.Tips, customEventData);
        }

        onClickAddRes2Btn(event, customEventData) {
          sceneMgr.sendCreateView(ViewProtocol.Tips, customEventData);
        }

        onClickChat() {
          sceneMgr.sendCreateView(ViewProtocol.ChatLayer);
        }

      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "roleName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TranslateMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './DataMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton, dataMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      dataMgr = module.dataMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "06b17em9YVHnan2vSxdAkS6", "TranslateMgr", undefined);

      class TranslateMgr extends Singleton {
        // 缓存
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_translateCfg", {});
        }

        loadCodeCfg(fileName) {
          this._translateCfg = dataMgr.getData(fileName);
        } // loadPBCfg(fileName: string) {
        //     this._translatePBCfg = dataMgr.getData(fileName);
        // }
        // getPBStr(key: string) {
        //     return this._translatePBCfg[key] || key;
        // }
        // loadExCfg(fileName: string) {
        //     this._translateExCfg = dataMgr.getData(fileName);
        // }
        // getExStr(key: string) {
        //     return this._translateExCfg[key] || key;
        // }


        translate(id) {
          return this._getTranslateStr("t" + id);
        }

        translateData(key) {
          return this._getTranslateStr(key);
        }

        _getTranslateStr(key) {
          return this._translateCfg[key] || key;
        }

        clear() {
          translateMgr = exports('translateMgr', null);
        }

      } // 代码翻译
      // export function translate(id: number): string {
      //     return translateMgr.getTranslateStr("t" + id);
      // }
      // // 预制体翻译
      // export function GetTranslatePB(id: number): string {
      //     return TranslateMgr.getInstance().getPBStr("p" + id);
      // }
      // // 数值表翻译
      // export function GetTranslateEx(id: number | string): string {
      //     return TranslateMgr.getInstance().getExStr("e" + id);
      // }
      // ()();


      let translateMgr = exports('translateMgr', (() => {
        return TranslateMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionSpineAnim.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ActionBase.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, tween, ActionBase;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
    }, function (module) {
      ActionBase = module.ActionBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0766d8/jMxHtabr8Fyl7udc", "ActionSpineAnim", undefined);

      class ActionSpineAnim extends ActionBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_callback", null);
        }
        /**
         * 
         * @param data FightActionData
         * @param actionName 
         * @param callback 
         * @param isLoop 
         */


        play(data, callback) {
          let node = data.own;
          let config = data.animCfg;
          let params = config.params;
          let actionName = params[0];
          let isLoop = params[1];
          this._callback = callback;
          node.setAnimateEndCallback(this._done.bind(this)); // this._checkBloodChange(actionName,data); 

          return tween(node).call(() => {
            node.play(actionName, isLoop);
          });
        } // private _checkBloodChange(actionName:string,data:FightActionData) {
        //     if (actionName == yy.macro.HeroAnimate.Hurt) {
        //         // fightBloodMgr.check(data);
        //     }
        // }


        _done(trackEntry) {
          if (this._callback) {
            this._callback(trackEntry);
          }

          this.done();
        }

        done() {}

      }

      exports('ActionSpineAnim', ActionSpineAnim);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TouchMain.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts', './ViewRegisterMgr.ts', './functions.ts', './TouchEffect.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, instantiate, Node, UITransform, ResourcesLoader, viewRegisterMgr, v2ToV3, TouchEffect;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      instantiate = module.instantiate;
      Node = module.Node;
      UITransform = module.UITransform;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      v2ToV3 = module.v2ToV3;
    }, function (module) {
      TouchEffect = module.TouchEffect;
    }],
    execute: function () {
      var _dec, _dec2, _class, _temp;

      cclegacy._RF.push({}, "07f96QCi8NPXKI0euATCSL4", "TouchMain", undefined);

      const {
        ccclass,
        property,
        disallowMultiple
      } = _decorator;
      /**
       * Predefined variables
       * Name = TouchMain
       * DateTime = Tue Mar 22 2022 19:57:53 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TouchMain.ts
       * FileBasenameNoExtension = TouchMain
       * URL = db://assets/scripts/app/views/common/TouchMain.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let TouchMain = exports('TouchMain', (_dec = ccclass('TouchMain'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = (_temp = class TouchMain extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_touchEffectNode", void 0);

          _defineProperty(this, "_touchEffectComp", void 0);
        }

        onLoad() {}

        start() {
          let viewInfo = viewRegisterMgr.getViewInfo("commonUI", "TouchEffect");
          ResourcesLoader.loadWithViewInfo(viewInfo, pre => {
            this._touchEffectNode = instantiate(pre);
            this.node.addChild(this._touchEffectNode);
            this._touchEffectNode.active = false;
            this._touchEffectComp = this._touchEffectNode.getChildByName("ScriptNode").getComponent(TouchEffect);
          }, false);
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this); // this.node.eventProcessor
          // input.on(Input.EventType.MOUSE_UP, this.onTouchEnd, this)
        }

        onTouchEnd(event) {
          event.preventSwallow = true;
        }

        onTouchStart(event) {
          event.preventSwallow = true;

          if (!this._touchEffectNode) {
            return;
          }

          let pos = event.getUILocation();
          let nodePos = this.node.getComponent(UITransform).convertToNodeSpaceAR(v2ToV3(pos));
          this._touchEffectNode.position = nodePos;

          this._touchEffectComp.play();
        }

        onTouchMove(event) {
          event.preventSwallow = true;
        }

        onTouchCancel(event) {
          event.preventSwallow = true;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator.ts", ['cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, instantiate, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, sceneMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "08dafVRV0lIIo3dTejhgl2o", "Creator", undefined);

      class LoginCreator extends ViewCreatorBase {
        onInit() {
          this.regMsg(ViewProtocol.LoginLayer, this.onCreateLoginView.bind(this));
          this.regMsg(ViewProtocol.LoginAccountLayer, this.onCreateAccountLayer.bind(this));
          this.regMsg(ViewProtocol.UserAgreementLayer, this.onCreateUserAgreementLayer.bind(this));
          this.regMsg(ViewProtocol.PrivacyPolicyLayer, this.onCreatePrivacyPolicyLayer.bind(this));
          this.regMsg(ViewProtocol.NoticeView, this.onCreateNoticeView.bind(this));
        }

        onCreateLoginView(event) {
          //创建登录界面
          let viewInfo = viewRegisterMgr.getViewInfo("login", "LoginLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.replaceMainLayer(node, viewInfo.View);
          });
        }

        onCreateAccountLayer(event) {
          //账号界面
          let viewInfo = viewRegisterMgr.getViewInfo("login", "LoginAccountLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

        onCreateUserAgreementLayer(event) {
          //用户协议
          let viewInfo = viewRegisterMgr.getViewInfo("login", "UserAgreementLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

        onCreatePrivacyPolicyLayer(event) {
          //隐私政策
          let viewInfo = viewRegisterMgr.getViewInfo("login", "PrivacyPolicyLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

        onCreateNoticeView(event) {
          //隐私政策
          let viewInfo = viewRegisterMgr.getViewInfo("login", "NoticeView");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
            let msg = event.getRawData();
            let child = node.getChildByName("ScriptNode");
            let comp = child.getComponent("NoticeView");
            comp.updateView(msg);
          });
        }

      }

      exports('LoginCreator', LoginCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './TableContentLayer.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Node, Widget, widgetManager, TableContentLayer;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Widget = module.Widget;
      widgetManager = module.widgetManager;
    }, function (module) {
      TableContentLayer = module.TableContentLayer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "09740vnHVdAM5cPIYhl4v9i", "TableLayer", undefined);

      class TableLayer extends Node {
        constructor() {
          super(); //全屏

          _defineProperty(this, "_bgLayer", void 0);

          _defineProperty(this, "_contentLayer", void 0);

          _defineProperty(this, "_uiLayer", void 0);

          _defineProperty(this, "_subContent", void 0);

          _defineProperty(this, "_subContentList", void 0);

          let widget = this.addComponent(Widget);
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
          this._bgLayer = new Node();
          this.addChild(this._bgLayer);
          this._contentLayer = new TableContentLayer();
          this.addChild(this._contentLayer);
          this._uiLayer = new Node();
          this.addChild(this._uiLayer);
          this._subContent = new Node();
          this.addChild(this._subContent);
        }

        clearAll() {
          this._bgLayer.removeAllChildren();

          this._contentLayer.clearAll();

          this._uiLayer.removeAllChildren();

          this._subContent.removeAllChildren();
        }

        appendSubContent(layer) {
          this._subContent.addChild(layer);

          this._subContentList.push(layer);

          layer.on("exit", () => {
            // 如果发现顶层没有pop掉就pop一下
            let topLayer = this._subContentList[this._subContentList.length - 1];

            if (topLayer == layer) {
              this._subContentList.pop();
            }
          });
        }

        popSubContent() {
          let layer = this._subContentList.pop();

          if (layer != null) {
            layer.removeFromParent();
            layer.destroy();
            return true;
          }

          return false;
        }

        getSubContent() {
          return this._subContent;
        }

        getUILayer() {
          return this._uiLayer;
        }

        getContentLayer() {
          return this._contentLayer;
        }

        getBgLayer() {
          return this._bgLayer;
        }

        isEmpty() {
          let childCount = this._uiLayer.children.length + this._contentLayer.children.length + this._bgLayer.children.length + this._subContent.children.length;
          return 0 >= childCount;
        }

        setContentLayerVisible(flag) {
          let contentLayer = this.getContentLayer();

          if (flag == false) {
            contentLayer.hide();
          } else {
            contentLayer.show();
          }
        }

        getLayerName() {
          if (this._subContent.name != "New Node") {
            return this._subContent.name;
          }

          if (this._contentLayer.name != "New Node") {
            return this._contentLayer.name;
          }

          if (this._uiLayer.name != "New Node") {
            return this._uiLayer.name;
          }

          if (this._bgLayer.name != "New Node") {
            return this._bgLayer.name;
          }
        }

      }

      exports('TableLayer', TableLayer);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Md5.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('md5', md5);

      cclegacy._RF.push({}, "0c84ez5VEZDIoBzPnQonY0a", "Md5", undefined);

      function md5(md5str) {
        var createMD5String = function (string) {
          var x = Array();
          var k, AA, BB, CC, DD, a, b, c, d;
          var S11 = 7,
              S12 = 12,
              S13 = 17,
              S14 = 22;
          var S21 = 5,
              S22 = 9,
              S23 = 14,
              S24 = 20;
          var S31 = 4,
              S32 = 11,
              S33 = 16,
              S34 = 23;
          var S41 = 6,
              S42 = 10,
              S43 = 15,
              S44 = 21;
          string = uTF8Encode(string);
          x = convertToWordArray(string);
          a = 0x67452301;
          b = 0xEFCDAB89;
          c = 0x98BADCFE;
          d = 0x10325476;

          for (k = 0; k < x.length; k += 16) {
            AA = a;
            BB = b;
            CC = c;
            DD = d;
            a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
            d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
            c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
            b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
            a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
            d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
            c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
            b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
            a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
            d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
            c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
            b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
            a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
            d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
            c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
            b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
            a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
            d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
            c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
            b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
            a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
            d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
            c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
            b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
            a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
            d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
            c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
            b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
            a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
            d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
            c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
            b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
            a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
            d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
            c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
            b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
            a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
            d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
            c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
            b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
            a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
            d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
            c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
            b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
            a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
            d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
            c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
            b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
            a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
            d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
            c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
            b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
            a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
            d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
            c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
            b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
            a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
            d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
            c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
            b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
            a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
            d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
            c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
            b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
            a = addUnsigned(a, AA);
            b = addUnsigned(b, BB);
            c = addUnsigned(c, CC);
            d = addUnsigned(d, DD);
          }

          var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
          return tempValue.toLowerCase();
        };

        var rotateLeft = function (lValue, iShiftBits) {
          return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
        };

        var addUnsigned = function (lX, lY) {
          var lX4, lY4, lX8, lY8, lResult;
          lX8 = lX & 0x80000000;
          lY8 = lY & 0x80000000;
          lX4 = lX & 0x40000000;
          lY4 = lY & 0x40000000;
          lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
          if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;

          if (lX4 | lY4) {
            if (lResult & 0x40000000) return lResult ^ 0xC0000000 ^ lX8 ^ lY8;else return lResult ^ 0x40000000 ^ lX8 ^ lY8;
          } else {
            return lResult ^ lX8 ^ lY8;
          }
        };

        var F = function (x, y, z) {
          return x & y | ~x & z;
        };

        var G = function (x, y, z) {
          return x & z | y & ~z;
        };

        var H = function (x, y, z) {
          return x ^ y ^ z;
        };

        var I = function (x, y, z) {
          return y ^ (x | ~z);
        };

        var FF = function (a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };

        var GG = function (a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };

        var HH = function (a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };

        var II = function (a, b, c, d, x, s, ac) {
          a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
          return addUnsigned(rotateLeft(a, s), b);
        };

        var convertToWordArray = function (string) {
          var lWordCount;
          var lMessageLength = string.length;
          var lNumberOfWordsTempOne = lMessageLength + 8;
          var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - lNumberOfWordsTempOne % 64) / 64;
          var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
          var lWordArray = Array(lNumberOfWords - 1);
          var lBytePosition = 0;
          var lByteCount = 0;

          while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
          }

          lWordCount = (lByteCount - lByteCount % 4) / 4;
          lBytePosition = lByteCount % 4 * 8;
          lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
          lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
          lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
          return lWordArray;
        };

        var wordToHex = function (lValue) {
          var WordToHexValue = '',
              WordToHexValueTemp = '',
              lByte,
              lCount;

          for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> lCount * 8 & 255;
            WordToHexValueTemp = '0' + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
          }

          return WordToHexValue;
        };

        var uTF8Encode = function (string) {
          string = string.toString().replace(/\x0d\x0a/g, '\x0a');
          var output = '';

          for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);

            if (c < 128) {
              output += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
              output += String.fromCharCode(c >> 6 | 192);
              output += String.fromCharCode(c & 63 | 128);
            } else {
              output += String.fromCharCode(c >> 12 | 224);
              output += String.fromCharCode(c >> 6 & 63 | 128);
              output += String.fromCharCode(c & 63 | 128);
            }
          }

          return output;
        };

        return createMD5String(md5str);
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DInertiaMove.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './functions.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, v2, v3, posAdd;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      v2 = module.v2;
      v3 = module.v3;
    }, function (module) {
      posAdd = module.posAdd;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "0ee90D04ShDIq1wz1y6HZrV", "DInertiaMove", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = DInertiaMove
       * DateTime = Tue Mar 15 2022 11:02:34 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = DInertiaMove.ts
       * FileBasenameNoExtension = DInertiaMove
       * URL = db://assets/scripts/framework/ui/DInertiaMove.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       * 惯性移动组件
       */

      let DInertiaMove = exports('DInertiaMove', (_dec = ccclass('DInertiaMove'), _dec(_class = (_temp = class DInertiaMove extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_autoOffPos", void 0);

          _defineProperty(this, "drag", 0.97);

          _defineProperty(this, "isAutoScrolling", false);

          _defineProperty(this, "_minX", void 0);

          _defineProperty(this, "_maxX", void 0);

          _defineProperty(this, "_onStop", void 0);
        }

        get onStop() {
          return this._onStop;
        }

        set onStop(value) {
          this._onStop = value;
        }

        start() {}

        move(byPos, minX, maxX) {
          this._autoOffPos = byPos;
          this.isAutoScrolling = true;
          this._minX = minX;
          this._maxX = maxX;
        }

        stop() {
          this.isAutoScrolling = false;
          this._autoOffPos = v2(0, 0);
          this.onStop && this.onStop();
        }

        update(deltaTime) {
          if (this.isAutoScrolling) {
            this._autoOffPos = this._autoOffPos.multiplyScalar(this.drag); //判断结束

            let newPos = this.node.position.clone().add(v3(this._autoOffPos.x, this._autoOffPos.y));

            if (this._minX && newPos.x < this._minX) {
              newPos.x = this._minX;
            }

            if (this._maxX && newPos.x > this._maxX) {
              newPos.x = this._maxX;
            }

            let dis = newPos.subtract(this.node.position).length();
            if (dis < 2) this.stop();else {
              posAdd(this.node, this._autoOffPos, this._minX, this._maxX);
            }
          }
        }

      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResLoadingLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts', './ViewProtocol.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Label, ProgressBar, _decorator, Component, ResourcesLoader, ViewProtocol, viewRegisterMgr, sceneMgr;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "0f6bevBYoJHZ7pWrS8+lq/v", "ResLoadingLayer", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let ResLoadingLayer = exports('ResLoadingLayer', (_dec = ccclass('ResLoadingLayer'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class ResLoadingLayer extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "percent", _descriptor, this);

          _initializerDefineProperty(this, "bar", _descriptor2, this);

          _defineProperty(this, "_loadingResList", null);
        }

        start() {
          this.bar.progress = 0;
          this.percent.string = "0%";

          this._getLoadingList();

          this._startPreload();
        }

        _getLoadingList() {
          this._loadingResList = viewRegisterMgr.getPreloadPrefabs();
        }

        _startPreload() {
          ResourcesLoader.loadList(this._loadingResList, (finishNum, maxNum) => {
            let oldVal = this.bar.progress;
            let newVal = finishNum / maxNum;

            if (newVal < oldVal) {
              newVal = oldVal;
            }

            this.bar.progress = newVal;
            this.percent.string = Math.floor(newVal * 100) + "%";
          }, () => {
            this._goGameView();
          });
        }

        _goGameView() {
          sceneMgr.sendCreateView(ViewProtocol.MainCityLayer); // let modelNewGuide: ModelNewGuide = GameMgr.getInstance().getModel(
          //     "ModelNewGuide"
          // );
          // let task = modelNewGuide.getNewGuideTask(1);
          // task._guideID = 1;        
          // if (
          //     !modelNewGuide.isGuideFinish(task._guideID) &&
          //     SceneMgr.getInstance().getNewGuideLayer()
          // ) {
          //     this.node.active = false;
          //     let godGuide = SceneMgr.getInstance()
          //         .getNewGuideLayer()
          //         .getComponent("GodGuide");
          //     godGuide.setTask(task);
          //     godGuide.run(() => {
          //         //打点
          //         logDot(DotIDS.enterGame);
          //         SceneMgr.getInstance().openUI(ViewFlags.FightMain);
          //     });
          // } else {
          //     //打点
          //     logDot(DotIDS.enterGame);
          //     SceneMgr.getInstance().openUI(ViewFlags.FightMain);
          // }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "percent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator2.ts", ['cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './define.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, instantiate, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, sceneMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, null, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "13f3bZij8ZB85JAfo7zlrsg", "Creator", undefined);

      class MainCityCreator extends ViewCreatorBase {
        onInit() {
          this.regMsg(ViewProtocol.MainCityLayer, this._onCreateMainCityLayer.bind(this));
        }

        _onCreateMainCityLayer() {
          let viewInfo = viewRegisterMgr.getViewInfo("maincity", "MainCityUI");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let uiNode = instantiate(data);

            this._loadBg(bg => {
              let bgNode = instantiate(bg);
              sceneMgr.replaceMainLayer(bgNode, viewInfo.System);
              bgNode.addChild(uiNode);
            });
          });
        }

        _loadBg(callback) {
          //创建主城界面
          let viewInfo = viewRegisterMgr.getViewInfo("maincity", "MainCityLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            if (callback) {
              callback(data);
            }
          });
        }

      }

      exports('MainCityCreator', MainCityCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GlobalFunction.ts", ['cc', './GameMgr.ts', './ViewProtocol.ts', './DataMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, director, gameMgr, ViewProtocol, dataMgr, sceneMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
    }, function (module) {
      gameMgr = module.gameMgr;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      dataMgr = module.dataMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      exports('G', void 0);

      cclegacy._RF.push({}, "14f8c8knYRBY4gY+yPGS5r6", "GlobalFunction", undefined);
      /**
       * 通用全局函数
       */


      let G;

      (function (_G) {
        function showDoubleBtnDialog(args) {
          //主场景
          if (director.getScene().name == "Main") {
            sceneMgr.sendCreateView(ViewProtocol.DoubleBtnDialog, args);
          } // } else {
          //     let msgData = new SFMessage(ViewFlags.DoubleBtnDialog, args);
          //     LoaderEventMgr.getInstance().dispatchEvent(msgData);
          // }

        }

        _G.showDoubleBtnDialog = showDoubleBtnDialog;

        function getConfig(dataHandlerName, namekey) {
          return dataMgr.getData(dataHandlerName, namekey);
        }

        _G.getConfig = getConfig;

        function getModel(modelConstructor) {
          return gameMgr.getModel(modelConstructor);
        }

        _G.getModel = getModel;

        function showMsgTips(tips) {
          sceneMgr.sendCreateView(ViewProtocol.Tips, tips);
        }

        _G.showMsgTips = showMsgTips;

        function showNotice(callback) {
          let url = `http://192.168.0.122:8080/notice.jpg`; // {
          //   "html_id": 1, // 实际html id
          //   "start": 1590935388, // 开始时间
          //   "end": 1626767612 // 结束时间
          //  }
          // httpMgr.get((msg) => {
          // log(msg)
          // if (msg.code == 0) {
          // if (msg.data.start) {
          //     var date = new Date();
          //     let curTime = date.getTime() / 1000;
          //     let realVer = GameConfig.realVer || "0.0";
          //     //获取成功
          //     if (
          //         realVer == msg.data.version &&
          //         curTime > msg.data.start &&
          //         curTime < msg.data.end
          //     ) {

          sceneMgr.sendCreateView(ViewProtocol.NoticeView, [url, callback]); //     } else {
          //         if (callback) {
          //             callback();
          //         }
          //     }
          // } else {
          //     if (callback) {
          //         callback();
          //     }
          // GlobalFunction.ShowMsgTips(GetTranslateCode(29));
          // }
          // } else {
          // GlobalFunction.ShowMsgTips(GetTranslateCode(29));
          // }
          // }, url);
        }

        _G.showNotice = showNotice;
      })(G || (G = exports('G', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataParserBase.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "15e69eVihtG14K7IlY9goh8", "DataParserBase", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-03 09:05:47
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-05 14:24:13
       * @Description: file content
       */
      // 解析翻译


      class DataParserBase {
        // 只会在读取Json数值表的时候才会解析一次翻译表，解析完就永久缓存起来
        parse(jsonObject, dataHandlerName, namekey) {
          return jsonObject;
        }

      }

      exports('DataParserBase', DataParserBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightMainWorld.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './UIWidget.ts', './FightConstant.ts', './FomationLayer.ts', './RoleLayer.ts', './BloodLayer.ts', './TopEffectLayer.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Node, UITransform, error, UIWidget, FightConstant, FomationLayer, RoleLayer, BloodLayer, TopEffectLayer;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      UITransform = module.UITransform;
      error = module.error;
    }, function (module) {
      UIWidget = module.UIWidget;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      FomationLayer = module.FomationLayer;
    }, function (module) {
      RoleLayer = module.RoleLayer;
    }, function (module) {
      BloodLayer = module.BloodLayer;
    }, function (module) {
      TopEffectLayer = module.TopEffectLayer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "171f2vOJ1NNlpzYFrjAdaGR", "FightMainWorld", undefined);

      class FightMainWorld extends Node {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_layerMap", new Map());

          _defineProperty(this, "_formationLayer", null);

          _defineProperty(this, "_roleLayer", null);

          _defineProperty(this, "_topEffectLayer", null);

          _defineProperty(this, "_bloodLayer", null);
        }
        /**
         * @description 初始化
         */


        init() {
          this.addComponent(UITransform);
          this.addComponent(UIWidget);

          this._initLayers();

          this._addLayers();
        }

        _initLayers() {
          this._layerMap.set(FightConstant.FightLayer.FORMATION, this._createNode("FORMATION")); //布阵层


          this._layerMap.set(FightConstant.FightLayer.BOTTM_EFFECT, this._createNode("BOTTM_EFFECT")); //底层特效层


          this._layerMap.set(FightConstant.FightLayer.ROLE, this._createNode("ROLE")); //角色层


          this._layerMap.set(FightConstant.FightLayer.TOP_EFFECT, this._createNode("TOP_EFFECT")); //上层特效层


          this._layerMap.set(FightConstant.FightLayer.BLOOD, this._createNode("BLOOD")); //数字层


          this._layerMap.set(FightConstant.FightLayer.DIALOG, this._createNode("Dailog")); //对话层

        }

        _createNode(name) {
          let node = new Node();
          node.name = name;
          node.addComponent(UITransform);
          node.addComponent(UIWidget);
          this.addChild(node);
          return node;
        }

        async _addLayers() {
          // 布阵
          this._formationLayer = this.addCommonentInLayer(FightConstant.FightLayer.FORMATION, FomationLayer);
          await this._formationLayer.init(); // 角色

          this._roleLayer = this.addCommonentInLayer(FightConstant.FightLayer.ROLE, RoleLayer);

          this._roleLayer.init(); // 上册技能层


          this._topEffectLayer = this.addCommonentInLayer(FightConstant.FightLayer.TOP_EFFECT, TopEffectLayer);

          this._topEffectLayer.init(); // 上册技能层


          this._bloodLayer = this.addCommonentInLayer(FightConstant.FightLayer.BLOOD, BloodLayer);

          this._bloodLayer.init();
        }
        /**
         * game start
         */


        startGame() {
          this._formationLayer.startGame();

          this._roleLayer.startGame();
        }
        /**
         * tick
         */


        tick(dt) {}
        /**
         * @description 根据层索引返回层节点
         * @param index:number 层索引
         * @return Node | null
         */


        getLayer(index) {
          if (!this._layerMap.get(index)) {
            error("There is not exist layer in FightMainWorld! index:[ %s ]", index.toString());
            return null;
          }

          return this._layerMap.get(index);
        }
        /**
         * 
         * @param layerName string 层级名称
         * @return Node | null
         */


        getLayerByName(layerName) {
          return this.getChildByName(layerName);
        }
        /**
         * @description 根据层索引往层中添加节点
         * @param index 层索引
         * @param node  需要添加的节点
         * @param siblingIndex? 设置当前节点在父节点的 children 数组中的位置。
         */


        insertChildInLayer(index, child, siblingIndex) {
          let layer = this.getLayer(index);

          if (layer) {
            layer.addChild(child);
            layer.setSiblingIndex(siblingIndex);
          }
        }
        /**
        * @description 根据层索引往层中添加组件
        * @param index 层索引
        * @param com  组件
        */


        addCommonentInLayer(index, com) {
          let layer = this.getLayer(index);

          if (layer) {
            return layer.addComponent(com);
          }
        }
        /**
         * @description 根据层索引往层中添加组件
         * @param index 层索引
         * @param com  组件
         */


        getCommonentInLayer(index, com) {
          let layer = this.getLayer(index);

          if (layer) {
            let comp = layer.getComponent(com);
            return comp;
          }
        }

      }

      exports('FightMainWorld', FightMainWorld);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Storage.ts", ['cc', './Md5.ts', './env', './EncryptUtil.ts'], function (exports) {
  'use strict';

  var cclegacy, sys, md5, PREVIEW, EncryptUtil;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
    }, function (module) {
      md5 = module.md5;
    }, function (module) {
      PREVIEW = module.PREVIEW;
    }, function (module) {
      EncryptUtil = module.EncryptUtil;
    }],
    execute: function () {
      exports('storage', void 0);

      cclegacy._RF.push({}, "1e515YSSlVPaKX/A6/ZssEQ", "Storage", undefined);

      let storage;

      (function (_storage) {
        let _key = null;
        let _iv = null;

        let _id = -1;
        /**
         * 初始化密钥
         * @param key aes加密的key 
         * @param iv  aes加密的iv
         */


        function init(key, iv) {
          _key = md5(key);
          _iv = md5(iv);
        }

        _storage.init = init;

        function setUser(id) {
          _id = id;
        }

        _storage.setUser = setUser;

        function set(key, value) {
          key = `${key}_${_id}`;

          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          {
            key = md5(key);
          }

          if (null == value) {
            console.warn("存储的值为空，则直接移除该存储");
            remove(key);
            return;
          }

          if (typeof value === 'function') {
            console.error("储存的值不能为方法");
            return;
          }

          if (typeof value === 'object') {
            try {
              value = JSON.stringify(value);
            } catch (e) {
              console.error(`解析失败，str = ${value}`);
              return;
            }
          } else if (typeof value === 'number') {
            value = value + "";
          }

          if (null != _key && null != _iv) {
            try {
              value = EncryptUtil.aesEncrypt(value, _key, _iv);
            } catch (e) {
              value = null;
            }
          }

          sys.localStorage.setItem(key, value);
        }

        _storage.set = set;

        function get(key, defaultValue) {
          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          key = `${key}_${_id}`;
          {
            key = md5(key);
          }
          let str = sys.localStorage.getItem(key);

          if (null != str && '' !== str && !PREVIEW && null != _key && null != _iv) {
            try {
              str = EncryptUtil.aesDecrypt(str, _key, _iv);
            } catch (e) {
              str = null;
            }
          }

          if (null == defaultValue || typeof defaultValue === 'string') {
            return str;
          }

          if (null === str) {
            return defaultValue;
          }

          if (typeof defaultValue === 'number') {
            return Number(str) || 0;
          }

          if (typeof defaultValue === 'boolean') {
            return "true" == str; // 不要使用Boolean("false");
          }

          if (typeof defaultValue === 'object') {
            try {
              return JSON.parse(str);
            } catch (e) {
              console.error("解析数据失败,str=" + str);
              return defaultValue;
            }
          }

          return str;
        }

        _storage.get = get;

        function remove(key) {
          if (null == key) {
            console.error("存储的key不能为空");
            return;
          }

          key = `${key}_${_id}`;
          {
            key = md5(key);
          }
          sys.localStorage.removeItem(key);
        }

        _storage.remove = remove;

        function clear() {
          sys.localStorage.clear();
        }

        _storage.clear = clear;
      })(storage || (storage = exports('storage', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeLine.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ActionTypeSelPanel.ts', './TimeLineItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, Prefab, _decorator, Component, log, instantiate, find, ActionTypeSelPanel, TimeLineItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      instantiate = module.instantiate;
      find = module.find;
    }, function (module) {
      ActionTypeSelPanel = module.ActionTypeSelPanel;
    }, function (module) {
      TimeLineItem = module.TimeLineItem;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "1e835BT2zZPqrfagjLou8c/", "TimeLine", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = time_line
       * DateTime = Wed Mar 09 2022 11:51:22 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = time_line.ts
       * FileBasenameNoExtension = time_line
       * URL = db://assets/skill_eitor/time_line.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let TimeLine = exports('TimeLine', (_dec = ccclass('TimeLine'), _dec2 = property(Node), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec(_class = (_class2 = (_temp = class TimeLine extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemContainer", _descriptor, this);

          _initializerDefineProperty(this, "timeLineItemPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "actionSelPanel", _descriptor3, this);
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onClickAddItem() {
          log("onClickAddItem"); //添加选择Action面板
          // this._actionSelPanel  && error("_actionSelPanel is null")

          let actionSelPanel = instantiate(this.actionSelPanel);
          actionSelPanel.getComponent(ActionTypeSelPanel).callBack = this.onSelAction.bind(this);
          let canvas = find("Canvas");
          canvas.addChild(actionSelPanel);
        }

        onSelAction(type) {
          log("选择类型：" + type);
          let tlItem = instantiate(this.timeLineItemPrefab);
          let tlItemComp = tlItem.getComponent(TimeLineItem);
          tlItemComp.type = type;
          this.itemContainer.addChild(tlItem);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeLineItemPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "actionSelPanel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TopEffectLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FightLayerBase.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Node, error, FightLayerBase;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      error = module.error;
    }, function (module) {
      FightLayerBase = module.FightLayerBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "204c3DtJv1N5bZA8cwa6CHU", "TopEffectLayer", undefined);

      class TopEffectLayer extends FightLayerBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_actionNode", null);

          _defineProperty(this, "_isPlayerTween", false);
        }

        init() {
          this._actionNode = new Node();
          this.node.addChild(this._actionNode);
        }

        popActionNode() {
          if (this._isPlayerTween) {
            error("this._actionNode:isPlayerTween return null!");
            return null;
          }

          this._isPlayerTween = true;
          return this._actionNode;
        }

        pushActionNode() {
          this._isPlayerTween = false;
        }

      }

      exports('TopEffectLayer', TopEffectLayer);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SocketMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './GameMgr.ts', './Message.ts', './NetLoadingMgr.ts', './NetStateMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, log, Singleton, gameMgr, Message, netLoadingMgr, netStateMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      gameMgr = module.gameMgr;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      netLoadingMgr = module.netLoadingMgr;
    }, function (module) {
      netStateMgr = module.netStateMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "21588Hzs2NBRoTyysXlbhtB", "SocketMgr", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 17:01:02
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-19 13:16:31
       * @Description: file content
       */


      class SocketMgr extends Singleton {
        constructor() {
          super(); // net state change callback

          _defineProperty(this, "_ws", void 0);

          _defineProperty(this, "_StateChangeCallback", void 0);

          _defineProperty(this, "_ip", void 0);

          _defineProperty(this, "_port", void 0);

          let socketParams = {
            StateChangeCallback: this._listenOnSocketState.bind(this)
          };
          this.registerCallbackHandler(socketParams);
        }

        connect(ip, port, openFunc, errorFunc) {
          this._ip = ip;
          this._port = port;

          try {
            let url = `ws://${ip}:${port}`;
            let ws = new WebSocket(url);
            this._ws = ws;

            ws.onopen = event => {
              this._onopen(event);

              openFunc(event);
            };

            ws.onmessage = event => {
              this._onmessage(event);
            };

            ws.onerror = event => {
              this._onerror(event);

              errorFunc(event);
            };

            ws.onclose = event => {
              this._onclose(event);

              errorFunc(event);
            };
          } catch (error) {
            log("connect error: ", error);
          }
        }

        reConnect() {
          if (this._ip && this._port) {
            this.connect(this._ip, this._port, event => {}, event => {
              log(event);
            });
          }
        }

        close() {
          if (this._ws) {
            this._ws.close(4888);

            this._ws = null;
          }
        }

        send(msgId, data = {}) {
          data["proto"] = msgId;
          data = JSON.stringify(data);
          log("[WS] Send:", msgId, data);

          this._ws.send(data);

          netLoadingMgr.addMsgLoading(msgId);
        }

        sendInnerMsg(msgId, data = {}) {
          let msg = new Message(msgId, data);
          log("[WS] Send Inner:", msgId, data);
          gameMgr.addInnerMessage(msg);
        }

        registerCallbackHandler(params) {
          this._StateChangeCallback = params.StateChangeCallback;
        }
        /**
         * 监听Socket 状态变化
         */


        _listenOnSocketState(event) {
          netStateMgr.onSocketChange(event);
        }

        _onopen(event) {
          log("Send Text WS was opened.");
          log(event);

          if (this._StateChangeCallback) {
            this._StateChangeCallback(event);
          }
        } // 接收消息


        _onmessage(event) {
          let data = event.data;

          if (data == null) {
            log(event);
            return;
          }

          let jsonData = JSON.parse(data);
          log("[WS] Rev:", jsonData.proto, data);
          let msg = new Message(-jsonData.proto, jsonData);
          gameMgr.addNetMessage(msg);
          netLoadingMgr.removeMsgLoading(msg.msgId);
        }

        _onerror(event) {
          log("Send Text fired an error");

          if (this._StateChangeCallback) {
            this._StateChangeCallback(event);
          }
        }

        _onclose(event) {
          log(event);
          log("WebSocket instance closed.");

          if (this._StateChangeCallback) {
            this._StateChangeCallback(event);
          }
        }

        clear() {
          socketMgr = exports('socketMgr', null);
        }

      } // ()();


      let socketMgr = exports('socketMgr', (() => {
        return SocketMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ShowBackgroundMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22081gwgIJJ745/9FDeaTa4", "ShowBackgroundMgr", undefined); // 定义非全屏界面不需要隐藏背后的层级


      class ShowBackgroundMgr {
        /**
         * 
         * @description 注册隐藏背景页面
         * @param view 界面名称
         */
        static regShowBackgroundView(view) {
          ShowBackgroundMgr._hiddenMap.set(view, true);
        }
        /**
         * @description 检测是否界面需要隐藏背景
         * @param view 界面名称
         */


        static checkIsShowBlackground(view) {
          if (ShowBackgroundMgr._hiddenMap.has(view)) {
            return true;
          }

          return false;
        }

      }

      exports('ShowBackgroundMgr', ShowBackgroundMgr);

      _defineProperty(ShowBackgroundMgr, "_hiddenMap", new Map());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ComponentBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Component, msgEventMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
    }, function (module) {
      msgEventMgr = module.msgEventMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "22bafaZ0nhIC6eN8eReU5Z5", "ComponentBase", undefined);

      class ComponentBase extends Component {
        constructor() {
          super();

          _defineProperty(this, "_eventMsgListeners", void 0);

          this._eventMsgListeners = new Map();
        }

        start() {}
        /**
         * 在组件加载的时候调用addMsgListener来监听消息
         */


        onLoad() {}

        onEnable() {}

        onDisable() {}
        /**
         * 记得如果需要要重写此方法 注意必须调用super.onDestroy(),
         * 组件删除前会自动删除所有消息监听
         */


        onDestroy() {
          this.removeAllMsgListener();
        }
        /**
         * 添加网络消息监听
         */


        addMsgListener(msgId, listener) {
          let handle = msgEventMgr.addEventListener(msgId, listener);
          if (this._eventMsgListeners.get(handle) != null) return;

          this._eventMsgListeners.set(handle, msgId);
        }
        /**
         * 移除对这个消息的监听
         * 某些情况node里面需要动态加减某个消息监听
         */


        removeMsgListener(msgId) {
          this._eventMsgListeners.forEach((value, key) => {
            if (value == msgId) {
              msgEventMgr.removeEventListener(value, key);

              this._eventMsgListeners.delete(key);
            }
          });
        }
        /**
         * 去掉所有网络消息监听
         */


        removeAllMsgListener() {
          this._eventMsgListeners.forEach((value, key) => {
            msgEventMgr.removeEventListener(value, key);

            this._eventMsgListeners.delete(key);
          });

          this._eventMsgListeners.clear;
        }

      }

      exports('ComponentBase', ComponentBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SingletonMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "23bb4nRwttHAI+x3riigC0+", "SingletonMgr", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 16:35:22
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-20 20:52:15
       * @Description: file content
       */


      class SingletonMgr {
        static getInstance() {
          if (this._instance == null) {
            this._instance = new SingletonMgr();
          }

          return this._instance;
        }

        constructor() {
          _defineProperty(this, "_index", 0);

          _defineProperty(this, "_singletonList", void 0);

          this._singletonList = [];
        }

        sign(T) {
          this._index++;
          T.sIndex = this._index;

          this._singletonList.push(T);
        }

        unSign(T) {
          for (let i = 0; i < this._singletonList.length; i++) {
            let s = this._singletonList[i];

            if (s._sIndex == T.sIndex) {
              this._singletonList.splice(i, 1);

              i--;
              break;
            }
          }
        }

        destoryAll() {
          while (this._singletonList.length > 0) {
            let singleton = this._singletonList.pop();

            singleton.clear();
            singleton.destoryInstance();
            singleton.instance = null;
          }
        }

        clear() {
          singletonMgr = exports('singletonMgr', null);
        }

      } // ()();


      _defineProperty(SingletonMgr, "_instance", void 0);

      let singletonMgr = exports('singletonMgr', (() => {
        return SingletonMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Storage.ts', './AudioEffect.ts', './AudioMusic.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Node, game, storage, AudioEffect, AudioMusic;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      game = module.game;
    }, function (module) {
      storage = module.storage;
    }, function (module) {
      AudioEffect = module.AudioEffect;
    }, function (module) {
      AudioMusic = module.AudioMusic;
    }],
    execute: function () {
      cclegacy._RF.push({}, "252f0z+vPNL8Y/jsLYmomtw", "AudioManager", undefined);

      const LOCAL_STORE_KEY = "game_audio";

      class AudioManager extends Node {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "local_data", {});

          _defineProperty(this, "_volume_music", 1);

          _defineProperty(this, "_volume_effect", 1);

          _defineProperty(this, "_switch_music", true);

          _defineProperty(this, "_switch_effect", true);

          _defineProperty(this, "_uuid", "10000");

          _defineProperty(this, "_localStorageTag", "");
        } // 本地存储标签名


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

          AudioManager._instance.addComponent(AudioMusic);

          this.music = AudioManager._instance.getComponent(AudioMusic);

          AudioManager._instance.addComponent(AudioEffect);

          this.effect = AudioManager._instance.getComponent(AudioEffect);

          AudioManager._instance.__init();
        }

        __init() {
          let data = storage.get(this._localStorageTag);

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
        }
        /** 设置玩家唯一标识 */


        setUuid(value) {
          this._uuid = value;
          this._localStorageTag = `${LOCAL_STORE_KEY}_${this._uuid}`;
        }
        /**
         *  播放背景音乐
         * @param url        资源地址
         * @param callback   音乐播放完成事件
         */


        playMusic(url, callback = null) {
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
          let data = JSON.stringify(this.local_data);
          storage.set(this._localStorageTag, data);
        }

      }

      _defineProperty(AudioManager, "_instance", null);

      let audioMgr = exports('audioMgr', (() => {
        return AudioManager.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NoticeView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Protocol.ts', './LayerBase.ts', './SceneMgr.ts', './SocketMgr.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, WebView, _decorator, Protocol, LayerBase, sceneMgr, socketMgr;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      WebView = module.WebView;
      _decorator = module._decorator;
    }, function (module) {
      Protocol = module.Protocol;
    }, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      socketMgr = module.socketMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "253d5HPniVK1aenoGsMPyZk", "NoticeView", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let NoticeView = exports('NoticeView', (_dec = ccclass('NoticeView'), _dec2 = property(WebView), _dec(_class = (_class2 = (_temp = class NoticeView extends LayerBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "webview", _descriptor, this);

          _defineProperty(this, "_callback", null);
        }

        updateView(data) {
          let msgData = data[0];
          this._callback = data[1];
          let htmlID = msgData.html_id;
          this.webview.url = data[0]; //`${GameConfig.ServerListUrl}/static/new_notice/html/${htmlID}.html`;
        }

        close() {
          sceneMgr.popTableLayer();

          if (this._callback) {
            this._callback();
          }

          socketMgr.sendInnerMsg(Protocol.Inner.CloseNoticeView);
        }

      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "webview", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionMove.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ActionBase.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Vec3, tween, ActionBase;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      ActionBase = module.ActionBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "25990KS2PREWb2QEKfJQEug", "ActionMove", undefined);

      class ActionMove extends ActionBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_middlePos", new Vec3());

          _defineProperty(this, "_offset", new Vec3(140, 0, 0));
        }
        /**
         * 
         * @param own 移动节点
         * @param pos 目标位置
         * @param duration 持续时间
         */


        move(data) {
          let own = data.own;
          let config = data.animCfg;
          let params = config.params;
          let pos = params[0];
          let duration = params[1];
          this._middlePos.x = 0;
          this._middlePos.y = pos.y + 80;
          this._middlePos.z = 0;
          return tween().to(duration / 2, {
            position: this._middlePos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }).to(duration / 2, {
            position: pos.subtract(this._offset)
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          });
        }

      }

      exports('ActionMove', ActionMove);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeLineItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FightConst.ts', './TimeSetPanel.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Prefab, _decorator, Component, find, Label, instantiate, FightActionTypeName, TimeSetPanel;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      Label = module.Label;
      instantiate = module.instantiate;
    }, function (module) {
      FightActionTypeName = module.FightActionTypeName;
    }, function (module) {
      TimeSetPanel = module.TimeSetPanel;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "26d446ndOZKpp+mcCdJqbNz", "TimeLineItem", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = TimeLineItem
       * DateTime = Wed Mar 09 2022 14:25:09 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TimeLineItem.ts
       * FileBasenameNoExtension = TimeLineItem
       * URL = db://assets/skill_eitor/TimeLineItem.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let TimeLineItem = exports('TimeLineItem', (_dec = ccclass('TimeLineItem'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = class TimeLineItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "setTimePanelPrefab", _descriptor, this);

          _defineProperty(this, "_type", void 0);

          _defineProperty(this, "_time", 0);
        }

        start() {// [3]
        } //Action类型


        get type() {
          return this._type;
        }

        set type(value) {
          this._type = value;
          let labelNode = find("Button/Label", this.node);
          labelNode.getComponent(Label).string = FightActionTypeName.get(value);
        }

        get time() {
          return this._time;
        }

        set time(value) {
          this._time = value;
          let labelNode = find("timeBtn/Label", this.node);
          labelNode.getComponent(Label).string = value + "s";
        }

        onClick() {}

        onClickSetTime() {
          let setTimePanel = instantiate(this.setTimePanelPrefab);
          let setTimePanelComp = setTimePanel.getComponent(TimeSetPanel);
          setTimePanelComp.callBack = this.onSetTimeFinish.bind(this);
          let canvas = find("Canvas");
          canvas.addChild(setTimePanel);
        }

        onSetTimeFinish(sec) {
          this.time = sec;
        }

      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "setTimePanelPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FormationView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ComponentBase.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, _decorator, assert, ComponentBase;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      assert = module.assert;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "2aeffcF5a9DHY4JWEmk6TzO", "FormationView", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let FormationView = exports('FormationView', (_dec = ccclass('FormationView'), _dec2 = property([Node]), _dec3 = property([Node]), _dec(_class = (_class2 = (_temp = class FormationView extends ComponentBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "leftPosList", _descriptor, this);

          _initializerDefineProperty(this, "rightPosList", _descriptor2, this);
        }

        start() {}
        /**
         * 
         * @description 获取攻方部队索引值 (左)
         * @param index 部队所引致
         */


        getAttackPosByIndex(index) {
          let node = this.leftPosList[index];
          assert(node, "FormationView:getAttackPosByIndex() node does not exit [%s]", index.toString());
          return node.position;
        }
        /**
         * 
         * @description 获取守方部队索引值 (右)
         * @param index 部队所引致
         */


        getDefendPosByIndex(index) {
          let node = this.rightPosList[index];
          assert(node, "FormationView:getDefendPosByIndex() node does not exit [%s]", index.toString());
          return node.position;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "leftPosList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rightPosList", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightLayerBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ComponentBase.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, ComponentBase;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "2efb9bYgrpL+50CVmSbZRKa", "FightLayerBase", undefined);

      class FightLayerBase extends ComponentBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_mainWorld", null);
        }

        onLoad() {
          this._mainWorld = this.node.parent;
        }

        startGame() {}

        updateView(data) {}

      }

      exports('FightLayerBase', FightLayerBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FightConstant.ts', './YYNamespace.ts', './RoleSpineFactory.ts', './SpineNodeBase.ts', './FightData.ts', './FightDataMgr.ts', './FightLayerBase.ts', './FomationLayer.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, error, js, v3, FightConstant, yy, RoleSpineFactory, HeroSpineNode, MonsterSpineNode, FightData, fightDataMgr, FightLayerBase, FomationLayer;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      error = module.error;
      js = module.js;
      v3 = module.v3;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      yy = module.yy;
    }, function (module) {
      RoleSpineFactory = module.RoleSpineFactory;
    }, function (module) {
      HeroSpineNode = module.HeroSpineNode;
      MonsterSpineNode = module.MonsterSpineNode;
    }, function (module) {
      FightData = module.FightData;
    }, function (module) {
      fightDataMgr = module.fightDataMgr;
    }, function (module) {
      FightLayerBase = module.FightLayerBase;
    }, function (module) {
      FomationLayer = module.FomationLayer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "372e0T28HhM1pt5QZBq0JMy", "RoleLayer", undefined);

      class RoleLayer extends FightLayerBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_attackRoleList", new Array());

          _defineProperty(this, "_defendRoleList", new Array());
        }

        init() {
          this._loadRoles();
        }

        _loadRoles() {
          let rp = fightDataMgr.getFightData(FightData);
          let attackers = rp.getAttackFormationDatas();

          this._loadAttackers(attackers);

          let defenders = rp.getDefendFormationDatas();

          this._loadDefenders(defenders);
        }

        async _loadAttackers(attackers) {
          for (let index = 0; index < attackers.length; index++) {
            let attackInfo = attackers[index];
            let heroId = attackInfo.getHeroId();

            if (heroId == -1) {
              return error(js.formatStr("RoleLayer:_loadAttackers heroId = -1 index:[%d]", index));
            }

            let node = await RoleSpineFactory.create(HeroSpineNode, heroId);
            this.node.addChild(node);

            this._setPosition(node, index, FightConstant.FightUnitType.Attack);

            this._attackRoleList.push(node);

            node.addBloodUI();
            node.setSiblingIndex(-1);
            node.formationIndex = index;
            node.camp = FightConstant.FightUnitType.Attack;
          }
        }

        async _loadDefenders(defenders) {
          for (let index = 0; index < defenders.length; index++) {
            let defenderInfo = defenders[index];
            let heroId = defenderInfo.getHeroId();

            if (heroId == -1) {
              return error(js.formatStr("RoleLayer:_loadDefenders heroId = -1 index:[%d]", index));
            }

            let node = await RoleSpineFactory.create(MonsterSpineNode, heroId);
            this.node.addChild(node);

            this._setPosition(node, index, FightConstant.FightUnitType.Defend);

            this._defendRoleList.push(node);

            node.setScale(v3(-1, 1, 1));
            node.changeSkin("2");
            node.addBloodUI();
            node.setSiblingIndex(-1);
            node.formationIndex = index;
            node.camp = FightConstant.FightUnitType.Defend;
          }
        }

        _setPosition(node, idx, camp) {
          let pos = this.getFomationPos(camp, idx);
          node.position = pos;
        }

        startGame() {
          this._attackRoleList.forEach(element => {
            element.play(yy.macro.HeroAnimate.Idle, true);
            element.changeEquip("2", "dao2", "dao2");
          });

          this._defendRoleList.forEach(element => {
            element.play(yy.macro.HeroAnimate.Idle, true);
            element.changeEquip("2", "dao2", "dao2");
          });
        }

        updateView(data) {}

        getRoleAttacker(index) {
          return this._attackRoleList[index];
        }

        getRoleDefender(index) {
          return this._defendRoleList[index];
        }
        /**
         * 
         * @param idx number 阵型索引
         * @param camp number 所在阵营 
         */


        getFomationPos(camp, idx) {
          let isAttacker = camp == FightConstant.FightUnitType.Attack;

          let com = this._mainWorld.getCommonentInLayer(FightConstant.FightLayer.FORMATION, FomationLayer);

          let pos = isAttacker ? com.getAttackPosByIndex(idx) : com.getDefendPosByIndex(idx);
          return pos.clone();
        }

      }

      exports('RoleLayer', RoleLayer);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChatMsgItemComp.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, find, RichText, UITransform;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      RichText = module.RichText;
      UITransform = module.UITransform;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "39b1fLEjCBA6LsNKS3lAXiy", "ChatMsgItemComp", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = ChatMsgItemComp
       * DateTime = Thu Mar 17 2022 14:58:17 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ChatMsgItemComp.ts
       * FileBasenameNoExtension = ChatMsgItemComp
       * URL = db://assets/scripts/app/views/chat/ChatMsgItemComp.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let ChatMsgItemComp = exports('ChatMsgItemComp', (_dec = ccclass('ChatMsgItemComp'), _dec(_class = (_temp = class ChatMsgItemComp extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_playerName", "");

          _defineProperty(this, "_text", "");

          _defineProperty(this, "_richMaxWidth", void 0);

          _defineProperty(this, "_richLabel", void 0);
        }

        get playerName() {
          return this._playerName;
        }

        set playerName(value) {
          this._playerName = value;
        }

        get text() {
          return this._text;
        }

        set text(value) {
          this._text = value;
          let richNode = find("RichText", this.node);
          let richTxtComp = richNode.getComponent(RichText);
          richTxtComp.string = value;
        }

        onLoad() {}

        start() {}

        setRichLabelMaxWidth(width) {
          if (!this._richLabel) {
            this._richLabel = find("RichText", this.node);
          }

          this._richMaxWidth = width - this._richLabel.position.x - 10;
          this._richLabel.getComponent(RichText).maxWidth = this._richMaxWidth;
        }

        getRichHeight() {
          return this._richLabel.getComponent(UITransform).height;
        }

      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './EventMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, director, Scheduler, game, Game, log, sys, Singleton, modelEventMgr, msgEventMgr, sceneMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Scheduler = module.Scheduler;
      game = module.game;
      Game = module.Game;
      log = module.log;
      sys = module.sys;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      modelEventMgr = module.modelEventMgr;
      msgEventMgr = module.msgEventMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3a889sg5BFD/r5+/4PVXgnK", "GameMgr", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 17:58:23
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-03 15:34:23
       * @Description: file content
       */


      class GameMgr extends Singleton {
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
          sceneMgr.removeAllTableLayer();
          sceneMgr.setSystemOpenLayer(null);
          sceneMgr.setNewGuideLayer(null);

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
            if (sys.os == sys.OS.IOS) ;else if (sys.os == sys.OS.ANDROID) {
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
          modelEventMgr.dispatchEvent(msg); // view msg

          msgEventMgr.dispatchEvent(msg); // redGuide msg
          // SFRedGuideMgr.dispatchEvent(msg);
        }

        clear() {
          gameMgr = exports('gameMgr', null);
        }

      }

      exports('GameMgr', GameMgr); // ()();

      let gameMgr = exports('gameMgr', (() => {
        return GameMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModelEnum.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ModelEnum', void 0);

      cclegacy._RF.push({}, "3cce5jVcahHfLaqU4sSc3QE", "ModelEnum", undefined);

      let ModelEnum;

      (function (ModelEnum) {
        ModelEnum["LoginModel"] = "LoginModel";
      })(ModelEnum || (ModelEnum = exports('ModelEnum', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Message.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "413828GWbNBI6Ez0GJNJOdC", "Message", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 17:36:55
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-02 17:36:56
       * @Description: file content
       */


      class Message {
        // 构造函数
        constructor(id, data) {
          _defineProperty(this, "msgId", void 0);

          _defineProperty(this, "msgData", void 0);

          this.msgId = id;
          this.msgData = data;
        }

        getMsg(key) {
          return this[key];
        }

        getData() {
          return this.msgData.msg;
        }

        getRawData() {
          return this.msgData;
        }

        getResultCode() {
          return this.msgData.code;
        }

      }

      exports('Message', Message);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator3.ts", ['cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var instantiate, cclegacy, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, sceneMgr;
  return {
    setters: [function (module) {
      instantiate = module.instantiate;
      cclegacy = module.cclegacy;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "421c3a8EYFACoa2blZFNeBL", "Creator", undefined);

      class ChatCreator extends ViewCreatorBase {
        //重写
        onInit() {
          this.regMsg(ViewProtocol.ChatLayer, this.onCreateChatLayer.bind(this));
        }

        onCreateChatLayer() {
          let viewInfo = viewRegisterMgr.getViewInfo("chat", "ChatLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, pre => {
            let node = instantiate(pre);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

      }

      exports('default', ChatCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Effect.ts", ['cc', './EffectBase.ts', './BloodEffect.ts'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('EffectBase', module.EffectBase);
    }, function (module) {
      exports('BloodEffect', module.BloodEffect);
    }],
    execute: function () {
      cclegacy._RF.push({}, "45787ST9INKVIKvrzD+5ubK", "Effect", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EnterApp.ts", ['cc', './SingletonMgr.ts', './GameMgr.ts', './NetLoadingMgr.ts', './ViewProtocol.ts', './ViewRegisterMgr.ts', './SceneMgr.ts', './TranslateMgr.ts', './GameConfig.ts', './AudioManager.ts', './DataRegisterMgr.ts', './ModelRegisterMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, director, log, game, input, sys, singletonMgr, gameMgr, netLoadingMgr, ViewProtocol, viewRegisterMgr, sceneMgr, translateMgr, GameConfig, audioMgr, dataRegisterMgr, modelRegisterMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      log = module.log;
      game = module.game;
      input = module.input;
      sys = module.sys;
    }, function (module) {
      singletonMgr = module.singletonMgr;
    }, function (module) {
      gameMgr = module.gameMgr;
    }, function (module) {
      netLoadingMgr = module.netLoadingMgr;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      translateMgr = module.translateMgr;
    }, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      audioMgr = module.audioMgr;
    }, function (module) {
      dataRegisterMgr = module.dataRegisterMgr;
    }, function (module) {
      modelRegisterMgr = module.modelRegisterMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "46137csGNxPpLF/lWydBES5", "EnterApp", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 16:36:11
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-02 18:00:01
       * @Description: file content
       */


      class EnterApp {
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
          singletonMgr.destoryAll();
          let scene = director.getScene();
          audioMgr.stopAll(); // let main = scene.getComponentInChildren("Main");
          // gameMgr.setCamera("default", main.defaultCamera);
          // gameMgr.setCamera("fight", main.fightCamera);
          // this.run();

          director.loadScene("HotUpdate");
        }

        init() {
          sceneMgr.init();
          gameMgr.setApp(this);
          audioMgr.init();
          netLoadingMgr.init(); //玩家ID，保存音效设置
          // audioMgr.setUuid("3998857")
        }

        loadDefine() {
          viewRegisterMgr.registerAllCreator();
        }

        loadAllDataFile() {
          log("loading config.."); // logDot(DotIDS.configLoadingStart);

          dataRegisterMgr.loadAllData(() => {
            log("loading config is done"); // logDot(DotIDS.configLoadingFinish);

            this.loadAllModel();
            this.loadAllRedGuide();
            this.loadTranslate();
          });
        }

        loadAllRedGuide() {// RedGuideReg.loadAllRedGuide();
        }

        loadAllModel() {
          modelRegisterMgr.loadAllModel();
          this.done();
        }

        loadTranslate() {
          translateMgr.loadCodeCfg("Translate");
        }

        done() {
          // if (cc.sys.isMobile) {
          //     cc.macro.ENABLE_MULTI_TOUCH = false;
          // }
          game.frameRate = 60;
          input.setAccelerometerEnabled(true);
          log("进入游戏");
          sceneMgr.sendCreateView(ViewProtocol.LoginLayer);
        }

        initSDKHelper() {
          if (sys.isNative && GameConfig.SDKLogin) {
            if (sys.os == sys.OS.IOS) ;else if (sys.os == sys.OS.ANDROID) ;
          }
        }

      }

      exports('EnterApp', EnterApp);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HotUpdate.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './EnterApp.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Label, ProgressBar, _decorator, Component, sys, log, director, EnterApp;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      ProgressBar = module.ProgressBar;
      _decorator = module._decorator;
      Component = module.Component;
      sys = module.sys;
      log = module.log;
      director = module.director;
    }, function (module) {
      EnterApp = module.EnterApp;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "46713ZV+7pBwIsgkPT26Z52", "HotUpdate", undefined);

      const {
        ccclass,
        property
      } = _decorator;
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

      let HotUpdate = exports('HotUpdate', (_dec = ccclass('HotUpdate'), _dec2 = property(Label), _dec3 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class HotUpdate extends Component {
        constructor(...args) {
          super(...args);

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

          let versionCompareHandle = function (versionA, versionB) {
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

            let data = jsb.fileUtils.getDataFromFile(path);
            let md5Str = MD5_2(data);
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
              if (sys.NetworkType.WWAN == jsb.device.getNetworkType()) ;else {
                this.tipsLabel.string = '正准备更新...';
                this.hotUpdate();
              }
              break;

            default:
              return;
          }
        }

        getDownloadByteStr(byte) {
          let suffix = "B"; //kb

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
              let downloadByte = event.getDownloadedBytes();
              let totalByte = event.getTotalBytes();
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
              new EnterApp();
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator4.ts", ['cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, instantiate, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, sceneMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "48008mvBcdPIYLDaDhIrxVG", "Creator", undefined);

      class FormationCreator extends ViewCreatorBase {
        onInit() {
          this.regMsg(ViewProtocol.FormationView, this.onCreateFormationView.bind(this));
        }

        onCreateFormationView(event) {
          let viewInfo = viewRegisterMgr.getViewInfo("formation", "FormationView");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

      }

      exports('FormationCreator', FormationCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffectBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "48ceezHv2VBdqha2up+lY6D", "EffectBase", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let EffectBase = exports('EffectBase', (_dec = ccclass('EffectBase'), _dec(_class = (_temp = class EffectBase extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_endCallback", null);

          _defineProperty(this, "_startCallback", null);
        }

        start() {
          if (this._startCallback) {
            this._startCallback();
          }
        }
        /**
         * 
         * @param callback 设置回调
         */


        setStartCallback(callback) {
          this._startCallback = callback;
        }
        /**
         * 
         * @param callback 设置回调
         */


        setEndCallback(callback) {
          this._endCallback = callback;
        }

        onEndTriggered(arg) {
          if (this._endCallback) {
            this._endCallback();
          }
        }

      }, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainEventTrigger.ts", ['cc', './ComponentBase.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, ComponentBase;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }],
    execute: function () {
      var _dec, _dec2, _class;

      cclegacy._RF.push({}, "4f5519u/zlBk4tgGrM4yegK", "MainEventTrigger", undefined);

      const {
        ccclass,
        property,
        disallowMultiple
      } = _decorator;
      /**
       * Predefined variables
       * Name = MainEventTriier
       * DateTime = Tue Mar 22 2022 16:53:08 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = MainEventTriier.ts
       * FileBasenameNoExtension = MainEventTriier
       * URL = db://assets/scripts/app/views/common/MainEventTriier.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       * 全局事件触发注册写在这里
       */

      let MainEventTrigger = exports('MainEventTrigger', (_dec = ccclass('MainEventTrigger'), _dec2 = disallowMultiple(true), _dec(_class = _dec2(_class = class MainEventTrigger extends ComponentBase {
        start() {
          super.start();
        } //销毁事件


        onDestroy() {
          super.onDestroy();
        }

      }) || _class) || _class));
      /**
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator5.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './Tips.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, instantiate, Prefab, ResourcesLoader, ViewCreatorBase, ViewProtocol, Tips, viewRegisterMgr, sceneMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      Prefab = module.Prefab;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      Tips = module.Tips;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "51114ZvCApA57CqEAiMD+ep", "Creator", undefined);

      class DialogCreator extends ViewCreatorBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_tipsQueue", new Array());

          _defineProperty(this, "_tempTipsQueue", new Array());

          _defineProperty(this, "_timer", null);
        } // private _isDispatching:boolean = false;


        onInit() {
          this.regMsg(ViewProtocol.DoubleBtnDialog, this.onCreateDoubleBtnDialogView.bind(this));
          this.regMsg(ViewProtocol.Tips, this.onCreateTips.bind(this));
        }

        onCreateDoubleBtnDialogView(event) {
          let viewInfo = viewRegisterMgr.getViewInfo("dialog", "DoubleBtnDialog");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            data.addRef();
            let node = instantiate(data); // let com = node.getComponent("DoubleBtnDialog").updateDialog(event.getRawData[0]);

            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

        onCreateTips(event) {
          let isScheduled = this._timer ? true : false;

          if (isScheduled) {
            // 暂存队列
            this._tempTipsQueue.push(event);

            return;
          }

          this._tipsQueue.push(event);

          this._timer = setInterval(this._tipsTick.bind(this), 100);
        }

        _tipsTick() {
          if (this._tipsQueue.length == 0) {
            if (this._tempTipsQueue.length == 0) {
              clearInterval(this._timer);
              this._timer = null;
              return;
            }

            this._tipsQueue = this._tempTipsQueue;
            this._tempTipsQueue.length = 0;
          }

          let event = this._tipsQueue.shift();

          if (event) {
            let viewInfo = viewRegisterMgr.getViewInfo("dialog", "Tips");
            ResourcesLoader.loadWithViewInfo(viewInfo, data => {
              let tipsNode = instantiate(data);
              let str = event.getRawData();
              tipsNode.getComponent(Tips).text = str;
              sceneMgr.getTipsLayer().addChild(tipsNode);
            }, Prefab);
          }
        }

      }

      exports('DialogCreator', DialogCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetLoadingMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './ErrorCode.ts', './GameMgr.ts', './Message.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Component, _decorator, Node, game, error, Singleton, ErrorCode, gameMgr, Message, sceneMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
      Node = module.Node;
      game = module.game;
      error = module.error;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      ErrorCode = module.ErrorCode;
    }, function (module) {
      gameMgr = module.gameMgr;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "56245CzisZKjJ/pMRCl0/cT", "NetLoadingMgr", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let NetLoadindComp = (_dec = ccclass('NetLoadindComp'), _dec(_class = class NetLoadindComp extends Component {
        update(dt) {
          netLoadingMgr.tick(dt);
        }

      }) || _class); //网络loading管理

      class NetLoadingMgr extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_msgList", []);

          _defineProperty(this, "_time", 0);
        }

        init() {
          let node = new Node("NetLoadingMgr");
          node.addComponent(NetLoadindComp);
          game.addPersistRootNode(node);
        }

        tick(dt) {
          this._time += dt;
          let index = 0;

          while (this._msgList[index]) {
            let msg = this._msgList[index];

            if (msg.endTime > 0 && this._time >= msg.endTime) {
              this._msgList.splice(index);

              this.removeMsgLoading(msg.id);
              this.timeup(msg);
            } else {
              index++;
            }
          }
        }

        timeup(msg) {
          //超时
          error("<====time up==== msgId: " + msg.id);
          let msgId = Number(msg.id);
          let msgEvent = new Message(msgId, {
            code: ErrorCode.TIME_OUT
          });
          gameMgr.addInnerMessage(msgEvent);
        }

        addMsgLoading(id, timeout = 10) {
          let idStr = id + "";
          let endTime = timeout > 0 ? this._time + timeout : 0;

          this._msgList.push({
            id: idStr,
            endTime: endTime
          });

          sceneMgr.showNetLoading(true);
        }

        removeMsgLoading(id) {
          let idStr = id + "";

          for (let index = 0; index < this._msgList.length; index++) {
            const element = this._msgList[index];

            if (idStr == element.id) {
              this._msgList.splice(index);

              break;
            }
          }

          if (this._msgList.length == 0) {
            sceneMgr.showNetLoading(false);
          }
        }

        clear() {
          netLoadingMgr = exports('netLoadingMgr', null);
        }

      }

      let netLoadingMgr = exports('netLoadingMgr', (() => {
        return NetLoadingMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightEventMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './FightConstant.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, log, Singleton, FightConstant;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      FightConstant = module.FightConstant;
    }],
    execute: function () {
      cclegacy._RF.push({}, "57bc4P0HYxHAY2x5zV+0sC0", "FightEventMgr", undefined);

      let fightEventMgr = exports('fightEventMgr', null);

      class FightEventMgr extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_eventHandlers", null);
        }
        /**
         * init
         */


        static init() {
          fightEventMgr = exports('fightEventMgr', FightEventMgr.getInstance());

          fightEventMgr._init();
        }

        _init() {
          this._eventHandlers = new Map();
        }

        addEventListener(eventId, handler) {
          let handlerQueue = this._eventHandlers.get(eventId);

          if (!handlerQueue) {
            handlerQueue = new Array();

            this._eventHandlers.set(eventId, handlerQueue);
          }

          handlerQueue.push(handler);
        }

        removeEventListener(eventId, handler) {
          let handlerQueue = this._eventHandlers.get(eventId);

          if (handlerQueue) {
            let idx = handlerQueue.indexOf(handler);

            if (idx != -1) {
              handlerQueue.splice(idx);
            }
          }
        }

        send(event) {
          log("[Debug][FightEvent:]", this._getEventName(event.getEventId()), "=====>", event.getEventData());

          this._dispatchEvent(event);
        }

        _getEventName(eventId) {
          switch (eventId) {
            case FightConstant.FightEvent.Game_Star:
              return "Game_Star";

            case FightConstant.FightEvent.Game_End:
              return "Game_End";

            case FightConstant.FightEvent.Game_Pause:
              return "Game_Pause";

            case FightConstant.FightEvent.Game_Resume:
              return "Game_Resume";

            case FightConstant.FightEvent.Game_Replay:
              return "Game_Replay";

            case FightConstant.FightEvent.Round_Start:
              return "Round_Start";

            case FightConstant.FightEvent.Round_End:
              return "Round_End";

            case FightConstant.FightEvent.Action_Star:
              return "Action_Star";

            case FightConstant.FightEvent.Action_End:
              return "Action_End";

            case FightConstant.FightEvent.Attack_Start:
              return "Attack_Start";

            case FightConstant.FightEvent.Attack_End:
              return "Attack_End";

            case FightConstant.FightEvent.Result_Start:
              return "Result_Start";

            case FightConstant.FightEvent.Result_End:
              return "Result_End";

            case FightConstant.FightEvent.Blood_Change:
              return "Blood_Change";
          }
        }

        _dispatchEvent(event) {
          let eventId = event.getEventId();

          let handlerQueue = this._eventHandlers.get(eventId);

          if (handlerQueue) {
            handlerQueue.forEach(handler => {
              if (handler) {
                handler(event);
              }
            });
          }
        }

        destory() {
          FightEventMgr.destoryInstance();
        }

        clear() {
          fightEventMgr = exports('fightEventMgr', null);
        }

      }

      exports('FightEventMgr', FightEventMgr);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ListView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Vec3, Node, _decorator, Component, NodePool, ScrollView, UITransform, instantiate;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      NodePool = module.NodePool;
      ScrollView = module.ScrollView;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "5b29c08Za1NzYMGAPcMyKvz", "ListView", undefined);

      const {
        ccclass,
        property
      } = _decorator; // temp val

      const itemIndex = new Set();
      const vec3 = new Vec3();
      let ListView = exports('ListView', (_dec = ccclass('ListView'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class ListView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemTemplate", _descriptor, this);

          _initializerDefineProperty(this, "spaceY", _descriptor2, this);

          _defineProperty(this, "scrollView", void 0);

          _defineProperty(this, "itemHeight", void 0);

          _defineProperty(this, "itemPool", new NodePool());

          _defineProperty(this, "dataSource", []);

          _defineProperty(this, "visibleHeight", void 0);

          _defineProperty(this, "spawnCount", void 0);

          _defineProperty(this, "visibleNodes", new Map());

          _defineProperty(this, "delegate", {
            items: () => []
          });

          _defineProperty(this, "lastY", Number.MIN_SAFE_INTEGER);
        }

        onLoad() {
          this.scrollView = this.getComponent(ScrollView);
          this.itemHeight = this.itemTemplate.getComponent(UITransform).height;
          this.itemPool.put(this.itemTemplate);
          this.visibleHeight = this.node.getComponent(UITransform).height;
          this.spawnCount = Math.round(this.visibleHeight / this.itemHeight) + 1;
          this.ensure(this.spawnCount);
          console.log('ListView visibleHeight:', this.visibleHeight, 'spawnCount:', this.spawnCount, 'itemHeight:', this.itemHeight);
        }

        setDelegate(delegate) {
          this.delegate = delegate;
        }

        reload() {
          this.dataSource = this.delegate.items();
          const totalHeight = this.itemHeight * this.dataSource.length + this.spaceY * Math.max(0, this.dataSource.length - 1);
          this.scrollView.content.getComponent(UITransform).height = totalHeight;
          const children = this.scrollView.content.children.slice();
          children.forEach(c => this.itemPool.put(c)); // [warning] not call unuse
          // @ts-ignore

          this.scrollView.content._children.length = 0;
          this.visibleNodes.clear();
          this.scrollView.stopAutoScroll();
          this.scrollView.scrollToTop(0, false);
          this.lastY = Number.MIN_SAFE_INTEGER;
          console.log('ListView reload totalCount:', this.dataSource.length);
        }

        ensure(count) {
          while (this.itemPool.size() < count) {
            this.itemPool.put(instantiate(this.itemTemplate));
          }
        }

        lateUpdate() {
          const y = Math.floor(this.scrollView.getScrollOffset().y);

          if (this.lastY != y) {
            this.lastY = y;
            this.getVisibleItemIndex(y);
            this.visibleNodes.forEach((node, idx) => {
              if (!itemIndex.has(idx)) {
                this.delegate.unuse && this.delegate.unuse(node);
                this.itemPool.put(node);
                this.visibleNodes.delete(idx);
              }
            });
            itemIndex.forEach(idx => {
              if (!this.visibleNodes.has(idx)) {
                this.ensure(1);
                const node = this.itemPool.get();
                node.getPosition(vec3);
                vec3.y = (-idx - 0.5) * this.itemHeight - this.spaceY * idx;
                node.setPosition(vec3);
                node.parent = this.scrollView.content;
                this.delegate.reuse && this.delegate.reuse(node, this.dataSource[idx]);
                this.visibleNodes.set(idx, node);
              }
            });
          }
        }

        getVisibleItemIndex(y) {
          let minY = Math.max(0, Math.floor(y / (this.itemHeight + this.spaceY)));
          let maxY = minY == 0 ? this.spawnCount : Math.round((y + this.visibleHeight) / (this.itemHeight + this.spaceY));
          const totalCount = this.dataSource.length;
          maxY = Math.min(maxY, totalCount);

          if (maxY == totalCount) {
            minY = Math.max(0, totalCount - this.spawnCount);
          }

          itemIndex.clear();

          for (let i = minY; i < minY + this.spawnCount && i < totalCount; i++) {
            itemIndex.add(i);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemTemplate", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spaceY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioMusic.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, AudioSource, AudioClip, ResourcesLoader;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "5c1f3kqGetBiIv48/CvuaQv", "AudioMusic", undefined);

      const {
        ccclass,
        menu
      } = _decorator;
      /** 背景音乐 */

      let AudioMusic = exports('AudioMusic', (_dec = ccclass('AudioMusic'), _dec(_class = (_temp = class AudioMusic extends AudioSource {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "onComplete", null);

          _defineProperty(this, "_progress", 0);

          _defineProperty(this, "_url", null);

          _defineProperty(this, "_isPlay", false);
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
          ResourcesLoader.load(url, data => {
            if (this.playing) {
              this.stop();
              ResourcesLoader.release(this._url);
            }

            this.clip = data;
            this.currentTime = 0;
            this.play();
            this.loop = isLoop;
            callback && callback();
            this._url = url;
          }, AudioClip);
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
            ResourcesLoader.release(this._url);
            this._url = null;
          }
        }

      }, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIWidget.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, Widget, find, widgetManager;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Widget = module.Widget;
      find = module.find;
      widgetManager = module.widgetManager;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "5e88f6LkylHErvkR/QOnmMj", "UIWidget", undefined);

      const {
        ccclass
      } = _decorator;
      let UIWidget = exports('UIWidget', (_dec = ccclass('UIWidget'), _dec(_class = (_temp = class UIWidget extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_root", void 0);
        }

        start() {
          this._root = this.node.parent; //全屏

          let widget = this.node.addComponent(Widget);
          let canvas = find("Canvas");
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
          widget.target = canvas;
        }

      }, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResourcesLoader.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './NetLoadingMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, resources, error, assetManager, game, netLoadingMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      resources = module.resources;
      error = module.error;
      assetManager = module.assetManager;
      game = module.game;
    }, function (module) {
      netLoadingMgr = module.netLoadingMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5eb547JXAdLg68G+AjDDMe7", "ResourcesLoader", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-03 09:14:09
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-05 12:58:44
       * @Description: file content
       */


      class ResourcesLoader {
        // 内存限制
        // 下载资源
        static preload(path, doneFunc) {
          resources.preload(path, (err, dataAsset) => {
            if (err) {
              error("ResourcesLoader preload error:", err.message);
            }

            doneFunc(dataAsset);
          });
        }
        /**
         * @description resources需要动态加载的资源(使用此方法，需要手动管理资源释放)
         */


        static load(path, doneFunc, type) {
          if (type == undefined) {
            resources.load(path, (err, dataAsset) => {
              if (err) {
                error("ResourcesLoader load error:", err.message);
              }

              doneFunc(dataAsset);
            });
            return;
          }

          resources.load(path, type, (err, dataAsset) => {
            if (err) {
              error("ResourcesLoader load error:", err.message);
            }

            doneFunc(dataAsset);
          });
        }
        /**
         * @description 创建界面一定使用此方法 resources需要动态加载的资源(使用此方法，引擎底层资源释放)
         */


        static loadWithViewInfo(viewInfo, doneFunc, isShowLoading = true, type) {
          let path = viewInfo.Path;

          if (isShowLoading) {
            netLoadingMgr.addMsgLoading("load view:" + path, 0);
          }

          if (type == undefined) {
            resources.load(path, (err, dataAsset) => {
              if (err) {
                error("ResourcesLoader load error:", err.message);
              } // 添加自动释放


              ResourcesLoader._autoReleaseRes(viewInfo, dataAsset);

              doneFunc(dataAsset); //加载转圈

              netLoadingMgr.removeMsgLoading("load view:" + path);
            });
            return;
          }

          resources.load(path, type, (err, dataAsset) => {
            if (err) {
              error("ResourcesLoader load error:", err.message);
            } // 添加自动释放


            ResourcesLoader._autoReleaseRes(viewInfo, dataAsset);

            doneFunc(dataAsset); //加载转圈

            netLoadingMgr.removeMsgLoading("load view:" + path);
          });
        }

        static loadList(pathList, onProcess, onComplete, bundleName = "resources") {
          var bundle = assetManager.getBundle(bundleName);
          bundle.load(pathList, onProcess, onComplete);
        } //释放单个资源


        static release(path, bundleName = "resources") {
          var bundle = assetManager.getBundle(bundleName);
          bundle === null || bundle === void 0 ? void 0 : bundle.release(path);
        }

        static loadPromise(path, type) {
          return new Promise((resolve, rejected) => {
            this.load(path, data => {
              resolve(data);
            }, type);
          });
        } //是否需要释放内存


        static checkNeedToRelease() {
          //暂时用了1GB内存需要释放
          let mb = 1024 * 1024;

          if (game._gfxDevice.memoryStatus.textureSize / mb > ResourcesLoader._CacheMaxMemory) {
            return true;
          }

          return false;
        } // 引用计数+1


        static addResRef(layerName) {
          let asset = ResourcesLoader._ResCounter.get(layerName);

          if (asset) {
            asset.addRef();
          }
        } // 引用计数-1
        //单纯减少引用，纹理统一释放


        static decResRef(layerName) {
          let asset = ResourcesLoader._ResCounter.get(layerName);

          if (asset) {
            asset.decRef();

            ResourcesLoader._ResCounter.delete(layerName);
          }
        } //所有引用清除


        static clearAllRef() {
          ResourcesLoader._ResCounter.forEach(element => {
            element.decRef(false);
          });

          ResourcesLoader._ResCounter.clear();
        }

        static releaseUnusedAssets() {
          resources.releaseUnusedAssets();
        }

        static _autoReleaseRes(viewInfo, asset) {
          let cache = viewInfo.Cache;

          if (!cache) {
            if (!ResourcesLoader._ResCounter.get(viewInfo.View)) {
              ResourcesLoader._ResCounter.set(viewInfo.View, asset);
            }
          } else {
            // 永久缓存 >1 即可
            asset.addRef();
          }
        }

      }

      exports('ResourcesLoader', ResourcesLoader);

      _defineProperty(ResourcesLoader, "_ResCounter", new Map());

      _defineProperty(ResourcesLoader, "_CacheMaxMemory", 1024);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UserAgreementAndPrivacyPolicy.ts", ['cc', './ViewProtocol.ts', './ComponentBase.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, _decorator, ViewProtocol, ComponentBase, sceneMgr;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "642cd6g9utJq7hjQwtae9/a", "UserAgreementAndPrivacyPolicy", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let UserAgreementAndPrivacyPolicy = exports('UserAgreementAndPrivacyPolicy', (_dec = ccclass('UserAgreementAndPrivacyPolicy'), _dec(_class = class UserAgreementAndPrivacyPolicy extends ComponentBase {
        start() {}

        clickUserAgreement(event, customEventData) {
          sceneMgr.sendCreateView(ViewProtocol.UserAgreementLayer);
        }

        clickPrivacyPolicy(event, customEventData) {
          sceneMgr.sendCreateView(ViewProtocol.PrivacyPolicyLayer);
        }

      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DoubleBtnDialog.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './LayerBase.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, RichText, Button, _decorator, LayerBase, sceneMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      RichText = module.RichText;
      Button = module.Button;
      _decorator = module._decorator;
    }, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp;

      cclegacy._RF.push({}, "66a11eMlKNPLYEF68M7EfOi", "DoubleBtnDialog", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let DoubleBtnDialog = exports('DoubleBtnDialog', (_dec = ccclass('DoubleBtnDialog'), _dec2 = property(Label), _dec3 = property(RichText), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = (_temp = _class3 = class DoubleBtnDialog extends LayerBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lblTitle", _descriptor, this);

          _initializerDefineProperty(this, "lblMessage", _descriptor2, this);

          _initializerDefineProperty(this, "btnLeft", _descriptor3, this);

          _initializerDefineProperty(this, "btnRight", _descriptor4, this);

          _defineProperty(this, "_args", void 0);

          _defineProperty(this, "_addType", 0);
        }

        start() {
          // this.updateDialog();
          this.node._uiProps.localOpacity = 0;
        }

        updateDialog(args) {
          this._args = args;
          this._args.title = args.title || "";
          this._args.msg = args.msg || "";
          this.updateTitle();
          this.updateMessage();
          this.updateLeftButton();
          this.updateRightButton();
        }

        updateTitle() {
          this.lblTitle.string = this._args.title;
        }

        updateMessage() {
          let msg = this._args.msg;

          if (!this._args.msg.match("</color>")) {
            msg = "<outline color=black width=2><color=#FFFFFF>" + this._args.msg + "</color></outline>";
          }

          this.lblMessage.string = msg;
        }

        updateLeftButton() {
          if (this._args.leftBtnName) {
            let name = this._args.leftBtnName;
            let lblBtn = this.btnLeft.getComponentInChildren(Label);
            lblBtn = name;
          }

          if (this._args.hideLeftButton) {
            this.btnLeft.node.active = false; // this.btnRight.node.x = 0;
          }
        }

        updateRightButton() {
          if (this._args.rightBtnName) {
            let name = this._args.rightBtnName;
            let lblBtn = this.btnRight.getComponentInChildren(Label);
            lblBtn.string = name;
          }
        }

        btnLeftClick(event, customEventData) {
          if (this._args.leftCallback) {
            this._args.leftCallback();
          }

          this.close();
        }

        btnRightClick(event, customEventData) {
          if (this._args.rightCallback) {
            let isNotCloseDialog = this._args.rightCallback(); //不关闭对话框


            if (isNotCloseDialog) {
              return;
            }
          }

          this.close();
        }

        close() {
          if (this._addType == 1) {
            this.node.destroy();
          } else if (this._addType == 2) {
            sceneMgr.popTableLayer();
          } else {
            sceneMgr.removeDialog();
          }
        }

        setAddType(addType) {
          this._addType = addType;
        }

      }, _defineProperty(_class3, "DoubleDialogArgs", {}), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblMessage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnLeft", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnRight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Singleton.ts", ['cc', './SingletonMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, singletonMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      singletonMgr = module.singletonMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6a0b4sN59FGnZWmhkN+xMZC", "Singleton", undefined);

      class Singleton {
        static getInstance() {
          if (!this.instance) {
            this.instance = new this();
            singletonMgr.sign(this);
          }

          return this.instance;
        }

        static destoryInstance() {
          if (this.instance) {
            this.instance.clear();
            this.instance = null;
            singletonMgr.unSign(this);
          }
        }

      }

      exports('Singleton', Singleton);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AcitonJump.ts", ['cc', './FightConstant.ts', './ActionBase.ts', './FightActionMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, Vec3, tween, FightConstant, ActionBase, fightActionMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
      tween = module.tween;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      ActionBase = module.ActionBase;
    }, function (module) {
      fightActionMgr = module.fightActionMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6c05asnZhdLf77UtXGAWaFC", "AcitonJump", undefined);

      class AcitonJump extends ActionBase {
        /**
         * 
         * @param own 移动节点
         * @param tar 目标节点
         * @param duration 持续时间
         */
        jump(data) {
          let own = data.own;
          let config = data.animCfg;
          let params = config.params;
          let duration = params[0];
          let offset = params[1];
          let tar = data.target;

          let tarPos = this._getTargetPos(tar);

          let _middlePos = this._getMiddlePos(tarPos);

          let _scale = this._getScale(own);

          let _endPos = this._getEndPos(own, tarPos, new Vec3(...offset));

          return tween().parallel(tween().to(duration / 2, {
            position: _middlePos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }).to(duration / 2, {
            position: _endPos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }), tween().call(() => {
            own.setSiblingIndex(10);
            own.play("jump");
          }), tween().to(duration, {
            scale: _scale
          }));
        }

        _getTargetPos(tar) {
          return fightActionMgr.getUnitPos([tar.camp, tar.formationIndex]);
        }

        _getMiddlePos(tarPos) {
          let _middlePos = new Vec3();

          _middlePos.y = tarPos.y + 80;
          return _middlePos;
        }

        _getScale(own) {
          if (own.camp == FightConstant.FightUnitType.Attack) {
            return new Vec3(1.08, 1.08, 1);
          } else if (own.camp == FightConstant.FightUnitType.Defend) {
            return new Vec3(-1.08, 1.08, 1);
          }
        }

        _getEndPos(own, tarPos, offset) {
          if (own.camp == FightConstant.FightUnitType.Attack) {
            return tarPos.subtract(offset);
          } else if (own.camp == FightConstant.FightUnitType.Defend) {
            return tarPos.add(offset);
          }
        }

      }

      exports('AcitonJump', AcitonJump);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightPlayer.ts", ['cc', './Singleton.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, Singleton, FightEvent, FightConstant, fightEventMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      FightEvent = module.FightEvent;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6c83ftCgIFOXZjXpfPUU2Lf", "FightPlayer", undefined);

      let fightPlayer = exports('fightPlayer', null);
      /**
       * @description 播放器 
       * */

      class FightPlayer extends Singleton {
        static init() {
          fightPlayer = exports('fightPlayer', FightPlayer.getInstance());

          fightPlayer._init();
        }

        _init() {
          this._initListeners();
        }

        _initListeners() {
          fightEventMgr.addEventListener(FightConstant.FightEvent.Action_Star, this._onActionStart.bind(this));
        } // 行动开始


        _onActionStart(event) {
          let data = event.getEventData();
          let action = data.Action;
          let actionData = data.ActionData;

          this._prase(action, actionData);
        } // 解析行动


        _prase(action, data) {
          //data[[谁],[攻击描述],[结果描述]]
          let who = data[0];
          let attack = data[1];
          let result = data[2];
          let args = {
            Who: who,
            Attack: attack,
            Result: result
          };
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Attack_Start, args));
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Result_Start, args));
        } // 重播


        replay() {
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Game_Replay, null));
        } // 暂停


        pause() {
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Game_Pause, null));
        } // 继续


        resume() {
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Game_Resume, null));
        } // 直接结束游戏


        skip() {
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Game_End, null));
        }

        destory() {
          FightPlayer.destoryInstance();
        }

        clear() {
          fightPlayer = exports('fightPlayer', null);
        }

      }

      exports('FightPlayer', FightPlayer);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Action.ts", ['cc', './ActionBase.ts', './ActionDelay.ts', './ActionGoBack.ts', './ActionMove.ts', './ActionSpineAnim.ts', './AcitonJump.ts', './ActionAddPrefab.ts'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('ActionBase', module.ActionBase);
    }, function (module) {
      exports('ActionDelay', module.ActionDelay);
    }, function (module) {
      exports('ActionGoBack', module.ActionGoBack);
    }, function (module) {
      exports('ActionMove', module.ActionMove);
    }, function (module) {
      exports('ActionSpineAnim', module.ActionSpineAnim);
    }, function (module) {
      exports('AcitonJump', module.AcitonJump);
    }, function (module) {
      exports('ActionAddPrefab', module.ActionAddPrefab);
    }],
    execute: function () {
      cclegacy._RF.push({}, "6f828y/WwpJWLxMUCzbXyjy", "Action", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightBloodMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './FightConstant.ts', './FightEventMgr.ts', './RoleLayer.ts', './BloodEffect.ts', './FightActionMgr.ts', './BloodLayer.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Vec3, Singleton, FightConstant, fightEventMgr, RoleLayer, BloodEffect, fightActionMgr, BloodLayer;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Vec3 = module.Vec3;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      RoleLayer = module.RoleLayer;
    }, function (module) {
      BloodEffect = module.BloodEffect;
    }, function (module) {
      fightActionMgr = module.fightActionMgr;
    }, function (module) {
      BloodLayer = module.BloodLayer;
    }],
    execute: function () {
      cclegacy._RF.push({}, "6fc413wRgpH9ayZNCuvBHdk", "FightBloodMgr", undefined);

      let fightBloodMgr = exports('fightBloodMgr', null);

      class FightBloodMgr extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_fightMainLayer", null);

          _defineProperty(this, "_fightMainWorld", null);
        }
        /**
         * init
         */


        static init(mainLayer) {
          fightBloodMgr = exports('fightBloodMgr', FightBloodMgr.getInstance());

          fightBloodMgr._init(mainLayer);
        }

        _init(mainLayer) {
          this._fightMainLayer = mainLayer;
          this._fightMainWorld = this._fightMainLayer.getFightMainWorld();

          this._initListeners();
        }

        _initListeners() {
          fightEventMgr.addEventListener(FightConstant.FightEvent.Blood_Change, this._onBloodChange.bind(this));
        }

        _onBloodChange(event) {
          if (!this._fightMainWorld) {
            this._fightMainWorld = this._fightMainLayer.getFightMainWorld();
          }

          let data = event.getEventData();

          this._showBloodChange(data);
        }

        _showBloodChange(fightEventData) {
          let prefabNode = fightEventData.PrefabNode;
          let data = fightEventData.Data;
          let bloodLayer = fightActionMgr.getCommonentInLayer(FightConstant.FightLayer.BLOOD, BloodLayer);
          let result = data.result;
          let bloodType = result[0];
          let num = result[1];
          let com = prefabNode.getComponent(BloodEffect);
          com.setType(bloodType);
          com.setNumber(num);
          let animCfg = data.animCfg;
          let params = animCfg.params;
          let tar = data.target;

          let roleLayer = this._fightMainWorld.getCommonentInLayer(FightConstant.FightLayer.ROLE, RoleLayer);

          let pos = roleLayer.getFomationPos(tar.camp, tar.formationIndex);
          pos = pos.add(new Vec3(...params[1]));
          prefabNode.position = pos;
          bloodLayer.show(prefabNode);
        } // /**
        //  * 
        //  */
        // public check(data:FightActionData) {
        //     log(data,"check");
        // }


        destory() {
          FightBloodMgr.destoryInstance();
        }

        clear() {
          fightBloodMgr = exports('fightBloodMgr', null);
        }

      }

      exports('FightBloodMgr', FightBloodMgr);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightEventDataType.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('FightEventDataType', void 0);

      cclegacy._RF.push({}, "70244WkoBxD569RD7+Olntc", "FightEventDataType", undefined); // 战斗事件数据类型 let data:FightEventDataType.xxxx = event.getData()


      let FightEventDataType;

      (function (_FightEventDataType) {
        // 每个action返回的结构[[谁]，[[对哪些人]]，[做了什么],[[结果1],[结果2]]]
        //飘血相关
        let FightAttackActionDataType;

        (function (_FightAttackActionDataType) {})(FightAttackActionDataType || (FightAttackActionDataType = _FightEventDataType.FightAttackActionDataType || (_FightEventDataType.FightAttackActionDataType = {})));

        let FightResultActionDataType;

        (function (_FightResultActionDataType) {})(FightResultActionDataType || (FightResultActionDataType = _FightEventDataType.FightResultActionDataType || (_FightEventDataType.FightResultActionDataType = {})));
      })(FightEventDataType || (FightEventDataType = exports('FightEventDataType', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BloodEffect.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './EffectBase.ts'], function (exports) {
  'use strict';

  var _defineProperty, _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Label, _decorator, AnimationComponent, EffectBase;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      AnimationComponent = module.AnimationComponent;
    }, function (module) {
      EffectBase = module.EffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _class3, _temp;

      cclegacy._RF.push({}, "70b11ZLPANOEJKsZOAR4a9J", "BloodEffect", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let BloodEffect = exports('BloodEffect', (_dec = ccclass('BloodEffect'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = _class3 = class BloodEffect extends EffectBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lblblood", _descriptor, this);

          _defineProperty(this, "_bloodType", BloodEffect.BloodType.Hurt);
        }

        start() {}
        /**
         * 
         * @param bloodType 设置类型
         */


        setType(bloodType) {
          this._bloodType = bloodType;
        }
        /**
         * 
         * @param num number 数字
         */


        setNumber(num) {
          this.lblblood.setString(num.toString());
        }

        show() {
          let com = this.getComponent(AnimationComponent);
          com.play(this._getAnimationClipName());
        }

        _getAnimationClipName() {
          if (this._bloodType == BloodEffect.BloodType.Hurt) {
            return "numbers_crit";
          } else if (this._bloodType == BloodEffect.BloodType.Double) {
            return "numbers_double";
          }
        }

      }, _defineProperty(_class3, "BloodType", {
        Hurt: 0,
        //伤害
        Double: 1 //连击

      }), _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblblood", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChatScrollView.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ChatMsgItemNode.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Prefab, _decorator, Component, ScrollView, UITransform, log, ChatMsgItemNode;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      ScrollView = module.ScrollView;
      UITransform = module.UITransform;
      log = module.log;
    }, function (module) {
      ChatMsgItemNode = module.ChatMsgItemNode;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "73d1bdi8pdNwrTGqryPM09D", "ChatScrollView", undefined);

      const {
        ccclass,
        property,
        requireComponent
      } = _decorator;
      /**
       * Predefined variables
       * Name = ChatLayer
       * DateTime = Thu Mar 17 2022 14:13:20 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ChatLayer.ts
       * FileBasenameNoExtension = ChatLayer
       * URL = db://assets/scripts/app/views/common/ui/ChatLayer.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      const itemIndex = new Set();
      let ChatScrollView = exports('ChatScrollView', (_dec = ccclass('ChatScrollView'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = class ChatScrollView extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spaceY", _descriptor, this);

          _initializerDefineProperty(this, "ChatItemPrefab", _descriptor2, this);

          _defineProperty(this, "scrollView", void 0);

          _defineProperty(this, "visibleHeight", void 0);

          _defineProperty(this, "_itemList", []);

          _defineProperty(this, "visibleNodes", new Map());

          _defineProperty(this, "lastY", void 0);
        }

        onLoad() {
          this.scrollView = this.getComponent(ScrollView);
          this.visibleHeight = this.scrollView.getComponent(UITransform).height;
        }

        start() {
          for (let index = 0; index < 100; index++) {
            if (index % 2 == 0) {
              this.addChatMsg("玩家1：", "<color=#00ff00>Rich</color>", index);
            } else {
              this.addChatMsg("玩家2：", "撒大声地撒大所奥术大师多奥术大师多大时代实打实撒大声地撒大所奥术大师多奥术大师多大时代实打实", index);
            }
          }

          this.scrollView.scrollToTop();
        }

        addChatMsg(name, text, idx) {
          let msgNode = new ChatMsgItemNode(this.ChatItemPrefab);
          msgNode.setData(idx, name, text);

          this._itemList.push(msgNode);

          this.scrollView.content.addChild(msgNode);
        }

        lateUpdate() {
          const y = Math.floor(this.scrollView.getScrollOffset().y);

          if (this.lastY == y) {
            return;
          }

          this.lastY = y; //更新可见item索引

          this.getVisibleItemIndex(y);
          this.visibleNodes.forEach((node, idx) => {
            if (!itemIndex.has(idx)) {
              node.unuse();
              this.visibleNodes.delete(idx); // console.log("丢弃:",idx );
            }
          });
          itemIndex.forEach(idx => {
            if (!this.visibleNodes.has(idx)) {
              let msgNode = this._itemList[idx];
              msgNode.reuse();
              this.visibleNodes.set(idx, msgNode);
            }
          });
        }

        getVisibleItemIndex(y) {
          itemIndex.clear();
          let curH = 0;

          this._itemList.forEach((element, k) => {
            let itemH = element.getComponent(UITransform).height;
            curH += itemH;

            if (curH > y && curH - itemH < y + this.visibleHeight) {
              itemIndex.add(k);
            }
          });
        }

        onDestory() {
          log("ChatScrollView clear");
          ChatMsgItemNode.chatMsgNodePool.clear();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spaceY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ChatItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LayerBase.ts", ['cc', './ComponentBase.ts', './UIWidget.ts'], function (exports) {
  'use strict';

  var cclegacy, BlockInputEventsComponent, _decorator, ComponentBase, UIWidget;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      BlockInputEventsComponent = module.BlockInputEventsComponent;
      _decorator = module._decorator;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }, function (module) {
      UIWidget = module.UIWidget;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "73fe3uP4DBKEJNhLr9cE7hE", "LayerBase", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let LayerBase = exports('LayerBase', (_dec = ccclass('LayerBase'), _dec(_class = class LayerBase extends ComponentBase {
        // private _eventMsgListeners: Map<string, number>;
        constructor() {
          super();
        }
        /**
         * 在组件加载的时候调用addMsgListener来监听消息
         */


        onLoad() {
          super.onLoad();
          this.addComponent(BlockInputEventsComponent);
          this.addComponent(UIWidget);
        } // 是否吞没点击
        // setSwallTouches(flag: boolean) {
        //     this.node.on(
        //         Node.EventType.TOUCH_START,
        //         (touch) => {
        //             return true;
        //         },
        //         this
        //     );
        //     this.node["_touchListener"].swallowTouches = flag;
        // }
        // btnClose(event, customEventData) {
        //     SceneMgr.getInstance().removeTableLayer();
        // }


      }) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GameConfig.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "740a2QwD2lOYL6UW1CS7Fb3", "GameConfig", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-03 15:28:39
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-03 15:34:02
       * @Description: file content
       */


      let GameConfig = exports('GameConfig', {
        PartitionKey: "",
        QDKey: "",
        QDName: "",
        SDKLogin: "",
        ServerUrl: "",
        ServerListUrl: "",
        BigUpdateType: ""
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionColor.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "78779SoN39M/ol1nVkMzmLP", "ActionColor", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ChatMsgItemNode.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ChatMsgItemComp.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Node, UITransform, Widget, widgetManager, v3, instantiate, NodePool, ChatMsgItemComp;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      UITransform = module.UITransform;
      Widget = module.Widget;
      widgetManager = module.widgetManager;
      v3 = module.v3;
      instantiate = module.instantiate;
      NodePool = module.NodePool;
    }, function (module) {
      ChatMsgItemComp = module.ChatMsgItemComp;
    }],
    execute: function () {
      cclegacy._RF.push({}, "796553iQwlPHJp6OhdboLKX", "ChatMsgItemNode", undefined);
      /**
       * Predefined variables
       * Name = ChatMsgItem
       * DateTime = Thu Mar 17 2022 14:32:09 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ChatMsgItem.ts
       * FileBasenameNoExtension = ChatMsgItem
       * URL = db://assets/scripts/app/views/chat/ChatMsgItem.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */


      class ChatMsgItemNode extends Node {
        constructor(prefab) {
          super();

          _defineProperty(this, "_chatMsgItemPrefab", void 0);

          _defineProperty(this, "_chatMsgItemNode", void 0);

          _defineProperty(this, "_uiTransComp", void 0);

          _defineProperty(this, "_playerName", void 0);

          _defineProperty(this, "_text", void 0);

          this._chatMsgItemPrefab = prefab;
          this._uiTransComp = this.addComponent(UITransform);
          this._uiTransComp.anchorX = 0;
          this._uiTransComp.height = 50;
          let widget = this.addComponent(Widget);
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL;
          widget.left = 0;
          widget.right = 0;
          this.on(Node.EventType.SIZE_CHANGED, this._updateView.bind(this));
        }

        setData(idx, name, text) {
          this._playerName = name;
          this._text = text;

          this._updateView();
        }

        _updateView() {
          if (this._chatMsgItemNode) {
            //更新数据
            let nodeComp = this._chatMsgItemNode.getComponent(ChatMsgItemComp);

            nodeComp.playerName = this._playerName;
            nodeComp.text = this._text; //更新富文本长度

            nodeComp.setRichLabelMaxWidth(this._uiTransComp.width);
            this._uiTransComp.height = nodeComp.getRichHeight(); //置顶

            this._chatMsgItemNode.position = v3(this._chatMsgItemNode.position.x, this._uiTransComp.height / 2, 0);
          }
        } //刷新item


        reuse() {
          if (this._chatMsgItemNode) {
            return;
          }

          let msgNode = ChatMsgItemNode.chatMsgNodePool.get();

          if (!msgNode) {
            msgNode = instantiate(this._chatMsgItemPrefab);
          }

          this.addChild(msgNode);
          this._chatMsgItemNode = msgNode;

          this._updateView();
        }

        unuse() {
          if (this._chatMsgItemNode) {
            ChatMsgItemNode.chatMsgNodePool.put(this._chatMsgItemNode);
          }

          this._chatMsgItemNode = null;
        }

        createNode() {}

      }

      exports('ChatMsgItemNode', ChatMsgItemNode);
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      _defineProperty(ChatMsgItemNode, "chatMsgNodePool", new NodePool());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ErrorCode.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ErrorCode', void 0);

      cclegacy._RF.push({}, "7990cVYjydHBrTm+C5bR4iG", "ErrorCode", undefined);

      let ErrorCode;

      (function (ErrorCode) {
        ErrorCode[ErrorCode["OK"] = 0] = "OK";
        ErrorCode[ErrorCode["TIME_OUT"] = 1] = "TIME_OUT";
      })(ErrorCode || (ErrorCode = exports('ErrorCode', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineComponentBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Protocol.ts', './ComponentBase.ts', './YYNamespace.ts', './FightBloodUI.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Node, _decorator, sp, Protocol, ComponentBase, yy, FightBloodUI;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      sp = module.sp;
    }, function (module) {
      Protocol = module.Protocol;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }, function (module) {
      yy = module.yy;
    }, function (module) {
      FightBloodUI = module.FightBloodUI;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "7bac13IP9lG0KdzKdlL8OUY", "SpineComponentBase", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let SpineComponentBase = exports('SpineComponentBase', (_dec = ccclass('SpineComponentBase'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = (_temp = class SpineComponentBase extends ComponentBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spineNode", _descriptor, this);

          _initializerDefineProperty(this, "effectFontNode", _descriptor2, this);

          _initializerDefineProperty(this, "effectBackNode", _descriptor3, this);

          _defineProperty(this, "_spine", null);

          _defineProperty(this, "_root", null);

          _defineProperty(this, "_animateStartCallback", null);

          _defineProperty(this, "_animateEndCallback", null);

          _defineProperty(this, "_animiateInterruptCallback", null);

          _defineProperty(this, "_animiateEventCallback", null);

          _defineProperty(this, "_mixTime", 0.1);
        } //动作融合时间


        onLoad() {
          this._init();

          this.addMsgListener(Protocol.Inner.SetAnimationSpeed, this._setSpineAnimationSpeed.bind(this));
        }

        _setSpineAnimationSpeed(event) {
          let speed = event.getRawData();
          this._spine.timeScale = speed;
        }

        _init() {
          this._root = this.node.parent;
          let spine = this.spineNode.getComponent(sp.Skeleton);
          this._spine = spine;

          this._initSpineListener();

          this._initMix();
        }

        _initSpineListener() {
          if (!this._spine) {
            return;
          }

          this._spine.setStartListener(this._onAnimateStartCallback.bind(this));

          this._spine.setEndListener(this._onAnimateEndCallback.bind(this));

          this._spine.setInterruptListener(this._onAnimateInterruptCallback.bind(this));

          this._spine.setEventListener(this._onAnimateEventCallback.bind(this));
        }

        _initMix() {
          this._setMix(yy.macro.HeroAnimate.Idle, yy.macro.HeroAnimate.Run);

          this._setMix(yy.macro.HeroAnimate.Idle, yy.macro.HeroAnimate.Die);

          this._setMix(yy.macro.HeroAnimate.Idle, yy.macro.HeroAnimate.Hurt);

          this._setMix(yy.macro.HeroAnimate.Idle, yy.macro.HeroAnimate.Jump);

          this._setMix(yy.macro.HeroAnimate.Idle, yy.macro.HeroAnimate.Skill01);

          this._setMix(yy.macro.HeroAnimate.Idle, yy.macro.HeroAnimate.Skill02);

          this._setMix(yy.macro.HeroAnimate.Run, yy.macro.HeroAnimate.Hurt);

          this._setMix(yy.macro.HeroAnimate.Run, yy.macro.HeroAnimate.Die);

          this._setMix(yy.macro.HeroAnimate.Run, yy.macro.HeroAnimate.Attack);

          this._setMix(yy.macro.HeroAnimate.Run, yy.macro.HeroAnimate.Jump);

          this._setMix(yy.macro.HeroAnimate.Run, yy.macro.HeroAnimate.Skill01);

          this._setMix(yy.macro.HeroAnimate.Run, yy.macro.HeroAnimate.Skill02);

          this._setMix(yy.macro.HeroAnimate.Attack, yy.macro.HeroAnimate.Idle);

          this._setMix(yy.macro.HeroAnimate.Attack, yy.macro.HeroAnimate.Die);

          this._setMix(yy.macro.HeroAnimate.Attack, yy.macro.HeroAnimate.Hurt);
        } // 动作开始回调


        _onAnimateStartCallback(trackEntry) {
          if (this._animateStartCallback) {
            this._animateStartCallback(trackEntry);
          }
        } // 动作播放完回调


        _onAnimateEndCallback(trackEntry) {
          if (this._animateEndCallback) {
            this._animateEndCallback(trackEntry);
          }
        } // 动作被打断回调


        _onAnimateInterruptCallback(trackEntry) {
          if (this._animiateInterruptCallback) {
            this._animiateInterruptCallback(trackEntry);
          }
        } // 帧事件回调


        _onAnimateEventCallback(trackEntry, event) {
          if (this._animiateEventCallback) {
            this._animiateEventCallback(trackEntry, event);
          }
        } // 动作融合


        _setMix(anim1, anim2, mixTime) {
          if (this._spine.findAnimation(anim1) && this._spine.findAnimation(anim2)) {
            this._spine.setMix(anim1, anim2, mixTime || this._mixTime);

            this._spine.setMix(anim2, anim1, mixTime || this._mixTime);
          }
        }
        /**
         * @description 立即播放当前动画
         * @param actionName spine 动作名称
         * @param isLoop 是否循环播放 默认值false
         */


        play(actionName, isLoop) {
          if (this._spine) {
            let trackIndex = 0;

            this._spine.setAnimation(trackIndex, actionName, isLoop !== null && isLoop !== void 0 ? isLoop : false);
          }
        }
        /**
         * @description 暂停当前动画
         */


        stop() {
          this._spine.paused = true;
        }
        /**
         * @description 继续播放当前动画
         */


        resume() {
          this._spine.paused = false;
        }
        /**
         * @description 清理当前动画
         * @param trackIndex 播放动作队列索引，默认0，即当前动画
         */


        clear(trackIndex = 0) {
          this._spine.clearTrack(trackIndex);
        }
        /**
         * @description 清理作队列索引
         */


        clearAll() {
          this._spine.clearTracks();
        }
        /** 动画开始回调 */


        setAnimateStartCallback(callback) {
          this._animateStartCallback = callback;
        }
        /** 动画结束回调 */


        setAnimateEndCallback(callback) {
          this._animateEndCallback = callback;
        }
        /** 动画被打断回调 */


        setAnimateInterruptCallback(callback) {
          this._animiateInterruptCallback = callback;
        }
        /** 动画事件回调 */


        setAnimateEventCallback(callback) {
          this._animiateEventCallback = callback;
        }

        addEffectFont(node, offset) {
          this.effectFontNode.addChild(node);

          if (offset) {
            node.position = offset;
          }
        }

        addEffectBack(node, offset) {
          this.effectBackNode.addChild(node);

          if (offset) {
            node.position = offset;
          }
        }
        /**
         * addBloodUI
         */


        addBloodUI(node) {
          let node_blood_ui = this._root.getChildByName("node_blood_ui");

          node_blood_ui.addChild(node);
        }
        /**
         * updateBlood
         */


        updateBlood(cur, top) {
          let com = this._root.getComponentInChildren(FightBloodUI);

          com.updateBlood(cur, top);
        }
        /**
         * @description 换皮肤
         * @param skinName:string 皮肤id
         */


        changeSkin(skinName) {
          this._spine.setSkin(skinName);
        }
        /**
         * @description 查找插槽
         */


        findSlot(name) {
          return this._spine.findSlot(name);
        }
        /**
         * 
         * @description 更换皮肤的单间装备
         * @param skinName 新皮肤名字（装备所在的皮肤）
         * @param oldSlotName 旧插槽的名字
         * @param newSlotName 新插槽的名字
         */


        changeEquip(skinName, oldSlotName, newSlotName) {
          let skin_origin = this._spine._skeleton.skin.name;
          let slot_origin = this.findSlot(oldSlotName);
          this.changeSkin(skinName);
          let slot_new = this.findSlot(newSlotName);
          let attachment_new = slot_new.getAttachment();
          this.changeSkin(skin_origin);
          slot_origin.setAttachment(attachment_new);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spineNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectFontNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "effectBackNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameMgr.ts', './ViewProtocol.ts', './Protocol.ts', './LayerBase.ts', './GlobalFunction.ts', './SceneMgr.ts', './ModelLogin.ts', './model.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Label, _decorator, Animation, gameMgr, ViewProtocol, Protocol, LayerBase, G, sceneMgr, ModelLogin;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
      _decorator = module._decorator;
      Animation = module.Animation;
    }, function (module) {
      gameMgr = module.gameMgr;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      Protocol = module.Protocol;
    }, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      G = module.G;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      ModelLogin = module.ModelLogin;
    }, null],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "7e311uFCKpJ7qVxFozPyvzF", "LoginLayer", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let LoginLayer = exports('LoginLayer', (_dec = ccclass('LoginLayer'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class LoginLayer extends LayerBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "serverName", _descriptor, this);

          _initializerDefineProperty(this, "versionLbl", _descriptor2, this);

          _defineProperty(this, "_rootNode", null);
        }

        start() {
          // super.onLoad();
          this._rootNode = this.node.parent; // set version

          if (this.versionLbl) ;
          this.addMsgListener(Protocol.Login.identify, this._onIdentifyHandler.bind(this));
          this.addMsgListener(Protocol.Login.login, this._onLoginHandler.bind(this));
          this.addMsgListener(Protocol.Inner.SelectServer, this._onSelectServerHandler.bind(this));
          this.addMsgListener(Protocol.Inner.CloseNoticeView, this.playShowEnterBtnAnimate.bind(this)); // 新手引导层

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
          sceneMgr.sendCreateView(ViewProtocol.LoginAccountLayer);
        }

        _connectServer() {
          let model = gameMgr.getModel(ModelLogin);
          let loginData = model.getLoginData(); // GET service + /client/which_server?user_id=xxx&channel_key=xxxxx&version=yyyy
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
          sceneMgr.sendCreateView(ViewProtocol.ResLoadingLayer); // 功能开启监听层
          // sceneMgr.sendCreateView(ViewProtocol.SystemOpenLayer);
          // model.setEnterGame(true);
          // NotifyHelper.getInstance().startNotify();
        } // 点击进入游戏


        onClickEnterGameBtn(event, customEventData) {
          this._enterGame();
        } // 点击打开服务器列表


        onClickServerListBtn(event, customEventData) {
          G.showMsgTips("系统未开发");
        }

        playShowEnterBtnAnimate() {
          let com = this._rootNode.getComponent(Animation);

          com.play();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "versionLbl", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TransLoadingLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './LayerBase.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, LayerBase, sceneMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "7fbefS+mJxK4JPPan0zEAj2", "TransLoadingLayer", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let TransLoadingLayer = exports('TransLoadingLayer', (_dec = ccclass('TransLoadingLayer'), _dec(_class = (_temp = class TransLoadingLayer extends LayerBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_enterCallback", null);

          _defineProperty(this, "_completeCallback", null);
        }

        start() {}

        setEnterCalback(cb) {
          this._enterCallback = cb;
        }

        setCompleteCallback(cb) {
          this._completeCallback = cb;
        }

        onEnterCallback() {
          if (this._enterCallback) {
            this._enterCallback();
          }
        }

        onTransComplete(data) {
          if (this._completeCallback) {
            this._completeCallback();
          }

          sceneMgr.removeTransitionLayer();
        }

      }, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator6.ts", ['cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, log, instantiate, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, sceneMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "82a84kJMT9AYKgLbEO54WD6", "Creator", undefined);

      class PreRewardCreator extends ViewCreatorBase {
        onInit() {
          log("PreRewardCreator === ");
          this.regMsg(ViewProtocol.PreviewReward, this.onCreate.bind(this));
        }

        onCreate(event) {
          log("onCreate PreRewardCreator=== ");
          let viewInfo = viewRegisterMgr.getViewInfo("preReward", "preRewardMain");
          let path = viewInfo.Path;
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

      }

      exports('PreRewardCreator', PreRewardCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './DataBase.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, error, log, Singleton, DataBase;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      error = module.error;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      DataBase = module.DataBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8373b0nsYtBeYRz/fsYpcs4", "DataMgr", undefined);

      class DataMgr extends Singleton {
        constructor() {
          super();

          _defineProperty(this, "_dataMap", void 0);

          this._dataMap = new Map();
        }

        registerDataFile(dataHandlerName, path, parser) {
          let data = new DataBase(dataHandlerName, path, parser);

          this._dataMap.set(dataHandlerName, data);
        }

        loadData(dataHandlerName, pair, done) {
          let start = pair[0];
          let ended = pair[1];

          if (start && ended) {
            this._loadDataWithIndex(dataHandlerName, pair, done);
          } else {
            this._loadDataWithDataHandlerName(dataHandlerName, done);
          }
        }

        getData(dataHandlerName, namekey) {
          let key = (namekey === null || namekey === void 0 ? void 0 : namekey.toString()) || "";

          let data = this._getDataCache(dataHandlerName);

          if (data) {
            return data.getData(key);
          } else {
            error("Calling getData() fail! Data can't Find ! [ %s ] [ %s ] ", dataHandlerName, key);
          }
        }

        delData(dataHandlerName, namekey) {
          let key = (namekey === null || namekey === void 0 ? void 0 : namekey.toString()) || "";

          let data = this._getDataCache(dataHandlerName);

          if (data) {
            return data.delData(key);
          } else {
            error("Calling delData() fail! Data can't Find ! [ %s ] [ %s ] ", dataHandlerName, key);
          }
        }

        showAll() {
          log(this._dataMap);
        }

        _getDataCache(dataHandlerName) {
          if (!this._dataMap.has(dataHandlerName)) {
            error("Data does not be registered[ %s ]", dataHandlerName);
            return null;
          }

          let data = this._dataMap.get(dataHandlerName);

          return data;
        }

        _loadDataWithIndex(dataHandlerName, pair, done) {
          let data = this._getDataCache(dataHandlerName);

          if (data) {
            let start = pair[0];
            let ended = pair[1];

            for (let index = start; index <= ended; index++) {
              if (index == ended) {
                data.loadDataWithNameKey(index.toString(), done);
              } else {
                data.loadDataWithNameKey(index.toString());
              }
            }
          }
        }

        _loadDataWithDataHandlerName(dataHandlerName, done) {
          let data = this._getDataCache(dataHandlerName);

          if (data) {
            data.loadDataWithNameKey("", done);
          }
        }

        clear() {
          dataMgr = exports('dataMgr', null);
        }

      } // ()();


      let dataMgr = exports('dataMgr', (() => {
        return DataMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionGoBack.ts", ['cc', './FightConstant.ts', './ActionBase.ts', './FightActionMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, tween, Vec3, FightConstant, ActionBase, fightActionMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      Vec3 = module.Vec3;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      ActionBase = module.ActionBase;
    }, function (module) {
      fightActionMgr = module.fightActionMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "846c5wUjuFFv4CcWo3XIoUW", "ActionGoBack", undefined);

      class ActionGoBack extends ActionBase {
        /**
         * 
         * @param own 移动节点
         * @param pos 阵型孔位置
         * @param duration 持续时间
         */
        goBack(data) {
          let own = data.own;
          let pos = fightActionMgr.getUnitPos([own.camp, own.formationIndex]);
          let config = data.animCfg;
          let params = config.params;
          let duration = params[0];

          let _scale = this._getScale(own);

          return tween().parallel(tween().to(duration, {
            position: pos
          }, {
            progress: (start, end, current, ratio) => {
              return start + (end - start) * ratio;
            }
          }), tween().to(duration, {
            scale: _scale
          }), tween().call(() => {
            own.setSiblingIndex(own.formationIndex);
          }));
        }

        _getScale(own) {
          if (own.camp == FightConstant.FightUnitType.Attack) {
            return new Vec3(1, 1, 1);
          } else if (own.camp == FightConstant.FightUnitType.Defend) {
            return new Vec3(-1, 1, 1);
          }
        }

      }

      exports('ActionGoBack', ActionGoBack);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightData.ts", ['cc', './FightDataBase.ts'], function (exports) {
  'use strict';

  var cclegacy, FightDataBase, FightPlayerDataBase, FightFormationDataBase;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      FightDataBase = module.FightDataBase;
      FightPlayerDataBase = module.FightPlayerDataBase;
      FightFormationDataBase = module.FightFormationDataBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "84b2b8Ihn5IXL6h3WkR26nk", "FightData", undefined);

      class FightData extends FightDataBase {}

      exports('FightData', FightData);

      class FightPlayerData extends FightPlayerDataBase {}

      exports('FightPlayerData', FightPlayerData);

      class FightFormationData extends FightFormationDataBase {}

      exports('FightFormationData', FightFormationData);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightDataBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "84f5f/Y/3lIcq2fqQNOWpGI", "FightDataBase", undefined);

      class FightPlayerDataBase {
        // 玩家信息[玩家ID，玩家名字，玩家等级，是否为玩家，战力,...]
        constructor(params) {
          _defineProperty(this, "_info", null);

          this._info = params;
        }

        getPlayerId() {
          var _this$_info$;

          return (_this$_info$ = this._info[0]) !== null && _this$_info$ !== void 0 ? _this$_info$ : -1;
        }

        getPlayerName() {
          var _this$_info$2;

          return (_this$_info$2 = this._info[1]) !== null && _this$_info$2 !== void 0 ? _this$_info$2 : "";
        }

        getPlayerLvl() {
          var _this$_info$3;

          return (_this$_info$3 = this._info[2]) !== null && _this$_info$3 !== void 0 ? _this$_info$3 : -1;
        }

        getIsPlayer() {
          var _this$_info$4;

          return (_this$_info$4 = this._info[3]) !== null && _this$_info$4 !== void 0 ? _this$_info$4 : false;
        }

        getPlayerBattleValue() {
          var _this$_info$5;

          return (_this$_info$5 = this._info[4]) !== null && _this$_info$5 !== void 0 ? _this$_info$5 : -1;
        }

      }

      exports('FightPlayerDataBase', FightPlayerDataBase);

      class FightFormationDataBase {
        // 玩家信息[阵位置索引,武将id,当前hp,总hp,武将战力,...]
        constructor(params) {
          _defineProperty(this, "_info", null);

          this._info = params;
        }

        getFormationIndex() {
          var _this$_info$6;

          return (_this$_info$6 = this._info[0]) !== null && _this$_info$6 !== void 0 ? _this$_info$6 : -1;
        }

        getHeroId() {
          var _this$_info$7;

          return (_this$_info$7 = this._info[1]) !== null && _this$_info$7 !== void 0 ? _this$_info$7 : -1;
        }

        getHeroCurHp() {
          var _this$_info$8;

          return (_this$_info$8 = this._info[2]) !== null && _this$_info$8 !== void 0 ? _this$_info$8 : -1;
        }

        getHeroTopHp() {
          var _this$_info$9;

          return (_this$_info$9 = this._info[3]) !== null && _this$_info$9 !== void 0 ? _this$_info$9 : -1;
        }

        getHeroBattleValue() {
          var _this$_info$10;

          return (_this$_info$10 = this._info[4]) !== null && _this$_info$10 !== void 0 ? _this$_info$10 : -1;
        }

      }

      exports('FightFormationDataBase', FightFormationDataBase);

      class FightDataBase {
        // 对战双方信息
        // 对战布阵信息
        //p: 对战双方信息:p[0]攻方信息,p[1]守方信息
        // m:Array<number>对战布阵信息:m[0]攻方信息,m[1]守方信息
        //r:Array<number>//每回合描述[[大回合1的描述],...],每个大回合的行动描述[[行动1],...]
        //rl:number //战斗结果 0功方胜利 1守方胜利
        //t:number //战报类型
        constructor(data) {
          _defineProperty(this, "_fightData", null);

          _defineProperty(this, "_attackData", null);

          _defineProperty(this, "_defendData", null);

          _defineProperty(this, "_attackFormationData", new Array());

          _defineProperty(this, "_defendFormationData", new Array());

          let json = data.json;
          this._fightData = json;
          this._attackData = new FightPlayerDataBase(this._fightData.p[0]);
          this._defendData = new FightPlayerDataBase(this._fightData.p[1]);

          this._fightData.m[0].forEach(element => {
            let data = new FightFormationDataBase(element);

            this._attackFormationData.push(data);
          });

          this._fightData.m[1].forEach(element => {
            let data = new FightFormationDataBase(element);

            this._defendFormationData.push(data);
          });
        }
        /**
         * 
         * @returns 返回攻方玩家信息
         */


        getAttackPlayerData() {
          return this._attackData;
        }
        /**
         * 
         * @returns 返回守方玩家信息
         */


        getDefendPlayerData() {
          return this._defendData;
        }
        /**
         * 
         * @returns 返回攻方布阵信息
         */


        getAttackFormationDatas() {
          return this._attackFormationData;
        }
        /**
         * 
         * @returns 返回守方布阵信息
         */


        getDefendFormationDatas() {
          return this._defendFormationData;
        }
        /**
         * 
         * @returns 返回战斗结果
         */


        getFightResult() {
          return this._fightData.rl;
        }
        /**
         * 
         * @returns 返回战报类型
         */


        getFightReprotType() {
          return this._fightData.t;
        }
        /**
         * 
         * @returns 返回回合集合
         */


        getRoundData() {
          return this._fightData.r;
        }

      }

      exports('FightDataBase', FightDataBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HttpMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './NetStateMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, log, sys, Singleton, netStateMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
      sys = module.sys;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      netStateMgr = module.netStateMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "87af54bM8hNXrMOvJ5SAta9", "HttpMgr", undefined);

      class HttpMessage {
        //结果码
        //解析后的json{}
        constructor(code, data) {
          _defineProperty(this, "_code", void 0);

          _defineProperty(this, "code", void 0);

          _defineProperty(this, "_data", void 0);

          _defineProperty(this, "data", void 0);

          this._code = code;
          this._data = data;
        }

      }

      exports('HttpMessage', HttpMessage);

      class HttpMgr extends Singleton {
        constructor() {
          super();
        }

        get(callback, url, needLoading) {
          log("[Http] Get", url);
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 500) {
              let msg = this._responseHandler(xhr);

              callback(msg);
            }
          };

          xhr.ontimeout = ev => {
            // GlobalFunction.ShowMsgTips("请求超时，请检查网络设置或稍后再试");
            netStateMgr.netWorkError();
          };

          xhr.onerror = ev => {
            // GlobalFunction.ShowMsgTips(
            //     "网络连接失败，请检查网络设置或稍后再试"
            // );
            netStateMgr.netWorkError();
          };

          xhr.open("GET", url);
          xhr.timeout = 6000;
          xhr.send();
        }

        post(callback, url, data, needLoading) {
          log("[Http] Post", url);
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 500) {
              let msg = this._responseHandler(xhr);

              callback(msg);
            }
          };

          xhr.ontimeout = ev => {
            // GlobalFunction.ShowMsgTips("请求超时，请检查网络设置或稍后再试");
            netStateMgr.netWorkError();
          };

          xhr.onerror = ev => {
            // GlobalFunction.ShowMsgTips(
            //     "网络连接失败，请检查网络设置或稍后再试"
            // );
            netStateMgr.netWorkError();
          };

          xhr.open("POST", url);

          if (sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
          }

          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.timeout = 6000;
          xhr.send(this._serializeData(data));
        }

        _responseHandler(xhr) {
          let msg = null;

          if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status != 404) {
            msg = this._packMsg(0, JSON.parse(xhr.responseText));
          } else if (xhr.status === 404) {
            msg = this._packMsg(404, {
              error: "404 page not found!"
            });
          } else if (xhr.readyState === 3) {
            msg = this._packMsg(3, {
              error: "Request dealing!"
            });
          } else if (xhr.readyState === 2) {
            msg = this._packMsg(2, {
              error: "Request received!"
            });
          } else if (xhr.readyState === 1) {
            msg = this._packMsg(1, {
              error: "Server connection established! Request hasn't been received"
            });
          } else if (xhr.readyState === 0) {
            msg = this._packMsg(4, {
              error: "Request hasn't been initiated!"
            });
          }

          return msg;
        }

        _packMsg(code, data) {
          return new HttpMessage(code, data);
        }

        _serializeData(datas) {
          let serializeParams = "";

          for (let variable in datas) {
            serializeParams = serializeParams + variable + "=" + datas[variable] + "&";
          }

          serializeParams = serializeParams.substring(0, serializeParams.length - 1);
          return serializeParams;
        }

        clear() {
          httpMgr = exports('httpMgr', null);
        }

      } // ()();


      let httpMgr = exports('httpMgr', (() => {
        return HttpMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoginAccountLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './LayerBase.ts', './GlobalFunction.ts', './SceneMgr.ts', './Storage.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, EditBox, _decorator, LayerBase, G, sceneMgr, storage;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      EditBox = module.EditBox;
      _decorator = module._decorator;
    }, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      G = module.G;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      storage = module.storage;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp;

      cclegacy._RF.push({}, "8c0d37C7exKZ6j6aPNj6qaI", "LoginAccountLayer", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let LoginAccountLayer = exports('LoginAccountLayer', (_dec = ccclass('LoginAccountLayer'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec4 = property(EditBox), _dec(_class = (_class2 = (_temp = class LoginAccountLayer extends LayerBase {
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
          let userName = storage.get("LoginUserName");

          if (userName) {
            this.editAccount.string = userName;
          }

          let pwd = storage.get("LoginPassWord");

          if (pwd) {
            this.editPassword.string = pwd;
          }
        }

        onEditDirectLoginEnded(editbox, customEventData) {//登录串
          // let directLoginKey = this.editDirectLogin.string;
          // gameMgr.getModel(ModelLogin).setDirectLoginKey(directLoginKey);
        }

        onClickRegBtn() {
          G.showMsgTips("暂未开启!");
        }

        onClickLoginBtn() {
          let userName = this.editAccount.string;
          let passWord = this.editPassword.string;

          if (userName == "") {
            G.showMsgTips("账号不能为空!");
            return;
          }

          if (passWord == "") {
            G.showMsgTips("密码不能为空!");
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
          storage.set("LoginUserName", userName);
          storage.set("LoginPassWord", passWord); //                 let model = gameMgr.getModel(ModelLogin);
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
          sceneMgr.popTableLayer();
          G.showNotice();
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

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionTypeSelItem.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Node, _decorator, Component, Label;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      Label = module.Label;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "8d64axz4rBHL5M2Qm9f0Ez6", "ActionTypeSelItem", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = ActionTypeSelItem
       * DateTime = Wed Mar 09 2022 16:33:02 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ActionTypeSelItem.ts
       * FileBasenameNoExtension = ActionTypeSelItem
       * URL = db://assets/skill_eitor/ActionTypeSelItem.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let ActionTypeSelItem = exports('ActionTypeSelItem', (_dec = ccclass('ActionTypeSelItem'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class ActionTypeSelItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "labelNode", _descriptor, this);

          _initializerDefineProperty(this, "selNode", _descriptor2, this);

          _defineProperty(this, "_txt", void 0);

          _defineProperty(this, "_type", void 0);

          _defineProperty(this, "_isSel", void 0);
        }

        get txt() {
          return this._txt;
        }

        set txt(value) {
          this._txt = value;
          let labelComp = this.labelNode.getComponent(Label);
          labelComp.string = value;
        }

        get type() {
          return this._type;
        }

        set type(value) {
          this._type = value;
        }

        get isSel() {
          return this._isSel;
        }

        set isSel(value) {
          this._isSel = value;
          this.selNode.active = value;
        }

        start() {
          // [3]
          this.isSel = false;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "labelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "selNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TranslateLabel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './TranslateMgr.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, CCInteger, CCBoolean, _decorator, Component, Label, translateMgr;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      CCInteger = module.CCInteger;
      CCBoolean = module.CCBoolean;
      _decorator = module._decorator;
      Component = module.Component;
      Label = module.Label;
    }, function (module) {
      translateMgr = module.translateMgr;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "8f4d3oNSvBEq7D23+2jKObh", "TranslateLabel", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let TranslateLabel = exports('default', (_dec = property(CCInteger), _dec2 = property(CCBoolean), ccclass(_class = (_class2 = (_temp = class TranslateLabel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "translateId", _descriptor, this);

          _initializerDefineProperty(this, "isTranslateByCode", _descriptor2, this);
        }

        onLoad() {
          let lbl = this.node.getComponent(Label);

          if (lbl && this.translateId) {
            lbl.string = translateMgr.translate(this.translateId);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "translateId", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isTranslateByCode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AttackActionMgr.ts", ['cc', './Singleton.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts', './GlobalFunction.ts', './FightActionMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, tween, log, Singleton, FightEvent, FightConstant, fightEventMgr, G, fightActionMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      FightEvent = module.FightEvent;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      G = module.G;
    }, function (module) {
      fightActionMgr = module.fightActionMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "928a92vL6lDK5Cfz5LQ9pPm", "AttackActionMgr", undefined);

      let attackActionMgr = exports('attackActionMgr', null);
      /**
       * @description 攻击行动管理器 
       * */

      class AttackActionMgr extends Singleton {
        static init() {
          attackActionMgr = exports('attackActionMgr', AttackActionMgr.getInstance());
        }

        parse(data) {
          let attackData = data.Attack;
          let attackActionId = attackData[0];

          switch (attackActionId) {
            case FightConstant.FightAttackAction.Action_Fail:
              // 攻击失败
              break;

            case FightConstant.FightAttackAction.Action_Skill:
              //技能攻击
              this._parseSkill(data);

              break;

            case FightConstant.FightAttackAction.Action_Buff:
              //直接伤害(一些dot，每回合的伤害/每回合治疗等)
              break;
          }
        }

        _parseSkill(data) {
          let attackData = data.Attack;
          let skillId = attackData[1];
          let config = G.getConfig("FightSkill", skillId);
          let skillAnimation = config.skillAnimation;
          let hitConfig = G.getConfig("FightHit", skillAnimation); // 全局技能时间轴

          let skillTimeline = hitConfig.skillTimeline;

          if (skillTimeline.length > 0) {
            this._runSkillTimelineAction(skillTimeline, data);
          } // 攻击单位时间轴


          let unitHitTimeline = hitConfig.attackUnitTimeline;

          if (unitHitTimeline.length > 0) {
            this._runAttackUnitTimelineAction(unitHitTimeline, data);
          }
        }

        _runSkillTimelineAction(skillTimeline, data) {}

        _runAttackUnitTimelineAction(unitTimeline, data) {
          let allTimeLine = [];
          let ownUnit = fightActionMgr.getOwnUnit(data);
          let attackData = data.Attack;
          let whom = attackData[2];
          let tarUnit = null;

          if (whom.length > 0) {
            tarUnit = fightActionMgr.getUnit(whom);
          }

          unitTimeline.forEach(animations => {
            let oneTimeTween = tween();
            animations.forEach(anim => {
              let fightActionData = {
                own: ownUnit,
                target: tarUnit,
                result: undefined,
                animCfg: anim
              };
              let tween = fightActionMgr.getAnimation(fightActionData);
              oneTimeTween.then(tween);
            });
            allTimeLine.push(oneTimeTween);
          });

          if (allTimeLine.length > 1) {
            let parallel = tween(ownUnit).parallel(...allTimeLine);
            parallel.call(() => {
              log("attack action finished!"); // 攻击结束

              fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Attack_End, data));
            }).start();
          } else {
            let t = allTimeLine[0];
            t.target(ownUnit).call(() => {
              log("attack action finished!"); // 攻击结束

              fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Attack_End, data));
            }).start();
          }
        }

        destory() {
          AttackActionMgr.destoryInstance();
        }

        clear() {
          attackActionMgr = exports('attackActionMgr', null);
        }

      }

      exports('AttackActionMgr', AttackActionMgr);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightDataMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      cclegacy._RF.push({}, "95ac4ppWkpNN4tJVb93Rk6G", "FightDataMgr", undefined);

      const Parse = (report, clas) => new clas(report);

      let fightDataMgr = exports('fightDataMgr', null);

      class FightDataMgr extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_reportData", void 0);
        }

        static init() {
          fightDataMgr = exports('fightDataMgr', FightDataMgr.getInstance());
        }
        /**
         * @description 解析战报
         * @param data 战报数据
         */


        parse(report, clas, isNotCache) {
          let rp = Parse(report, clas); // 默认缓存

          if (!isNotCache) {
            this._reportData = rp;
            this._reportData;
          }

          return rp;
        }
        /**
         * 
         * @param clas T extends typeof FightDataBase
         * @returns intstances of clas
         */


        getFightData(clas) {
          return this._reportData;
        }

        destory() {
          FightDataMgr.destoryInstance();
        }

        clear() {
          fightDataMgr = exports('fightDataMgr', null);
        }

      }

      exports('FightDataMgr', FightDataMgr);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewRegisterMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './ShowBackgroundMgr.ts', './Creator5.ts', './Creator.ts', './Creator6.ts', './define.ts', './Creator2.ts', './ViewCreatorManager.ts', './Creator8.ts', './Creator4.ts', './Creator7.ts', './Creator3.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton, ShowBackgroundMgr, DialogCreator, LoginCreator, PreRewardCreator, MainCityCreator, viewCreatorMgr, FightCreator, FormationCreator, LoadingCreator, ChatCreator;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      ShowBackgroundMgr = module.ShowBackgroundMgr;
    }, function (module) {
      DialogCreator = module.DialogCreator;
    }, function (module) {
      LoginCreator = module.LoginCreator;
    }, function (module) {
      PreRewardCreator = module.PreRewardCreator;
    }, null, function (module) {
      MainCityCreator = module.MainCityCreator;
    }, function (module) {
      viewCreatorMgr = module.viewCreatorMgr;
    }, function (module) {
      FightCreator = module.FightCreator;
    }, function (module) {
      FormationCreator = module.FormationCreator;
    }, function (module) {
      LoadingCreator = module.LoadingCreator;
    }, function (module) {
      ChatCreator = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9605843tQxNxaIPFoHnzltl", "ViewRegisterMgr", undefined);

      class ViewRegisterMgr extends Singleton {
        // 预加载的预制体
        // 注册预页面预制体路径
        // 注册各个系统的预制体
        constructor() {
          super();

          _defineProperty(this, "ViewType", {
            // 通用ui
            commonUI: {
              prefab: {
                "RewardItemIcon": {
                  path: "common_ui/prefabs/RewardItemIcon",
                  isCache: true
                },
                "netloading": {
                  path: "common_ui/prefabs/netinstable",
                  isCache: true
                },
                "TouchEffect": {
                  path: "common_ui/prefabs/TouchEffect",
                  isCache: true
                }
              }
            },
            // 登陆
            login: {
              prefab: {
                "LoginView": {
                  path: 'core/prefab/LoginView',
                  isShowBg: true
                },
                "AccountView": {
                  path: 'core/prefab/AccountView',
                  isShowBg: true
                },
                "LoginLayer": {
                  path: 'login/prefabs/loginlayer'
                },
                "LoginAccountLayer": {
                  path: 'login/prefabs/loginaccount',
                  isShowBg: true
                },
                "UserAgreementLayer": {
                  path: "",
                  isShowBg: true
                },
                "PrivacyPolicyLayer": {
                  path: "",
                  isShowBg: true
                },
                "NoticeView": {
                  path: "login/prefabs/noticeview",
                  isShowBg: true
                }
              }
            },
            // dialog/tips
            dialog: {
              prefab: {
                "DoubleBtnDialog": {
                  path: 'common_ui/prefabs/double_btn_dialog',
                  isShowBg: true,
                  isCache: true
                },
                "Tips": {
                  path: "common_ui/prefabs/tips",
                  isShowBg: true,
                  isCache: true
                }
              }
            },
            preReward: {
              prefab: {
                "preRewardMain": {
                  path: "preview_reward/prefabs/preview_reward_prefab",
                  isShowBg: true
                }
              }
            },
            // 主城
            maincity: {
              prefab: {
                "MainCityLayer": {
                  path: "maincity/prefabs/maincitylayer",
                  isCache: true
                },
                "MainCityUI": {
                  path: "maincity/prefabs/maincityui",
                  isCache: true
                }
              }
            },
            // 战斗
            fight: {
              prefab: {
                "FightMainLayer": {
                  path: "fight/prefabs/changjing/mainfightlayer"
                },
                "FightMainUI": {
                  path: "fight/prefabs/changjing/mainfightui"
                },
                "FightFormation": {
                  path: "fight/prefabs/changjing/FightFormation"
                }
              }
            },
            // 武将
            hero: {
              prefab: {
                "HeroSpinePrefab": {
                  path: "hero/prefabs/hero/"
                }
              }
            },
            //布阵
            formation: {
              prefab: {
                "FormationView": {
                  path: "formation/prefabs/formation"
                }
              }
            },
            // loading
            loading: {
              prefab: {
                "ResLoadingLayer": {
                  path: "loading/prefabs/resloadinglayer",
                  isCache: true
                },
                "TransLoadingLayer": {
                  path: "loading/prefabs/transloadinglayer",
                  isCache: true
                }
              }
            },
            chat: {
              prefab: {
                "ChatLayer": {
                  path: "chat/prefabs/ChatLayer",
                  isShowBg: true
                }
              }
            }
          });

          _defineProperty(this, "Cretors", [LoginCreator, DialogCreator, PreRewardCreator, MainCityCreator, FightCreator, FormationCreator, LoadingCreator, ChatCreator]);

          Object.keys(this.ViewType).forEach(system => {
            // log("ViewRegisterMgr:ctor() system [ %s ]",system);
            let module = this.ViewType[system];
            Object.keys(module.prefab).forEach(view => {
              var _arr$isShowBg;

              let arr = module.prefab[view];
              let isHidden = (_arr$isShowBg = arr.isShowBg) !== null && _arr$isShowBg !== void 0 ? _arr$isShowBg : false; // log("ViewRegisterMgr:ctor() view [ %s ] [ %s ]",view,isHidden.toString());

              if (isHidden) {
                ShowBackgroundMgr.regShowBackgroundView(view);
              }
            });
          });
        }

        getPreloadPrefabs() {
          let list = new Array();
          Object.keys(this.ViewType).forEach(system => {
            if (ViewRegisterMgr.PreloadResList[system]) {
              let module = this.ViewType[system];
              Object.keys(module.prefab).forEach(view => {
                let viewConfig = module.prefab[view];
                list.push(viewConfig.path);
              });
            }
          });
          return list;
        } // 各个系统中获取页面预制的都路径 返回 ViewInfoType


        getViewInfo(name, prefabName) {
          var _cfg$isShowBg, _cfg$isCache;

          let module = this.ViewType[name];
          let cfg = module.prefab[prefabName];
          return {
            System: name,
            View: prefabName,
            Path: cfg.path,
            Hidden: (_cfg$isShowBg = cfg.isShowBg) !== null && _cfg$isShowBg !== void 0 ? _cfg$isShowBg : false,
            Cache: (_cfg$isCache = cfg.isCache) !== null && _cfg$isCache !== void 0 ? _cfg$isCache : false
          };
        } // enter app call this method,register all view creator


        registerAllCreator() {
          this.Cretors.forEach(ctor => {
            viewCreatorMgr.registeredCreator(new ctor());
          });
        }

        clear() {
          viewRegisterMgr = exports('viewRegisterMgr', null);
        }

      }

      exports('ViewRegisterMgr', ViewRegisterMgr); // ()();

      _defineProperty(ViewRegisterMgr, "PreloadResList", {
        commonUI: 1,
        dialog: 1,
        maincity: 1,
        loading: 1
      });

      let viewRegisterMgr = exports('viewRegisterMgr', (() => {
        return ViewRegisterMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightFormation.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ViewProtocol.ts', './LayerBase.ts', './SceneMgr.ts', './GeneralIconShowComp.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Node, Prefab, _decorator, find, instantiate, UITransform, v3, tween, ViewProtocol, LayerBase, sceneMgr, GeneralIconShowComp;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      find = module.find;
      instantiate = module.instantiate;
      UITransform = module.UITransform;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      GeneralIconShowComp = module.GeneralIconShowComp;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "968019oXI1B8bamW4L2SBU/", "FightFormation", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = formation
       * DateTime = Thu Mar 10 2022 14:11:00 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = formation.ts
       * FileBasenameNoExtension = formation
       * URL = db://assets/scripts/app/views/formation/formation.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      class PosInfo {
        constructor() {
          _defineProperty(this, "node", void 0);

          _defineProperty(this, "orgGeneralIcon", void 0);
        }

      }

      let FightFormation = exports('FightFormation', (_dec = ccclass('FightFormation'), _dec2 = property(Node), _dec3 = property(Prefab), _dec(_class = (_class2 = (_temp = class FightFormation extends LayerBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "listContainer", _descriptor, this);

          _initializerDefineProperty(this, "rewardItemIconPrefab", _descriptor2, this);

          _defineProperty(this, "_posList", []);

          _defineProperty(this, "_upPosMap", new Map());
        }

        start() {
          // [3]
          this._init();
        }

        async _init() {
          // let path = viewRegisterMgr.getViewInfo("commonUI","RewardItemIcon").Path
          // this._rewardItemIconPrefab = await ResourcesLoader.loadPromise(path)
          this._showGerneralIconListByType();

          this._initPosInfo();
        }

        _initPosInfo() {
          for (let index = 0; index < 5; index++) {
            let posNode = find("bottom/pos_" + (index + 1), this.node);
            let posInfo = new PosInfo();
            posInfo.node = posNode;

            this._posList.push(posInfo);

            this._upPosMap.set(posNode, posInfo);

            posNode.on(Node.EventType.TOUCH_END, this.onClickDown.bind(this));
          }
        }

        onClickDown(event) {
          let target = event.target;

          if (target.children.length > 0) {
            let posInfo = this._upPosMap.get(target);

            if (posInfo.orgGeneralIcon) {
              target.removeAllChildren();
              posInfo.orgGeneralIcon.getComponent(GeneralIconShowComp).isSel = false;
              posInfo.orgGeneralIcon.getComponent(GeneralIconShowComp).isShowSelIcon = false;
              posInfo.orgGeneralIcon = null;
            }
          }
        }

        _showGerneralIconListByType() {
          for (let index = 0; index < 20; index++) {
            let icon = instantiate(this.rewardItemIconPrefab);
            icon.addComponent(GeneralIconShowComp);
            this.listContainer.addChild(icon);
            icon.on(Node.EventType.TOUCH_END, this._onUp.bind(this));
          }
        } //上阵


        _onUp(event) {
          let node = event.target;
          let generalIconShowComp = node.getComponent(GeneralIconShowComp);

          if (!generalIconShowComp.isSel) {
            //寻找上阵位置
            let upPos;

            for (const iterator of this._posList) {
              if (!iterator.orgGeneralIcon) {
                upPos = iterator;
                break;
              }
            }

            if (upPos) {
              //可以上阵    
              generalIconShowComp.isSel = true;
              upPos.orgGeneralIcon = node;

              this._playMove(node, upPos.node, () => {});
            }
          }
        }

        _playMove(node, targetNode, endFunc) {
          //复制一个目标
          let nodeTween = instantiate(node);
          let startPos = node.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(startPos);
          let endPos = targetNode.getComponent(UITransform).convertToWorldSpaceAR(v3(0, 0, 0));
          endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(endPos);
          this.node.addChild(nodeTween);
          nodeTween.position = startPos;
          tween(nodeTween).to(0.5, {
            position: endPos
          }).call(() => {
            node.getComponent(GeneralIconShowComp).isShowSelIcon = true;
            nodeTween.position = v3(0, 0, 0);
            targetNode.addChild(nodeTween);
            endFunc();
          }).start();
        }

        onClickStart() {
          sceneMgr.sendCreateView(ViewProtocol.TransLoadingLayer, [() => {
            sceneMgr.popTableLayer();
            sceneMgr.sendCreateView(ViewProtocol.FightMainLayer);
          }]);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listContainer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "rewardItemIconPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewCreatorManager.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      cclegacy._RF.push({}, "98e29wPNGNAn4Uv9KYT1smK", "ViewCreatorManager", undefined);

      class ViewCreatorManager extends Singleton {
        constructor() {
          super();

          _defineProperty(this, "_creatorList", void 0);

          this._creatorList = new Array();
        }

        registeredCreator(creator) {
          creator.onInit();

          this._creatorList.push(creator);
        }

        unregisteredCreator() {
          this._creatorList.forEach(creator => {
            creator.unRegMsgAll();
          });
        }

        clear() {
          viewCreatorMgr = exports('viewCreatorMgr', null);
        }

      }

      let viewCreatorMgr = exports('viewCreatorMgr', (() => {
        return ViewCreatorManager.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Jitter.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, sp, Vec2, _decorator, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      sp = module.sp;
      Vec2 = module.Vec2;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "99af1PEPLdN/LqW3ZkwkN8W", "Jitter", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * 抖动效果
       */

      let Jitter = exports('Jitter', (_dec = ccclass('Jitter'), _dec2 = property({
        type: sp.Skeleton
      }), _dec3 = property(Vec2), _dec(_class = (_class2 = (_temp = class Jitter extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "skeleton", _descriptor, this);

          _initializerDefineProperty(this, "jitter", _descriptor2, this);

          _defineProperty(this, "_jitterEffect", void 0);
        }

        start() {
          this._jitterEffect = new sp.VertexEffectDelegate(); // 设置好抖动参数。

          this._jitterEffect.initJitter(this.jitter.x, this.jitter.y); // 调用 Skeleton 组件的 setVertexEffectDelegate 方法设置效果。


          this.skeleton.setVertexEffectDelegate(this._jitterEffect);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "skeleton", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jitter", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionTypeSelPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './FightConst.ts', './ActionTypeSelItem.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Prefab, _decorator, Component, find, instantiate, Node, log, FightActionTypeName, ActionTypeSelItem;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      instantiate = module.instantiate;
      Node = module.Node;
      log = module.log;
    }, function (module) {
      FightActionTypeName = module.FightActionTypeName;
    }, function (module) {
      ActionTypeSelItem = module.ActionTypeSelItem;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "9a91eig9xpPVr02LJV+yTP0", "ActionTypeSelPanel", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = ActionTypeSelPanel
       * DateTime = Wed Mar 09 2022 17:00:59 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ActionTypeSelPanel.ts
       * FileBasenameNoExtension = ActionTypeSelPanel
       * URL = db://assets/skill_eitor/ActionTypeSelPanel.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let ActionTypeSelPanel = exports('ActionTypeSelPanel', (_dec = ccclass('ActionTypeSelPanel'), _dec2 = property(Prefab), _dec(_class = (_class2 = (_temp = class ActionTypeSelPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "actionTypeSelItemPrefab", _descriptor, this);

          _defineProperty(this, "_callBack", void 0);

          _defineProperty(this, "_container", void 0);

          _defineProperty(this, "_selItem", void 0);
        }

        get callBack() {
          return this._callBack;
        }

        set callBack(value) {
          this._callBack = value;
        }

        start() {
          // [3]
          this._container = find("Layout", this.node);
          this.showAllItems();
        }

        showAllItems() {
          FightActionTypeName.forEach((v, k) => {
            let item = instantiate(this.actionTypeSelItemPrefab);
            let itemComp = item.getComponent(ActionTypeSelItem);
            itemComp.txt = v;
            itemComp.type = k;

            this._container.addChild(item);

            item.on(Node.EventType.TOUCH_END, this.onSelItem, this);
          });
        }

        onSelItem(touch) {
          log("sel item===");

          if (this._selItem) {
            this._selItem.getComponent(ActionTypeSelItem).isSel = false;
          }

          this._selItem = touch.target;
          this._selItem.getComponent(ActionTypeSelItem).isSel = true;
        }

        onClickOk() {
          if (this._selItem) {
            this.callBack(this._selItem.getComponent(ActionTypeSelItem).type);
            this.node.destroy();
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "actionTypeSelItemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightBloodUI.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, ProgressBar, Label, _decorator, Component, js;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      _decorator = module._decorator;
      Component = module.Component;
      js = module.js;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "9e92eEHK39AT4vBlC/ETEjx", "FightBloodUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let FightBloodUI = exports('FightBloodUI', (_dec = ccclass('FightBloodUI'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class FightBloodUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "lblBlood", _descriptor2, this);
        }

        updateBlood(cur, top) {
          let percent = cur / top * 100;
          this.progressBar.progress = percent;
          this.lblBlood.setString(js.formatStr("%d/%d", cur, top));
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblBlood", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightController.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts', './FightData.ts', './FightDataMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton, FightEvent, FightConstant, fightEventMgr, FightData, fightDataMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      FightEvent = module.FightEvent;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      FightData = module.FightData;
    }, function (module) {
      fightDataMgr = module.fightDataMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9f43dZI6BFCAIiQkxYPh7j0", "FightController", undefined);

      let fightController = exports('fightController', null);
      /**
       * @description 回合控制器 
       * */

      class FightController extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_round", 0);

          _defineProperty(this, "_action", 0);

          _defineProperty(this, "_fightData", void 0);

          _defineProperty(this, "_roundData", void 0);

          _defineProperty(this, "_isPause", false);
        }

        static init() {
          fightController = exports('fightController', FightController.getInstance());

          fightController._init();
        }

        _init() {
          this._initListeners();

          this._initData();
        }

        _initListeners() {
          fightEventMgr.addEventListener(FightConstant.FightEvent.Game_Star, this._onGameStart.bind(this));
          fightEventMgr.addEventListener(FightConstant.FightEvent.Action_End, this._onActionEnd.bind(this));
          fightEventMgr.addEventListener(FightConstant.FightEvent.Game_Replay, this._onReplay.bind(this));
          fightEventMgr.addEventListener(FightConstant.FightEvent.Game_Pause, this._onPause.bind(this));
          fightEventMgr.addEventListener(FightConstant.FightEvent.Game_Resume, this._onResume.bind(this));
        }

        _initData() {
          this._round = 0;
          this._action = 0;
          this._isPause = false;
          this._fightData = fightDataMgr.getFightData(FightData);

          let data = this._fightData.getRoundData();

          this._roundData = data[this._round];
        } // 游戏开始


        _onGameStart() {
          this._roundStart();
        } // 每回合小行动结束


        _onActionEnd() {
          this._action += 1;

          this._actionStart();
        } // 重播


        _onReplay() {
          this._initData();

          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Game_Star, null));
        } // 暂停


        _onPause() {
          this._isPause = true;
        } // 恢复


        _onResume() {
          this._isPause = false;
        } // 大回合开始


        _roundStart() {
          let data = this._fightData.getRoundData();

          this._roundData = data[this._round];
          this._round += 1; //回合数+1

          this._action = 0; //每回合归零

          if (this._isGameEnd()) {
            return this._gameEnd();
          }

          this._nextRound();
        }

        _nextRound() {
          let data = {
            Round: this._round
          };
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Round_Start, data));

          this._actionStart();
        } // 每回合小行动开始


        _actionStart() {
          if (this._isRoundFinished()) {
            return this._roundEnd();
          }

          this._nextAction();
        }

        _nextAction() {
          let action = this._roundData[this._action];
          let data = {
            Action: this._action,
            ActionData: action
          };
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Action_Star, data));
        } // 是否大回合结束


        _isRoundFinished() {
          return this._action >= this._roundData.length;
        } // 大回合结束


        _roundEnd() {
          this._roundStart();
        } // 是否战斗结束


        _isGameEnd() {
          let data = this._fightData.getRoundData();

          return this._round > data.length;
        } // 战斗结束


        _gameEnd() {
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Game_End, null));
        }

        destory() {
          FightController.destoryInstance();
        }

        clear() {
          fightController = exports('fightController', null);
        }

      }

      exports('FightController', FightController);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator7.ts", ['cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, instantiate, ResourcesLoader, ViewCreatorBase, ViewProtocol, viewRegisterMgr, sceneMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a010aiKK/NAA5uURgLxFXuH", "Creator", undefined);

      class LoadingCreator extends ViewCreatorBase {
        onInit() {
          this.regMsg(ViewProtocol.ResLoadingLayer, this.onCreateResLoadingLayer.bind(this));
          this.regMsg(ViewProtocol.TransLoadingLayer, this.onCreateTransLoadingLayer.bind(this));
        }

        onCreateResLoadingLayer(event) {
          let viewInfo = viewRegisterMgr.getViewInfo("loading", "ResLoadingLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

        onCreateTransLoadingLayer(event) {
          let viewInfo = viewRegisterMgr.getViewInfo("loading", "TransLoadingLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let cbs = event.getRawData();
            let node = instantiate(data);
            sceneMgr.addTransitionLayer(node);
            let com = node.getComponent("TransLoadingLayer");
            com.setEnterCalback(cbs[0]);
            com.setCompleteCallback(cbs[1]);
          });
        }

      }

      exports('LoadingCreator', LoadingCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PrototypeExtension.ts", ['cc', './TranslateMgr.ts'], function () {
  'use strict';

  var cclegacy, Label, translateMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Label = module.Label;
    }, function (module) {
      translateMgr = module.translateMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a0bbdeamsVI26kXkX/p5PAg", "PrototypeExtension", undefined);

      Object.defineProperty(Label.prototype, "setString", {
        value: function (text) {
          // if (lbComp && !lbComp?.isTranslateByCode){
          //     return;
          // }
          // let id = lbComp.translateId;
          this.string = translateMgr.translateData(text);
        },
        configurable: true
      });

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/CloseButton.ts", ['cc', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, Component, _decorator, sceneMgr;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "a1d5fLZQVJBfIVKNaJLwRWo", "CloseButton", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = CloseButton
       * DateTime = Thu Mar 10 2022 15:38:36 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = CloseButton.ts
       * FileBasenameNoExtension = CloseButton
       * URL = db://assets/scripts/app/views/common/CloseButton.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let CloseButton = exports('CloseButton', (_dec = ccclass('CloseButton'), _dec(_class = class CloseButton extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onClick() {
          sceneMgr.popTableLayer();
        }

      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './EventMgr.ts', './ShowBackgroundMgr.ts', './Message.ts', './ResourcesLoader.ts', './ViewRegisterMgr.ts', './MainEventTrigger.ts', './functions.ts', './TouchMain.ts', './TableLayer.ts', './SceneTriggerMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Node, Widget, widgetManager, find, log, instantiate, Singleton, viewEventMgr, ShowBackgroundMgr, Message, ResourcesLoader, viewRegisterMgr, MainEventTrigger, setNodeVisible, TouchMain, TableLayer, sceneTriggerMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Widget = module.Widget;
      widgetManager = module.widgetManager;
      find = module.find;
      log = module.log;
      instantiate = module.instantiate;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      viewEventMgr = module.viewEventMgr;
    }, function (module) {
      ShowBackgroundMgr = module.ShowBackgroundMgr;
    }, function (module) {
      Message = module.Message;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      MainEventTrigger = module.MainEventTrigger;
    }, function (module) {
      setNodeVisible = module.setNodeVisible;
    }, function (module) {
      TouchMain = module.TouchMain;
    }, function (module) {
      TableLayer = module.TableLayer;
    }, function (module) {
      sceneTriggerMgr = module.sceneTriggerMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a3f41zRx3hHT74FkAX9L+1m", "SceneMgr", undefined);

      class SceneMgr extends Singleton {
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_layerMap", void 0);

          _defineProperty(this, "_tableLayerStack", void 0);

          _defineProperty(this, "_viewIndex", 0);
        }

        init() {
          this._layerMap = new Map();
          this._tableLayerStack = [];
          this.initAllScence();

          this._initTouchGroup();
        }

        clear() {
          this.clearAllScence();
          sceneMgr = exports('sceneMgr', null);
        }

        createNode(flag, parent) {
          let node = new Node();
          node.name = flag;
          let widget = node.addComponent(Widget); // let rootNode = find("Canvas");

          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL; // widget!.target = rootNode;

          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0; // widget.target = rootNode

          let viewRoot = find("Canvas/views");
          viewRoot.addChild(node);
          return node;
        }

        initAllScence() {
          this._layerMap.set("MainGroup", this.createNode("__MainGroup")); // 主界面层


          this._layerMap.set("TableGroup", this.createNode("__TableGroup")); // 页卡层


          this._layerMap.set("MainEventTrigger", this.createNode("__MainEventTrigger")); // 全局事件触发层


          this._layerMap.set("TransitionGroup", this.createNode("__TransitionGroup")); // 过渡层


          this._layerMap.set("NewGuideGroup", this.createNode("__NewGuideGroup")); // 新手引导层


          this._layerMap.set("DialogGroup", this.createNode("__DialogGroup")); // 对话框层


          this._layerMap.set("SystemOpenGroup", this.createNode("__SystemOpenGroup")); // 功能开启层


          this._layerMap.set("PreLoadingGroup", this.createNode("__PreLoadingGroup")); // 加载层


          this._layerMap.set("TipsGroup", this.createNode("__TipsGroup")); // 弹出提示


          this._layerMap.set("NetLoading", this.createNode("__NetLoading")); // 网络转圈层


          this._layerMap.set("TouchGroup", this.createNode("__TouchGroup")); // 触摸反馈

        }

        _initTouchGroup() {
          this._layerMap.get("TouchGroup").addComponent(TouchMain);
        }

        clearAllScence() {
          let layers = ["MainGroup", "TableGroup", "MainEventTrigger", "TransitionGroup", "NewGuideGroup", "DialogGroup", "SystemOpenGroup", "PreLoadingGroup", "TipsGroup", "NetLoading", "TouchGroup"];

          for (let index = 0; index < layers.length; index++) {
            const element = layers[index];

            let layer = this._layerMap.get(element);

            layer.removeFromParent();
            layer.destroy();
          }
        }
        /**
         * @description: 检查当前场景列表是否存在某个界面
         * @param {string}
         * @return {[boolean, Node]}
         */


        checkLayerWithName(pClassName) {
          let layerList = this.getCurLayerList();

          for (let index = 0; index < layerList.length; index++) {
            const data = layerList[index];

            if (data.name == pClassName) {
              return [true, data];
            }
          }

          return [false];
        }
        /**
         * @description: 获取当前场景列表
         * @param {null}
         * @return {Array<Node>}
         */


        getCurLayerList() {
          let curLayerList = this.updataCurLayerList();
          return curLayerList;
        }
        /**
         * @description:获取当前最高层
         * @param {null}
         * @return {Node}
         */


        getCurFrontLayer() {
          let SceneList = this.getCurLayerList();
          return SceneList[SceneList.length - 1];
        }
        /**
         * @description: 新建一个Table层 (三层)
         * @param {type}
         * @return {type}
         */


        pushNewTableLayer() {
          this._viewIndex += 1;
          let tableLayer = new TableLayer();
          tableLayer.name = "TableLayer" + this._viewIndex;

          this._layerMap.get("TableGroup").addChild(tableLayer);

          this._tableLayerStack.push(tableLayer);

          return tableLayer;
        }
        /**
         * @description:叠加子页卡内容层
         * @param {type}
         * @return {type}
         *  @deprecated
         */


        appendTabSubContent(layer) {
          let tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer == null) {
            tableLayer = this.pushNewTableLayer();
          }

          tableLayer.appendSubContent(layer); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }
        }
        /**
         * @description: 弹出子页卡内容层中的最上层
         * @param {type}
         * @return {type}
         *  @deprecated
         */


        popTabSubContent() {
          let tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer != null) {
            let isRemove = tableLayer.popSubContent();

            if (tableLayer.isEmpty()) {
              this.removeTableLayer();
            }

            return isRemove;
          }

          return false;
        }
        /**
         * @description: 弹出子页卡内容层中的最上层,如果没有则不处理，不会弹出住页卡
         * @param {type}
         * @return {type}
         *  @deprecated
         */


        popTabSubContentWithoutEmpty() {
          let tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer != null) {
            let isRemove = tableLayer.popSubContent();
            return isRemove;
          }

          return false;
        }
        /**
         * @description: 获取最上层的 TableLayer
         * @param {type}
         * @return {type}
         */


        getTopTableLayer() {
          let tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];
          return tableLayer;
        }
        /**
         * @description: 弹出一个Table层
         * @param {type}
         * @return {type}
         */


        popTableLayer() {
          this.removeTableLayer();
        }
        /**
         * @description: 清空顶层页卡层
         * @param {type}
         * @return {type}
         */


        removeTableLayer() {
          let tableLayer = this._tableLayerStack.pop();

          if (tableLayer) {
            //移除引用
            let contentLayer = tableLayer.getContentLayer();

            this._decResRef(contentLayer.name);

            tableLayer.removeFromParent();
            tableLayer.destroy();

            this._hideTableLayer(); //场景触发


            sceneTriggerMgr.check(); //检查内存释放

            if (ResourcesLoader.checkNeedToRelease()) {
              ResourcesLoader.releaseUnusedAssets();
            }

            return true;
          }

          return false;
        }

        removeTableLayerWithName(pViewName, isContain) {
          let xdata = this.checkLayerWithName(pViewName);

          if (xdata[0] == false) {
            return;
          }

          let layerList = this.getCurLayerList();

          for (let index = layerList.length - 1; index >= 0; index--) {
            const data = layerList[index];

            if (data.name == pViewName) {
              if (isContain) {
                this.popTableLayer();
                return;
              }
            } else {
              this.popTableLayer();
            }
          }
        }
        /**
         * @description: 清空全部页卡层
         * @param {type}
         * @return {type}
         */


        removeAllTableLayer() {
          let length = this._tableLayerStack.length;

          for (let index = 0; index < length; index++) {
            // if (this._tableLayerStack.length >= 2) {
            //     let tableLayer = this._tableLayerStack.pop();
            //     tableLayer.removeFromParent();
            //     tableLayer.destroy();
            // } else {
            this.removeTableLayer(); // }
          }
        }
        /**
         * @description: 替换页卡UI层
         * @param {type}
         * @return {type}
         */


        replaceTableUIContent(layer, layerName) {
          let tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer == null) {
            tableLayer = this.pushNewTableLayer();
          }

          let uiLayer = tableLayer.getUILayer();

          if (this.checkLayerWithName(layerName)[0] == true) {
            if (uiLayer.children.length == 0) {
              this.popTableLayer();
            }

            return;
          }

          uiLayer.removeAllChildren();
          uiLayer.name = layerName || "";
          uiLayer.addChild(layer);

          this._hideTableLayer(); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }

        }
        /**
         * @description: 替换页卡背景层
         * @param {type}
         * @return {type}
         *  @deprecated
         */


        replaceTableBg(layer, layerName) {
          let tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer == null) {
            tableLayer = this.pushNewTableLayer();
          }

          let bgLayer = tableLayer.getBgLayer();

          if (this.checkLayerWithName(layerName)[0] == true) {
            if (bgLayer.children.length == 0) {
              this.popTableLayer();
            }

            return;
          }

          bgLayer.name = layerName || "";
          bgLayer.removeAllChildren();
          bgLayer.addChild(layer);

          this._hideTableLayer(); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }

        }

        addMainEventTrigger() {
          this._layerMap.get("MainEventTrigger").addComponent(MainEventTrigger);
        }
        /**
         * @description: 替换页卡内容层
         * @param {type}
         * @return {type}
         */


        replaceTableContent(layer, layerName) {
          let tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer == null) {
            tableLayer = this.pushNewTableLayer();
          }

          let contentLayer = tableLayer.getContentLayer(); // 判断是否重复打开

          if (this.checkLayerWithName(layerName)[0] == true) {
            if (contentLayer.isEmpty()) {
              this.popTableLayer();
            }

            return;
          } //移除引用


          this._decResRef(contentLayer.name);

          this._addResRef(layerName);

          contentLayer.name = layerName || "";
          contentLayer.clearAll();
          contentLayer.add(layer);
          contentLayer.show();

          this._hideTableLayer(); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }


          return tableLayer;
        }
        /**
         * @description: 追加页卡内容层
         * @param {type}
         * @return {type}
         */


        appendTableContent(layer, tableLayer) {
          if (tableLayer == null) {
            tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];
          }

          let contentLayer = tableLayer.getContentLayer();
          contentLayer.add(layer);

          this._hideTableLayer(); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }

        }
        /**
         * @description: 切换页卡内容层
         * @param {type}
         * @return {type}
         */


        switchTableContent(index, tableLayer) {
          if (tableLayer == null) {
            tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];
          }

          let contentLayer = tableLayer.getContentLayer();
          contentLayer.switch(index);
          contentLayer.show(); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }
        } // public setSkipHiddenBackgroundList(list) {
        //     this._skipHiddenBackground = list;
        // }


        replaceMainLayer(layer, layerName) {
          this.removeAllTableLayer();

          let mainLayer = this._layerMap.get("MainGroup");

          for (let i = 0; i < mainLayer.children.length; i++) {
            const c = mainLayer.children[i];
            c.removeFromParent();
            c.destroy();
          }

          layer.name = layerName || "";
          mainLayer.addChild(layer);

          this._clearAllResCount(); //主界面引用+1


          this._addResRef(layerName);

          sceneTriggerMgr.check(); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }
        } //一个资源添加引用计数


        _addResRef(name) {
          ResourcesLoader.addResRef(name);
        } //删除一个资源引用计数


        _decResRef(name) {
          ResourcesLoader.decResRef(name);
        } //清除动态加载的引用


        _clearAllResCount() {
          ResourcesLoader.clearAllRef();
        }

        getNowMainLayer() {
          let mainLayer = this._layerMap.get("MainGroup");

          let layer = mainLayer.children[0];
          return layer;
        }
        /**
         * @description 添加过渡界面
         * @param transloadinglayer 
         */


        addTransitionLayer(transloadinglayer) {
          this._layerMap.get("TransitionGroup").addChild(transloadinglayer);
        }
        /**
         * @description 移除过渡界面
         */


        removeTransitionLayer() {
          let children = this._layerMap.get("TransitionGroup").children;

          if (children.length > 0) {
            children.forEach(node => {
              node.removeFromParent();
              node.destroy();
            });
          }
        }
        /**
         * @description: tips层
         * @param {*} tips_layer
         * @return {*}
         */


        appendTips(tipsLayer) {
          this._layerMap.get("TipsGroup").addChild(tipsLayer);
        }

        getTipsLayer() {
          return this._layerMap.get("TipsGroup");
        }

        replaceDialog(layer) {
          this._layerMap.get("DialogGroup").addChild(layer); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }


          this._hideTableLayer();
        }

        removeDialog(isAll = false) {
          let childrens = this._layerMap.get("DialogGroup").children;

          for (let index = 0; index < childrens.length; index++) {
            const c = childrens[index];
            c.removeFromParent();
            c.destroy();

            if (!isAll) {
              break;
            }
          }

          this._hideTableLayer();
        } //功能开启监听层


        setSystemOpenLayer(layer) {
          let systemOpenGroup = this._layerMap.get("SystemOpenGroup");

          for (let index = 0; index < systemOpenGroup.children.length; index++) {
            const element = systemOpenGroup.children[index];
            element.removeFromParent();
            element.destroy();
          }

          if (layer) {
            systemOpenGroup.addChild(layer);
          }
        }

        getSystemOpenLayer() {
          return this._layerMap.get("SystemOpenGroup").children[0];
        } //新手引导层


        setNewGuideLayer(layer) {
          let group = this._layerMap.get("NewGuideGroup");

          for (let index = 0; index < group.children.length; index++) {
            const element = group.children[index];
            element.removeFromParent();
            element.destroy();
          }

          if (layer) {
            group.addChild(layer);
          }
        }

        getNewGuideLayer() {
          return this._layerMap.get("NewGuideGroup").children[0];
        } //加载层


        setPreLoadingLayer(layer) {
          let group = this._layerMap.get("PreLoadingGroup");

          for (let index = 0; index < group.children.length; index++) {
            const element = group.children[index];
            element.removeFromParent();
            element.destroy();
          }

          if (layer) {
            group.addChild(layer);
          }
        }

        getPreLoadingLayer() {
          return this._layerMap.get("PreLoadingGroup").children[0];
        } // 添加触摸反馈层


        addTouchGroupLayer(layer) {
          let group = this._layerMap.get("TouchGroup");

          if (layer) {
            group.addChild(layer);
          }
        } // 获取所有触摸返回层


        getTouchGroupLayer() {
          let group = this._layerMap.get("TouchGroup");

          return group;
        }
        /**
         * @description: Table游戏层操作: 隐藏低层次的层
         * @param {type}
         * @return {type}
         */


        _hideTableLayer() {
          // 遍历所有子节点
          let nextCanVisible = 0;
          let isBreakOut = false;

          let dialogLayer = this._layerMap.get("DialogGroup");

          if (dialogLayer.children.length > 0) ;

          let list = this._layerMap.get("TableGroup").children;

          for (let index = list.length - 1; index >= 0; index--) {
            let cellTable = list[index];
            let cellLayerName = cellTable.getLayerName();

            if (isBreakOut) {
              // cellTable.opacity = 0;
              setNodeVisible(cellTable, false);
              cellTable.setContentLayerVisible(false);
              continue;
            } // cellTable.opacity = 255;


            setNodeVisible(cellTable, true);
            cellTable.setContentLayerVisible(true);
            nextCanVisible = 0;
            let tableElementList = cellTable.children; //一个table层里面有4个子节点

            for (let k = 0; k < tableElementList.length; k++) {
              const tableElement = tableElementList[k]; // 检查是否有屏蔽下一层标志
              // if (this._skipHiddenBackground[tableElement.name]) {

              if (ShowBackgroundMgr.checkIsShowBlackground(tableElement.name)) {
                nextCanVisible = 1;
              }
            } // 如果背后已经挡住不显示


            if (nextCanVisible > 0) {
              isBreakOut = false;
            } else {
              isBreakOut = true;
            }

            continue;
          }

          let mainLayer = this._layerMap.get("MainGroup");

          if (mainLayer.children.length > 0) {
            let mainLayerName = mainLayer.children[0].name;

            if (nextCanVisible > 0 || list.length == 0) {
              // mainLayer.opacity = 255;
              setNodeVisible(mainLayer, true);
            } else {
              // mainLayer.opacity = 0;
              setNodeVisible(mainLayer, false);
            }
          } // let msg = new SFMessage(-9999999, {
          //     topShow: topLayerName,
          //     lastShow: showLayerName,
          //     layerList: LayerData,
          // });
          // MsgEventMgr.getInstance().dispatchEvent(msg);

        }

        getCellLayer(tableLayer, tableList, zOrderIndex) {
          // 分3层
          let cellElementList = tableLayer.children;

          for (let index = 0; index < cellElementList.length; index++) {
            const cellElement = cellElementList[index];
            let cell = {};
            cell["obj"] = cellElement;
            cell["name"] = tableLayer.name;
            cell["zOrder"] = cellElement.getSiblingIndex() + zOrderIndex + index;
            tableList.push(cell);
          }
        }
        /**
         * @description: 更新当前场景列表
         * @param {type}
         * @return {type}
         */


        updataCurLayerList() {
          // tabel层检查
          let curLayerList = [];

          this._tableLayerStack.forEach((tableLayer, i) => {
            this.getCellLayer(tableLayer.getBgLayer(), curLayerList, i * 100 + 1 * 10);
            this.getCellLayer(tableLayer.getContentLayer(), curLayerList, i * 100 + 2 * 10);
            this.getCellLayer(tableLayer.getUILayer(), curLayerList, i * 100 + 3 * 10);
            this.getCellLayer(tableLayer.getSubContent(), curLayerList, i * 100 + 4 * 10);
          }); // 主界面检查


          this.getCellLayer(this._layerMap.get("MainGroup"), curLayerList, 10); // 跟新z轴排序

          curLayerList.sort((a, b) => {
            return a["zOrder"] - b["zOrder"];
          });
          return curLayerList;
        }

        sendCreateView(UiFlag, data) {
          log("send create view:" + UiFlag);
          let msg = new Message(UiFlag, data);
          viewEventMgr.dispatchEvent(msg);
        }
        /**
         * showNetLoading
         */


        showNetLoading(isShow) {
          let netloading = this._layerMap.get("NetLoading").children[0];

          if (netloading) {
            netloading.active = isShow;
            return;
          }

          let viewInfo = viewRegisterMgr.getViewInfo("commonUI", "netloading");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            node.active = isShow;

            this._layerMap.get("NetLoading").addChild(node);
          }, false);
        }

      }

      let sceneMgr = exports('sceneMgr', (() => {
        return SceneMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightConst.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('FightActionType', void 0);

      cclegacy._RF.push({}, "a4e4dEhr3VL7pfuORs6sEu6", "FightConst", undefined); //战斗action类型，别随便修改，对应技能编辑器数据


      let FightActionType;

      (function (FightActionType) {
        FightActionType[FightActionType["delay"] = 0] = "delay";
        FightActionType[FightActionType["move"] = 1] = "move";
      })(FightActionType || (FightActionType = exports('FightActionType', {})));

      const FightActionTypeName = exports('FightActionTypeName', new Map());
      FightActionTypeName.set(FightActionType.delay, "延迟");
      FightActionTypeName.set(FightActionType.move, "移动"); // FightActionTypeName[FightActionType.delay] = "延迟"
      // FightActionTypeName[FightActionType.delay] = "移动"

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SceneTriggerMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, log, Singleton, sceneMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a4fa0KBB6JCILfHfXfiKF4C", "SceneTriggerMgr", undefined); //  @参数
      // -- #1.界面名字
      // -- #2.回调方法 返回值为false即吞掉事件，后面的不触发
      // -- #3.优先级, 默认为1, 越大优先级越高
      // -- SFSceneTriggerMgr.getInstance().addTriggrt("GameMainUI", ()=> { return true; }, 1);
      // -- SFSceneTriggerMgr.getInstance().addTriggrt("GameMainUI", ()=> { return false; }, 4);
      // -- SFSceneTriggerMgr.getInstance().addTriggrt("GameMainUI", ()=> { return true; }, 2);
      // -- SFSceneTriggerMgr.getInstance().addTriggrt("GameMainUI", ()=> { return true; }, 3);
      // -- SFSceneTriggerMgr.getInstance().addTriggrt("scens7", "2");
      // -- 主动检查 使用范例
      // -- SFSceneTriggerMgr.getInstance().check();


      class SceneTriggerMgr extends Singleton {
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_listeners", void 0);

          _defineProperty(this, "_listenerHandleIndex", void 0);

          this._listeners = new Map();
          this._listenerHandleIndex = 0;
        } // -- -- -- -- --
        // 添加监听事件
        // #1.界面名字
        // #2.回调方法 返回值为false即吞掉事件，后面的不触发
        // #3.优先级, 默认为1, 越大优先级越高


        addTriggrt(pSceneName, pHandler, pPriority) {
          if (this._listeners.get(pSceneName) == null) {
            this._listeners.set(pSceneName, []);
          } // 默认优先级1


          pPriority = pPriority || 1;
          this._listenerHandleIndex += 1;
          let handle = "Trigger_" + this._listenerHandleIndex;

          this._listeners.get(pSceneName).push([handle, pHandler, pPriority]); // 按照优先级重新排序


          this._sortTriggerByPriority(pSceneName);

          return handle;
        } // 分发事件


        dispatchEvent(pSceneName) {
          if (this._listeners.get(pSceneName) == null) {
            return;
          }

          let delArray;

          for (let index = 0; index < this._listeners.get(pSceneName).length; index++) {
            const event = this._listeners.get(pSceneName)[index];

            let handle = event[0];
            let listener = event[1];
            log(" ==========  SceneTriggerMgr go   " + pSceneName + handle);
            let ret = listener(event, pSceneName);

            if (ret == false) {
              break;
            } else if (ret == "__REMOVE__") {
              if (!delArray) {
                delArray = [];
              }

              delArray.push(index);
            }
          }

          if (delArray && delArray.length > 0) {
            for (let index = 0; index < delArray.length; index++) {
              const element = delArray[index];

              this._listeners.get(pSceneName).splice(element, 1);
            }
          }
        } // 删除监听事件


        removeTriggrtListener(pSceneName, key) {
          if (this._listeners.get(pSceneName) == null) {
            return;
          }

          let removeIndex = -1;

          for (let index = 0; index < this._listeners.get(pSceneName).length; index++) {
            const event = this._listeners.get(pSceneName)[index];

            let handle = event[0];
            let listener = event[1];

            if (key == handle || key == listener) {
              removeIndex = index;
              break;
            }
          }

          if (removeIndex != -1) {
            this._listeners.get(pSceneName).splice(removeIndex, 1);
          }
        } //  场景管理器调用检查方法


        check() {
          let frontLayer = this._getCurFrontLayer();

          if (frontLayer) {
            let sceneName = frontLayer["name"];

            if ("__MainGroup" == sceneName) {
              sceneName = frontLayer["obj"]["name"];
            }

            if (sceneName == null) {
              return;
            }

            this.dispatchEvent(sceneName);
          }
        } //  -- -- -- -- -- -- --
        //  [Privete Function]
        //
        //  优先级排序


        _sortTriggerByPriority(pSceneName) {
          this._listeners.get(pSceneName).sort((idA, idB) => {
            return idB - idA;
          });
        } // 获取最前面的层


        _getCurFrontLayer() {
          let layer = sceneMgr.getCurFrontLayer();
          return layer;
        } // 覆盖销毁


        clear() {
          this._listeners.clear();

          this._listenerHandleIndex = 0;
          sceneTriggerMgr = exports('sceneTriggerMgr', null);
        }

      }

      exports('SceneTriggerMgr', SceneTriggerMgr);
      let sceneTriggerMgr = exports('sceneTriggerMgr', (() => {
        return SceneTriggerMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Test_Parser.ts", ['cc', './DataParserBase.ts'], function (exports) {
  'use strict';

  var cclegacy, DataParserBase;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      DataParserBase = module.DataParserBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a55e9fxmDRAbJuo36gZWeBF", "Test_Parser", undefined);

      class Test_Parser extends DataParserBase {
        parse(jsonObject, dataHandlerName, namekey) {
          if (dataHandlerName == "Test") {
            jsonObject.test = "你好!";
          }

          return jsonObject;
        }

      }

      exports('Test_Parser', Test_Parser);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataRegisterMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './DataMgr.ts', './Test_Parser.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, error, log, Singleton, dataMgr, Test_Parser;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      error = module.error;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      dataMgr = module.dataMgr;
    }, function (module) {
      Test_Parser = module.Test_Parser;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a586dekw5ZOr5dkLaILVXwz", "DataRegisterMgr", undefined);

      class DataRegisterMgr extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "DataType", {
            /**
             * @param [0] data handler name:"Test";
             * @param [1] data path:"Raw/map/buff_card";
             * @param [2] array<number>:"[0,100]" //[file start index,file ended index] 例如:genral_0 ~ genral_100(加载101个武将配置); 默认值[]
             * @param [3] parser new xxx_parser() //多语言解析器;
             */
            Test: ["Test", "test/datas/test", [], new Test_Parser()],
            Translate: ["Translate", "translate/data/translate", []],
            FightSkill: ["FightSkill", "fight/datas/skill/skill_", [1, 1]],
            FightHit: ["FightHit", "fight/datas/hit/hit_", [1, 1]],
            FightEmbattled: ["FightEmbattled", "fight/datas/embattled/embattled_", [1, 1]]
          });
        }

        loadAllData(doneFunc) {
          let startTS = new Date().getMilliseconds();
          let length = Object.keys(this.DataType).length;

          for (const key in this.DataType) {
            if (Object.prototype.hasOwnProperty.call(this.DataType, key)) {
              const value = this.DataType[key];
              let dataHandlerName = value[0];
              let path = value[1];
              let pair = value[2];
              let parser = value[3];
              dataMgr.registerDataFile(dataHandlerName, path, parser);
              dataMgr.loadData(dataHandlerName, pair, isDone => {
                if (!isDone) {
                  error("DataRegisterMgr loadData error:[ %s ]", dataHandlerName);
                }

                length--;

                if (length == 0) {
                  if (doneFunc) {
                    let endTS = new Date().getMilliseconds();
                    log("Load all date file cost [ %s ]ms", endTS - startTS);
                    doneFunc();
                  }
                }
              });
            }
          }
        }

        clear() {
          dataRegisterMgr = exports('dataRegisterMgr', null);
        }

      }

      exports('DataRegisterMgr', DataRegisterMgr); // ()();

      let dataRegisterMgr = exports('dataRegisterMgr', (() => {
        return DataRegisterMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EncryptUtil.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('EncryptUtil', void 0);

      cclegacy._RF.push({}, "a74a1TprtpLx54W8v7hpLkn", "EncryptUtil", undefined);
      /**
       * @file EncryptUtil.ts
       * @description 一些加密解密方法
       */


      let EncryptUtil;

      (function (_EncryptUtil) {
        function aesEncrypt(msg, key, iv) {
          let encrypt = CryptoJS.AES.encrypt(msg, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          return encrypt.toString();
        }

        _EncryptUtil.aesEncrypt = aesEncrypt;

        function aesDecrypt(str, key, iv) {
          let decrypt = CryptoJS.AES.decrypt(str, utf8Parse(key), {
            iv: utf8Parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
          return CryptoJS.enc.Utf8.stringify(decrypt);
        }

        _EncryptUtil.aesDecrypt = aesDecrypt;

        function utf8Parse(utf8Str) {
          return CryptoJS.enc.Utf8.parse(utf8Str);
        }
      })(EncryptUtil || (EncryptUtil = exports('EncryptUtil', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Launch.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './GameConfig.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, JsonAsset, _decorator, Component, log, sys, director, GameConfig;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      JsonAsset = module.JsonAsset;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      sys = module.sys;
      director = module.director;
    }, function (module) {
      GameConfig = module.GameConfig;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "a867bL5iW1JCo9w+6QSwzya", "Launch", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let Launch = exports('Launch', (_dec = ccclass('Launch'), _dec2 = property({
        type: JsonAsset
      }), _dec(_class = (_class2 = (_temp = class Launch extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "serverConfig", _descriptor, this);
        }

        onLoad() {
          if (this.serverConfig) {
            let config = this.serverConfig.json;
            log("ServerConfig.json", JSON.stringify(config));
            Object.keys(config).forEach(key => {
              let value = config[key];
              GameConfig[key] = value;
            });
          }
        }

        start() {
          //动态合图
          // dynamicAtlasManager.enabled = false;
          this._keepScreenOn();

          this.scheduleOnce(dt => {
            this._startHotUpdate();
          }, 1);
        } //设置屏幕常亮


        _keepScreenOn() {
          if (sys.isNative) {
            if (sys.os == sys.OS.IOS || sys.os == sys.OS.ANDROID) {
              jsb.device.setKeepScreenOn(true);
            }
          }
        } // 走热更新流程


        _startHotUpdate() {
          director.loadScene("hotUpdate", () => {// 预加载
            // let paths = [
            //     "prefab/tongyong_ui/tongyong_tipsUI_00",
            //     "prefab/tongyong_ui/tongyong_tipsUI_01",
            // ];
            // for (let index = 0; index < paths.length; index++) {
            //     const element = paths[index];
            //     ResourcesLoader.preload(element, () => {});
            // }
          });
        }

      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "serverConfig", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MutableForwardIterator.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "aa84322zq9PeoKiKEf3vDEO", "MutableForwardIterator", undefined);
      /**
       * @example
       * ```
       * var array = [0, 1, 2, 3, 4];
       * var iterator = new MutableForwardIterator<number>(array);
       * for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
       *     var item = array[iterator.i];
       *     ...
       * }
       * ```
       * @description 可变的迭代器，迭代器用于遍历中删除元素 fastRemove / fastRemoveAt 建议慎用，数值顺序会改变
       */


      class MutableForwardIterator {
        constructor(array) {
          _defineProperty(this, "i", 0);

          this.array = array;
        }

        get length() {
          return this.array.length;
        }

        set length(value) {
          this.array.length = value;

          if (this.i >= value) {
            this.i = value - 1;
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(不改变数组顺序)
         * @param value T 数值元素
         */


        remove(value) {
          const index = this.array.indexOf(value);

          if (index >= 0) {
            this.removeAt(index);
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(不改变数组顺序)
         * @param i number 数组索引
         */


        removeAt(i) {
          this.array.splice(i, 1);

          if (i <= this.i) {
            --this.i;
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(慎用,改变数组顺序)
         * @param value T 数值元素
         */


        fastRemove(value) {
          const index = this.array.indexOf(value);

          if (index >= 0) {
            this.fastRemoveAt(index);
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(慎用,改变数组顺序)
         * @param i number 数组索引
         */


        fastRemoveAt(i) {
          const array = this.array;
          array[i] = array[array.length - 1];
          --array.length;

          if (i <= this.i) {
            --this.i;
          }
        }
        /**
         * @description 判断数组元素是否存在
         * @param value T 数值元素
         */


        has(value) {
          let index = this.array.indexOf(value);

          if (index === -1) {
            return false;
          }

          return true;
        }

        push(item) {
          this.array.push(item);
        }

      }

      exports('default', MutableForwardIterator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ResultActionMgr.ts", ['cc', './Singleton.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts', './GlobalFunction.ts', './FightActionMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, tween, log, Singleton, FightEvent, FightConstant, fightEventMgr, G, fightActionMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      FightEvent = module.FightEvent;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      G = module.G;
    }, function (module) {
      fightActionMgr = module.fightActionMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ab768WPkGlGEZZdm7NLuDqE", "ResultActionMgr", undefined);

      let resultActionMgr = exports('resultActionMgr', null);
      /**
       * @description 攻击行动管理器 
       * */

      class ResultActionMgr extends Singleton {
        static init() {
          resultActionMgr = exports('resultActionMgr', ResultActionMgr.getInstance());
        }

        parse(data) {
          let resultDatas = data.Result;
          resultDatas.forEach(resultData => {
            let animationConfig = this._getAnimationConfig(data, resultData);

            this._parseResultAction(data, animationConfig, resultData);
          });
        }

        _getAnimationConfig(data, resultData) {
          let attackData = data.Attack;
          let skillId = attackData[1];
          let config = G.getConfig("FightSkill", skillId);
          let resultActionId = resultData[0];

          switch (resultActionId) {
            case FightConstant.FightReultAction.Action_Dodge:
              // 闪避
              return G.getConfig("FightEmbattled", config.dodgeAnimation);

            case FightConstant.FightReultAction.Action_Block:
              //格挡
              return G.getConfig("FightEmbattled", config.blockAnimation);

            case FightConstant.FightReultAction.Action_HP:
              //hp变化
              return G.getConfig("FightEmbattled", config.embattledAnimation);

            case FightConstant.FightReultAction.Action_Dead:
              //死亡
              return null;

            case FightConstant.FightReultAction.Action_Hit_Back:
              //反击
              return G.getConfig("FightEmbattled", config.hitbackAnimation);

            case FightConstant.FightReultAction.Action_Buff:
              //直接伤害(添加/删除buff)
              return null;

            case FightConstant.FightReultAction.Action_Lock:
              //无法行动
              return null;
          }
        }

        _parseResultAction(data, config, resultData) {
          // 全局技能时间轴
          let skillTimeline = config.skillTimeline;

          if (skillTimeline.length > 0) {
            this._runSkillTimelineAction(skillTimeline, data, resultData);
          } // 受击单位时间轴


          let defendUnitTimeline = config.defendUnitTimeline;

          if (defendUnitTimeline.length > 0) {
            this._runUnitDefendimelineAction(defendUnitTimeline, data, resultData);
          }
        }

        _runSkillTimelineAction(skillTimeline, data, resultData) {
          let allTimeLine = [];
          let camp = resultData[1];
          let targets = resultData[2];
          let tarUnits = [];
          targets.forEach(target => {
            let tarUnit = fightActionMgr.getUnit([camp, target[0]]);
            tarUnits.push(tarUnit);
          });

          for (let index = 0; index < tarUnits.length; index++) {
            const tarUnit = tarUnits[index];
            skillTimeline.forEach(animations => {
              let oneTimeTween = tween();
              animations.forEach(anim => {
                let target = targets[index];
                let fightActionData = {
                  own: tarUnit,
                  target: tarUnit,
                  result: target[1],
                  animCfg: anim
                };
                let tween = fightActionMgr.getAnimation(fightActionData);
                oneTimeTween.then(tween);
              });
              allTimeLine.push(oneTimeTween);
            });

            if (allTimeLine.length > 1) {
              let parallel = tween(tarUnit).parallel(...allTimeLine);
              parallel.start();
            } else {
              let t = allTimeLine[0];
              t.target(tarUnit).start();
            }
          }
        }

        _runUnitDefendimelineAction(unitTimeline, data, resultData) {
          let allTimeLine = [];
          let camp = resultData[1];
          let targets = resultData[2];
          let tarUnits = [];
          targets.forEach(target => {
            let tarUnit = fightActionMgr.getUnit([camp, target[0]]);
            tarUnits.push(tarUnit);
          });

          for (let index = 0; index < tarUnits.length; index++) {
            const tarUnit = tarUnits[index];
            let target = targets[index];
            unitTimeline.forEach(animations => {
              let oneTimeTween = tween();
              animations.forEach(anim => {
                let fightActionData = {
                  own: tarUnit,
                  target: tarUnit,
                  result: target[1],
                  animCfg: anim
                };
                let tween = fightActionMgr.getAnimation(fightActionData);
                oneTimeTween.then(tween);
              });
              allTimeLine.push(oneTimeTween);
            });

            if (allTimeLine.length > 1) {
              let parallel = tween(tarUnit).parallel(...allTimeLine);
              parallel.then(tween().call(() => {
                log("result action finished!2"); // 攻击结束

                fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Result_End, data));
              })).start();
            } else {
              let t = allTimeLine[0];
              t.target(tarUnit).then(tween().call(() => {
                log("result action finished!1"); // 结果结束

                fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Result_End, data));
              })).start();
            }
          }
        }

        destory() {
          ResultActionMgr.destoryInstance();
        }

        clear() {
          resultActionMgr = exports('resultActionMgr', null);
        }

      }

      exports('ResultActionMgr', ResultActionMgr);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoadingIndicator.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Node, _decorator, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "af708qUyqhLPZZ+DViAJgO2", "LoadingIndicator", undefined);

      const {
        ccclass,
        property,
        menu
      } = _decorator;
      let LoadingIndicator = exports('default', (_dec = ccclass("LoadingIndicator"), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class LoadingIndicator extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "loading", _descriptor, this);

          _defineProperty(this, "loading_rotate", 0);
        }

        update(dt) {
          this.loading_rotate += dt * 220;
          this.loading.setRotationFromEuler(0, 0, -this.loading_rotate % 360);

          if (this.loading_rotate > 360) {
            this.loading_rotate -= 360;
          }
        }

      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionBase.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b15fcuXA21P0JC9LmM890dN", "ActionBase", undefined);
      /**
       * @description aciton的基类
       */


      class ActionBase {
        done() {}

        clean() {}

      }

      exports('ActionBase', ActionBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, log, Singleton;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      log = module.log;
    }, function (module) {
      Singleton = module.Singleton;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b5101R9k4tCmrTbf5/Pp+o2", "EventMgr", undefined);

      class EventMgr extends Singleton {
        // 字段
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_listeners", void 0);

          _defineProperty(this, "_listenerHandleIndex", void 0);

          _defineProperty(this, "_isDispatchEventing", false);

          _defineProperty(this, "_waitAddListeners", void 0);

          _defineProperty(this, "_waitDelListeners", void 0);

          this._listeners = new Map();
          this._listenerHandleIndex = 0;
          this._waitAddListeners = [];
          this._waitDelListeners = new Map();
        } // 方法


        addEventListener(eventName, listener) {
          if (this._listeners.get(eventName) == null) {
            this._listeners.set(eventName, new Map());
          }

          ++this._listenerHandleIndex;
          let handle = `HANDLE_${this._listenerHandleIndex}`;

          if (this._isDispatchEventing) {
            this._waitAddListeners.push([eventName, listener, handle]);

            return handle;
          }

          this._listeners.get(eventName).set(handle, listener);

          return handle;
        }

        removeEventListener(eventName, key) {
          if (this._isDispatchEventing) {
            this._waitDelListeners.set(key, eventName);

            return;
          }

          let cellMap = this._listeners.get(eventName);

          if (cellMap == null) return;
          let iterator = cellMap.entries();
          let r;

          while (r = iterator.next(), !r.done) {
            // cc.log(r);
            let v = r.value;
            let handle = v[0];
            let listener = v[1];

            if (key == handle || key == listener) {
              cellMap.delete(handle);
              break;
            }
          }
        }

        dispatchEvent(event) {
          this._isDispatchEventing = true;
          let eventName = event.msgId;

          if (this._listeners.get(eventName) == null) {
            this._isDispatchEventing = false;
            return;
          }

          let cellMap = this._listeners.get(eventName);

          if (cellMap == null) return;
          let iterator = cellMap.entries();
          let r;

          while (r = iterator.next(), !r.done) {
            // cc.log(r);
            let v = r.value;
            let handle = v[0];
            let listener = v[1]; // is wait del, don't callback

            if (this._waitDelListeners.get(handle) == null) {
              let ret = listener(event);

              if (ret == false) {
                log("Break: handle ", handle, "  eventName", eventName);
                break;
              } else if (ret == "__REMOVE__") {
                cellMap.delete(handle);
              }
            }
          } //dispatchEvent end


          this._isDispatchEventing = false;

          this._waitAddListeners.forEach(value => {
            this._listeners.get(value[0]).set(value[2], value[1]);
          });

          this._waitDelListeners.forEach((value, key) => {
            this.removeEventListener(value, key);
          });

          this._waitAddListeners.splice(0, this._waitAddListeners.length);

          this._waitDelListeners.clear();
        }

        clear() {}

      }

      exports('EventMgr', EventMgr);

      class ModelEventMgr extends EventMgr {
        clear() {
          modelEventMgr = exports('modelEventMgr', null);
        }

      }

      class MsgEventMgr extends EventMgr {
        clear() {
          msgEventMgr = exports('msgEventMgr', null);
        }

      }

      class ViewEventMgr extends EventMgr {
        clear() {
          viewEventMgr = exports('viewEventMgr', null);
        }

      }

      let modelEventMgr = exports('modelEventMgr', (() => {
        return ModelEventMgr.getInstance();
      })());
      let msgEventMgr = exports('msgEventMgr', (() => {
        return MsgEventMgr.getInstance();
      })());
      let viewEventMgr = exports('viewEventMgr', (() => {
        return ViewEventMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Creator8.ts", ['cc', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './define.ts', './FightMainLayer.ts', './ViewRegisterMgr.ts', './SceneMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, instantiate, ResourcesLoader, ViewCreatorBase, ViewProtocol, FightMainLayer, viewRegisterMgr, sceneMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      ViewCreatorBase = module.ViewCreatorBase;
    }, function (module) {
      ViewProtocol = module.ViewProtocol;
    }, null, function (module) {
      FightMainLayer = module.FightMainLayer;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b8b48kBzx1IHa45HtAJlziz", "Creator", undefined);

      class FightCreator extends ViewCreatorBase {
        onInit() {
          this.regMsg(ViewProtocol.FightMainLayer, this._onCreateFightMainLayer.bind(this));
          this.regMsg(ViewProtocol.FightFormation, this.onCreateFormationView.bind(this));
        }

        _onCreateFightMainLayer(event) {
          let viewInfo = viewRegisterMgr.getViewInfo("fight", "FightMainLayer");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let bgNode = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(bgNode, viewInfo.View);
            let com = bgNode.getComponentInChildren(FightMainLayer);
            ResourcesLoader.load("fight/datas/report", json => {
              com.init(json);
            });
          });
        }

        onCreateFormationView(event) {
          let viewInfo = viewRegisterMgr.getViewInfo("fight", "FightFormation");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node, viewInfo.View);
          });
        }

      }

      exports('FightCreator', FightCreator);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightMainUI.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Protocol.ts', './ComponentBase.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts', './SceneMgr.ts', './SocketMgr.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Button, Label, Sprite, CCFloat, _decorator, js, AnimationComponent, Protocol, ComponentBase, FightEvent, FightConstant, fightEventMgr, sceneMgr, socketMgr;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Button = module.Button;
      Label = module.Label;
      Sprite = module.Sprite;
      CCFloat = module.CCFloat;
      _decorator = module._decorator;
      js = module.js;
      AnimationComponent = module.AnimationComponent;
    }, function (module) {
      Protocol = module.Protocol;
    }, function (module) {
      ComponentBase = module.ComponentBase;
    }, function (module) {
      FightEvent = module.FightEvent;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      socketMgr = module.socketMgr;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

      cclegacy._RF.push({}, "b96ebmrG8hLXrjMCls+69P+", "FightMainUI", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let FightMainUI = exports('FightMainUI', (_dec = ccclass('FightMainUI'), _dec2 = property(Button), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Sprite), _dec6 = property([CCFloat]), _dec(_class = (_class2 = (_temp = class FightMainUI extends ComponentBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "startBtn", _descriptor, this);

          _initializerDefineProperty(this, "lblRound", _descriptor2, this);

          _initializerDefineProperty(this, "lblSpeed", _descriptor3, this);

          _initializerDefineProperty(this, "spSpeed", _descriptor4, this);

          _initializerDefineProperty(this, "speedList", _descriptor5, this);

          _defineProperty(this, "_root", null);

          _defineProperty(this, "_curSpeedIdx", 0);
        }

        onLoad() {
          this._root = this.node.parent;

          this._addFightListeners();

          this._setSpeed();
        }

        _addFightListeners() {
          fightEventMgr.addEventListener(FightConstant.FightEvent.Round_Start, this._updateRoundLabel.bind(this));
        } // 设置回合数


        _updateRoundLabel(event) {
          let data = event.getEventData();
          let round = data.Round.toString();
          this.lblRound.setString(round);
        }

        _setSpeed() {
          let speed = 1;

          if (this._curSpeedIdx != 0) {
            speed = this.speedList[this._curSpeedIdx];
          }

          if (speed == 1) {
            this.lblSpeed.enabled = false;
            this.spSpeed.enabled = true;
            return speed;
          }

          this.lblSpeed.enabled = true;
          this.spSpeed.enabled = false;

          if (speed == 0.5) {
            this.lblSpeed.setString("1/2倍");
            return speed;
          }

          this.lblSpeed.setString(js.formatStr("%d倍", speed));
          return speed;
        } // 战斗开始


        startGame() {}

        onClickStartBtn(event, customEventData) {
          this.startBtn.node.active = false;

          let animteComp = this._root.getComponent(AnimationComponent);

          animteComp.play();
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Game_Star, null));
        }

        onClickCloseBtn(event, customEventData) {
          sceneMgr.popTableLayer();
        }

        update(dt) {}

        onClickSpeedBtn(event, customEventData) {
          this._curSpeedIdx += 1;

          if (this._curSpeedIdx >= this.speedList.length) {
            this._curSpeedIdx = 0;
          }

          let speed = this._setSpeed();

          socketMgr.sendInnerMsg(Protocol.Inner.SetAnimationSpeed, speed);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblRound", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lblSpeed", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "speedList", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TouchEffect.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, Animation;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      Animation = module.Animation;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "b9761pFQjdC2KQCiU7qXwTb", "TouchEffect", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = TouchEffect
       * DateTime = Tue Mar 22 2022 19:43:46 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TouchEffect.ts
       * FileBasenameNoExtension = TouchEffect
       * URL = db://assets/scripts/app/views/common/TouchEffect.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let TouchEffect = exports('TouchEffect', (_dec = ccclass('TouchEffect'), _dec(_class = (_temp = class TouchEffect extends Component {
        constructor() {
          super();

          _defineProperty(this, "_clip", void 0);
        }

        onLoad() {
          this._clip = this.node.parent.getComponent(Animation);

          this._clip.on(Animation.EventType.FINISHED, this.onPlayFinish.bind(this));
        }

        start() {}

        play() {
          this.node.parent.active = true;

          this._clip.play("ToucheEffect");
        }

        onPlayFinish() {
          this.node.parent.active = false;
        }

      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/functions.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, v3;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      v3 = module.v3;
    }],
    execute: function () {
      exports({
        posAdd: posAdd,
        setNodeVisible: setNodeVisible,
        v2ToV3: v2ToV3
      });

      cclegacy._RF.push({}, "c0cc59J6BFFY6D6cR+vugKe", "functions", undefined);

      function setNodeVisible(node, isVisible) {
        // let opComp = node.addComponent(UIOpacity)
        // opComp.opacity = isVisible ? 255:0
        node.active = isVisible;
      }

      function posAdd(node, offPos, minX, maxX, minY, maxY) {
        node.position = node.position.add(v3(offPos.x, offPos.y));
        let x, y;

        if (minX && node.position.x < minX) {
          x = minX;
        }

        if (maxX && node.position.x > maxX) {
          x = maxX;
        }

        if (minY && node.position.y < minY) {
          y = minY;
        }

        if (maxY && node.position.y > maxY) {
          y = maxY;
        }

        node.position = v3(x || node.position.x, y || node.position.y);
      }

      function v2ToV3(v2) {
        return v3(v2.x, v2.y, 0);
      }

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Logger.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, sys, log, error, warn, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      sys = module.sys;
      log = module.log;
      error = module.error;
      warn = module.warn;
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c397fvD7+tJEJUMNWMt2wl/", "Logger", undefined);

      class Logger {
        static get lv() {
          return this._lv;
        }

        static set lv(value) {
          this._lv = value;
        }

        static i(message) {
          if (this.lv >= 3) {
            if (sys.isNative) {
              if (typeof message === "object") {
                let s = JSON.stringify(message);
                log(s);
              } else {
                log(message);
              }
            } else {
              log(message);
            }
          }
        }

        static e(message) {
          if (this.lv >= 1) {
            error(message);
          }
        }

        static w(message) {
          if (this.lv >= 2) {
            warn(message);
          }
        }

        static net(message) {
          if (this.lv >= 4) {
            log(message);
          }
        }

      }

      exports('default', Logger);

      _defineProperty(Logger, "_lv", 4);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FomationLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts', './FightLayerBase.ts', './FormationView.ts', './ViewRegisterMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, instantiate, Prefab, ResourcesLoader, FightLayerBase, FormationView, viewRegisterMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      instantiate = module.instantiate;
      Prefab = module.Prefab;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      FightLayerBase = module.FightLayerBase;
    }, function (module) {
      FormationView = module.FormationView;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c5e70JW4eVIo71rMBE9rzhH", "FomationLayer", undefined);

      class FomationLayer extends FightLayerBase {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_fomationCom", null);
        }

        async init() {
          let prefab = await this._loadPrefab();
          let node = instantiate(prefab);
          this.node.addChild(node);
          this._fomationCom = this.node.getComponentInChildren(FormationView);
        }

        async _loadPrefab() {
          let viewInfo = viewRegisterMgr.getViewInfo("formation", "FormationView");
          return ResourcesLoader.loadPromise(viewInfo.Path, Prefab);
        }
        /**
         * 
         * @description 获取攻方部队索引值 (左)
         * @param index 部队所引致
         */


        getAttackPosByIndex(index) {
          return this._fomationCom.getAttackPosByIndex(index);
        }
        /**
         * 
         * @description 获取守方部队索引值 (右)
         * @param index 部队所引致
         */


        getDefendPosByIndex(index) {
          return this._fomationCom.getDefendPosByIndex(index);
        }

      }

      exports('FomationLayer', FomationLayer);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightEffectMgr.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "c9e72t+rYtDB4vghW5z2f0+", "FightEffectMgr", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Tips.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, find, tween, v3, Node, UITransform, Label;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
      tween = module.tween;
      v3 = module.v3;
      Node = module.Node;
      UITransform = module.UITransform;
      Label = module.Label;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "cc60cMG4W9ES6rnsz576Uys", "Tips", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = Tips
       * DateTime = Fri Mar 11 2022 15:26:10 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = Tips.ts
       * FileBasenameNoExtension = Tips
       * URL = db://assets/scripts/app/views/common/Tips.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let Tips = exports('Tips', (_dec = ccclass('Tips'), _dec(_class = (_temp = class Tips extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_bg", void 0);

          _defineProperty(this, "_labelNode", void 0);

          _defineProperty(this, "_text", void 0);
        }

        start() {
          // [3]
          let contentNode = find("content", this.node);
          tween(contentNode).by(0.3, {
            position: v3(0, 200, 0)
          }).delay(0.2).call(() => {
            this.node.destroy();
          }).start();
        }

        get text() {
          return this._text;
        }

        set text(value) {
          if (!this._bg) {
            this._bg = find("content/bg", this.node);
            this._labelNode = find("content/Label", this.node);

            this._labelNode.on(Node.EventType.SIZE_CHANGED, () => {
              let width = this._labelNode.getComponent(UITransform).width;

              let bgUITrans = this._bg.getComponent(UITransform);

              bgUITrans.width = width + 10;
            });
          }

          this._text = value;

          let labelComp = this._labelNode.getComponent(Label);

          labelComp.string = value;
        }

      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/PreReward.ts", ['cc', './SceneMgr.ts', './ListView.ts'], function (exports) {
  'use strict';

  var cclegacy, Component, find, _decorator, sceneMgr, ListView;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      find = module.find;
      _decorator = module._decorator;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      ListView = module.ListView;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "cd7ceWaamhNb7WeUn6nOyG/", "PreReward", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = PreReward
       * DateTime = Tue Mar 08 2022 15:03:30 GMT+0800 (中国标准时间)
       * Author = maikx1989
       * FileBasename = PreReward.ts
       * FileBasenameNoExtension = PreReward
       * URL = db://assets/scripts/app/views/pre_reward/PreReward.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let PreReward = exports('PreReward', (_dec = ccclass('PreReward'), _dec(_class = class PreReward extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          // [3]
          this.setItems();
        }

        setItems() {
          let listViewNode = find("content/ScrollView", this.node.parent);
          let items = [];

          for (let index = 0; index < 100; index++) {
            items.push(index);
          }

          let listViewComp = listViewNode.getComponent(ListView);
          listViewComp.setDelegate({
            items: () => items
          });
          listViewComp.reload();
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onClickClose() {
          sceneMgr.popTableLayer();
        }

      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpineNodeBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts', './SpineComponentBase.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Node, instantiate, ResourcesLoader, SpineComponentBase;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      SpineComponentBase = module.SpineComponentBase;
    }],
    execute: function () {
      var _class, _temp;

      cclegacy._RF.push({}, "d185e+59BVKtqafFgIsFDvY", "SpineNodeBase", undefined);

      const {
        ccclass
      } = _decorator;
      let SpineNodeBase = exports('SpineNodeBase', ccclass(_class = (_temp = class SpineNodeBase extends Node {
        // 阵型孔位
        // 阵营
        set formationIndex(v) {
          this._formationIndex = v;
        }

        get formationIndex() {
          return this._formationIndex;
        }

        get camp() {
          return this._camp;
        }

        set camp(v) {
          this._camp = v;
        }

        get spineCom() {
          return this._spineCom;
        }

        constructor(spineNode) {
          super();

          _defineProperty(this, "_formationIndex", void 0);

          _defineProperty(this, "_camp", void 0);

          _defineProperty(this, "_spineCom", null);

          this.addChild(spineNode);
          this._spineCom = this.getComponentInChildren(SpineComponentBase);
        }
        /**
         * @description 立即播放当前动画
         * @param actionName spine 动作名称
         * @param isLoop 是否循环播放 默认值false
        */


        play(actionName, isLoop) {
          this._spineCom.play(actionName, isLoop);
        }
        /**
         * @description 添加特效在角色身上
         */


        addEffectFont(node, offset) {
          this._spineCom.addEffectFont(node, offset);
        }
        /**
         * @description 添加特效在角色脚上
         */


        addEffectBack(node, offset) {
          this._spineCom.addEffectBack(node, offset);
        }
        /**
         * addBloodUI
         */


        addBloodUI(path) {
          var _path;

          (_path = path) !== null && _path !== void 0 ? _path : path = "fight/prefabs/ui/hero_blood_ui";
          ResourcesLoader.load(path, prefab => {
            let node = instantiate(prefab);

            this._spineCom.addBloodUI(node);
          });
        }
        /**
         * updateBlood
         */


        updateBlood(cur, top) {
          this._spineCom.updateBlood(cur, top);
        }
        /**
         * @description 换皮肤
         * @param skinName:number 皮肤id
         */


        changeSkin(skinName) {
          this._spineCom.changeSkin(skinName);
        }
        /**
         * 
         * @description 更换皮肤的单间装备
         * @param skinName 新皮肤名字（装备所在的皮肤）
         * @param oldSlotName 旧插槽的名字
         * @param newSlotName 新插槽的名字
         */


        changeEquip(skinName, oldSlotName, newSlotName) {
          this._spineCom.changeEquip(skinName, oldSlotName, newSlotName);
        }
        /** 动画开始回调 */


        setAnimateStartCallback(callback) {
          this._spineCom.setAnimateStartCallback(callback);
        }
        /** 动画结束回调 */


        setAnimateEndCallback(callback) {
          this._spineCom.setAnimateEndCallback(callback);
        }
        /** 动画被打断回调 */


        setAnimateInterruptCallback(callback) {
          this._spineCom.setAnimateInterruptCallback(callback);
        }
        /** 动画事件回调 */


        setAnimateEventCallback(callback) {
          this._spineCom.setAnimateEventCallback(callback);
        }

      }, _temp)) || _class); // 武将

      class HeroSpineNode extends SpineNodeBase {}

      exports('HeroSpineNode', HeroSpineNode); // 敌方

      class MonsterSpineNode extends SpineNodeBase {}

      exports('MonsterSpineNode', MonsterSpineNode);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/YYNamespace.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('yy', void 0);

      cclegacy._RF.push({}, "d2e99hMUPlMHLGxQ8QL3f4Z", "YYNamespace", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 15:20:04
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-02 15:22:02
       * @Description: file content
       */


      let yy;

      (function (_yy) {
        let types;

        (function (_types) {})(types || (types = _yy.types || (_yy.types = {})));

        let interfaces;

        (function (_interfaces) {})(interfaces || (interfaces = _yy.interfaces || (_yy.interfaces = {})));

        let macro;

        (function (_macro) {
          let HeroAnimate;

          (function (HeroAnimate) {
            HeroAnimate["Attack"] = "attack01";
            HeroAnimate["Run"] = "run";
            HeroAnimate["Idle"] = "idle";
            HeroAnimate["Die"] = "die";
            HeroAnimate["Hurt"] = "hurt";
            HeroAnimate["Jump"] = "jump";
            HeroAnimate["Skill01"] = "skill01";
            HeroAnimate["Skill02"] = "skill02";
          })(HeroAnimate || (HeroAnimate = {}));

          _macro.HeroAnimate = HeroAnimate;
        })(macro || (macro = _yy.macro || (_yy.macro = {})));
      })(yy || (yy = exports('yy', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightMainLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts', './Protocol.ts', './define.ts', './LayerBase.ts', './FightConstant.ts', './FightEventMgr.ts', './FightData.ts', './FightDataMgr.ts', './FightActionMgr.ts', './FightBloodMgr.ts', './FightController.ts', './FightMainWorld.ts', './FightPlayer.ts', './ViewRegisterMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, instantiate, director, TweenSystem, AnimationManager, ResourcesLoader, Protocol, LayerBase, FightConstant, FightEventMgr, fightEventMgr, FightData, FightDataMgr, fightDataMgr, FightActionMgr, fightActionMgr, FightBloodMgr, fightBloodMgr, FightController, fightController, FightMainWorld, FightPlayer, fightPlayer, viewRegisterMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      instantiate = module.instantiate;
      director = module.director;
      TweenSystem = module.TweenSystem;
      AnimationManager = module.AnimationManager;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      Protocol = module.Protocol;
    }, null, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      FightEventMgr = module.FightEventMgr;
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      FightData = module.FightData;
    }, function (module) {
      FightDataMgr = module.FightDataMgr;
      fightDataMgr = module.fightDataMgr;
    }, function (module) {
      FightActionMgr = module.FightActionMgr;
      fightActionMgr = module.fightActionMgr;
    }, function (module) {
      FightBloodMgr = module.FightBloodMgr;
      fightBloodMgr = module.fightBloodMgr;
    }, function (module) {
      FightController = module.FightController;
      fightController = module.fightController;
    }, function (module) {
      FightMainWorld = module.FightMainWorld;
    }, function (module) {
      FightPlayer = module.FightPlayer;
      fightPlayer = module.fightPlayer;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "d3b7bjFp+BIWbTWzxeD7G+K", "FightMainLayer", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      let FightMainLayer = exports('FightMainLayer', (_dec = ccclass('FightMainLayer'), _dec(_class = (_temp = class FightMainLayer extends LayerBase {
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

          this._addListeners();
        }

        _initManagers(report) {
          // 战报数据管理器
          FightDataMgr.init();
          fightDataMgr.parse(report, FightData); // 事件派发器

          FightEventMgr.init(); // 回合控制器

          FightController.init(); // 战斗播放器

          FightPlayer.init(); // action管理器

          FightActionMgr.init(this); // 飘血管理器

          FightBloodMgr.init(this);
        }

        _initBg() {}

        _loadMainWorld() {
          this._fightMainWorld = new FightMainWorld();

          this._fightMainWorld.init();

          this._content.addChild(this._fightMainWorld);
        }

        _loadMainUI() {
          let viewInfo = viewRegisterMgr.getViewInfo("fight", "FightMainUI");
          ResourcesLoader.loadWithViewInfo(viewInfo, data => {
            let uiNode = instantiate(data);

            this._content.addChild(uiNode);

            this._fightMainUI = uiNode.getComponentInChildren("FightMainUI");
          });
        }

        _addListeners() {
          fightEventMgr.addEventListener(FightConstant.FightEvent.Game_Star, this._startGame.bind(this));
          this.addMsgListener(Protocol.Inner.SetAnimationSpeed, this._setSpeed.bind(this));
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
          fightDataMgr.destory();
          fightEventMgr.destory();
          fightController.destory();
          fightPlayer.destory();
          fightActionMgr.destory();
          fightBloodMgr.destory();
        }

        _setSpeed(event) {
          let data = event.getRawData();
          this._gameSpeed = data;
        }

      }, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionDelay.ts", ['cc', './ActionBase.ts'], function (exports) {
  'use strict';

  var cclegacy, tween, ActionBase;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
    }, function (module) {
      ActionBase = module.ActionBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d6efb1my+lPWr4oQ/A1Qixu", "ActionDelay", undefined);

      class ActionDelay extends ActionBase {
        /**
         * 
         * @param own 移动节点
         * @param duration 持续时间
         */
        delay(data) {
          let animCfg = data.animCfg;
          let param = animCfg.params;
          let duration = param[0];
          return tween().delay(duration);
        }

      }

      exports('ActionDelay', ActionDelay);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ConfigType.ts", ['cc'], function () {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d7b23WpNaJPEodxkzx9Jpqy", "ConfigType", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewCreatorBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './EventMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, viewEventMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      viewEventMgr = module.viewEventMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d82fdLc5a1LKplLFvj4/3Zc", "ViewCreatorBase", undefined);

      class ViewCreatorBase {
        constructor() {
          _defineProperty(this, "_handles", void 0);

          this._handles = new Map();
        } //重写


        onInit() {}

        regMsg(eventName, listener) {
          let handle = viewEventMgr.addEventListener(eventName, listener);
          if (this._handles.get(handle) != null) return;

          this._handles.set(handle, eventName);
        }

        unRegMsgAll() {
          this._handles.forEach((value, key) => {
            viewEventMgr.removeEventListener(value, key);
          });

          this._handles.clear;
        }

      }

      exports('ViewCreatorBase', ViewCreatorBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightEvent.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d928dgWsOZCXKPUDFmqZ3gV", "FightEvent", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-19 11:17:19
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-19 13:33:45
       * @Description: file content
       */

      /**
       * @description 战斗事件
       */


      class FightEvent {
        constructor(eventId, data) {
          _defineProperty(this, "_eventId", void 0);

          _defineProperty(this, "_data", void 0);

          this._eventId = eventId;
          this._data = data;
        }
        /**
         * getEventId
         */


        getEventId() {
          return this._eventId;
        }

        getEventData() {
          return this._data;
        }

      }

      exports('FightEvent', FightEvent);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModelLogin.ts", ['cc', './ModelBase.ts'], function (exports) {
  'use strict';

  var cclegacy, ModelBase;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ModelBase = module.ModelBase;
    }],
    execute: function () {
      cclegacy._RF.push({}, "d94c98ozCJJy7Ii+rxZyUIv", "ModelLogin", undefined);

      class ModelLogin extends ModelBase {
        constructor() {
          super(); // this.regMsg(Protocol.Server.game_info)
        }

        getEnterGame() {
          return true;
        }

        getLoginData() {
          return {
            user_id: 0,
            user_key: "123"
          };
        }

      }

      exports('ModelLogin', ModelLogin);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimeSetPanel.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Node, _decorator, Component, EditBox, error;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      EditBox = module.EditBox;
      error = module.error;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _temp;

      cclegacy._RF.push({}, "d9cf3DcoWhHjYjUsWLxH0XJ", "TimeSetPanel", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = TimeSetPanel
       * DateTime = Wed Mar 09 2022 15:04:15 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = TimeSetPanel.ts
       * FileBasenameNoExtension = TimeSetPanel
       * URL = db://assets/skill_eitor/TimeSetPanel.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let TimeSetPanel = exports('TimeSetPanel', (_dec = ccclass('TimeSetPanel'), _dec2 = property(Node), _dec(_class = (_class2 = (_temp = class TimeSetPanel extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "editBoxNode", _descriptor, this);

          _defineProperty(this, "callBack", void 0);
        }

        start() {// [3]
        }

        onClickCancle() {
          this.node.destroy();
        }

        onClickOk() {
          let editBoxComp = this.editBoxNode.getComponent(EditBox);
          let sec;
          sec = Number(editBoxComp.string);
          sec || error("请出入数字");
          this.callBack(sec);
          this.node.destroy();
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "editBoxNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightConstant.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('FightConstant', void 0);

      cclegacy._RF.push({}, "da8335UaiRIjLDRYaTAEO17", "FightConstant", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-19 11:17:19
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-19 13:51:45
       * @Description: file content
       */


      let FightConstant;

      (function (_FightConstant) {
        let FightLayer;

        (function (FightLayer) {
          FightLayer[FightLayer["FORMATION"] = 0] = "FORMATION";
          FightLayer[FightLayer["BOTTM_EFFECT"] = 1] = "BOTTM_EFFECT";
          FightLayer[FightLayer["ROLE"] = 2] = "ROLE";
          FightLayer[FightLayer["TOP_EFFECT"] = 3] = "TOP_EFFECT";
          FightLayer[FightLayer["BLOOD"] = 4] = "BLOOD";
          FightLayer[FightLayer["DIALOG"] = 5] = "DIALOG";
        })(FightLayer || (FightLayer = {}));

        _FightConstant.FightLayer = FightLayer;
        let FightUnitType;

        (function (FightUnitType) {
          FightUnitType[FightUnitType["Attack"] = 0] = "Attack";
          FightUnitType[FightUnitType["Defend"] = 1] = "Defend";
        })(FightUnitType || (FightUnitType = {}));

        _FightConstant.FightUnitType = FightUnitType;
        let FightUnitState;

        (function (FightUnitState) {
          FightUnitState[FightUnitState["Stand"] = 0] = "Stand";
          FightUnitState[FightUnitState["Run"] = 1] = "Run";
          FightUnitState[FightUnitState["Jump"] = 2] = "Jump";
          FightUnitState[FightUnitState["Attack"] = 3] = "Attack";
          FightUnitState[FightUnitState["Skill"] = 4] = "Skill";
          FightUnitState[FightUnitState["Retreat"] = 5] = "Retreat";
          FightUnitState[FightUnitState["Hit"] = 6] = "Hit";
          FightUnitState[FightUnitState["Did"] = 7] = "Did";
        })(FightUnitState || (FightUnitState = {}));

        _FightConstant.FightUnitState = FightUnitState;
        let FightSkillAction;

        (function (FightSkillAction) {
          FightSkillAction[FightSkillAction["AddPrefab"] = 0] = "AddPrefab";
          FightSkillAction[FightSkillAction["Delay"] = 1] = "Delay";
          FightSkillAction[FightSkillAction["Camera"] = 2] = "Camera";
          FightSkillAction[FightSkillAction["ShowBlood"] = 3] = "ShowBlood";
          FightSkillAction[FightSkillAction["Dialog"] = 4] = "Dialog";
        })(FightSkillAction || (FightSkillAction = {}));

        _FightConstant.FightSkillAction = FightSkillAction;
        let FightUnitAction;

        (function (FightUnitAction) {
          FightUnitAction[FightUnitAction["AddPrefab"] = 0] = "AddPrefab";
          FightUnitAction[FightUnitAction["Delay"] = 1] = "Delay";
          FightUnitAction[FightUnitAction["SpineAnimation"] = 2] = "SpineAnimation";
          FightUnitAction[FightUnitAction["Color"] = 3] = "Color";
          FightUnitAction[FightUnitAction["GoBack"] = 4] = "GoBack";
          FightUnitAction[FightUnitAction["Hide"] = 5] = "Hide";
          FightUnitAction[FightUnitAction["Show"] = 6] = "Show";
          FightUnitAction[FightUnitAction["Move"] = 7] = "Move";
          FightUnitAction[FightUnitAction["Jump"] = 8] = "Jump";
        })(FightUnitAction || (FightUnitAction = {}));

        _FightConstant.FightUnitAction = FightUnitAction;
        let FightAttackAction;

        (function (FightAttackAction) {
          FightAttackAction[FightAttackAction["Action_Fail"] = 0] = "Action_Fail";
          FightAttackAction[FightAttackAction["Action_Skill"] = 1] = "Action_Skill";
          FightAttackAction[FightAttackAction["Action_Buff"] = 2] = "Action_Buff";
          FightAttackAction[FightAttackAction["Action_Lock"] = 3] = "Action_Lock";
        })(FightAttackAction || (FightAttackAction = {}));

        _FightConstant.FightAttackAction = FightAttackAction;
        let FightReultAction;

        (function (FightReultAction) {
          FightReultAction[FightReultAction["Action_Dodge"] = 0] = "Action_Dodge";
          FightReultAction[FightReultAction["Action_Block"] = 1] = "Action_Block";
          FightReultAction[FightReultAction["Action_HP"] = 2] = "Action_HP";
          FightReultAction[FightReultAction["Action_Dead"] = 3] = "Action_Dead";
          FightReultAction[FightReultAction["Action_Hit_Back"] = 4] = "Action_Hit_Back";
          FightReultAction[FightReultAction["Action_Buff"] = 5] = "Action_Buff";
          FightReultAction[FightReultAction["Action_Lock"] = 6] = "Action_Lock";
        })(FightReultAction || (FightReultAction = {}));

        _FightConstant.FightReultAction = FightReultAction;
        let FightHPAction;

        (function (FightHPAction) {
          FightHPAction[FightHPAction["Action_HP_Damage"] = 0] = "Action_HP_Damage";
          FightHPAction[FightHPAction["Action_HP_Cure"] = 1] = "Action_HP_Cure";
          FightHPAction[FightHPAction["Action_HP_Absort"] = 2] = "Action_HP_Absort";
          FightHPAction[FightHPAction["Action_HP_Crit"] = 3] = "Action_HP_Crit";
        })(FightHPAction || (FightHPAction = {}));

        _FightConstant.FightHPAction = FightHPAction;
        let FightBuffAction;

        (function (FightBuffAction) {
          FightBuffAction[FightBuffAction["Action_Buff_add"] = 0] = "Action_Buff_add";
          FightBuffAction[FightBuffAction["Action_Buff_del"] = 1] = "Action_Buff_del";
          FightBuffAction[FightBuffAction["Action_Buff_hurt"] = 2] = "Action_Buff_hurt";
          FightBuffAction[FightBuffAction["Action_Buff_cure"] = 3] = "Action_Buff_cure";
        })(FightBuffAction || (FightBuffAction = {}));

        _FightConstant.FightBuffAction = FightBuffAction;
        let FightEvent;

        (function (FightEvent) {
          FightEvent[FightEvent["Game_Star"] = 0] = "Game_Star";
          FightEvent[FightEvent["Game_End"] = 1] = "Game_End";
          FightEvent[FightEvent["Game_Pause"] = 2] = "Game_Pause";
          FightEvent[FightEvent["Game_Resume"] = 3] = "Game_Resume";
          FightEvent[FightEvent["Game_Replay"] = 4] = "Game_Replay";
          FightEvent[FightEvent["Round_Start"] = 5] = "Round_Start";
          FightEvent[FightEvent["Round_End"] = 6] = "Round_End";
          FightEvent[FightEvent["Action_Star"] = 7] = "Action_Star";
          FightEvent[FightEvent["Action_End"] = 8] = "Action_End";
          FightEvent[FightEvent["Attack_Start"] = 9] = "Attack_Start";
          FightEvent[FightEvent["Attack_End"] = 10] = "Attack_End";
          FightEvent[FightEvent["Result_Start"] = 11] = "Result_Start";
          FightEvent[FightEvent["Result_End"] = 12] = "Result_End";
          FightEvent[FightEvent["Blood_Change"] = 13] = "Blood_Change";
        })(FightEvent || (FightEvent = {}));

        _FightConstant.FightEvent = FightEvent;
      })(FightConstant || (FightConstant = exports('FightConstant', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FightActionMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts', './RoleLayer.ts', './ActionDelay.ts', './ActionGoBack.ts', './ActionMove.ts', './ActionSpineAnim.ts', './AcitonJump.ts', './ActionAddPrefab.ts', './Action.ts', './AttackActionMgr.ts', './ResultActionMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton, FightEvent, FightConstant, fightEventMgr, RoleLayer, ActionDelay, ActionGoBack, ActionMove, ActionSpineAnim, AcitonJump, ActionAddPrefab, AttackActionMgr, attackActionMgr, ResultActionMgr, resultActionMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      FightEvent = module.FightEvent;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      RoleLayer = module.RoleLayer;
    }, function (module) {
      ActionDelay = module.ActionDelay;
    }, function (module) {
      ActionGoBack = module.ActionGoBack;
    }, function (module) {
      ActionMove = module.ActionMove;
    }, function (module) {
      ActionSpineAnim = module.ActionSpineAnim;
    }, function (module) {
      AcitonJump = module.AcitonJump;
    }, function (module) {
      ActionAddPrefab = module.ActionAddPrefab;
    }, null, function (module) {
      AttackActionMgr = module.AttackActionMgr;
      attackActionMgr = module.attackActionMgr;
    }, function (module) {
      ResultActionMgr = module.ResultActionMgr;
      resultActionMgr = module.resultActionMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "da876KakvtGQZGN/fA5i6Kc", "FightActionMgr", undefined);

      let fightActionMgr = exports('fightActionMgr', null);
      /**
       * @description 行动管理器 
       * */

      class FightActionMgr extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_fightMainLayer", null);

          _defineProperty(this, "_fightMainWorld", null);

          _defineProperty(this, "_tempActionList", null);
        }

        static init(mainLayer) {
          fightActionMgr = exports('fightActionMgr', FightActionMgr.getInstance());

          fightActionMgr._init(mainLayer);
        }

        _init(mainLayer) {
          this._fightMainLayer = mainLayer;
          this._fightMainWorld = this._fightMainLayer.getFightMainWorld();
          this._tempActionList = new Array();
          AttackActionMgr.init();
          ResultActionMgr.init();

          this._initListeners();
        }

        _initListeners() {
          fightEventMgr.addEventListener(FightConstant.FightEvent.Attack_Start, this._onAttackStart.bind(this));
          fightEventMgr.addEventListener(FightConstant.FightEvent.Attack_End, this._onAttackEnd.bind(this));
          fightEventMgr.addEventListener(FightConstant.FightEvent.Result_Start, this._onResultStart.bind(this));
          fightEventMgr.addEventListener(FightConstant.FightEvent.Result_End, this._onResultEnd.bind(this));
        }

        _onAttackStart(event) {
          if (!this._fightMainWorld) {
            this._fightMainWorld = this._fightMainLayer.getFightMainWorld();
          }

          let data = event.getEventData();

          this._parseAttack(data);
        } // 做些清理工作;


        _onAttackEnd(event) {
          this._tempActionList.length = 0;
        }

        _onResultStart(event) {
          let data = event.getEventData();

          this._parseResult(data);
        }

        _onResultEnd(event) {
          fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Action_End, null));
        }

        _parseAttack(data) {
          attackActionMgr.parse(data);
        }
        /**
         * 
         * @param data 播放结果
         */


        _parseResult(data) {
          resultActionMgr.parse(data);
        }

        getAnimation(data) {
          let animCfg = data.animCfg;
          let cmd = animCfg.cmd;

          let cmdEnum = this._getUnitActionEnumByName(cmd);

          switch (cmdEnum) {
            case FightConstant.FightUnitAction.AddPrefab:
              return this.getUnitAction(ActionAddPrefab).add(data);

            case FightConstant.FightUnitAction.Delay:
              return this.getUnitAction(ActionDelay).delay(data);

            case FightConstant.FightUnitAction.SpineAnimation:
              return this.getUnitAction(ActionSpineAnim).play(data);

            case FightConstant.FightUnitAction.Color:
              return;

            case FightConstant.FightUnitAction.GoBack:
              return this.getUnitAction(ActionGoBack).goBack(data);

            case FightConstant.FightUnitAction.Hide:
              return;

            case FightConstant.FightUnitAction.Show:
              return;

            case FightConstant.FightUnitAction.Move:
              return this.getUnitAction(ActionMove).move(data);

            case FightConstant.FightUnitAction.Jump:
              return this.getUnitAction(AcitonJump).jump(data);
          }
        }

        getUnitAction(clas) {
          let anim = new clas(); // wait fot delet

          this._tempActionList.push(anim);

          return anim;
        }

        getOwnUnit(data) {
          return this.getUnit(data.Who);
        }

        getUnit(who) {
          let camp = who[0];
          let index = who[1];

          let com = this._fightMainWorld.getCommonentInLayer(FightConstant.FightLayer.ROLE, RoleLayer);

          if (camp == FightConstant.FightUnitType.Attack) {
            return com.getRoleAttacker(index);
          } else if (camp == FightConstant.FightUnitType.Defend) {
            return com.getRoleDefender(index);
          }
        }

        getUnitPos(who) {
          let camp = who[0];
          let index = who[1];

          let com = this._fightMainWorld.getCommonentInLayer(FightConstant.FightLayer.ROLE, RoleLayer);

          let pos = com.getFomationPos(camp, index);

          if (pos) {
            return pos;
          }
        }

        _getUnitActionEnumByName(name) {
          let cmdEnum = 0;

          switch (name) {
            case "AddPrefab":
              cmdEnum = FightConstant.FightUnitAction.AddPrefab;
              break;

            case "Delay":
              cmdEnum = FightConstant.FightUnitAction.Delay;
              break;

            case "SpineAnimation":
              cmdEnum = FightConstant.FightUnitAction.SpineAnimation;
              break;

            case "Color":
              cmdEnum = FightConstant.FightUnitAction.Color;
              break;

            case "GoBack":
              cmdEnum = FightConstant.FightUnitAction.GoBack;
              break;

            case "Hide":
              cmdEnum = FightConstant.FightUnitAction.Hide;
              break;

            case "Show":
              cmdEnum = FightConstant.FightUnitAction.Show;
              break;

            case "Move":
              cmdEnum = FightConstant.FightUnitAction.Move;
              break;

            case "Jump":
              cmdEnum = FightConstant.FightUnitAction.Jump;
              break;
          }

          return cmdEnum;
        }
        /**
         * name
         */


        getCommonentInLayer(layerIndex, layerCtor) {
          return this._fightMainWorld.getCommonentInLayer(layerIndex, layerCtor);
        }

        destory() {
          FightActionMgr.destoryInstance();
          attackActionMgr.destory();
          resultActionMgr.destory();
        }

        clear() {
          fightActionMgr = exports('fightActionMgr', null);
        }

      }

      exports('FightActionMgr', FightActionMgr);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/NetStateMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './EventMgr.ts', './GameMgr.ts', './Protocol.ts', './define.ts', './GlobalFunction.ts', './ModelLogin.ts', './model.ts', './GameConfig.ts', './SocketMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton, msgEventMgr, gameMgr, Protocol, G, ModelLogin, GameConfig, socketMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      msgEventMgr = module.msgEventMgr;
    }, function (module) {
      gameMgr = module.gameMgr;
    }, function (module) {
      Protocol = module.Protocol;
    }, null, function (module) {
      G = module.G;
    }, function (module) {
      ModelLogin = module.ModelLogin;
    }, null, function (module) {
      GameConfig = module.GameConfig;
    }, function (module) {
      socketMgr = module.socketMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "de574jXpsZNAZCHvPro2Kob", "NetStateMgr", undefined);

      class NetStateMgr extends Singleton {
        // 构造函数;
        constructor() {
          super();

          _defineProperty(this, "_reconnect", void 0);

          _defineProperty(this, "_request_server_info_time", null);

          _defineProperty(this, "_status", void 0);

          msgEventMgr.addEventListener(Protocol.Login.identify, this.loginCheck.bind(this));
          msgEventMgr.addEventListener(Protocol.Login.login, this.loginHandler.bind(this));
          gameMgr.addSlowTick(this.slowTickHandler.bind(this));
        }

        loginCheck(data) {
          let resultCode = data.code;

          if (resultCode == 0) {
            let model = G.getModel(ModelLogin);

            if (model && model.getEnterGame()) {
              socketMgr.send(Protocol.Login.login);
            }
          }
        }

        loginHandler(data) {
          let resultCode = data.code;

          if (resultCode == 0) {
            let model = G.getModel(ModelLogin);

            if (model && model.getEnterGame()) {
              socketMgr.sendInnerMsg(Protocol.Inner.ReloginSuccess);
            }
          }
        }

        onSocketChange(event) {
          if (event.type == "close") {
            if (event.code == 4888) {
              return;
            }

            let msg = event.reason;

            if (msg == "") {
              msg = "与战车失去联系，请指挥官检查网络再尝试。";
            }

            this.netWorkError(msg);
            socketMgr.sendInnerMsg(Protocol.Inner.FightPause);
          } else if (event.type == "open") {
            if (this._reconnect) {
              this.relogin();
              socketMgr.sendInnerMsg(Protocol.Inner.FightResume);
            }
          }

          this._status = event.type;
        } // 返回登录界面


        redirectLoginView() {
          gameMgr.reRun();
        } // 重新链接


        socketReconnect() {
          this._reconnect = true;
          socketMgr.reConnect();
        }

        relogin() {
          let model = G.getModel(ModelLogin);

          if (model && !model.getEnterGame()) {
            return;
          }

          let loginData = model.getLoginData();
          let deviceInfo = gameMgr.getDeviceInfo();
          socketMgr.send(Protocol.Login.identify, {
            user_id: loginData.user_id,
            user_key: loginData.user_key,
            channel_key: GameConfig,
            device_id: deviceInfo.IMEI
          });
        }

        netWorkError(msg) {
          if (msg == "" || msg == undefined) {
            msg = "与战车失去联系，请指挥官检查网络再尝试。";
          }

          let args = {
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
          G.showDoubleBtnDialog(args);
        } // 请求更新更新服务器时间


        requestServerInfo() {
          if (this._status != "open") {
            return;
          }

          let model = G.getModel(ModelLogin);

          if (model && !model.getEnterGame()) {
            return;
          }

          this._request_server_info_time = this._request_server_info_time || new Date().getTime();
          let now = new Date().getTime();
          let spaceTime = Math.abs(now - this._request_server_info_time); // -- 20s同步一次

          if (spaceTime < 20000) {
            return;
          }

          this._request_server_info_time = now;
          socketMgr.send(Protocol.Server.game_info);
        }

        slowTickHandler(dt) {
          this.requestServerInfo();
        }

        clear() {
          netStateMgr = exports('netStateMgr', null);
        }

      } // ()();


      let netStateMgr = exports('netStateMgr', (() => {
        return NetStateMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GeneralIconShowComp.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, Component, find;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
      find = module.find;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "de895dv6j9LWZ/6lRtEWxdT", "GeneralIconShowComp", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = NewComponent
       * DateTime = Thu Mar 10 2022 16:22:35 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = NewComponent.ts
       * FileBasenameNoExtension = NewComponent
       * URL = db://assets/scripts/app/views/formation/NewComponent.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let GeneralIconShowComp = exports('GeneralIconShowComp', (_dec = ccclass('NewComponent'), _dec(_class = (_temp = class GeneralIconShowComp extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_isSel", void 0);

          _defineProperty(this, "_isShowSelIcon", void 0);
        }

        get isSel() {
          return this._isSel;
        }

        set isSel(value) {
          this._isSel = value;
        }

        get isShowSelIcon() {
          return this._isShowSelIcon;
        }

        set isShowSelIcon(value) {
          this._isShowSelIcon = value;
          let selIcon = find("board/gou", this.node);
          selIcon.active = value;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/define.ts", ['cc', './ShowBackgroundMgr.ts', './ViewProtocol.ts', './Protocol.ts', './ModelEnum.ts'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('ShowBackgroundMgr', module.ShowBackgroundMgr);
    }, function (module) {
      exports('ViewProtocol', module.ViewProtocol);
    }, function (module) {
      exports('Protocol', module.Protocol);
    }, function (module) {
      exports('ModelEnum', module.ModelEnum);
    }],
    execute: function () {
      cclegacy._RF.push({}, "e32b2UcusJOTKWfYYV30QXx", "define", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DataBase.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, error, log, resources, ResourcesLoader;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      error = module.error;
      log = module.log;
      resources = module.resources;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e3b96F0AQ5AaLuebTpE3n79", "DataBase", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-03 08:54:10
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-06 14:47:17
       * @Description: file content
       */


      class DataBase {
        // 配置表handle name
        // 配置表文件名
        // 多语言解析器
        // 缓存起来(key:namekey,value:配置表内容) 例如:hero_01.json,filename:hero_,namekey:01
        constructor(dataHandlerName, fileName, parser) {
          _defineProperty(this, "_dataHandlerName", "");

          _defineProperty(this, "_fileName", "");

          _defineProperty(this, "_parser", null);

          _defineProperty(this, "_data", new Map());

          this._dataHandlerName = dataHandlerName;
          this._fileName = fileName;
          this._parser = parser;
        } // 加载


        loadDataWithNameKey(namekey, func) {
          this._parseFileName(namekey, func);
        }

        getData(namekey = "") {
          namekey = namekey.toString();

          if (this._data.has(namekey)) {
            return this._data.get(namekey);
          }

          return error("Can't Find Json File:", this._fileName + namekey);
        }

        delData(namekey) {
          let dataHandlerName = this._fileName + namekey;

          if (this._data.has(dataHandlerName)) {
            this._data.delete(dataHandlerName);
          }
        }

        getAllData() {
          return this._data;
        }

        showAll() {
          log(this._data);
        }

        _parseFileName(namekey, func) {
          // filename = genral_(this._fileName) + 1(namekey) 
          let fileName = this._fileName + namekey;

          this._loadFile(fileName, namekey, func);
        } // 加载json


        _loadFile(fileName, namekey, func) {
          ResourcesLoader.load(fileName, jsonData => {
            if (!jsonData) {
              func(false);
              return;
            }

            let jsonAsset = jsonData;
            let data = jsonAsset.json;

            if (this._parser) {
              data = this._parser.parse(data, this._dataHandlerName, namekey);
            }

            this._data.set(namekey.toString(), data);

            if (func) {
              func(true);
            }

            resources.release(fileName);
          });
        }

      }

      exports('DataBase', DataBase);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionAddPrefab.ts", ['cc', './ResourcesLoader.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts', './ActionBase.ts', './EffectBase.ts', './BloodEffect.ts', './Effect.ts', './Action.ts'], function (exports) {
  'use strict';

  var cclegacy, tween, instantiate, ResourcesLoader, FightEvent, FightConstant, fightEventMgr, ActionBase, EffectBase, BloodEffect;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      tween = module.tween;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      FightEvent = module.FightEvent;
    }, function (module) {
      FightConstant = module.FightConstant;
    }, function (module) {
      fightEventMgr = module.fightEventMgr;
    }, function (module) {
      ActionBase = module.ActionBase;
    }, function (module) {
      EffectBase = module.EffectBase;
    }, function (module) {
      BloodEffect = module.BloodEffect;
    }, null, null],
    execute: function () {
      cclegacy._RF.push({}, "e42e7TL9gdBN7neslfmjXFH", "ActionAddPrefab", undefined);

      class ActionAddPrefab extends ActionBase {
        /**
         * 
         * @param own 移动节点
         * @param duration 持续时间
         */
        add(data) {
          let animCfg = data.animCfg;
          let url = animCfg.params[0];
          return tween().call(() => {
            ResourcesLoader.load(url, prefab => {
              let node = instantiate(prefab);

              this._customSetting(data, node);
            });
          });
        }

        _customSetting(data, node, startCallback, endcallback) {
          let animCfg = data.animCfg;
          let name = animCfg.layer;
          let tar = data.target;
          let com = null;

          switch (name) {
            case "BLOOD":
              let args = {
                PrefabNode: node,
                Data: data
              };
              com = node.getComponent(BloodEffect);
              fightEventMgr.send(new FightEvent(FightConstant.FightEvent.Blood_Change, args));
              break;

            case "ROLE":
              com = node.getComponent(EffectBase);
              tar.addEffectFont(node);
              break;
          }

          com.setStartCallback(() => {
            if (startCallback) {
              startCallback();
            }
          });
          com.setEndCallback(() => {
            if (endcallback) {
              endcallback();
            }

            node.removeFromParent();
            node.destroy();
            node = null;
          });
        }

      }

      exports('ActionAddPrefab', ActionAddPrefab);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BloodLayer.ts", ['cc', './FightLayerBase.ts', './BloodEffect.ts', './Effect.ts'], function (exports) {
  'use strict';

  var cclegacy, FightLayerBase, BloodEffect;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      FightLayerBase = module.FightLayerBase;
    }, function (module) {
      BloodEffect = module.BloodEffect;
    }, null],
    execute: function () {
      cclegacy._RF.push({}, "e50f9PNWvVNfbvKkuMY/IhQ", "BloodLayer", undefined);

      class BloodLayer extends FightLayerBase {
        init() {}
        /**
         * 
         * @param effect 特效的节点
         */


        show(effect) {
          this.node.addChild(effect);
          let com = effect.getComponent(BloodEffect);
          com.show();
        }

      }

      exports('BloodLayer', BloodLayer);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioEffect.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './ResourcesLoader.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, _decorator, AudioSource, AudioClip, ResourcesLoader;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioSource = module.AudioSource;
      AudioClip = module.AudioClip;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }],
    execute: function () {
      var _dec, _class, _temp;

      cclegacy._RF.push({}, "e52d2ysY1BEbpcT2Cz0Wwss", "AudioEffect", undefined);

      const {
        ccclass,
        menu
      } = _decorator;
      /**
       * 注：用playOneShot播放的音乐效果，在播放期间暂时没办法即时关闭音乐
       */

      /** 游戏音效 */

      let AudioEffect = exports('AudioEffect', (_dec = ccclass('AudioEffect'), _dec(_class = (_temp = class AudioEffect extends AudioSource {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "effects", new Map());
        }

        load(url, callback) {
          ResourcesLoader.load(url, data => {
            this.effects.set(url, data);
            this.playOneShot(data, this.volume);
            callback && callback();
          }, AudioClip);
        }

        release() {
          for (let key in this.effects) {
            ResourcesLoader.release(key);
          }

          this.effects.clear();
        }

      }, _temp)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ViewProtocol.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('ViewProtocol', void 0);

      cclegacy._RF.push({}, "e5fdaRo0XRBaa6zOadhecxH", "ViewProtocol", undefined);

      let ViewProtocol;

      (function (ViewProtocol) {
        ViewProtocol[ViewProtocol["NoticeView"] = 0] = "NoticeView";
        ViewProtocol[ViewProtocol["LoginLayer"] = 1] = "LoginLayer";
        ViewProtocol[ViewProtocol["LoginAccountLayer"] = 2] = "LoginAccountLayer";
        ViewProtocol[ViewProtocol["DoubleBtnDialog"] = 3] = "DoubleBtnDialog";
        ViewProtocol[ViewProtocol["Tips"] = 4] = "Tips";
        ViewProtocol[ViewProtocol["PreviewReward"] = 5] = "PreviewReward";
        ViewProtocol[ViewProtocol["MainCityLayer"] = 6] = "MainCityLayer";
        ViewProtocol[ViewProtocol["FightMainLayer"] = 7] = "FightMainLayer";
        ViewProtocol[ViewProtocol["FightFormation"] = 8] = "FightFormation";
        ViewProtocol[ViewProtocol["FormationView"] = 9] = "FormationView";
        ViewProtocol[ViewProtocol["ResLoadingLayer"] = 10] = "ResLoadingLayer";
        ViewProtocol[ViewProtocol["TransLoadingLayer"] = 11] = "TransLoadingLayer";
        ViewProtocol[ViewProtocol["UserAgreementLayer"] = 12] = "UserAgreementLayer";
        ViewProtocol[ViewProtocol["PrivacyPolicyLayer"] = 13] = "PrivacyPolicyLayer";
        ViewProtocol[ViewProtocol["ChatLayer"] = 14] = "ChatLayer";
      })(ViewProtocol || (ViewProtocol = exports('ViewProtocol', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ActionOptionPanel.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy, Component, _decorator;

  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Component = module.Component;
      _decorator = module._decorator;
    }],
    execute: function () {
      var _dec, _class;

      cclegacy._RF.push({}, "e8addAYC+VEr4y/qQUPQwCK", "ActionOptionPanel", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = ActionOptionPanel
       * DateTime = Wed Mar 09 2022 14:30:02 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = ActionOptionPanel.ts
       * FileBasenameNoExtension = ActionOptionPanel
       * URL = db://assets/skill_eitor/ActionOptionPanel.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let ActionOptionPanel = exports('ActionOptionPanel', (_dec = ccclass('ActionOptionPanel'), _dec(_class = class ActionOptionPanel extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TableContentLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './functions.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Node, Widget, widgetManager, setNodeVisible;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      Widget = module.Widget;
      widgetManager = module.widgetManager;
    }, function (module) {
      setNodeVisible = module.setNodeVisible;
    }],
    execute: function () {
      cclegacy._RF.push({}, "e9105NvzlpH4JG6FI1QIgWR", "TableContentLayer", undefined);
      /*
       * @Author: Gino
       * @Date: 2020-09-21 20:08:11
       * @LastEditTime: 2022-03-05 15:12:00
       * @LastEditors: liuguoqing
       */


      class TableContentLayer extends Node {
        // 构造函数
        constructor() {
          super();

          _defineProperty(this, "_contentLayerMap", void 0);

          _defineProperty(this, "_displayLayer", void 0);

          this._contentLayerMap = new Map(); //全屏

          let widget = this.addComponent(Widget);
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0;
        }

        add(layer, key) {
          if (key == null) {
            key = layer.name;
          }

          this._contentLayerMap.set(key, layer);

          this.addChild(layer);

          if (this._displayLayer == null) {
            this._displayLayer = layer;
          }
        }

        findByKey(key) {
          return this._contentLayerMap.get(key);
        }

        switch(key) {
          let layer = this._contentLayerMap.get(key);

          if (layer != null) {
            this._displayLayer = layer;
          }
        }

        hide() {
          this._contentLayerMap.forEach(layer => {
            setNodeVisible(layer, false);
          });
        }

        show() {
          if (this._displayLayer == null) {
            return;
          }

          this._contentLayerMap.forEach(layer => {
            setNodeVisible(layer, false);
            layer.setSiblingIndex(0);
          }); // this._displayLayer.opacity = 255;
          // this._displayLayer.zIndex = 10;


          setNodeVisible(this._displayLayer, true);

          this._displayLayer.setSiblingIndex(10);
        }

        clearAll() {
          this._contentLayerMap.forEach(layer => {
            layer.removeFromParent();
            layer.destroy();
          });

          this._contentLayerMap.clear();

          this._displayLayer = null;
        }

        getDisplayLayer() {
          return this._displayLayer;
        }

        isEmpty() {
          if (!this._contentLayerMap || this._contentLayerMap.size == 0) {
            return true;
          }

          return false;
        }

      }

      exports('TableContentLayer', TableContentLayer);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Protocol.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('Protocol', void 0);

      cclegacy._RF.push({}, "ebfa9WTbL5J2J4irTDhmYdl", "Protocol", undefined);
      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 15:20:53
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-04 08:55:39
       * @Description: file content
       */


      let Protocol;

      (function (_Protocol) {
        let Login;

        (function (Login) {
          Login[Login["identify"] = 1] = "identify";
          Login[Login["login"] = 2] = "login";
        })(Login || (Login = {}));

        _Protocol.Login = Login;
        let Server;

        (function (Server) {
          Server[Server["game_info"] = 10000] = "game_info";
        })(Server || (Server = {}));

        _Protocol.Server = Server;
        let Inner;

        (function (Inner) {
          Inner[Inner["ReloginSuccess"] = 0] = "ReloginSuccess";
          Inner[Inner["FightPause"] = 1] = "FightPause";
          Inner[Inner["FightResume"] = 2] = "FightResume";
          Inner[Inner["CloseNoticeView"] = 3] = "CloseNoticeView";
          Inner[Inner["SelectServer"] = 4] = "SelectServer";
          Inner[Inner["SetAnimationSpeed"] = 5] = "SetAnimationSpeed";
        })(Inner || (Inner = {}));

        _Protocol.Inner = Inner;
      })(Protocol || (Protocol = exports('Protocol', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/ModelRegisterMgr.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './Singleton.ts', './GameMgr.ts'], function (exports) {
  'use strict';

  var _defineProperty, cclegacy, Singleton, gameMgr;

  return {
    setters: [function (module) {
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Singleton = module.Singleton;
    }, function (module) {
      gameMgr = module.gameMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ed2b3whtCxJFbkv/ksIJbXc", "ModelRegisterMgr", undefined);

      class ModelRegisterMgr extends Singleton {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "ModelType", void 0);
        }

        loadAllModel() {
          let gmr = gameMgr;

          for (const key in this.ModelType) {
            if (Object.prototype.hasOwnProperty.call(this.ModelType, key)) {
              const model = this.ModelType[key];
              gmr.registerModel(model);
            }
          }
        }

        clear() {
          modelRegisterMgr = exports('modelRegisterMgr', null);
        }

      }

      exports('ModelRegisterMgr', ModelRegisterMgr); // ()();

      let modelRegisterMgr = exports('modelRegisterMgr', (() => {
        return ModelRegisterMgr.getInstance();
      })());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MainCityLayer.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './LayerBase.ts', './ViewRegisterMgr.ts', './SceneTriggerMgr.ts', './SceneMgr.ts', './AudioManager.ts', './MulitMoveingBgs.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _defineProperty, cclegacy, Node, _decorator, log, v2, LayerBase, viewRegisterMgr, sceneTriggerMgr, sceneMgr, audioMgr, MulitMoveingBgs;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _defineProperty = module.defineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      _decorator = module._decorator;
      log = module.log;
      v2 = module.v2;
    }, function (module) {
      LayerBase = module.LayerBase;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }, function (module) {
      sceneTriggerMgr = module.sceneTriggerMgr;
    }, function (module) {
      sceneMgr = module.sceneMgr;
    }, function (module) {
      audioMgr = module.audioMgr;
    }, function (module) {
      MulitMoveingBgs = module.MulitMoveingBgs;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "ed88bJhf1BE87llYZ1cuyC7", "MainCityLayer", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = MainCityLayer
       * DateTime = Tue Mar 08 2022 14:26:57 GMT+0800 (中国标准时间)
       * Author = Steven_Greeard
       * FileBasename = MainCityLayer.ts
       * FileBasenameNoExtension = MainCityLayer
       * URL = db://assets/scripts/app/views/maincity/MainCityLayer.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let MainCityLayer = exports('MainCityLayer', (_dec = ccclass('MainCityLayer'), _dec2 = property(MulitMoveingBgs), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class MainCityLayer extends LayerBase {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "mulitBgComp", _descriptor, this);

          _initializerDefineProperty(this, "mainCityLayer", _descriptor2, this);

          _defineProperty(this, "_deltaPos", void 0);

          _defineProperty(this, "_bgDInertiaMove", void 0);
        }

        onLoad() {
          //触发器写在onLoad，否则切换刚加入主场景的时候，start还没开始执行
          sceneTriggerMgr.addTriggrt(viewRegisterMgr.getViewInfo("maincity", "MainCityLayer").System, this.onTrigger.bind(this), 1);
        }

        start() {
          // [3]
          audioMgr.playMusic("maincity/avs/bgm_liyuan");

          this._initBgTouch(); //全局事件监听


          sceneMgr.addMainEventTrigger();
        }

        onTrigger() {
          log("main city trigger");
        }

        _initBgTouch() {
          // this._bgmain = find("bg/mainBg",this.node.parent)
          this.mainCityLayer.on(Node.EventType.TOUCH_START, this.onBgTouchStart.bind(this));
          this.mainCityLayer.on(Node.EventType.TOUCH_MOVE, this.onBgTouchMove.bind(this));
          this.mainCityLayer.on(Node.EventType.TOUCH_END, this.onBgTouchEnd.bind(this)); // this._bgDInertiaMove = this._bgmain.addComponent(DInertiaMove)
        }

        onBgTouchStart() {
          this._deltaPos = null;
        }

        onBgTouchMove(event) {
          this._deltaPos = event.getDelta();

          this._deltaPos.multiplyScalar(1.5);

          this._deltaPos = v2(this._deltaPos.x, 0);
          log(this._deltaPos);
          this.mulitBgComp.move(this._deltaPos, false);
        }

        onBgTouchEnd() {
          if (!this._deltaPos) {
            return;
          }

          this.mulitBgComp.move(this._deltaPos.multiplyScalar(3), true);
        }

        update(deltaTime) {// [4]
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mulitBgComp", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mainCityLayer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoleSpineFactory.ts", ['cc', './ResourcesLoader.ts', './ViewRegisterMgr.ts'], function (exports) {
  'use strict';

  var cclegacy, Prefab, instantiate, ResourcesLoader, viewRegisterMgr;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
    }, function (module) {
      ResourcesLoader = module.ResourcesLoader;
    }, function (module) {
      viewRegisterMgr = module.viewRegisterMgr;
    }],
    execute: function () {
      cclegacy._RF.push({}, "eee15z9hPZLMZSX7XRm2a/r", "RoleSpineFactory", undefined); // 工厂方法


      const factory = (cls, node) => new cls(node);

      class RoleSpineFactory {
        /**
         * 
         * @param cls 类型 HeroSpineNode or MonsterSpineNode 继承SpineNodeBase
         * @param id number
         * @returns 异步函数
         * @example 
         * onLoad(){
         *    this._loadAttackers();
         * }
         * 
         * private async _loadAttackers(){
         *     let node = await RoleSpineFactory.create(HeroSpineNode,heroId);  
         *     this.node.addChild(node); 
         * }
         */
        static async create(cls, id) {
          let node = await RoleSpineFactory._loadPromise(id);
          return factory(cls, node);
        }

        static async _loadPromise(id) {
          let info = viewRegisterMgr.getViewInfo("hero", "HeroSpinePrefab");
          let file = info.Path + "hero_" + id.toString();
          let prefab = await ResourcesLoader.loadPromise(file, Prefab);
          let spineNode = instantiate(prefab);
          return spineNode;
        }

      }

      exports('RoleSpineFactory', RoleSpineFactory);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/model.ts", ['cc', './ModelLogin.ts'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      exports('ModelLogin', module.ModelLogin);
    }],
    execute: function () {
      cclegacy._RF.push({}, "f0399p/vP5Mm4piqmVizOYY", "model", undefined);

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/MulitMoveingBgs.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc', './functions.ts', './DInertiaMove.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Node, CCFloat, _decorator, Component, v3, posAdd, DInertiaMove;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Node = module.Node;
      CCFloat = module.CCFloat;
      _decorator = module._decorator;
      Component = module.Component;
      v3 = module.v3;
    }, function (module) {
      posAdd = module.posAdd;
    }, function (module) {
      DInertiaMove = module.DInertiaMove;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _dec4, _dec5, _dec6, _dec7, _dec8, _class4, _class5, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp2;

      cclegacy._RF.push({}, "f76c4bSHmJHE6S/Ii810Y7Z", "MulitMoveingBgs", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = MulitMoveingBgs
       * DateTime = Mon Mar 14 2022 17:34:40 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = MulitMoveingBgs.ts
       * FileBasenameNoExtension = MulitMoveingBgs
       * URL = db://assets/scripts/app/views/common/MulitMoveingBgs.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let BgTarget = (_dec = ccclass('BgTarget'), _dec2 = property(Node), _dec3 = property(CCFloat), _dec(_class = (_class2 = (_temp = class BgTarget {
        constructor() {
          _initializerDefineProperty(this, "bgNode", _descriptor, this);

          _initializerDefineProperty(this, "moveScale", _descriptor2, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "moveScale", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class);
      let MulitMoveingBgs = exports('MulitMoveingBgs', (_dec4 = ccclass('MulitMoveingBgs'), _dec5 = property({
        type: [BgTarget]
      }), _dec6 = property(Node), _dec7 = property(CCFloat), _dec8 = property(CCFloat), _dec4(_class4 = (_class5 = (_temp2 = class MulitMoveingBgs extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "subBg", _descriptor3, this);

          _initializerDefineProperty(this, "mainBg", _descriptor4, this);

          _initializerDefineProperty(this, "minX", _descriptor5, this);

          _initializerDefineProperty(this, "maxX", _descriptor6, this);
        }

        start() {
          this.mainBg.addComponent(DInertiaMove).onStop = this.onMainBgStop.bind(this);
          this.subBg.forEach(element => {
            element.bgNode.addComponent(DInertiaMove);
          });
        }

        onMainBgStop() {
          this.subBg.forEach(element => {
            element.bgNode.getComponent(DInertiaMove).stop();
          });
        }

        move(byPos, isDInertia) {
          this.stop(); // 惯性移动

          if (isDInertia) {
            let dInertiaMoveComp = this.mainBg.getComponent(DInertiaMove);
            dInertiaMoveComp.move(byPos, this.minX, this.maxX); // //子背景惯性移动

            this.subBg.forEach(element => {
              element.bgNode.getComponent(DInertiaMove).move(byPos.clone().multiplyScalar(element.moveScale));
            });
          } else {
            // 非惯性移动
            //判断结束
            let newPos = this.mainBg.position.clone().add(v3(byPos.x, byPos.y));

            if (this.minX && newPos.x < this.minX) {
              newPos.x = this.minX;
            }

            if (this.maxX && newPos.x > this.maxX) {
              newPos.x = this.maxX;
            }

            let dis = newPos.subtract(this.mainBg.position).length();

            if (dis != 0) {
              posAdd(this.mainBg, byPos, this.minX, this.maxX);
              this.subBg.forEach(element => {
                posAdd(element.bgNode, byPos.multiplyScalar(element.moveScale));
              });
            }
          }
        }

        stop() {
          this.mainBg.addComponent(DInertiaMove).stop();
        }

      }, _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "subBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "mainBg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "minX", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "maxX", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class5)) || _class4));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/skill_edirot.ts", ['./_rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, cclegacy, Prefab, Node, _decorator, Component, log, instantiate;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
    }, function (module) {
      cclegacy = module.cclegacy;
      Prefab = module.Prefab;
      Node = module.Node;
      _decorator = module._decorator;
      Component = module.Component;
      log = module.log;
      instantiate = module.instantiate;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp;

      cclegacy._RF.push({}, "f81337CkWJKqqFRBk6sGF+0", "skill_edirot", undefined);

      const {
        ccclass,
        property
      } = _decorator;
      /**
       * Predefined variables
       * Name = skill_edirot
       * DateTime = Wed Mar 09 2022 11:18:57 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = skill_edirot.ts
       * FileBasenameNoExtension = skill_edirot
       * URL = db://assets/scripts/skillEditor/skill_edirot.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      let skill_edirot = exports('skill_edirot', (_dec = ccclass('skill_edirot'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class skill_edirot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "timeLinePrefab", _descriptor, this);

          _initializerDefineProperty(this, "timeLineContainer", _descriptor2, this);
        } // @property(cc.Prefab)
        // playScene: cc.Prefab


        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onAddTimeLine() {
          log("add time line..");
          var timeLineNew = instantiate(this.timeLinePrefab);
          this.timeLineContainer.addChild(timeLineNew); // var timeLineComp = timeLineNew.getComponent(TimeLine)
          // if (data == "sceneTimeLine") {
          //     timeLineComp.setType(define.TimeLineType_Scene)
          // }
          // else if (data == "roleTimeLine") {
          //     timeLineComp.setType(define.TimeLineType_Role)
          // }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeLinePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeLineContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./SingletonMgr.ts', './Singleton.ts', './EventMgr.ts', './ModelBase.ts', './ShowBackgroundMgr.ts', './ErrorCode.ts', './GameMgr.ts', './Message.ts', './NetLoadingMgr.ts', './ResourcesLoader.ts', './ViewCreatorBase.ts', './ViewProtocol.ts', './Tips.ts', './Creator5.ts', './Creator.ts', './Creator6.ts', './Protocol.ts', './ModelEnum.ts', './define.ts', './Creator2.ts', './ViewCreatorManager.ts', './ComponentBase.ts', './UIWidget.ts', './LayerBase.ts', './FightEvent.ts', './FightConstant.ts', './FightEventMgr.ts', './YYNamespace.ts', './RoleSpineFactory.ts', './FightBloodUI.ts', './SpineComponentBase.ts', './SpineNodeBase.ts', './FightDataBase.ts', './FightData.ts', './FightDataMgr.ts', './FightLayerBase.ts', './FormationView.ts', './FomationLayer.ts', './RoleLayer.ts', './ActionBase.ts', './ActionDelay.ts', './ActionGoBack.ts', './ActionMove.ts', './ActionSpineAnim.ts', './AcitonJump.ts', './EffectBase.ts', './BloodEffect.ts', './Effect.ts', './ActionAddPrefab.ts', './Action.ts', './DataBase.ts', './DataMgr.ts', './GlobalFunction.ts', './AttackActionMgr.ts', './ResultActionMgr.ts', './FightActionMgr.ts', './BloodLayer.ts', './FightBloodMgr.ts', './FightController.ts', './TopEffectLayer.ts', './FightMainWorld.ts', './FightPlayer.ts', './FightMainLayer.ts', './Creator8.ts', './Creator4.ts', './Creator7.ts', './Creator3.ts', './ViewRegisterMgr.ts', './MainEventTrigger.ts', './functions.ts', './TouchEffect.ts', './TouchMain.ts', './TableContentLayer.ts', './TableLayer.ts', './SceneTriggerMgr.ts', './SceneMgr.ts', './MainCityUI.ts', './TranslateMgr.ts', './Md5.ts', './DInertiaMove.ts', './ResLoadingLayer.ts', './DataParserBase.ts', './EncryptUtil.ts', './Storage.ts', './FightConst.ts', './ActionTypeSelItem.ts', './ActionTypeSelPanel.ts', './TimeSetPanel.ts', './TimeLineItem.ts', './TimeLine.ts', './ModelLogin.ts', './model.ts', './GameConfig.ts', './NetStateMgr.ts', './SocketMgr.ts', './AudioEffect.ts', './AudioMusic.ts', './AudioManager.ts', './NoticeView.ts', './ChatMsgItemComp.ts', './Test_Parser.ts', './DataRegisterMgr.ts', './ModelRegisterMgr.ts', './EnterApp.ts', './HotUpdate.ts', './ListView.ts', './UserAgreementAndPrivacyPolicy.ts', './DoubleBtnDialog.ts', './FightEventDataType.ts', './ChatMsgItemNode.ts', './ChatScrollView.ts', './ActionColor.ts', './LoginLayer.ts', './TransLoadingLayer.ts', './HttpMgr.ts', './LoginAccountLayer.ts', './TranslateLabel.ts', './GeneralIconShowComp.ts', './FightFormation.ts', './Jitter.ts', './PrototypeExtension.ts', './CloseButton.ts', './Launch.ts', './MutableForwardIterator.ts', './LoadingIndicator.ts', './FightMainUI.ts', './Logger.ts', './FightEffectMgr.ts', './PreReward.ts', './ConfigType.ts', './ActionOptionPanel.ts', './MulitMoveingBgs.ts', './MainCityLayer.ts', './skill_edirot.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map