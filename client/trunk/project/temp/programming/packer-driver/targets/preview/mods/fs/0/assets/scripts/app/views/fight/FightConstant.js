System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, FightConstant;

  _export("FightConstant", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "da8335UaiRIjLDRYaTAEO17", "FightConstant", undefined);

      (function (_FightConstant) {
        var Open_Fight_Editor = _FightConstant.Open_Fight_Editor = true;
        var FightLayer;

        (function (FightLayer) {
          FightLayer[FightLayer["FORMATION"] = 0] = "FORMATION";
          FightLayer[FightLayer["BOTTM_EFFECT"] = 1] = "BOTTM_EFFECT";
          FightLayer[FightLayer["ROLE"] = 2] = "ROLE";
          FightLayer[FightLayer["TOP_EFFECT"] = 3] = "TOP_EFFECT";
          FightLayer[FightLayer["BLOOD"] = 4] = "BLOOD";
          FightLayer[FightLayer["DIALOG"] = 5] = "DIALOG";
        })(FightLayer || (FightLayer = {}));

        _FightConstant.FightLayer = FightLayer;
        var FightUnitType;

        (function (FightUnitType) {
          FightUnitType[FightUnitType["Attack"] = 0] = "Attack";
          FightUnitType[FightUnitType["Defend"] = 1] = "Defend";
        })(FightUnitType || (FightUnitType = {}));

        _FightConstant.FightUnitType = FightUnitType;
        var FightUnitState;

        (function (FightUnitState) {
          FightUnitState[FightUnitState["Stand"] = 0] = "Stand";
          FightUnitState[FightUnitState["Run"] = 1] = "Run";
          FightUnitState[FightUnitState["Jump"] = 2] = "Jump";
          FightUnitState[FightUnitState["Attack"] = 3] = "Attack";
          FightUnitState[FightUnitState["Skill"] = 4] = "Skill";
          FightUnitState[FightUnitState["Retreat"] = 5] = "Retreat";
          FightUnitState[FightUnitState["Hit"] = 6] = "Hit";
          FightUnitState[FightUnitState["Did"] = 7] = "Did";
        })(FightUnitState || (FightUnitState = {}));

        _FightConstant.FightUnitState = FightUnitState;
        var FightSkillAction;

        (function (FightSkillAction) {
          FightSkillAction[FightSkillAction["AddPrefab"] = 0] = "AddPrefab";
          FightSkillAction[FightSkillAction["Delay"] = 1] = "Delay";
          FightSkillAction[FightSkillAction["Camera"] = 2] = "Camera";
          FightSkillAction[FightSkillAction["ShowBlood"] = 3] = "ShowBlood";
          FightSkillAction[FightSkillAction["Dialog"] = 4] = "Dialog";
        })(FightSkillAction || (FightSkillAction = {}));

        _FightConstant.FightSkillAction = FightSkillAction;
        var FightUnitAction;

        (function (FightUnitAction) {
          FightUnitAction[FightUnitAction["AddPrefab"] = 0] = "AddPrefab";
          FightUnitAction[FightUnitAction["Delay"] = 1] = "Delay";
          FightUnitAction[FightUnitAction["SpineAnimation"] = 2] = "SpineAnimation";
          FightUnitAction[FightUnitAction["Color"] = 3] = "Color";
          FightUnitAction[FightUnitAction["GoBack"] = 4] = "GoBack";
          FightUnitAction[FightUnitAction["Hide"] = 5] = "Hide";
          FightUnitAction[FightUnitAction["Show"] = 6] = "Show";
          FightUnitAction[FightUnitAction["Move"] = 7] = "Move";
          FightUnitAction[FightUnitAction["Jump"] = 8] = "Jump";
        })(FightUnitAction || (FightUnitAction = {}));

        _FightConstant.FightUnitAction = FightUnitAction;
        var FightUnitActionString = _FightConstant.FightUnitActionString = {
          AddPrefab: FightUnitAction.AddPrefab,
          //添加预制体
          Delay: FightUnitAction.Delay,
          //延迟
          SpineAnimation: FightUnitAction.SpineAnimation,
          //特殊动作指令,每个spine角色不一样
          Color: FightUnitAction.Color,
          //颜色变化
          GoBack: FightUnitAction.GoBack,
          //返回阵位
          Hide: FightUnitAction.Hide,
          //消失
          Show: FightUnitAction.Show,
          //显示
          Move: FightUnitAction.Move,
          //移动
          Jump: FightUnitAction.Jump //跳跃

        };
        var FightUnitEffectPart;

        (function (FightUnitEffectPart) {
          FightUnitEffectPart[FightUnitEffectPart["Front"] = 0] = "Front";
          FightUnitEffectPart[FightUnitEffectPart["Floot"] = 1] = "Floot";
          FightUnitEffectPart[FightUnitEffectPart["Head"] = 2] = "Head";
        })(FightUnitEffectPart || (FightUnitEffectPart = {}));

        _FightConstant.FightUnitEffectPart = FightUnitEffectPart;
        var FightAttackAction;

        (function (FightAttackAction) {
          FightAttackAction[FightAttackAction["Action_Fail"] = 0] = "Action_Fail";
          FightAttackAction[FightAttackAction["Action_Skill"] = 1] = "Action_Skill";
          FightAttackAction[FightAttackAction["Action_Buff"] = 2] = "Action_Buff";
          FightAttackAction[FightAttackAction["Action_Lock"] = 3] = "Action_Lock";
        })(FightAttackAction || (FightAttackAction = {}));

        _FightConstant.FightAttackAction = FightAttackAction;
        var FightReultAction;

        (function (FightReultAction) {
          FightReultAction[FightReultAction["Action_Dodge"] = 0] = "Action_Dodge";
          FightReultAction[FightReultAction["Action_Block"] = 1] = "Action_Block";
          FightReultAction[FightReultAction["Action_HP"] = 2] = "Action_HP";
          FightReultAction[FightReultAction["Action_Dead"] = 3] = "Action_Dead";
          FightReultAction[FightReultAction["Action_Hit_Back"] = 4] = "Action_Hit_Back";
          FightReultAction[FightReultAction["Action_Buff"] = 5] = "Action_Buff";
          FightReultAction[FightReultAction["Action_Lock"] = 6] = "Action_Lock";
        })(FightReultAction || (FightReultAction = {}));

        _FightConstant.FightReultAction = FightReultAction;
        var FightHPAction;

        (function (FightHPAction) {
          FightHPAction[FightHPAction["Action_HP_Damage"] = 0] = "Action_HP_Damage";
          FightHPAction[FightHPAction["Action_HP_Cure"] = 1] = "Action_HP_Cure";
          FightHPAction[FightHPAction["Action_HP_Absort"] = 2] = "Action_HP_Absort";
          FightHPAction[FightHPAction["Action_HP_Crit"] = 3] = "Action_HP_Crit";
        })(FightHPAction || (FightHPAction = {}));

        _FightConstant.FightHPAction = FightHPAction;
        var FightBuffAction;

        (function (FightBuffAction) {
          FightBuffAction[FightBuffAction["Action_Buff_add"] = 0] = "Action_Buff_add";
          FightBuffAction[FightBuffAction["Action_Buff_del"] = 1] = "Action_Buff_del";
          FightBuffAction[FightBuffAction["Action_Buff_hurt"] = 2] = "Action_Buff_hurt";
          FightBuffAction[FightBuffAction["Action_Buff_cure"] = 3] = "Action_Buff_cure";
        })(FightBuffAction || (FightBuffAction = {}));

        _FightConstant.FightBuffAction = FightBuffAction;
        var FightEvent;

        (function (FightEvent) {
          FightEvent[FightEvent["Game_Star"] = 0] = "Game_Star";
          FightEvent[FightEvent["Game_End"] = 1] = "Game_End";
          FightEvent[FightEvent["Game_Pause"] = 2] = "Game_Pause";
          FightEvent[FightEvent["Game_Resume"] = 3] = "Game_Resume";
          FightEvent[FightEvent["Game_Replay"] = 4] = "Game_Replay";
          FightEvent[FightEvent["Round_Start"] = 5] = "Round_Start";
          FightEvent[FightEvent["Round_End"] = 6] = "Round_End";
          FightEvent[FightEvent["Action_Star"] = 7] = "Action_Star";
          FightEvent[FightEvent["Action_End"] = 8] = "Action_End";
          FightEvent[FightEvent["Attack_Start"] = 9] = "Attack_Start";
          FightEvent[FightEvent["Attack_End"] = 10] = "Attack_End";
          FightEvent[FightEvent["Result_Start"] = 11] = "Result_Start";
          FightEvent[FightEvent["Result_End"] = 12] = "Result_End";
          FightEvent[FightEvent["Single_Action_Done"] = 13] = "Single_Action_Done";
          FightEvent[FightEvent["Blood_Change"] = 14] = "Blood_Change";
          FightEvent[FightEvent["Show_Dialog"] = 15] = "Show_Dialog";
        })(FightEvent || (FightEvent = {}));

        _FightConstant.FightEvent = FightEvent;
      })(FightConstant || _export("FightConstant", FightConstant = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=FightConstant.js.map