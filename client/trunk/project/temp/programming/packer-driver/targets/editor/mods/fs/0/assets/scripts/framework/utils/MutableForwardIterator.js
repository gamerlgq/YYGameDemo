System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, MutableForwardIterator, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa84322zq9PeoKiKEf3vDEO", "MutableForwardIterator", undefined);

      /**
       * @example
       * ```
       * var array = [0, 1, 2, 3, 4];
       * var iterator = new MutableForwardIterator<number>(array);
       * for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
       *     var item = array[iterator.i];
       *     ...
       * }
       * ```
       * @description 可变的迭代器，迭代器用于遍历中删除元素 fastRemove / fastRemoveAt 建议慎用，数值顺序会改变
       */
      _export("default", MutableForwardIterator = class MutableForwardIterator {
        constructor(array) {
          _defineProperty(this, "i", 0);

          this.array = array;
        }

        get length() {
          return this.array.length;
        }

        set length(value) {
          this.array.length = value;

          if (this.i >= value) {
            this.i = value - 1;
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(不改变数组顺序)
         * @param value T 数值元素
         */


        remove(value) {
          const index = this.array.indexOf(value);

          if (index >= 0) {
            this.removeAt(index);
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(不改变数组顺序)
         * @param i number 数组索引
         */


        removeAt(i) {
          this.array.splice(i, 1);

          if (i <= this.i) {
            --this.i;
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(慎用,改变数组顺序)
         * @param value T 数值元素
         */


        fastRemove(value) {
          const index = this.array.indexOf(value);

          if (index >= 0) {
            this.fastRemoveAt(index);
          }
        }
        /**
         * 
         * @description 根据值从数组中删除(慎用,改变数组顺序)
         * @param i number 数组索引
         */


        fastRemoveAt(i) {
          const array = this.array;
          array[i] = array[array.length - 1];
          --array.length;

          if (i <= this.i) {
            --this.i;
          }
        }
        /**
         * @description 判断数组元素是否存在
         * @param value T 数值元素
         */


        has(value) {
          let index = this.array.indexOf(value);

          if (index === -1) {
            return false;
          }

          return true;
        }

        push(item) {
          this.array.push(item);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=MutableForwardIterator.js.map