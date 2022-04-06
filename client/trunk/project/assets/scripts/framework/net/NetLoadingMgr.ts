import { error } from "cc"
import { ErrorCode } from "../../app/define/ErrorCode";
import { IRerunApp, Singleton } from "../components/Singleton"
import { gameMgr } from "../core/GameMgr";
import { sceneMgr } from "../core/SceneMgr";
import { Message } from "../listener/Message";
import Logger from "../utils/Logger";

interface IMsg {
    id:string;
    endTime:number;
}

//网络loading管理
class NetLoadingMgr extends Singleton implements IRerunApp{

    private _msgList:IMsg[] = []
    private _time:number = 0; 

    init() {
        gameMgr.addFastTick(this.tick.bind(this));
    }

    tick(dt:number) {
        this._time += dt;

        let index = 0
        while (this._msgList[index]) {
            let msg = this._msgList[index]
            if (msg.endTime > 0 && this._time >= msg.endTime) {
                this._msgList.splice(index)
                this.removeMsgLoading(msg.id)
                this.timeup(msg)
            }
            else {
                index++;
            }
        }
    }

    timeup(msg:IMsg) {
        //超时
        Logger.net("<====time up==== msgId: " + msg.id)
        let msgId = Number(msg.id)
        let msgEvent = new Message(msgId, {code:ErrorCode.TIME_OUT})
        gameMgr.addInnerMessage(msgEvent)
    }

    addMsgLoading(id:number | string,  timeout:number=10) {
        let idStr = id + ""
        let endTime = timeout > 0 ? this._time + timeout : 0
        this._msgList.push({id:idStr, endTime: endTime})
        sceneMgr.showNetLoading(true)
    }

    removeMsgLoading(id:number | string) {
        let idStr = id + ""
        for (let index = 0; index < this._msgList.length; index++) {
            const element = this._msgList[index];
            if (idStr == element.id) {
                this._msgList.splice(index)
                break;
            }
        }

        if (this._msgList.length == 0) {
            sceneMgr.showNetLoading(false)
        }
    }

    public clear() {
        netLoadingMgr = null;
    }

    static recreate(): void {
        netLoadingMgr = NetLoadingMgr.getInstance<NetLoadingMgr>();
    }
}

export let netLoadingMgr = NetLoadingMgr.getInstance<NetLoadingMgr>();