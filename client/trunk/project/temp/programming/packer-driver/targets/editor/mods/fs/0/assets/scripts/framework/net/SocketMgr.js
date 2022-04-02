System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, Singleton, gameMgr, Message, netLoadingMgr, netStateMgr, SocketMgr, _crd, socketMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../listener/Message", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetLoadingMgr(extras) {
    _reporterNs.report("netLoadingMgr", "./NetLoadingMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetStateMgr(extras) {
    _reporterNs.report("netStateMgr", "./NetStateMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      gameMgr = _unresolved_3.gameMgr;
    }, function (_unresolved_4) {
      Message = _unresolved_4.Message;
    }, function (_unresolved_5) {
      netLoadingMgr = _unresolved_5.netLoadingMgr;
    }, function (_unresolved_6) {
      netStateMgr = _unresolved_6.netStateMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21588Hzs2NBRoTyysXlbhtB", "SocketMgr", undefined);

      SocketMgr = class SocketMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
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

          (_crd && netLoadingMgr === void 0 ? (_reportPossibleCrUseOfnetLoadingMgr({
            error: Error()
          }), netLoadingMgr) : netLoadingMgr).addMsgLoading(msgId);
        }

        sendInnerMsg(msgId, data = {}) {
          let msg = new (_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message)(msgId, data);
          log("[WS] Send Inner:", msgId, data);
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).addInnerMessage(msg);
        }

        registerCallbackHandler(params) {
          this._StateChangeCallback = params.StateChangeCallback;
        }
        /**
         * 监听Socket 状态变化
         */


        _listenOnSocketState(event) {
          (_crd && netStateMgr === void 0 ? (_reportPossibleCrUseOfnetStateMgr({
            error: Error()
          }), netStateMgr) : netStateMgr).onSocketChange(event);
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
          let msg = new (_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message)(-jsonData.proto, jsonData);
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).addNetMessage(msg);
          (_crd && netLoadingMgr === void 0 ? (_reportPossibleCrUseOfnetLoadingMgr({
            error: Error()
          }), netLoadingMgr) : netLoadingMgr).removeMsgLoading(msg.msgId);
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
          _export("socketMgr", socketMgr = null);
        }

      }; // ()();

      _export("socketMgr", socketMgr = (() => {
        return SocketMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SocketMgr.js.map