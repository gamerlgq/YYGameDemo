/*
 * @Author: liuguoqing
 * @Date: 2022-03-02 15:57:12
 * @LastEditors: liuguoqing
 * @LastEditTime: 2022-03-20 23:03:35
 * @Description: file content
 */

import { singletonMgr } from "./SingletonMgr";

// 全局单实例需要实现次接口
export interface IRerunApp {
    clear():void;//用于清除单实例;
    recreate():void;// 重启app后因clear方法中，但实力设置为空，需要此方法中重新create
}

export class Singleton{

    static instance:any = null;

    static getInstance<T>():T {
        if (!(<any>this).instance) {
            (<any>this).instance = new this();
            singletonMgr.sign(<any>this);
        }
        return (<any>this).instance as T;
    }

    static destoryInstance() {
        if ((<any>this).instance) {
            (<any>this).instance.clear();
            (<any>this).instance = null;
            singletonMgr.unSign(<any>this);
        }
    }
}
