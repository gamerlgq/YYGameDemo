// import { Singleton, ViewCreatorBase } from "../yy";

import { IRerunApp, Singleton } from "../components/Singleton";
import { ViewCreatorBase } from "./ViewCreatorBase";

class ViewCreatorManager extends Singleton implements IRerunApp{
    private _creatorList:ViewCreatorBase[];

    private constructor() {
        super();
        this._creatorList = new Array<ViewCreatorBase>();
    }


    registeredCreator(creator: ViewCreatorBase) {
        creator.onInit()
        this._creatorList.push(creator)
    }

    unregisteredCreator(){
        this._creatorList.forEach((creator) => {
            creator.unRegMsgAll();
        });
    }

    public clear(){
        viewCreatorMgr = null;
    }

    static recreate(): void {
        viewCreatorMgr = ViewCreatorManager.getInstance<ViewCreatorManager>();
    }
}

export let viewCreatorMgr = ViewCreatorManager.getInstance<ViewCreatorManager>();