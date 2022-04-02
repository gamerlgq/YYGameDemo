System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Component, error, game, Node, _decorator, ErrorCode, Singleton, gameMgr, sceneMgr, Message, NetLoadingMgr, _dec, _class, _crd, ccclass, property, NetLoadindComp, netLoadingMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfErrorCode(extras) {
    _reporterNs.report("ErrorCode", "../../app/define/ErrorCode", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../listener/Message", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Component = _cc.Component;
      error = _cc.error;
      game = _cc.game;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ErrorCode = _unresolved_2.ErrorCode;
    }, function (_unresolved_3) {
      Singleton = _unresolved_3.Singleton;
    }, function (_unresolved_4) {
      gameMgr = _unresolved_4.gameMgr;
    }, function (_unresolved_5) {
      sceneMgr = _unresolved_5.sceneMgr;
    }, function (_unresolved_6) {
      Message = _unresolved_6.Message;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "56245CzisZKjJ/pMRCl0/cT", "NetLoadingMgr", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      NetLoadindComp = (_dec = ccclass('NetLoadindComp'), _dec(_class = class NetLoadindComp extends Component {
        update(dt) {
          netLoadingMgr.tick(dt);
        }

      }) || _class);
      //网络loading管理
      NetLoadingMgr = class NetLoadingMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
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
          let msgEvent = new (_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message)(msgId, {
            code: (_crd && ErrorCode === void 0 ? (_reportPossibleCrUseOfErrorCode({
              error: Error()
            }), ErrorCode) : ErrorCode).TIME_OUT
          });
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).addInnerMessage(msgEvent);
        }

        addMsgLoading(id, timeout = 10) {
          let idStr = id + "";
          let endTime = timeout > 0 ? this._time + timeout : 0;

          this._msgList.push({
            id: idStr,
            endTime: endTime
          });

          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).showNetLoading(true);
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
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).showNetLoading(false);
          }
        }

        clear() {
          _export("netLoadingMgr", netLoadingMgr = null);
        }

      };

      _export("netLoadingMgr", netLoadingMgr = (() => {
        return NetLoadingMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=NetLoadingMgr.js.map