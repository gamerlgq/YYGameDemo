System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _crd, yy;

  function _reportPossibleCrUseOfModelRegisterMgr(extras) {
    _reporterNs.report("ModelRegisterMgr", "../model/ModelRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDataRegisterMgr(extras) {
    _reporterNs.report("DataRegisterMgr", "./DataRegisterMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewRegisterMgr(extras) {
    _reporterNs.report("ViewRegisterMgr", "./ViewRegisterMgr", _context.meta, extras);
  }

  _export("yy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d2e99hMUPlMHLGxQ8QL3f4Z", "YYNamespace", undefined);

      (function (_yy) {
        var types;

        (function (_types) {})(types || (types = _yy.types || (_yy.types = {})));

        var interfaces;

        (function (_interfaces) {})(interfaces || (interfaces = _yy.interfaces || (_yy.interfaces = {})));

        var macro;

        (function (_macro) {
          var HeroAnimate;

          (function (HeroAnimate) {
            HeroAnimate["Attack"] = "attack01";
            HeroAnimate["Run"] = "run";
            HeroAnimate["Idle"] = "idle";
            HeroAnimate["Die"] = "die";
            HeroAnimate["Hurt"] = "hurt";
            HeroAnimate["Jump"] = "jump";
            HeroAnimate["Skill01"] = "skill01";
            HeroAnimate["Skill02"] = "skill02";
          })(HeroAnimate || (HeroAnimate = {}));

          _macro.HeroAnimate = HeroAnimate;
        })(macro || (macro = _yy.macro || (_yy.macro = {})));
      })(yy || _export("yy", yy = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=YYNamespace.js.map