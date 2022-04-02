System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, RichText, Button, sceneMgr, LayerBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _temp, _crd, ccclass, property, DoubleBtnDialog;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLayerBase(extras) {
    _reporterNs.report("LayerBase", "../../../framework/ui/LayerBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      RichText = _cc.RichText;
      Button = _cc.Button;
    }, function (_unresolved_2) {
      sceneMgr = _unresolved_2.sceneMgr;
    }, function (_unresolved_3) {
      LayerBase = _unresolved_3.LayerBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "66a11eMlKNPLYEF68M7EfOi", "DoubleBtnDialog", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DoubleBtnDialog", DoubleBtnDialog = (_dec = ccclass('DoubleBtnDialog'), _dec2 = property(Label), _dec3 = property(RichText), _dec4 = property(Button), _dec5 = property(Button), _dec(_class = (_class2 = (_temp = _class3 = class DoubleBtnDialog extends (_crd && LayerBase === void 0 ? (_reportPossibleCrUseOfLayerBase({
        error: Error()
      }), LayerBase) : LayerBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lblTitle", _descriptor, this);

          _initializerDefineProperty(this, "lblMessage", _descriptor2, this);

          _initializerDefineProperty(this, "btnLeft", _descriptor3, this);

          _initializerDefineProperty(this, "btnRight", _descriptor4, this);

          _defineProperty(this, "_args", void 0);

          _defineProperty(this, "_addType", 0);
        }

        start() {
          // this.updateDialog();
          this.node._uiProps.localOpacity = 0;
        }

        updateDialog(args) {
          this._args = args;
          this._args.title = args.title || "";
          this._args.msg = args.msg || "";
          this.updateTitle();
          this.updateMessage();
          this.updateLeftButton();
          this.updateRightButton();
        }

        updateTitle() {
          this.lblTitle.string = this._args.title;
        }

        updateMessage() {
          var msg = this._args.msg;

          if (!this._args.msg.match("</color>")) {
            msg = "<outline color=black width=2><color=#FFFFFF>" + this._args.msg + "</color></outline>";
          }

          this.lblMessage.string = msg;
        }

        updateLeftButton() {
          if (this._args.leftBtnName) {
            var name = this._args.leftBtnName;
            var lblBtn = this.btnLeft.getComponentInChildren(Label);
            lblBtn = name;
          }

          if (this._args.hideLeftButton) {
            this.btnLeft.node.active = false; // this.btnRight.node.x = 0;
          }
        }

        updateRightButton() {
          if (this._args.rightBtnName) {
            var name = this._args.rightBtnName;
            var lblBtn = this.btnRight.getComponentInChildren(Label);
            lblBtn.string = name;
          }
        }

        btnLeftClick(event, customEventData) {
          if (this._args.leftCallback) {
            this._args.leftCallback();
          }

          this.close();
        }

        btnRightClick(event, customEventData) {
          if (this._args.rightCallback) {
            var isNotCloseDialog = this._args.rightCallback(); //不关闭对话框


            if (isNotCloseDialog) {
              return;
            }
          }

          this.close();
        }

        close() {
          if (this._addType == 1) {
            this.node.destroy();
          } else if (this._addType == 2) {
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).popTableLayer();
          } else {
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).removeDialog();
          }
        }

        setAddType(addType) {
          this._addType = addType;
        }

      }, _defineProperty(_class3, "DoubleDialogArgs", {}), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblTitle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lblMessage", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "btnLeft", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "btnRight", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
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
//# sourceMappingURL=DoubleBtnDialog.js.map