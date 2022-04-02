System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, instantiate, log, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, skill_edirot;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f81337CkWJKqqFRBk6sGF+0", "skill_edirot", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = skill_edirot
       * DateTime = Wed Mar 09 2022 11:18:57 GMT+0800 (中国标准时间)
       * Author = maikx123456
       * FileBasename = skill_edirot.ts
       * FileBasenameNoExtension = skill_edirot
       * URL = db://assets/scripts/skillEditor/skill_edirot.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("skill_edirot", skill_edirot = (_dec = ccclass('skill_edirot'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class skill_edirot extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "timeLinePrefab", _descriptor, this);

          _initializerDefineProperty(this, "timeLineContainer", _descriptor2, this);
        }

        // @property(cc.Prefab)
        // playScene: cc.Prefab
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onAddTimeLine() {
          log("add time line..");
          var timeLineNew = instantiate(this.timeLinePrefab);
          this.timeLineContainer.addChild(timeLineNew); // var timeLineComp = timeLineNew.getComponent(TimeLine)
          // if (data == "sceneTimeLine") {
          //     timeLineComp.setType(define.TimeLineType_Scene)
          // }
          // else if (data == "roleTimeLine") {
          //     timeLineComp.setType(define.TimeLineType_Role)
          // }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "timeLinePrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeLineContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
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
//# sourceMappingURL=skill_edirot.js.map