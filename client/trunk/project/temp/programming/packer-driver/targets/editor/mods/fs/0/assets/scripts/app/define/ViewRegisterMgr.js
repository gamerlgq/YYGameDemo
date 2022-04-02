System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Singleton, DialogCreator, LoginCreator, PreRewardCreator, MainCityCreator, ShowBackgroundMgr, viewCreatorMgr, FightCreator, FormationCreator, LoadingCreator, ChatCreator, G, ViewRegisterMgr, _crd, viewRegisterMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDialogCreator(extras) {
    _reporterNs.report("DialogCreator", "../views/dialog/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginCreator(extras) {
    _reporterNs.report("LoginCreator", "../views/login/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPreRewardCreator(extras) {
    _reporterNs.report("PreRewardCreator", "../views/pre_reward/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainCityCreator(extras) {
    _reporterNs.report("MainCityCreator", "../views/maincity/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowBackgroundMgr(extras) {
    _reporterNs.report("ShowBackgroundMgr", "./define", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewCreatorMgr(extras) {
    _reporterNs.report("viewCreatorMgr", "../../framework/ui/ViewCreatorManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightCreator(extras) {
    _reporterNs.report("FightCreator", "../views/fight/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFormationCreator(extras) {
    _reporterNs.report("FormationCreator", "../views/formation/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyy(extras) {
    _reporterNs.report("yy", "./YYNamespace", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewInfoType(extras) {
    _reporterNs.report("ViewInfoType", "./ConfigType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadingCreator(extras) {
    _reporterNs.report("LoadingCreator", "../views/loading/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatCreator(extras) {
    _reporterNs.report("ChatCreator", "../views/chat/Creator", _context.meta, extras);
  }

  function _reportPossibleCrUseOfG(extras) {
    _reporterNs.report("G", "../common/GlobalFunction", _context.meta, extras);
  }

  _export("ViewRegisterMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      DialogCreator = _unresolved_3.DialogCreator;
    }, function (_unresolved_4) {
      LoginCreator = _unresolved_4.LoginCreator;
    }, function (_unresolved_5) {
      PreRewardCreator = _unresolved_5.PreRewardCreator;
    }, function (_unresolved_6) {
      MainCityCreator = _unresolved_6.MainCityCreator;
    }, function (_unresolved_7) {
      ShowBackgroundMgr = _unresolved_7.ShowBackgroundMgr;
    }, function (_unresolved_8) {
      viewCreatorMgr = _unresolved_8.viewCreatorMgr;
    }, function (_unresolved_9) {
      FightCreator = _unresolved_9.FightCreator;
    }, function (_unresolved_10) {
      FormationCreator = _unresolved_10.FormationCreator;
    }, function (_unresolved_11) {
      LoadingCreator = _unresolved_11.LoadingCreator;
    }, function (_unresolved_12) {
      ChatCreator = _unresolved_12.default;
    }, function (_unresolved_13) {
      G = _unresolved_13.G;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9605843tQxNxaIPFoHnzltl", "ViewRegisterMgr", undefined);

      _export("ViewRegisterMgr", ViewRegisterMgr = class ViewRegisterMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
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
                "FightEditorUI": {
                  path: "fight/prefabs/changjing/fighteditorui"
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
                  path: "hero/prefabs/hero/hero_",
                  batch: [1, 3]
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

          _defineProperty(this, "Cretors", [_crd && LoginCreator === void 0 ? (_reportPossibleCrUseOfLoginCreator({
            error: Error()
          }), LoginCreator) : LoginCreator, _crd && DialogCreator === void 0 ? (_reportPossibleCrUseOfDialogCreator({
            error: Error()
          }), DialogCreator) : DialogCreator, _crd && PreRewardCreator === void 0 ? (_reportPossibleCrUseOfPreRewardCreator({
            error: Error()
          }), PreRewardCreator) : PreRewardCreator, _crd && MainCityCreator === void 0 ? (_reportPossibleCrUseOfMainCityCreator({
            error: Error()
          }), MainCityCreator) : MainCityCreator, _crd && FightCreator === void 0 ? (_reportPossibleCrUseOfFightCreator({
            error: Error()
          }), FightCreator) : FightCreator, _crd && FormationCreator === void 0 ? (_reportPossibleCrUseOfFormationCreator({
            error: Error()
          }), FormationCreator) : FormationCreator, _crd && LoadingCreator === void 0 ? (_reportPossibleCrUseOfLoadingCreator({
            error: Error()
          }), LoadingCreator) : LoadingCreator, _crd && ChatCreator === void 0 ? (_reportPossibleCrUseOfChatCreator({
            error: Error()
          }), ChatCreator) : ChatCreator]);

          Object.keys(this.ViewType).forEach(system => {
            // log("ViewRegisterMgr:ctor() system [ %s ]",system);
            let module = this.ViewType[system];
            Object.keys(module.prefab).forEach(view => {
              var _arr$isShowBg;

              let arr = module.prefab[view];
              let isHidden = (_arr$isShowBg = arr.isShowBg) !== null && _arr$isShowBg !== void 0 ? _arr$isShowBg : false; // log("ViewRegisterMgr:ctor() view [ %s ] [ %s ]",view,isHidden.toString());

              if (isHidden) {
                (_crd && ShowBackgroundMgr === void 0 ? (_reportPossibleCrUseOfShowBackgroundMgr({
                  error: Error()
                }), ShowBackgroundMgr) : ShowBackgroundMgr).regShowBackgroundView(view);
              }
            });
          });
        } // 在编辑器中右键添加resources下的预加载资源,自动保存到maincity/datas/preload.json文件中


        getMaincityPreloadList() {
          let list = new Array();
          let config = (_crd && G === void 0 ? (_reportPossibleCrUseOfG({
            error: Error()
          }), G) : G).getConfig("MaincityPreload");

          if (config) {
            const keys = Object.keys(config);
            keys.forEach(key => {
              let pair = new Array();
              list.push(key);
            });
          }

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
            (_crd && viewCreatorMgr === void 0 ? (_reportPossibleCrUseOfviewCreatorMgr({
              error: Error()
            }), viewCreatorMgr) : viewCreatorMgr).registeredCreator(new ctor());
          });
        }

        clear() {
          _export("viewRegisterMgr", viewRegisterMgr = null);
        }

      }); // ()();


      _export("viewRegisterMgr", viewRegisterMgr = (() => {
        return ViewRegisterMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ViewRegisterMgr.js.map