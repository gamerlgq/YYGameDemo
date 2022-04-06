import { sys } from "cc";
import { Protocol } from "../../app/define/Protocol";
import { Proto } from "../../app/define/proto_mate";
import { IRerunApp, Singleton } from "../components/Singleton";
import { gameMgr } from "../core/GameMgr";
import { Message } from "../listener/Message";
import { decodeUtf8, encodeUtf8, str2ab } from "../utils/functions";
import Logger from "../utils/Logger";
import BufferParser from "./BufferParser";
import { netLoadingMgr } from "./NetLoadingMgr";
import { netStateMgr } from "./NetStateMgr";

/*
 * @Author: liuguoqing
 * @Date: 2022-03-02 17:01:02
 * @LastEditors: liuguoqing
 * @LastEditTime: 2022-03-19 13:16:31
 * @Description: file content
 */

export type SocketCallback = {
    (event: any): void
}

const BUFF_SIZE = 1024 * 2;
class SocketMgr extends Singleton implements IRerunApp{
    private _ws: WebSocket;
    private _StateChangeCallback: SocketCallback;
    private _ip: string;
    private _port: string;

    private _tempInnerEventNameMap:Map<number,string> = null;

    private constructor() {
        super();
        // net state change callback
        let socketParams = {
            StateChangeCallback: this._listenOnSocketState.bind(this),
        };
        this.registerCallbackHandler(socketParams);

    }

    connect(ip: string, port: string, openFunc: SocketCallback, errorFunc: SocketCallback) {
        this._ip = ip;
        this._port = port;
        try {
            let url = `ws://${ip}:${port}`;
            let ws = new WebSocket(url);
            ws.binaryType = "arraybuffer" //字节流
            this._ws = ws;
            ws.onopen = (event) => {
                this._onopen(event);
                openFunc(event);
            };
            ws.onmessage = (event) => {
                this._onmessage(event);
            };
            ws.onerror = (event) => {
                this._onerror(event);
                errorFunc(event);
            };
            ws.onclose = (event) => {
                this._onclose(event);
                errorFunc(event);
            };
        } catch (error) {
            Logger.e("connect error: ", error);
        }
    }

    reConnect() {
        if (this._ip && this._port) {
            this.connect(
                this._ip,
                this._port,
                (event) => { },
                (event) => { Logger.i(event); }
            );
        }
    }

    close() {
        if (this._ws) {
            this._ws.close(4888);
            this._ws = null;
        }
    }

    // send(msgId: number, data: Object = {}) {
    //     data["proto"] = msgId;
    //     data = JSON.stringify(data);
    //     Logger.i("[WS] Send:", msgId, data);
    //     this._ws.send(<string>data);

    //     netLoadingMgr.addMsgLoading(msgId)
    // }

    send(msgId: number, ...sendParams: any[]) {
       
        let bufferParser = new BufferParser
        let arrbuffSend = bufferParser.generateMsgArrayBuffer(msgId, sendParams)
        if (!arrbuffSend) {
            return
        }

        this._ws.send(arrbuffSend);
        netLoadingMgr.addMsgLoading(msgId)
        Logger.net("[WS] Send Msg: ===>" + msgId + " [" + sendParams + "]")
    }


    sendInnerMsg(msgId: number, data: Object = {}) {
        let msg = new Message(msgId, data);
        Logger.net("Send Inner: ===>", this._getInnerEventName(msgId), data);
        gameMgr.addInnerMessage(msg);
    }

    private _getInnerEventName(eventId:number) {
        if (!this._tempInnerEventNameMap){
            this._tempInnerEventNameMap = new Map();
            let values = Object.values(Protocol.Inner);
            let eventIds:number[] = [];
            let eventNames:string[] = [];
            for (let index = 0; index < values.length; index++) {
                let value = values[index];
                if (index % 2 == 0) {
                    eventIds.push(Number(value));
                }else{
                    eventNames.push(value.toString());
                }
            }

            for (let index = 0; index < eventIds.length; index++) {
                const eventId = eventIds[index];
                const eventName = eventNames[index];
                this._tempInnerEventNameMap.set(eventId,eventName);
            }
        }

        return this._tempInnerEventNameMap.get(eventId);
    }

    registerCallbackHandler(params) {
        this._StateChangeCallback = params.StateChangeCallback;
    }

    /**
     * 监听Socket 状态变化
     */
    private _listenOnSocketState(event) {
        netStateMgr.onSocketChange(event);
    }

    private _onopen(event) {
        Logger.i("Send Text WS was opened.");
        Logger.i(event);
        if (this._StateChangeCallback) {
            this._StateChangeCallback(event);
        }
    }

    // 接收消息
    private _onmessage(event: any) {
        let data = event.data;
        if (data == null) {
            Logger.i(event);
            return;
        }

        let bufferParser = new BufferParser()
        let dataParse = bufferParser.generateParseData(data)
        let msg = new Message(bufferParser.msgId, dataParse);
        gameMgr.addNetMessage(msg);

        netLoadingMgr.removeMsgLoading(msg.msgId)
        Logger.net("[WS] Receive Msg: <===:" + bufferParser.msgId + '['+dataParse+']')
    }

    private _onerror(event) {
        Logger.e("Send Text fired an error");
        if (this._StateChangeCallback) {
            this._StateChangeCallback(event);
        }
    }

    private _onclose(event) {
        Logger.i(event);
        Logger.i("WebSocket instance closed.");
        if (this._StateChangeCallback) {
            this._StateChangeCallback(event);
        }
    }

    public clear() {
        socketMgr = null;
    }

    static recreate(): void {
        socketMgr = SocketMgr.getInstance<SocketMgr>();
    }
}

export let socketMgr = SocketMgr.getInstance<SocketMgr>();