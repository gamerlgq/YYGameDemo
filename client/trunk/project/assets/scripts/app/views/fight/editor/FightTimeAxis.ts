
import { _decorator, Component, Node, EditBox, Label, ProgressBar, CCFloat, CCInteger } from 'cc';
import Logger from '../../../../framework/utils/Logger';
import { FightEvent } from '../event/FightEvent';
import { fightEventMgr } from '../event/FightEventMgr';
import { FightConstant } from '../FightConstant';
const { ccclass, property } = _decorator;

enum FightAsix {
    FullTime,
    Attack,
    Defend
}

const FightAsixName = {
    [FightAsix.FullTime]:"全局时间轴",
    [FightAsix.Attack]:"攻击时间轴",
    [FightAsix.Defend]:"防御时间轴",
}

@ccclass('FightTimeAxis')
export class FightTimeAxis extends Component {
  
    @property(EditBox)
    totalTimeEdibox:EditBox = null;

    @property(Label)
    timeAxisName:Label = null;

    @property(ProgressBar)
    timeAxisBar:ProgressBar = null;

    @property({type:CCFloat,tooltip:"默认时间轴时间(单位秒)"})
    defalutTimeAxisSecs = 5;

    @property(CCInteger)
    index:number = 0;

    private _totalSecs:number = this.defalutTimeAxisSecs;

    private _actionPoints:number[] = new Array<number>();

    start () {
        this._setTitleName();
        this._setDefaultTimeAxisSecs();
    }

    private _setTitleName(){
        let name = FightAsixName[this.index];
        this.timeAxisName.string = name;
    }

    private _setDefaultTimeAxisSecs(){
        this.totalTimeEdibox.string = this.defalutTimeAxisSecs.toString();
    }

    onEditBoxValueChange(text:string){
        if (text == "" || Number.isNaN(Number(text))){
            return this._setDefaultTimeAxisSecs();
        }
        this.totalTimeEdibox.string = text;
    }

    onClickAddBtn(){
        fightEventMgr.send(new FightEvent(FightConstant.FightEditorEvent.Show_Unit_Action_View,this.index));
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
