System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ShowBackgroundMgr, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("ShowBackgroundMgr", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22081gwgIJJ745/9FDeaTa4", "ShowBackgroundMgr", undefined);

      // 定义非全屏界面不需要隐藏背后的层级
      _export("ShowBackgroundMgr", ShowBackgroundMgr = class ShowBackgroundMgr {
        /**
         * 
         * @description 注册隐藏背景页面
         * @param view 界面名称
         */
        static regShowBackgroundView(view) {
          ShowBackgroundMgr._hiddenMap.set(view, true);
        }
        /**
         * @description 检测是否界面需要隐藏背景
         * @param view 界面名称
         */


        static checkIsShowBlackground(view) {
          if (ShowBackgroundMgr._hiddenMap.has(view)) {
            return true;
          }

          return false;
        }

      });

      _defineProperty(ShowBackgroundMgr, "_hiddenMap", new Map());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ShowBackgroundMgr.js.map