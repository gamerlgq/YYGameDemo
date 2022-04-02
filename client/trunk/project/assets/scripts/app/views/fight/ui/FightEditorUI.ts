
import { _decorator, Component, Node, ScrollView, Button, Label, EventTouch, ProgressBar, log } from 'cc';
import { ListView, ListViewDelegate } from '../../../../framework/ui/ListView';
import { HeroSpineNode, MonsterSpineNode } from '../../common/spine/SpineNodeBase';
import { FightConstant } from '../FightConstant';
const { ccclass, property } = _decorator;

@ccclass('FightEditorUI')
export class FightEditorUI extends Component {
    
    @property(ScrollView)
    scrollView:ScrollView = null;

    @property(ProgressBar)
    fullBar:ProgressBar = null;

    private _isShowActionOption:boolean = false;

    private _attaker:HeroSpineNode | MonsterSpineNode = null;

    private _defender:HeroSpineNode | MonsterSpineNode = null;

    start () {
        this._initScrollView();
    }

    private _initScrollView() {
        let items = FightConstant.FightUnitActionString;
        let keys = Object.keys(items);
        let delegate:ListViewDelegate<string>  = {
            items: function (): string[] {
                return keys
            },

            reuse(itemNode: Node, item: string){
                let label = itemNode.getChildByName("Label");
                let lblCom = label.getComponent(Label);
                lblCom.string = item;
            }
        }

        let listViewComp = this.scrollView.getComponent(ListView);
        listViewComp.setDelegate(delegate);
        listViewComp.reload();

        this.scrollView.node.active = false;
    }


    onUnitActionShowBtnClick(){
        this._isShowActionOption = !this._isShowActionOption;
        if (this._isShowActionOption){
            this._showActionItems();
        }else{
            this._hideActionItems();
        }
    }

    private _showActionItems() {
        this.scrollView.node.active = true;
    }

    private _hideActionItems() {
        this.scrollView.node.active = false;
    }

    onUnitActionBtnClick(event:EventTouch,customEventData:string){
        let node = event.getCurrentTarget();
        log(node);
    }

    onClickAttacker(event:EventTouch,customEventData:string){
        if (!this._attaker) {
            this._showFingerEffect();
        }
    }

    onClickDefender(event:EventTouch,customEventData:string){
        if (!this._defender) {
            this._showFingerEffect();
        }
    }

    private _showFingerEffect() {
        
    }

    onClickClear(){

    }
}