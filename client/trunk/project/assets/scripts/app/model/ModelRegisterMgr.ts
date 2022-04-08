/*
 * @Author: Gino
 * @Date: 2020-11-06 20:48:44
 * @LastEditTime: 2021-12-23 15:15:26
 * @LastEditors: Gino
 */

import { IRerunApp, Singleton } from "../../framework/components/Singleton";
import { gameMgr } from "../../framework/core/GameMgr";
import { ModelLogin } from "./ModelLogin";

export class ModelRegisterMgr extends Singleton implements IRerunApp{
  
    ModelType:{
        ModelLogin:ModelLogin;
    }

    loadAllModel() {
        let gmr = gameMgr
        for (const key in this.ModelType) {
            if (Object.prototype.hasOwnProperty.call(this.ModelType, key)) {
                const model = this.ModelType[key];
                gmr.registerModel(model);       
            }
        }
    }

    public clear(){
        modelRegisterMgr = null;
    }

    static recreate(): void {
        modelRegisterMgr = ModelRegisterMgr.getInstance<ModelRegisterMgr>();
    }
}

export let modelRegisterMgr:ModelRegisterMgr = ModelRegisterMgr.getInstance<ModelRegisterMgr>();