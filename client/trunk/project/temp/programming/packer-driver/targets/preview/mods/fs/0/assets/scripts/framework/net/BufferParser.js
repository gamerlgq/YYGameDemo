System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Pool, sys, Proto, decodeUtf8, encodeUtf8, Logger, BufferParser, _crd, BUFF_SIZE, MSG_ID_SIZE, STR_LEN_SIZE, BYTE_TYPE_SIZE;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfProto(extras) {
    _reporterNs.report("Proto", "../../app/define/proto_mate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdecodeUtf(extras) {
    _reporterNs.report("decodeUtf8", "../utils/functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfencodeUtf(extras) {
    _reporterNs.report("encodeUtf8", "../utils/functions", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../utils/Logger", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Pool = _cc.Pool;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Proto = _unresolved_2.Proto;
    }, function (_unresolved_3) {
      decodeUtf8 = _unresolved_3.decodeUtf8;
      encodeUtf8 = _unresolved_3.encodeUtf8;
    }, function (_unresolved_4) {
      Logger = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8ad85/6aalMuLXuJVeZJ4el", "BufferParser", undefined);

      BUFF_SIZE = 1024 * 2;
      MSG_ID_SIZE = 2;
      STR_LEN_SIZE = 2;
      BYTE_TYPE_SIZE = 4;

      _export("default", BufferParser = class BufferParser {
        //发送缓冲区对象池(突然觉得不需要对象池，send都是同步的..)
        get msgId() {
          return this._msgId;
        }

        set msgId(value) {
          this._msgId = value;
        }

        constructor() {
          _defineProperty(this, "_dataView", void 0);

          _defineProperty(this, "_length", 0);

          _defineProperty(this, "_msgId", void 0);

          if (!BufferParser.pool) {
            BufferParser.pool = new Pool(() => {
              var arrayBuffer = new ArrayBuffer(BUFF_SIZE); //发送缓冲区

              return arrayBuffer;
            }, 1);
          }
        }
        /**
         * 产出一个发送buffer
         * @param msgId 
         * @param sendParams 发送参数
         * @returns 
         */


        generateMsgArrayBuffer(msgId) {
          var ab = BufferParser.pool.alloc();
          this._dataView = new DataView(ab);
          var msgParams = (_crd && Proto === void 0 ? (_reportPossibleCrUseOfProto({
            error: Error()
          }), Proto) : Proto).send[msgId];

          if (!msgParams) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).e("没有此协议：" + msgId);
            return;
          } //写入id


          this._dataView.setUint16(0, msgId); //写入数据


          for (var _len = arguments.length, sendParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            sendParams[_key - 1] = arguments[_key];
          }

          this._writeData(msgParams, sendParams);

          if (this._length == 0) {
            return;
          }

          if (this._length > BUFF_SIZE) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).e("NET: 发送长度超出buffer缓冲区");
            return;
          }

          var ret = ab.slice(0, this._length);
          BufferParser.pool.free(ab);
          return ret;
        }

        _writeData(msgParams) {
          for (var index = 0; index < msgParams.length; index++) {
            var element = msgParams[index];
            var typeStr = element.type;
            var value = index + 1 < 1 || arguments.length <= index + 1 ? undefined : arguments[index + 1];

            if (typeStr == "uint8" || typeStr == "int8") {
              this._dataView.setUint8(this._length, value);

              this._length++;
            } else if (typeStr == "uint16" || typeStr == "int16") {
              this._dataView.setUint16(this._length, value, sys.isLittleEndian);

              this._length += 2;
            } else if (typeStr == "uint32" || typeStr == "int32") {
              this._dataView.setUint32(this._length, value, sys.isLittleEndian);

              this._length += 4;
            } else if (typeStr == "string") {
              var byteArray = (_crd && encodeUtf8 === void 0 ? (_reportPossibleCrUseOfencodeUtf({
                error: Error()
              }), encodeUtf8) : encodeUtf8)(value); //写入长度

              this._dataView.setUint16(this._length, byteArray.length, sys.isLittleEndian);

              this._length += STR_LEN_SIZE; //写入字节

              byteArray.forEach((element, i) => {
                this._dataView.setUint8(this._length, element);

                this._length++;
              });
            } else if (typeStr == "array") {
              this._writeData(element.fields, value);
            } else {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).e("未知发送类型: " + typeStr);
            }
          }
        }

        generateParseData(arrayBuffer) {
          this._dataView = new DataView(arrayBuffer);

          var msgId = this._dataView.getUint16(0, sys.isLittleEndian);

          this.msgId = msgId;
          this._length += MSG_ID_SIZE;
          var msgParams = (_crd && Proto === void 0 ? (_reportPossibleCrUseOfProto({
            error: Error()
          }), Proto) : Proto).recv[msgId];

          if (!msgParams) {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).e("Net <====: 没有此id的协议[" + msgId + "]");
            return;
          }

          var dataParse = this._parseData(msgParams, arrayBuffer);

          return dataParse;
        }

        _parseData(msgParams, arrayBuffer, dataRet) {
          var dataParse = dataRet || {};

          for (var index = 0; index < msgParams.length; index++) {
            var element = msgParams[index];
            var name = element.name;
            var typeStr = element.type;

            if (typeStr == "uint8" || typeStr == "int8") {
              var num = this._dataView.getUint8(this._length);

              dataParse[name] = num;
              this._length++;
            } else if (typeStr == "int8") {
              var _num = this._dataView.getInt8(this._length);

              dataParse[name] = _num;
              this._length++;
            } else if (typeStr == "uint16") {
              var _num2 = this._dataView.getUint16(this._length, sys.isLittleEndian);

              dataParse[name] = _num2;
              this._length += 2;
            } else if (typeStr == "int16") {
              var _num3 = this._dataView.getInt16(this._length, sys.isLittleEndian);

              dataParse[name] = _num3;
              this._length += 2;
            } else if (typeStr == "uint32") {
              var _num4 = this._dataView.getUint32(this._length, sys.isLittleEndian);

              dataParse[name] = _num4;
              this._length += 4;
            } else if (typeStr == "int32") {
              var _num5 = this._dataView.getInt32(this._length, sys.isLittleEndian);

              dataParse[name] = _num5;
              this._length += 4;
            } else if (typeStr == "string") {
              var strLen = this._dataView.getUint16(this._length);

              this._length += STR_LEN_SIZE;
              var arrayBufferTemp = arrayBuffer.slice(this._length, strLen);
              var str = (_crd && decodeUtf8 === void 0 ? (_reportPossibleCrUseOfdecodeUtf({
                error: Error()
              }), decodeUtf8) : decodeUtf8)(arrayBufferTemp);
              dataParse[name] = str;
              this._length += strLen;
            } else if (typeStr == "array") {
              dataParse = this._parseData(element.fields, arrayBuffer, dataParse);
            } else {
              (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
                error: Error()
              }), Logger) : Logger).e("未知发送类型: " + typeStr);
              return 0;
            }
          }

          return dataParse;
        }

      });

      _defineProperty(BufferParser, "pool", void 0);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=BufferParser.js.map