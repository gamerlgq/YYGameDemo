System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, FightEvent, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("FightEvent", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d928dgWsOZCXKPUDFmqZ3gV", "FightEvent", undefined);

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
      _export("FightEvent", FightEvent = class FightEvent {
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

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightEvent.js.map