
import { _decorator, Component, Node, ProgressBar, Label, log } from 'cc';
import { sceneMgr } from '../../../framework/core/SceneMgr';
import { ResourcesLoader } from '../../../framework/data/ResourcesLoader';
import { G } from '../../common/GlobalFunction';
import { ViewProtocol } from '../../define/ViewProtocol';
const { ccclass, property } = _decorator;

@ccclass('ResLoadingLayer')
export class ResLoadingLayer extends Component {
;
    @property(Label)
    percent: Label = null;

    @property(ProgressBar)
    bar: ProgressBar = null;

    private _loadingResList:Array<string> = null;

    start () {
        this.bar.progress = 0;
        this.percent.string = "0%";
        this._getLoadingList();
        this._startPreload();
    }

    private _getLoadingList() {
        this._loadingResList = this._getMaincityPreloadList();
    }

        // 在编辑器中右键添加resources下的预加载资源,自动保存到maincity/datas/preload.json文件中
    private _getMaincityPreloadList():Array<string>{
        let list:Array<string> = new Array();
        let config = G.getConfig("MaincityPreload");
        if (config){
            const keys = Object.keys(config);
            keys.forEach(key=>{
                list.push(key);
            })
        }
        return list;
    }
    
    private _startPreload() {
        if (!this._loadingResList || this._loadingResList.length == 0){
            return this._goGameView();
        }

        ResourcesLoader.loadList(this._loadingResList,(finishNum:number,maxNum:number)=>{
            let oldVal = this.bar.progress;
            let newVal = finishNum / maxNum;
            if (newVal < oldVal) {
                newVal = oldVal;
            }
            this.bar.progress = newVal;
            this.percent.string = Math.floor(newVal * 100) + "%";
        },()=>{
            this._goGameView();
        })
    }

    private _goGameView() {
        sceneMgr.sendCreateView(ViewProtocol.MainCityLayer);

        // let modelNewGuide: ModelNewGuide = GameMgr.getInstance().getModel(
        //     "ModelNewGuide"
        // );
        // let task = modelNewGuide.getNewGuideTask(1);
        // task._guideID = 1;        
        // if (
        //     !modelNewGuide.isGuideFinish(task._guideID) &&
        //     SceneMgr.getInstance().getNewGuideLayer()
        // ) {
        //     this.node.active = false;
        //     let godGuide = SceneMgr.getInstance()
        //         .getNewGuideLayer()
        //         .getComponent("GodGuide");
        //     godGuide.setTask(task);
        //     godGuide.run(() => {
        //         //打点
        //         logDot(DotIDS.enterGame);
        //         SceneMgr.getInstance().openUI(ViewFlags.FightMain);
        //     });
        // } else {
        //     //打点
        //     logDot(DotIDS.enterGame);
        //     SceneMgr.getInstance().openUI(ViewFlags.FightMain);
        // }
    }
}