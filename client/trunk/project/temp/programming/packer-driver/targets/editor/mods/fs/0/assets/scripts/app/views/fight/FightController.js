System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Animation, Singleton, gameMgr, CameraLock, FightData, fightDataMgr, FightEvent, fightEventMgr, FightConstant, FightController, _crd, fightController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _reportPossibleCrUseOfSingleton(extras) {
    _reporterNs.report("Singleton", "../../../framework/components/Singleton", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameMgr(extras) {
    _reporterNs.report("gameMgr", "../../../framework/core/GameMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCameraLock(extras) {
    _reporterNs.report("CameraLock", "../../common/animation/CameraLock", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "./data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightDataMgr(extras) {
    _reporterNs.report("fightDataMgr", "./data/FightDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "./event/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEventDataType(extras) {
    _reporterNs.report("FightEventDataType", "./event/FightEventDataType", _context.meta, extras);
  }

  function _reportPossibleCrUseOffightEventMgr(extras) {
    _reporterNs.report("fightEventMgr", "./event/FightEventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightConstant(extras) {
    _reporterNs.report("FightConstant", "./FightConstant", _context.meta, extras);
  }

  _export("FightController", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      Singleton = _unresolved_2.Singleton;
    }, function (_unresolved_3) {
      gameMgr = _unresolved_3.gameMgr;
    }, function (_unresolved_4) {
      CameraLock = _unresolved_4.CameraLock;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }, function (_unresolved_6) {
      fightDataMgr = _unresolved_6.fightDataMgr;
    }, function (_unresolved_7) {
      FightEvent = _unresolved_7.FightEvent;
    }, function (_unresolved_8) {
      fightEventMgr = _unresolved_8.fightEventMgr;
    }, function (_unresolved_9) {
      FightConstant = _unresolved_9.FightConstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f43dZI6BFCAIiQkxYPh7j0", "FightController", undefined);

      _export("fightController", fightController = null);
      /**
       * @description 回合控制器 
       * */


      _export("FightController", FightController = class FightController extends (_crd && Singleton === void 0 ? (_reportPossibleCrUseOfSingleton({
        error: Error()
      }), Singleton) : Singleton) {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_round", 0);

          _defineProperty(this, "_action", 0);

          _defineProperty(this, "_fightData", void 0);

          _defineProperty(this, "_roundData", void 0);

          _defineProperty(this, "_isPause", false);
        }

        static init() {
          _export("fightController", fightController = FightController.getInstance());

          fightController._init();
        }

        _init() {
          this._initListeners();

          this._initData();
        }

        _initListeners() {
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_Star, this._onGameStart.bind(this));
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Action_End, this._onActionEnd.bind(this));
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_Replay, this._onReplay.bind(this));
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_Pause, this._onPause.bind(this));
          (_crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr).addEventListener((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_Resume, this._onResume.bind(this));
        }

        _initData() {
          this._round = 0;
          this._action = 0;
          this._isPause = false;
          this._fightData = (_crd && fightDataMgr === void 0 ? (_reportPossibleCrUseOffightDataMgr({
            error: Error()
          }), fightDataMgr) : fightDataMgr).getFightData(_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData);

          let data = this._fightData.getRoundData();

          this._roundData = data[this._round];
        } // 游戏开始


        _onGameStart() {
          this._playCameraAnimation();
        }

        _playCameraAnimation() {
          var _fightCamera$node, _fightCamera$node2;

          let fightCamera = (_crd && gameMgr === void 0 ? (_reportPossibleCrUseOfgameMgr({
            error: Error()
          }), gameMgr) : gameMgr).getCamera("MainCamera");
          let animation = fightCamera === null || fightCamera === void 0 ? void 0 : (_fightCamera$node = fightCamera.node) === null || _fightCamera$node === void 0 ? void 0 : _fightCamera$node.getComponent(Animation);
          let scriptCom = fightCamera === null || fightCamera === void 0 ? void 0 : (_fightCamera$node2 = fightCamera.node) === null || _fightCamera$node2 === void 0 ? void 0 : _fightCamera$node2.getComponent(_crd && CameraLock === void 0 ? (_reportPossibleCrUseOfCameraLock({
            error: Error()
          }), CameraLock) : CameraLock);
          scriptCom === null || scriptCom === void 0 ? void 0 : scriptCom.setEndCallback(this._cameraAniEndCallback.bind(this));
          animation.play("CameraLock");
        }

        _cameraAniEndCallback() {
          this._roundStart();
        } // 每回合小行动结束


        _onActionEnd() {
          this._action += 1;

          this._actionStart();
        } // 重播


        _onReplay() {
          var _ref;

          this._initData();

          (_ref = _crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr) === null || _ref === void 0 ? void 0 : _ref.send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_Star, null));
        } // 暂停


        _onPause() {
          this._isPause = true;
        } // 恢复


        _onResume() {
          this._isPause = false;
        } // 大回合开始


        _roundStart() {
          let data = this._fightData.getRoundData();

          this._roundData = data[this._round];
          this._round += 1; //回合数+1

          this._action = 0; //每回合归零

          if (this._isGameEnd()) {
            return this._gameEnd();
          }

          this._nextRound();
        }

        _nextRound() {
          var _ref2;

          let data = {
            Round: this._round
          };
          (_ref2 = _crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr) === null || _ref2 === void 0 ? void 0 : _ref2.send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Round_Start, data));

          this._actionStart();
        } // 每回合小行动开始


        _actionStart() {
          if (this._isRoundFinished()) {
            return this._roundEnd();
          }

          this._nextAction();
        }

        _nextAction() {
          var _ref3;

          let action = this._roundData[this._action];
          let data = {
            Action: this._action,
            ActionData: action
          };
          (_ref3 = _crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr) === null || _ref3 === void 0 ? void 0 : _ref3.send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Action_Star, data));
        } // 是否大回合结束


        _isRoundFinished() {
          return this._action >= this._roundData.length;
        } // 大回合结束


        _roundEnd() {
          this._roundStart();
        } // 是否战斗结束


        _isGameEnd() {
          let data = this._fightData.getRoundData();

          return this._round > data.length;
        } // 战斗结束


        _gameEnd() {
          var _ref4;

          (_ref4 = _crd && fightEventMgr === void 0 ? (_reportPossibleCrUseOffightEventMgr({
            error: Error()
          }), fightEventMgr) : fightEventMgr) === null || _ref4 === void 0 ? void 0 : _ref4.send(new (_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent)((_crd && FightConstant === void 0 ? (_reportPossibleCrUseOfFightConstant({
            error: Error()
          }), FightConstant) : FightConstant).FightEvent.Game_End, null));
        }

        destory() {
          FightController.destoryInstance();
        }

        clear() {
          _export("fightController", fightController = null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightController.js.map