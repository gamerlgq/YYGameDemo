System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, find, sceneMgr, ListView, _dec, _class, _crd, ccclass, property, PreReward;

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "../../../framework/ui/ListView", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      ListView = _unresolved_3.ListView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cd7ceWaamhNb7WeUn6nOyG/", "PreReward", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("PreReward", PreReward = (_dec = ccclass('PreReward'), _dec(_class = class PreReward extends Component {
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

          let listViewComp = listViewNode.getComponent(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
            error: Error()
          }), ListView) : ListView);
          listViewComp.setDelegate({
            items: () => items
          });
          listViewComp.reload();
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onClickClose() {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).popTableLayer();
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=PreReward.js.map