/*
 * @Author: liuguoqing
 * @Date: 2022-03-19 11:17:19
 * @LastEditors: liuguoqing
 * @LastEditTime: 2022-03-20 23:03:19
 * @Description: file content
 */
import { Singleton } from "../../../../framework/components/Singleton";
import Logger from "../../../../framework/utils/Logger";
import { FightConstant } from "../FightConstant";
import { FightEvent } from "./FightEvent";

interface FightEventHandler{
    (event:FightEvent):void
}

export let fightEventMgr:FightEventMgr = null;

export class FightEventMgr extends Singleton{

    private _eventHandlers:Map<number,Array<FightEventHandler>>=null;

    private _tempEventNameMap:Map<number,string> = null;
    
    /**
     * init
     */
    public static init() {
        fightEventMgr = FightEventMgr.getInstance<FightEventMgr>();
        fightEventMgr._init();
    }

    private _init(){
        this._eventHandlers = new Map<number,Array<FightEventHandler>>();
    }
     
    public addEventListener(eventId:number,handler:FightEventHandler){
        let handlerQueue = this._eventHandlers.get(eventId);
        if (!handlerQueue) {
            handlerQueue = new Array<FightEventHandler>();
            this._eventHandlers.set(eventId,handlerQueue);
        }
        handlerQueue.push(handler);
    }

    public removeEventListener(eventId:number,handler:FightEventHandler){
        let handlerQueue = this._eventHandlers.get(eventId);
        if (handlerQueue) {
            let idx = handlerQueue.indexOf(handler);
            if (idx != -1){
                handlerQueue.splice(idx);
            }
        }
    }

    public send(event:FightEvent){
        Logger.i("[Debug][FightEvent:]",this._getEventName(event.getEventId()),"=====>",event.getEventData());
        this._dispatchEvent(event);
    }

    private _getEventName(eventId:number) {
        if (!this._tempEventNameMap){
            this._tempEventNameMap = new Map();
            let values = Object.values(FightConstant.FightEvent);
            let names = [];
            values.filter(v=>{
                if (Number.isNaN(Number(v))) {
                    names.push(v);
                }
            })
            for (let index = 0; index < names.length; index++) {
                const value = names[index];
                this._tempEventNameMap.set(index,value);
            }
        }

        return this._tempEventNameMap.get(eventId);
    }

    private _dispatchEvent(event:FightEvent){
        let eventId = event.getEventId();
        let handlerQueue = this._eventHandlers.get(eventId);
        if (handlerQueue) {
            handlerQueue.forEach((handler)=>{
                if (handler) {
                    handler(event);
                }
            })
        }
    }

    public destory(){
        FightEventMgr.destoryInstance();
    }

    public clear(){
        fightEventMgr = null;
    }

    public isSigned(){
        return false;
    }
}