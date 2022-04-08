import { G } from "../common/GlobalFunction"

export default class SDKCallBack {
    onSDKInit(params:String) {
        G.showMsgTips("回调成功")
    }
}
