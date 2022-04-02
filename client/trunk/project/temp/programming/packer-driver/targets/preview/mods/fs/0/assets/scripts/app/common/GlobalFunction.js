System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, director, gameMgr, sceneMgr, dataMgr, ViewProtocol, _crd, G;

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../../framework/core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsceneMgr(extras) {
    _reporterNs.report("sceneMgr", "../../framework/core/SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdataMgr(extras) {
    _reporterNs.report("dataMgr", "../../framework/data/DataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfModelBase(extras) {
    _reporterNs.report("ModelBase", "../../framework/data/ModelBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDoubleBtnDialogArgsType(extras) {
    _reporterNs.report("DoubleBtnDialogArgsType", "../define/ConfigType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewProtocol(extras) {
    _reporterNs.report("ViewProtocol", "../define/ViewProtocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfyy(extras) {
    _reporterNs.report("yy", "../define/YYNamespace", _context.meta, extras);
  }

  _export("G", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      director = _cc.director;
    }, function (_unresolved_2) {
      gameMgr = _unresolved_2.gameMgr;
    }, function (_unresolved_3) {
      sceneMgr = _unresolved_3.sceneMgr;
    }, function (_unresolved_4) {
      dataMgr = _unresolved_4.dataMgr;
    }, function (_unresolved_5) {
      ViewProtocol = _unresolved_5.ViewProtocol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "14f8c8knYRBY4gY+yPGS5r6", "GlobalFunction", undefined);

      (function (_G) {
        function showDoubleBtnDialog(args) {
          //主场景
          if (director.getScene().name == "Main") {
            (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
              error: Error()
            }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
              error: Error()
            }), ViewProtocol) : ViewProtocol).DoubleBtnDialog, args);
          } // } else {
          //     let msgData = new SFMessage(ViewFlags.DoubleBtnDialog, args);
          //     LoaderEventMgr.getInstance().dispatchEvent(msgData);
          // }

        }

        _G.showDoubleBtnDialog = showDoubleBtnDialog;

        function getConfig(dataHandlerName, namekey) {
          return (_crd && dataMgr === void 0 ? (_reportPossibleCrUseOfdataMgr({
            error: Error()
          }), dataMgr) : dataMgr).getData(dataHandlerName, namekey);
        }

        _G.getConfig = getConfig;

        function getModel(modelConstructor) {
          return (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).getModel(modelConstructor);
        }

        _G.getModel = getModel;

        function showMsgTips(tips) {
          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).Tips, tips);
        }

        _G.showMsgTips = showMsgTips;

        function showNotice(callback) {
          var url = "http://192.168.0.122:8080/notice.jpg"; // {
          //   "html_id": 1, // 实际html id
          //   "start": 1590935388, // 开始时间
          //   "end": 1626767612 // 结束时间
          //  }
          // httpMgr.get((msg) => {
          // log(msg)
          // if (msg.code == 0) {
          // if (msg.data.start) {
          //     var date = new Date();
          //     let curTime = date.getTime() / 1000;
          //     let realVer = GameConfig.realVer || "0.0";
          //     //获取成功
          //     if (
          //         realVer == msg.data.version &&
          //         curTime > msg.data.start &&
          //         curTime < msg.data.end
          //     ) {

          (_crd && sceneMgr === void 0 ? (_reportPossibleCrUseOfsceneMgr({
            error: Error()
          }), sceneMgr) : sceneMgr).sendCreateView((_crd && ViewProtocol === void 0 ? (_reportPossibleCrUseOfViewProtocol({
            error: Error()
          }), ViewProtocol) : ViewProtocol).NoticeView, [url, callback]); //     } else {
          //         if (callback) {
          //             callback();
          //         }
          //     }
          // } else {
          //     if (callback) {
          //         callback();
          //     }
          // GlobalFunction.ShowMsgTips(GetTranslateCode(29));
          // }
          // } else {
          // GlobalFunction.ShowMsgTips(GetTranslateCode(29));
          // }
          // }, url);
        }

        _G.showNotice = showNotice;
      })(G || _export("G", G = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=GlobalFunction.js.map