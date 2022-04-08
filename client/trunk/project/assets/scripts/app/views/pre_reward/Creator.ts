import { instantiate, Prefab } from "cc";
import { sceneMgr } from "../../../framework/core/SceneMgr";
import { ResourcesLoader } from "../../../framework/data/ResourcesLoader";
import { Message } from "../../../framework/listener/Message";
import { ViewCreatorBase } from "../../../framework/ui/ViewCreatorBase";
import Logger from "../../../framework/utils/Logger";
import { ViewProtocol } from "../../define/ViewProtocol";
import { viewRegisterMgr } from "../../define/ViewRegisterMgr";

export class PreRewardCreator extends ViewCreatorBase {

    onInit() {
        Logger.i("PreRewardCreator === ")
        this.regMsg(ViewProtocol.PreviewReward, this.onCreate.bind(this))
    }

    onCreate(event:Message) {
        Logger.i("onCreate PreRewardCreator=== ")

        let viewInfo = viewRegisterMgr.getViewInfo("preReward","preRewardMain");
        let path = viewInfo.Path;
        ResourcesLoader.loadWithViewInfo(viewInfo,(data:Prefab)=>{
            let node = instantiate(data);
            sceneMgr.pushNewTableLayer();
            sceneMgr.replaceTableContent(node,viewInfo.View);
        })
    }
}