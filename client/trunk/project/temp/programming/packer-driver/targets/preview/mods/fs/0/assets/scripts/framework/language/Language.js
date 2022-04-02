System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Logger, EN, ZH, LanguageManager, _crd, LANGUAGE_ZH, LANGUAGE_EN, languageManager;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfLogger(extras) {
    _reporterNs.report("Logger", "../utils/Logger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEN(extras) {
    _reporterNs.report("EN", "./code/en", _context.meta, extras);
  }

  function _reportPossibleCrUseOfZH(extras) {
    _reporterNs.report("ZH", "./code/zh", _context.meta, extras);
  }

  _export("LanguageManager", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Logger = _unresolved_2.default;
    }, function (_unresolved_3) {
      EN = _unresolved_3.EN;
    }, function (_unresolved_4) {
      ZH = _unresolved_4.ZH;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3757cxZqLZObIdvP/gQ6Yuj", "Language", undefined);

      LANGUAGE_ZH = "zh";
      LANGUAGE_EN = "en";

      _export("LanguageManager", LanguageManager = class LanguageManager {
        constructor() {
          _defineProperty(this, "_support", ["zh", "en"]);

          _defineProperty(this, "_curLanguage", LANGUAGE_ZH);
        }

        /** 设置多语言系统支持哪些语种 */
        set supportLanguages(supportLanguages) {
          this._support = supportLanguages;
        }

        getCodeLangFile() {
          if (this.current == LANGUAGE_ZH) {
            return _crd && ZH === void 0 ? (_reportPossibleCrUseOfZH({
              error: Error()
            }), ZH) : ZH;
          } else if (this.current == LANGUAGE_EN) {
            return _crd && EN === void 0 ? (_reportPossibleCrUseOfEN({
              error: Error()
            }), EN) : EN;
          }
        }

        getStringByIDStr(idStr) {
          var codeLang = this.getCodeLangFile();
          var keys = idStr.split(".");
          var out;

          for (var index = 0; index < keys.length; index++) {
            var element = keys[index];

            if (out) {
              out = out[element];
            } else {
              out = codeLang[element];
            }
          }

          if (typeof out != "string") {
            (_crd && Logger === void 0 ? (_reportPossibleCrUseOfLogger({
              error: Error()
            }), Logger) : Logger).e("getStringByIDStr() - error type:" + keys);
          }

          return out;
        }
        /**
         * 获取当前语种
         */


        get current() {
          return this._curLanguage;
        }
        /**
         * 获取支持的多语种数组
         */


        get languages() {
          return this._support;
        }

        isExist(lang) {
          return this.languages.indexOf(lang) > -1;
        } // /**
        //  * 改变语种，会自动下载对应的语种，下载完成回调
        //  * @param language 
        //  */
        // public setLanguage(language: string, callback: (success: boolean) => void) {
        //     if (!language) {
        //         language = DEFAULT_LANGUAGE;
        //     }
        //     language = language.toLowerCase();
        //     let index = this.languages.indexOf(language);
        //     if (index < 0) {
        //         warn("当前不支持该语种" + language + " 将自动切换到 zh 语种!");
        //         language = DEFAULT_LANGUAGE;
        //     }
        //     if (language === LanguageData.current) {
        //         callback(false);
        //         return;
        //     }
        //     this.loadLanguageAssets(language, (err: any, lang: string) => {
        //         if (err) {
        //             error("语言资源包下载失败", err);
        //             callback(false);
        //             return;
        //         }
        //         Logger.i(`当前语言为【${language}】`);
        //         LanguageData.current = language;
        //         // this._languagePack.updateLanguage(language);
        //         socketMgr.sendInnerMsg(Protocol.Inner.LanguageChange, language)
        //         // if (Editor.EditMode) {
        //         //     find("Canvas").getComponentsInChildren(langua)
        //         // }
        //         // else {
        //         // }
        //         callback(true);
        //     });
        // }
        // /**
        //  * 设置多语言资源目录
        //  * @param langjsonPath 多语言json目录
        //  * @param langTexturePath 多语言图片目录
        //  */
        // public setAssetsPath(langjsonPath: string, langTexturePath: string) {
        //     this._languagePack.setAssetsPath(langjsonPath, langTexturePath);
        // }
        // /**
        //  * 根据data获取对应语种的字符
        //  * @param labId 
        //  * @param arr 
        //  */
        // public getLangByID(labId: string): string {
        //     let yy = {};
        //     let keys = labId.split(".");
        //     keys.forEach(key => {
        //         yy[key];
        //     });
        //     if (!this._isInit) {
        //         this._isInit = true
        //         this.setLanguage(DEFAULT_LANGUAGE,()=>{})
        //     }
        //     return LanguageData.getLangByID(labId);
        // }
        // /**
        //  * 下载语言包素材资源
        //  * 包括语言json配置和语言纹理包
        //  * @param lang 
        //  * @param callback 
        //  */
        // public loadLanguageAssets(lang: string, callback: Function) {
        //     lang = lang.toLowerCase();
        //     return this._languagePack.loadLanguageAssets(lang, callback);
        // }
        // /**
        //  * 释放不需要的语言包资源
        //  * @param lang 
        //  */
        // public releaseLanguageAssets(lang: string) {
        //     lang = lang.toLowerCase();
        //     this._languagePack.releaseLanguageAssets(lang);
        //     socketMgr.sendInnerMsg(Protocol.Inner.LanguageRelease, lang)
        // }


      });

      _export("languageManager", languageManager = new LanguageManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Language.js.map