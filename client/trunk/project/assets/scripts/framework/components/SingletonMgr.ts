import Logger from "../utils/Logger";

/*
 * @Author: liuguoqing
 * @Date: 2022-03-02 16:35:22
 * @LastEditors: liuguoqing
 * @LastEditTime: 2022-03-20 20:52:15
 * @Description: file content
 */
class SingletonMgr {

    static _instance: any;

    static getInstance<T>():T {
        if (this._instance == null) {
            this._instance = new SingletonMgr();
        }
        return this._instance;
    }

    private _singletonMap: Map<string,any>;

    private constructor() {
        this._singletonMap = new Map();
    }

    sign(T: any) {
        this._singletonMap.set(T.name,T);
    }

    unsign(T: any) {
        let singleton = this._singletonMap.get(T.name);
        if (singleton){
            this._singletonMap.delete(T.name);
        }
    }

    init(){
        let i = 0;
        this._singletonMap.forEach((T:any)=>{
            Logger.i("SingletonMgr:init()",i,T.name);
            T?.recreate();
            i+=1;
        })
    }

    destoryAll() {
        this._singletonMap.forEach((T:any)=>{
            T?.destoryInstance();
            T?.instance?.clear();
        })
        // Logger.i(this._singletonMap,"this._singletonMap");
    }

    clear(){
        singletonMgr = null;
    }
}

// ()();
export let singletonMgr = (()=>{
    return SingletonMgr.getInstance<SingletonMgr>();
})();