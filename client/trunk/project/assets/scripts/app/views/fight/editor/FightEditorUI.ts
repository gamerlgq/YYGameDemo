
import { _decorator, Component, Node, ScrollView, Label, EventTouch, ProgressBar, Prefab, instantiate, Vec3 } from 'cc';
import { ResourcesLoader } from '../../../../framework/data/ResourcesLoader';
import { ListView, ListViewDelegate } from '../../../../framework/ui/ListView';
import Logger from '../../../../framework/utils/Logger';
import { G } from '../../../common/GlobalFunction';
import { DoubleBtnDialogArgsType } from '../../../define/ConfigType';
import { viewRegisterMgr } from '../../../define/ViewRegisterMgr';
import { HeroSpineNode, MonsterSpineNode } from '../../common/spine/SpineNodeBase';
import { FightEvent } from '../event/FightEvent';
import { fightEventMgr } from '../event/FightEventMgr';
import { FightConstant } from '../FightConstant';
import { FightMainLayer } from '../FightMainLayer';
import { FightMainWorld } from '../FightMainWorld';
import { RoleLayer } from '../layer/RoleLayer';
const { ccclass, property } = _decorator;

@ccclass('FightEditorUI')
export class FightEditorUI extends Component {
    
    @property(ScrollView)
    scrollView:ScrollView = null;

    @property(ProgressBar)
    fullBar:ProgressBar = null;

    private _fightMainLayer:FightMainLayer = null;

    private _fightMainWorld:FightMainWorld = null;

    private _isShowActionOption:boolean = false;

    private _attaker:HeroSpineNode | MonsterSpineNode = null;

    private _defenders:(HeroSpineNode | MonsterSpineNode)[] = null;

    // 显示手指特效
    private _isShowFingerEffect:boolean = false;

    public setMainLayer(fightMainLayer:FightMainLayer){
        this._fightMainLayer = fightMainLayer;
        this._fightMainWorld = this._fightMainLayer?.getFightMainWorld();
    }

    onLoad(){
        this._defenders = new Array<HeroSpineNode | MonsterSpineNode>();
        this._initListeners();
    }

    private _initListeners() {
        fightEventMgr.addEventListener(FightConstant.FightEditorEvent.Show_Unit_Action_View,this._onShowUnitActionView.bind(this));
    }

    private _onShowUnitActionView(event:FightEvent) {
        let data = event.getEventData();
        Logger.i(data);
        this._showUnitActionView();
    }
    
    start () {
        this._initScrollView();
    }

    private _initScrollView() {
        let items = FightConstant.FightUnitAction;
        let keys = Object.values(items);
        let names = [];
        keys.filter(v=>{
            if (Number.isNaN(Number(v))) {
                names.push(v);
            }
        })
        let delegate:ListViewDelegate<string>  = {
            items: function (): string[] {
                return names;
            },

            reuse(itemNode: Node, item: string){
                let label = itemNode.getChildByName("Label");
                let lblCom = label.getComponent(Label);
                lblCom.string = item;
                itemNode.name = item;
            }
        }

        let listViewComp = this.scrollView.getComponent(ListView);
        listViewComp.setDelegate(delegate);
        listViewComp.reload();

        this.scrollView.node.active = false;
    }

    onClickTouchNode(event:EventTouch){
        if (this._isShowActionOption){
            this._hideActionItems();
            this._isShowActionOption = false;
        }
        this._cancelSelected();
    }

    private _cancelSelected() {
        
    }

    private _showUnitActionView(){
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
        this._dispatchUnitAction(node.name);
    }

    onClickAttacker(event:EventTouch,customEventData:string){
        if (!this._attaker) {
            this._showFingerEffect(FightConstant.FightUnitType.Attack);
            this._isShowFingerEffect = true;
        }
    }

    onClickDefender(event:EventTouch,customEventData:string){
        if (this._defenders.length  == 0) {
            this._showFingerEffect(FightConstant.FightUnitType.Defend);
        }
    }

    private async _showFingerEffect(camp:number) {
        let roleLayer:RoleLayer = this._fightMainWorld.getCommonentInLayer(FightConstant.FightLayer.ROLE,RoleLayer);
        let attakers = roleLayer.getRoleAttckers();
        let viewInfo = viewRegisterMgr.getViewInfo("newguide","Finger");
        for (let index = 0; index < attakers.length; index++) {
            const attaker = attakers[index];
            let prefab = await ResourcesLoader.loadPromise<Prefab>(viewInfo.Path,Prefab);
            let finger = instantiate(prefab);
            attaker.addEffectFront(finger);
            finger.setPosition(new Vec3(0,100,0));
        }
    }

    onClickClear(){
        let args:DoubleBtnDialogArgsType = {
            title:"清理",
            msg: '是否要清除当前编辑动作？',
            leftBtnName: '取  消',
            rightBtnName: '确  认',
            rightCallback: () => {
                this._clear();
            },
            hideLeftButton: false
        }

        G.showDoubleBtnDialog(args);
    }

    private _clear() {
        
    }

    private _dispatchUnitAction(unitActionName:string) {
        if (this._attaker){
            
        }
        let unitActionId = this._getUniActionId(unitActionName);
        Logger.i(unitActionId);
        switch (unitActionId) {
            case FightConstant.FightUnitAction.AddPrefab:
                break;
            case FightConstant.FightUnitAction.Delay:
                break;
            case FightConstant.FightUnitAction.SpineAnimation:
                break;
            case FightConstant.FightUnitAction.Color:
                break;
            case FightConstant.FightUnitAction.GoBack:
                break;
            case FightConstant.FightUnitAction.Hide:
                break;
            case FightConstant.FightUnitAction.Show:
                break;
            case FightConstant.FightUnitAction.Move:
                break;
            case FightConstant.FightUnitAction.Jump:
                break;
        }
    }

    private _getUniActionId(unitActionName:string):number{
        let names = Object.values(FightConstant.FightUnitAction)
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            if (unitActionName == name){
                return index;
            }
        }
    }
}