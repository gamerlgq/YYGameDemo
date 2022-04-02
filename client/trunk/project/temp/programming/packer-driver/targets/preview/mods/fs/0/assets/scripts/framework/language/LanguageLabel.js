System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, CCString, error, Label, RichText, warn, _decorator, ComponentBase, languageManager, _dec, _class, _class2, _descriptor, _descriptor2, _temp, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class4, _class5, _descriptor3, _descriptor4, _temp2, _crd, ccclass, property, menu, executeInEditMode, LangLabelParamsItem, LanguageLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../ui/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOflanguageManager(extras) {
    _reporterNs.report("languageManager", "./Language", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      CCString = _cc.CCString;
      error = _cc.error;
      Label = _cc.Label;
      RichText = _cc.RichText;
      warn = _cc.warn;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      languageManager = _unresolved_3.languageManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "110c8vEd5NEPL/N9meGQnaX", "LanguageLabel", undefined);

      ({
        ccclass,
        property,
        menu,
        executeInEditMode
      } = _decorator);

      _export("LangLabelParamsItem", LangLabelParamsItem = (_dec = ccclass("LangLabelParamsItem"), _dec(_class = (_class2 = (_temp = class LangLabelParamsItem {
        constructor() {
          _initializerDefineProperty(this, "key", _descriptor, this);

          _initializerDefineProperty(this, "value", _descriptor2, this);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "value", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _export("LanguageLabel", LanguageLabel = (_dec2 = ccclass("LanguageLabel"), _dec3 = menu('ui/language/LanguageLabel'), _dec4 = property({
        type: LangLabelParamsItem,
        displayName: "params"
      }), _dec5 = property({
        type: LangLabelParamsItem,
        displayName: "params"
      }), _dec6 = property({
        serializable: true
      }), _dec7 = property({
        type: CCString,
        serializable: true
      }), _dec2(_class4 = executeInEditMode(_class4 = _dec3(_class4 = (_class5 = (_temp2 = class LanguageLabel extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_params", _descriptor3, this);

          _initializerDefineProperty(this, "_dataID", _descriptor4, this);

          _defineProperty(this, "_string", "");

          _defineProperty(this, "initFontSize", 0);
        }

        set params(value) {
          this._params = value;
        }

        get params() {
          return this._params || [];
        }

        get dataID() {
          return this._dataID || "";
        }

        set dataID(value) {
          this._dataID = value;
          this.string = (_crd && languageManager === void 0 ? (_reportPossibleCrUseOflanguageManager({
            error: Error()
          }), languageManager) : languageManager).getStringByIDStr(value);
        } // onEnable() {
        //     if (EDITOR) {
        //         this._updateLabel();
        //     }
        // }


        set string(str) {
          this._string = str;

          this._updateLabel();
        }

        get string() {
          var _string = this._string;

          if (_string && this._params.length > 0) {
            this._params.forEach(item => {
              _string = _string.replace("%{" + item.key + "}", item.value);
            });
          }

          return _string;
        }

        _updateLabel() {
          do {
            var spcomp = this.getComponent(Label);

            if (!spcomp) {
              spcomp = this.getComponent(RichText);

              if (!spcomp) {
                warn("[LanguageLabel], 该节点没有cc.Label || cc.RichText组件");
                break;
              }
            }

            spcomp.string = this.string;
          } while (false);
        }

        onLoad() {
          super.onLoad(); //暂不做动态变换
          // this.addMsgListener(Protocol.Inner.LanguageChange, this.onLanguageChange.bind(this))
          // this._needUpdate = true;

          if (!this.getComponent(Label) && !this.getComponent(RichText)) {
            error(this.node.name, this._dataID);
            return;
          }

          if (this.getComponent(RichText)) {
            this.initFontSize = this.getComponent(RichText).fontSize;
          }

          if (this.getComponent(Label)) {
            this.initFontSize = this.getComponent(Label).fontSize;
          }
        }
        /**
         * 默认文本的系统字体名字
         */


        getLabelFont(lang) {
          switch (lang) {
            case "zh":
            case "tr":
              {
                return "SimHei";
              }
          }

          return "Helvetica";
        }
        /**
         * 修改多语言参数，采用惰性求值策略
         * @param key 对于i18n表里面的key值
         * @param value 替换的文本
         */


        setVars(key, value) {
          var haskey = false;

          for (var i = 0; i < this._params.length; i++) {
            var element = this._params[i];

            if (element.key === key) {
              element.value = value;
              haskey = true;
            }
          }

          if (!haskey) {
            var ii = new LangLabelParamsItem();
            ii.key = key;
            ii.value = value;

            this._params.push(ii);
          }
        }

        update() {// if (this._needUpdate) {
          //     this.updateLabel();
          //     this._needUpdate = false;
          // }
        }

      }, _temp2), (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "_params", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "params", [_dec5], Object.getOwnPropertyDescriptor(_class5.prototype, "params"), _class5.prototype), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "_dataID", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _applyDecoratedDescriptor(_class5.prototype, "dataID", [_dec7], Object.getOwnPropertyDescriptor(_class5.prototype, "dataID"), _class5.prototype)), _class5)) || _class4) || _class4) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=LanguageLabel.js.map