import DialogCallBack from "./DialogCallBack";
import SDKCallBack from "./SDKCallBack";
export function nativeCallBackInit() {
    globalThis["SDKCallBack"] = new SDKCallBack
    globalThis["DialogCallBack"] = new DialogCallBack
}