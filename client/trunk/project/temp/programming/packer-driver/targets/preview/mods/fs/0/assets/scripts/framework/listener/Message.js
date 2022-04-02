System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Message, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("Message", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "413828GWbNBI6Ez0GJNJOdC", "Message", undefined);

      /*
       * @Author: liuguoqing
       * @Date: 2022-03-02 17:36:55
       * @LastEditors: liuguoqing
       * @LastEditTime: 2022-03-02 17:36:56
       * @Description: file content
       */
      _export("Message", Message = class Message {
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Message.js.map