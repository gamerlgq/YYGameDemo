System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Protocol;

  _export("Protocol", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebfa9WTbL5J2J4irTDhmYdl", "Protocol", undefined);

      (function (_Protocol) {
        var Login;

        (function (Login) {
          Login[Login["identify"] = 1] = "identify";
          Login[Login["login"] = 2] = "login";
        })(Login || (Login = {}));

        _Protocol.Login = Login;
        var Server;

        (function (Server) {
          Server[Server["game_info"] = 10000] = "game_info";
        })(Server || (Server = {}));

        _Protocol.Server = Server;
        var Inner;

        (function (Inner) {
          Inner[Inner["ReloginSuccess"] = 0] = "ReloginSuccess";
          Inner[Inner["FightPause"] = 1] = "FightPause";
          Inner[Inner["FightResume"] = 2] = "FightResume";
          Inner[Inner["CloseNoticeView"] = 3] = "CloseNoticeView";
          Inner[Inner["SelectServer"] = 4] = "SelectServer";
          Inner[Inner["SetAnimationSpeed"] = 5] = "SetAnimationSpeed";
        })(Inner || (Inner = {}));

        _Protocol.Inner = Inner;
      })(Protocol || _export("Protocol", Protocol = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Protocol.js.map