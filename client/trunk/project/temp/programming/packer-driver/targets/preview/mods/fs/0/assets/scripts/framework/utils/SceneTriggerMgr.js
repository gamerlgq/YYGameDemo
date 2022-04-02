System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, Singleton, sceneMgr, SceneTriggerMgr, _crd, sceneTriggerMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../core/SceneMgr", _context.meta, extras);
  }

  _export("SceneTriggerMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      sceneMgr = _unresolved_3.sceneMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a4fa0KBB6JCILfHfXfiKF4C", "SceneTriggerMgr", undefined);

      //  监听 使用范例
      //  @参数
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
      _export("SceneTriggerMgr", SceneTriggerMgr = class SceneTriggerMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
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
          var handle = "Trigger_" + this._listenerHandleIndex;

          this._listeners.get(pSceneName).push([handle, pHandler, pPriority]); // 按照优先级重新排序


          this._sortTriggerByPriority(pSceneName);

          return handle;
        } // 分发事件


        dispatchEvent(pSceneName) {
          if (this._listeners.get(pSceneName) == null) {
            return;
          }

          var delArray;

          for (var index = 0; index < this._listeners.get(pSceneName).length; index++) {
            var event = this._listeners.get(pSceneName)[index];

            var handle = event[0];
            var listener = event[1];
            log(" ==========  SceneTriggerMgr go   " + pSceneName + handle);
            var ret = listener(event, pSceneName);

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
            for (var _index = 0; _index < delArray.length; _index++) {
              var element = delArray[_index];

              this._listeners.get(pSceneName).splice(element, 1);
            }
          }
        } // 删除监听事件


        removeTriggrtListener(pSceneName, key) {
          if (this._listeners.get(pSceneName) == null) {
            return;
          }

          var removeIndex = -1;

          for (var index = 0; index < this._listeners.get(pSceneName).length; index++) {
            var event = this._listeners.get(pSceneName)[index];

            var handle = event[0];
            var listener = event[1];

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
          var frontLayer = this._getCurFrontLayer();

          if (frontLayer) {
            var sceneName = frontLayer["name"];

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
          var layer = (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).getCurFrontLayer();
          return layer;
        } // 覆盖销毁


        clear() {
          this._listeners.clear();

          this._listenerHandleIndex = 0;

          _export("sceneTriggerMgr", sceneTriggerMgr = null);
        }

      });

      _export("sceneTriggerMgr", sceneTriggerMgr = (() => {
        return SceneTriggerMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SceneTriggerMgr.js.map