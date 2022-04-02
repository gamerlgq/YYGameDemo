System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, ScrollView, Label, ProgressBar, log, ListView, FightConstant, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, FightEditorUI;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfListView(extras) {
    _reporterNs.report("ListView", "../../../../framework/ui/ListView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfListViewDelegate(extras) {
    _reporterNs.report("ListViewDelegate", "../../../../framework/ui/ListView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroSpineNode(extras) {
    _reporterNs.report("HeroSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterSpineNode(extras) {
    _reporterNs.report("MonsterSpineNode", "../../common/spine/SpineNodeBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "../FightConstant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ScrollView = _cc.ScrollView;
      Label = _cc.Label;
      ProgressBar = _cc.ProgressBar;
      log = _cc.log;
    }, function (_unresolved_2) {
      ListView = _unresolved_2.ListView;
    }, function (_unresolved_3) {
      FightConstant = _unresolved_3.FightConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99b4bgxSoVNKKE/1OKofldU", "FightEditorUI", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("FightEditorUI", FightEditorUI = (_dec = ccclass('FightEditorUI'), _dec2 = property(ScrollView), _dec3 = property(ProgressBar), _dec(_class = (_class2 = (_temp = class FightEditorUI extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "fullBar", _descriptor2, this);

          _defineProperty(this, "_isShowActionOption", false);

          _defineProperty(this, "_attaker", null);

          _defineProperty(this, "_defender", null);
        }

        start() {
          this._initScrollView();
        }

        _initScrollView() {
          let items = (_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightUnitActionString;
          let keys = Object.keys(items);
          let delegate = {
            items: function () {
              return keys;
            },

            reuse(itemNode, item) {
              let label = itemNode.getChildByName("Label");
              let lblCom = label.getComponent(Label);
              lblCom.string = item;
            }

          };
          let listViewComp = this.scrollView.getComponent(_crd && ListView === void 0 ? (_reportPossibleCrUseOfListView({
            error: Error()
          }), ListView) : ListView);
          listViewComp.setDelegate(delegate);
          listViewComp.reload();
          this.scrollView.node.active = false;
        }

        onUnitActionShowBtnClick() {
          this._isShowActionOption = !this._isShowActionOption;

          if (this._isShowActionOption) {
            this._showActionItems();
          } else {
            this._hideActionItems();
          }
        }

        _showActionItems() {
          this.scrollView.node.active = true;
        }

        _hideActionItems() {
          this.scrollView.node.active = false;
        }

        onUnitActionBtnClick(event, customEventData) {
          let node = event.getCurrentTarget();
          log(node);
        }

        onClickAttacker(event, customEventData) {
          if (!this._attaker) {
            this._showFingerEffect();
          }
        }

        onClickDefender(event, customEventData) {
          if (!this._defender) {
            this._showFingerEffect();
          }
        }

        _showFingerEffect() {}

        onClickClear() {}

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fullBar", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightEditorUI.js.map