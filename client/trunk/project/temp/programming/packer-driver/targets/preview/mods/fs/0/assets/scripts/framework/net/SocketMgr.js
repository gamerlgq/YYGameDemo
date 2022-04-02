System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, Singleton, gameMgr, Message, Logger, BufferParser, netLoadingMgr, netStateMgr, SocketMgr, _crd, BUFF_SIZE, socketMgr;

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

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../utils/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBufferParser(extras) {
    _reporterNs.report("BufferParser", "./BufferParser", _context.meta, extras);
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
      Logger = _unresolved_5.default;
    }, function (_unresolved_6) {
      BufferParser = _unresolved_6.default;
    }, function (_unresolved_7) {
      netLoadingMgr = _unresolved_7.netLoadingMgr;
    }, function (_unresolved_8) {
      netStateMgr = _unresolved_8.netStateMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21588Hzs2NBRoTyysXlbhtB", "SocketMgr", undefined);

      BUFF_SIZE = 1024 * 2;
      SocketMgr = class SocketMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super(); // net state change callback

          _defineProperty(this, "_ws", void 0);

          _defineProperty(this, "_StateChangeCallback", void 0);

          _defineProperty(this, "_ip", void 0);

          _defineProperty(this, "_port", void 0);

          var socketParams = {
            StateChangeCallback: this._listenOnSocketState.bind(this)
          };
          this.registerCallbackHandler(socketParams);
        }

        connect(ip, port, openFunc, errorFunc) {
          this._ip = ip;
          this._port = port;

          try {
            var url = "ws://" + ip + ":" + port;
            var ws = new WebSocket(url);
            ws.binaryType = "arraybuffer"; //字节流

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
        } // send(msgId: number, data: Object = {}) {
        //     data["proto"] = msgId;
        //     data = JSON.stringify(data);
        //     log("[WS] Send:", msgId, data);
        //     this._ws.send(<string>data);
        //     netLoadingMgr.addMsgLoading(msgId)
        // }


        send(msgId) {
          var bufferParser = new (_crd && BufferParser === void 0 ? (_reportPossibleCrUseOfBufferParser({
            error: Error()
          }), BufferParser) : BufferParser)();

          for (var _len = arguments.length, sendParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sendParams[_key - 1] = arguments[_key];
          }

          var arrbuffSend = bufferParser.generateMsgArrayBuffer(msgId, sendParams);

          if (!arrbuffSend) {
            return;
          }

          this._ws.send(arrbuffSend);

          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).net("====>msg:" + msgId + " [" + sendParams + "]");
        }

        sendInnerMsg(msgId, data) {
          if (data === void 0) {
            data = {};
          }

          var msg = new (_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
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
          var data = event.data;

          if (data == null) {
            log(event);
            return;
          }

          var bufferParser = new (_crd && BufferParser === void 0 ? (_reportPossibleCrUseOfBufferParser({
            error: Error()
          }), BufferParser) : BufferParser)();
          var dataParse = bufferParser.generateParseData(data);
          var msg = new (_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message)(bufferParser.msgId, dataParse);
          (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).addNetMessage(msg);
          (_crd && netLoadingMgr === void 0 ? (_reportPossibleCrUseOfnetLoadingMgr({
            error: Error()
          }), netLoadingMgr) : netLoadingMgr).removeMsgLoading(msg.msgId);
          (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
            error: Error()
          }), Logger) : Logger).net("<==== msgId:" + bufferParser.msgId + '[' + dataParse + ']');
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