System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, log, sys, Singleton, netStateMgr, HttpMessage, HttpMgr, _crd, httpMgr;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfnetStateMgr(extras) {
    _reporterNs.report("netStateMgr", "./NetStateMgr", _context.meta, extras);
  }

  _export("HttpMessage", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      log = _cc.log;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      netStateMgr = _unresolved_3.netStateMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "87af54bM8hNXrMOvJ5SAta9", "HttpMgr", undefined);

      _export("HttpMessage", HttpMessage = class HttpMessage {
        //结果码
        //解析后的json{}
        constructor(code, data) {
          _defineProperty(this, "_code", void 0);

          _defineProperty(this, "code", void 0);

          _defineProperty(this, "_data", void 0);

          _defineProperty(this, "data", void 0);

          this._code = code;
          this._data = data;
        }

      });

      HttpMgr = class HttpMgr extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor() {
          super();
        }

        get(callback, url, needLoading) {
          log("[Http] Get", url);
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 500) {
              let msg = this._responseHandler(xhr);

              callback(msg);
            }
          };

          xhr.ontimeout = ev => {
            // GlobalFunction.ShowMsgTips("请求超时，请检查网络设置或稍后再试");
            (_crd && netStateMgr === void 0 ? (_reportPossibleCrUseOfnetStateMgr({
              error: Error()
            }), netStateMgr) : netStateMgr).netWorkError();
          };

          xhr.onerror = ev => {
            // GlobalFunction.ShowMsgTips(
            //     "网络连接失败，请检查网络设置或稍后再试"
            // );
            (_crd && netStateMgr === void 0 ? (_reportPossibleCrUseOfnetStateMgr({
              error: Error()
            }), netStateMgr) : netStateMgr).netWorkError();
          };

          xhr.open("GET", url);
          xhr.timeout = 6000;
          xhr.send();
        }

        post(callback, url, data, needLoading) {
          log("[Http] Post", url);
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 500) {
              let msg = this._responseHandler(xhr);

              callback(msg);
            }
          };

          xhr.ontimeout = ev => {
            // GlobalFunction.ShowMsgTips("请求超时，请检查网络设置或稍后再试");
            (_crd && netStateMgr === void 0 ? (_reportPossibleCrUseOfnetStateMgr({
              error: Error()
            }), netStateMgr) : netStateMgr).netWorkError();
          };

          xhr.onerror = ev => {
            // GlobalFunction.ShowMsgTips(
            //     "网络连接失败，请检查网络设置或稍后再试"
            // );
            (_crd && netStateMgr === void 0 ? (_reportPossibleCrUseOfnetStateMgr({
              error: Error()
            }), netStateMgr) : netStateMgr).netWorkError();
          };

          xhr.open("POST", url);

          if (sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
          }

          xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          xhr.timeout = 6000;
          xhr.send(this._serializeData(data));
        }

        _responseHandler(xhr) {
          let msg = null;

          if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status != 404) {
            msg = this._packMsg(0, JSON.parse(xhr.responseText));
          } else if (xhr.status === 404) {
            msg = this._packMsg(404, {
              error: "404 page not found!"
            });
          } else if (xhr.readyState === 3) {
            msg = this._packMsg(3, {
              error: "Request dealing!"
            });
          } else if (xhr.readyState === 2) {
            msg = this._packMsg(2, {
              error: "Request received!"
            });
          } else if (xhr.readyState === 1) {
            msg = this._packMsg(1, {
              error: "Server connection established! Request hasn't been received"
            });
          } else if (xhr.readyState === 0) {
            msg = this._packMsg(4, {
              error: "Request hasn't been initiated!"
            });
          }

          return msg;
        }

        _packMsg(code, data) {
          return new HttpMessage(code, data);
        }

        _serializeData(datas) {
          let serializeParams = "";

          for (let variable in datas) {
            serializeParams = serializeParams + variable + "=" + datas[variable] + "&";
          }

          serializeParams = serializeParams.substring(0, serializeParams.length - 1);
          return serializeParams;
        }

        clear() {
          _export("httpMgr", httpMgr = null);
        }

      }; // ()();

      _export("httpMgr", httpMgr = (() => {
        return HttpMgr.getInstance();
      })());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=HttpMgr.js.map