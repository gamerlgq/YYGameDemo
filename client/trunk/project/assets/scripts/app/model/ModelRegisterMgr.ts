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

    clear(){
        modelRegisterMgr = null;
        this.recreate();
    }

    recreate(): void {
        modelRegisterMgr = create()();
    }
}

function create() {
    return (()=>{
        return ModelRegisterMgr.getInstance<ModelRegisterMgr>();
    })
}

// ()();
export let modelRegisterMgr = create()();