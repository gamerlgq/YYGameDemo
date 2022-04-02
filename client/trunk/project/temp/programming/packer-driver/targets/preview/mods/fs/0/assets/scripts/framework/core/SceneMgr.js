System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, find, instantiate, log, Node, Widget, widgetManager, ShowBackgroundMgr, viewRegisterMgr, MainEventTrigger, TouchMain, Singleton, ResourcesLoader, viewEventMgr, Message, TableLayer, setNodeVisible, sceneTriggerMgr, SceneMgr, _crd, sceneMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfShowBackgroundMgr(extras) {
    _reporterNs.report("ShowBackgroundMgr", "../../app/define/ShowBackgroundMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewRegisterMgr(extras) {
    _reporterNs.report("viewRegisterMgr", "../../app/define/ViewRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainEventTrigger(extras) {
    _reporterNs.report("MainEventTrigger", "../../app/views/common/MainEventTrigger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTouchMain(extras) {
    _reporterNs.report("TouchMain", "../../app/views/common/TouchMain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourcesLoader(extras) {
    _reporterNs.report("ResourcesLoader", "../data/ResourcesLoader", _context.meta, extras);
  }

  function _reportPossibleCrUseOfviewEventMgr(extras) {
    _reporterNs.report("viewEventMgr", "../listener/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../listener/Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTableLayer(extras) {
    _reporterNs.report("TableLayer", "../ui/TableLayer", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetNodeVisible(extras) {
    _reporterNs.report("setNodeVisible", "../utils/functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneTriggerMgr(extras) {
    _reporterNs.report("sceneTriggerMgr", "../utils/SceneTriggerMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      instantiate = _cc.instantiate;
      log = _cc.log;
      Node = _cc.Node;
      Widget = _cc.Widget;
      widgetManager = _cc.widgetManager;
    }, function (_unresolved_2) {
      ShowBackgroundMgr = _unresolved_2.ShowBackgroundMgr;
    }, function (_unresolved_3) {
      viewRegisterMgr = _unresolved_3.viewRegisterMgr;
    }, function (_unresolved_4) {
      MainEventTrigger = _unresolved_4.MainEventTrigger;
    }, function (_unresolved_5) {
      TouchMain = _unresolved_5.TouchMain;
    }, function (_unresolved_6) {
      Singleton = _unresolved_6.Singleton;
    }, function (_unresolved_7) {
      ResourcesLoader = _unresolved_7.ResourcesLoader;
    }, function (_unresolved_8) {
      viewEventMgr = _unresolved_8.viewEventMgr;
    }, function (_unresolved_9) {
      Message = _unresolved_9.Message;
    }, function (_unresolved_10) {
      TableLayer = _unresolved_10.TableLayer;
    }, function (_unresolved_11) {
      setNodeVisible = _unresolved_11.setNodeVisible;
    }, function (_unresolved_12) {
      sceneTriggerMgr = _unresolved_12.sceneTriggerMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3f41zRx3hHT74FkAX9L+1m", "SceneMgr", undefined);

      // import { functions, ShowBackgroundMgr, Message, TableLayer, viewEventMgr } from "../yy";
      SceneMgr = class SceneMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
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

          _export("sceneMgr", sceneMgr = null);
        }

        createNode(flag, parent) {
          var node = new Node();
          node.name = flag;
          var widget = node.addComponent(Widget); // let rootNode = find("Canvas");

          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          widget.alignFlags = widgetManager.AlignFlags.HORIZONTAL | widgetManager.AlignFlags.VERTICAL; // widget!.target = rootNode;

          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.top = 0; // widget.target = rootNode

          var viewRoot = find("Canvas/views");
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
          this._layerMap.get("TouchGroup").addComponent(_crd && TouchMain === void 0 ? (_reportPossibleCrUseOfTouchMain({
            error: Error()
          }), TouchMain) : TouchMain);
        }

        clearAllScence() {
          var layers = ["MainGroup", "TableGroup", "MainEventTrigger", "TransitionGroup", "NewGuideGroup", "DialogGroup", "SystemOpenGroup", "PreLoadingGroup", "TipsGroup", "NetLoading", "TouchGroup"];

          for (var index = 0; index < layers.length; index++) {
            var element = layers[index];

            var layer = this._layerMap.get(element);

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
          var layerList = this.getCurLayerList();

          for (var index = 0; index < layerList.length; index++) {
            var data = layerList[index];

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
          var curLayerList = this.updataCurLayerList();
          return curLayerList;
        }
        /**
         * @description:获取当前最高层
         * @param {null}
         * @return {Node}
         */


        getCurFrontLayer() {
          var SceneList = this.getCurLayerList();
          return SceneList[SceneList.length - 1];
        }
        /**
         * @description: 新建一个Table层 (三层)
         * @param {type}
         * @return {type}
         */


        pushNewTableLayer() {
          this._viewIndex += 1;
          var tableLayer = new (_crd && TableLayer === void 0 ? (_reportPossibleCrUseOfTableLayer({
            error: Error()
          }), TableLayer) : TableLayer)();
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
          var tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

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
          var tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer != null) {
            var isRemove = tableLayer.popSubContent();

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
          var tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer != null) {
            var isRemove = tableLayer.popSubContent();
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
          var tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];
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
          var tableLayer = this._tableLayerStack.pop();

          if (tableLayer) {
            //移除引用
            var contentLayer = tableLayer.getContentLayer();

            this._decResRef(contentLayer.name);

            tableLayer.removeFromParent();
            tableLayer.destroy();

            this._hideTableLayer(); //场景触发


            (_crd && sceneTriggerMgr === void 0 ? (_reportPossibleCrUseOfsceneTriggerMgr({
              error: Error()
            }), sceneTriggerMgr) : sceneTriggerMgr).check(); //检查内存释放

            if ((_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
              error: Error()
            }), ResourcesLoader) : ResourcesLoader).checkNeedToRelease()) {
              (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
                error: Error()
              }), ResourcesLoader) : ResourcesLoader).releaseUnusedAssets();
            }

            return true;
          }

          return false;
        }

        removeTableLayerWithName(pViewName, isContain) {
          var xdata = this.checkLayerWithName(pViewName);

          if (xdata[0] == false) {
            return;
          }

          var layerList = this.getCurLayerList();

          for (var index = layerList.length - 1; index >= 0; index--) {
            var data = layerList[index];

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
          var length = this._tableLayerStack.length;

          for (var index = 0; index < length; index++) {
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
          var tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer == null) {
            tableLayer = this.pushNewTableLayer();
          }

          var uiLayer = tableLayer.getUILayer();

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
          var tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer == null) {
            tableLayer = this.pushNewTableLayer();
          }

          var bgLayer = tableLayer.getBgLayer();

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
          this._layerMap.get("MainEventTrigger").addComponent(_crd && MainEventTrigger === void 0 ? (_reportPossibleCrUseOfMainEventTrigger({
            error: Error()
          }), MainEventTrigger) : MainEventTrigger);
        }
        /**
         * @description: 替换页卡内容层
         * @param {type}
         * @return {type}
         */


        replaceTableContent(layer, layerName) {
          var tableLayer = this._tableLayerStack[this._tableLayerStack.length - 1];

          if (tableLayer == null) {
            tableLayer = this.pushNewTableLayer();
          }

          var contentLayer = tableLayer.getContentLayer(); // 判断是否重复打开

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

          var contentLayer = tableLayer.getContentLayer();
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

          var contentLayer = tableLayer.getContentLayer();
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

          var mainLayer = this._layerMap.get("MainGroup");

          for (var i = 0; i < mainLayer.children.length; i++) {
            var c = mainLayer.children[i];
            c.removeFromParent();
            c.destroy();
          }

          layer.name = layerName || "";
          mainLayer.addChild(layer);

          this._clearAllResCount(); //主界面引用+1


          this._addResRef(layerName);

          (_crd && sceneTriggerMgr === void 0 ? (_reportPossibleCrUseOfsceneTriggerMgr({
            error: Error()
          }), sceneTriggerMgr) : sceneTriggerMgr).check(); // let newGuideModel = GameMgr.getInstance().getModel("ModelNewGuide");
          // if (newGuideModel) {
          //     newGuideModel.checkClearGuide();
          // }
        } //一个资源添加引用计数


        _addResRef(name) {
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).addResRef(name);
        } //删除一个资源引用计数


        _decResRef(name) {
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).decResRef(name);
        } //清除动态加载的引用


        _clearAllResCount() {
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).clearAllRef();
        }

        getNowMainLayer() {
          var mainLayer = this._layerMap.get("MainGroup");

          var layer = mainLayer.children[0];
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
          var children = this._layerMap.get("TransitionGroup").children;

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

        removeDialog(isAll) {
          if (isAll === void 0) {
            isAll = false;
          }

          var childrens = this._layerMap.get("DialogGroup").children;

          for (var index = 0; index < childrens.length; index++) {
            var c = childrens[index];
            c.removeFromParent();
            c.destroy();

            if (!isAll) {
              break;
            }
          }

          this._hideTableLayer();
        } //功能开启监听层


        setSystemOpenLayer(layer) {
          var systemOpenGroup = this._layerMap.get("SystemOpenGroup");

          for (var index = 0; index < systemOpenGroup.children.length; index++) {
            var element = systemOpenGroup.children[index];
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
          var group = this._layerMap.get("NewGuideGroup");

          for (var index = 0; index < group.children.length; index++) {
            var element = group.children[index];
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
          var group = this._layerMap.get("PreLoadingGroup");

          for (var index = 0; index < group.children.length; index++) {
            var element = group.children[index];
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
          var group = this._layerMap.get("TouchGroup");

          if (layer) {
            group.addChild(layer);
          }
        } // 获取所有触摸返回层


        getTouchGroupLayer() {
          var group = this._layerMap.get("TouchGroup");

          return group;
        }
        /**
         * @description: Table游戏层操作: 隐藏低层次的层
         * @param {type}
         * @return {type}
         */


        _hideTableLayer() {
          // 遍历所有子节点
          var nextCanVisible = 0;
          var isBreakOut = false;
          var LayerData = [];
          var showLayerName = "";
          var topLayerName = "";

          var dialogLayer = this._layerMap.get("DialogGroup");

          if (dialogLayer.children.length > 0) {
            if (topLayerName == "") {
              topLayerName = "DialogLayer";
            }

            showLayerName = "DialogLayer";
            LayerData.push({
              name: "DialogLayer",
              visiable: true
            });
          }

          var list = this._layerMap.get("TableGroup").children;

          for (var index = list.length - 1; index >= 0; index--) {
            var cellTable = list[index];
            var cellLayerName = cellTable.getLayerName();

            if (topLayerName == "") {
              topLayerName = cellLayerName;
            } // 有背景挡住，后面的都可以不显示


            if (isBreakOut) {
              // cellTable.opacity = 0;
              (_crd && setNodeVisible === void 0 ? (_reportPossibleCrUseOfsetNodeVisible({
                error: Error()
              }), setNodeVisible) : setNodeVisible)(cellTable, false);
              cellTable.setContentLayerVisible(false);
              LayerData.push({
                name: cellLayerName,
                visiable: false
              });
              continue;
            } // cellTable.opacity = 255;


            (_crd && setNodeVisible === void 0 ? (_reportPossibleCrUseOfsetNodeVisible({
              error: Error()
            }), setNodeVisible) : setNodeVisible)(cellTable, true);
            cellTable.setContentLayerVisible(true);
            nextCanVisible = 0;
            showLayerName = cellLayerName;
            LayerData.push({
              name: cellLayerName,
              visiable: true
            });
            var tableElementList = cellTable.children; //一个table层里面有4个子节点

            for (var k = 0; k < tableElementList.length; k++) {
              var tableElement = tableElementList[k]; // 检查是否有屏蔽下一层标志
              // if (this._skipHiddenBackground[tableElement.name]) {

              if ((_crd && ShowBackgroundMgr === void 0 ? (_reportPossibleCrUseOfShowBackgroundMgr({
                error: Error()
              }), ShowBackgroundMgr) : ShowBackgroundMgr).checkIsShowBlackground(tableElement.name)) {
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

          var mainLayer = this._layerMap.get("MainGroup");

          if (mainLayer.children.length > 0) {
            var mainLayerName = mainLayer.children[0].name;

            if (topLayerName == "") {
              topLayerName = mainLayerName;
            }

            if (nextCanVisible > 0 || list.length == 0) {
              // mainLayer.opacity = 255;
              (_crd && setNodeVisible === void 0 ? (_reportPossibleCrUseOfsetNodeVisible({
                error: Error()
              }), setNodeVisible) : setNodeVisible)(mainLayer, true);
              showLayerName = mainLayerName;
              LayerData.push({
                name: mainLayerName,
                visiable: true
              });
            } else {
              // mainLayer.opacity = 0;
              (_crd && setNodeVisible === void 0 ? (_reportPossibleCrUseOfsetNodeVisible({
                error: Error()
              }), setNodeVisible) : setNodeVisible)(mainLayer, false);
              LayerData.push({
                name: mainLayerName,
                visiable: false
              });
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
          var cellElementList = tableLayer.children;

          for (var index = 0; index < cellElementList.length; index++) {
            var cellElement = cellElementList[index];
            var cell = {};
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
          var curLayerList = [];

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
          var msg = new (_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message)(UiFlag, data);
          (_crd && viewEventMgr === void 0 ? (_reportPossibleCrUseOfviewEventMgr({
            error: Error()
          }), viewEventMgr) : viewEventMgr).dispatchEvent(msg);
        }
        /**
         * showNetLoading
         */


        showNetLoading(isShow) {
          var netloading = this._layerMap.get("NetLoading").children[0];

          if (netloading) {
            netloading.active = isShow;
            return;
          }

          var viewInfo = (_crd && viewRegisterMgr === void 0 ? (_reportPossibleCrUseOfviewRegisterMgr({
            error: Error()
          }), viewRegisterMgr) : viewRegisterMgr).getViewInfo("commonUI", "netloading");
          (_crd && ResourcesLoader === void 0 ? (_reportPossibleCrUseOfResourcesLoader({
            error: Error()
          }), ResourcesLoader) : ResourcesLoader).loadWithViewInfo(viewInfo, data => {
            var node = instantiate(data);
            node.active = isShow;

            this._layerMap.get("NetLoading").addChild(node);
          }, false);
        }

      };

      _export("sceneMgr", sceneMgr = (() => {
        return SceneMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SceneMgr.js.map