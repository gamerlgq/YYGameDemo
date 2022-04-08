/*
 * @Author: liuguoqing
 * @Date: 2022-03-02 15:57:12
 * @LastEditors: liuguoqing
 * @LastEditTime: 2022-03-20 23:03:35
 * @Description: file content
 */

import { log } from "cc";
import Logger from "../utils/Logger";
import { singletonMgr } from "./SingletonMgr";

// 全局单实例需要实现次接口
export interface IRerunApp {
    clear():void;//用于清除单实例;
    isSigned():boolean;//全局单例默认signed
}

export class Singleton implements IRerunApp{
    /**
     * @deprecated 用于全局单例重启app后重新创建
     * @override
     */
    static recreate(): void {
        
    }

    /**
     * @description 非全局性单例 重写return false
     * @override
     */
     public isSigned(): boolean {
        return true;
    }

    /**
     * @description 清理单例引用
     * @override
     */
    public clear(): void {
        
    }

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
            Logger.i((<any>this).instance,"(<any>this).instance");
            let isUnsigned:boolean = (<any>this).instance.isSigned();
            if (!isUnsigned){
                singletonMgr.unsign(<any>this);
            }
            (<any>this).instance = null;
        }
    }
}
