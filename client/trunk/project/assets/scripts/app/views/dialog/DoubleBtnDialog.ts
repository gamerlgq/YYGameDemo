/*
 * @Author: liuguoqing
 * @Date: 2022-03-03 20:29:40
 * @LastEditors: liuguoqing
 * @LastEditTime: 2022-03-03 20:47:45
 * @Description: file content
 */

import { _decorator, Label, RichText, Button,log } from 'cc';
import { sceneMgr } from '../../../framework/core/SceneMgr';
import { LayerBase } from '../../../framework/ui/LayerBase';
import { DoubleBtnDialogArgsType } from '../../define/ConfigType';
const { ccclass, property } = _decorator;


@ccclass('DoubleBtnDialog')
export class DoubleBtnDialog extends LayerBase {

    static DoubleDialogArgs:DoubleBtnDialogArgsType = {}

    @property(Label)
    lblTitle: Label = null;

    @property(RichText)
    lblMessage: RichText = null;

    @property(Button)
    btnLeft: Button = null;

    @property(Button)
    btnRight: Button = null;

    private _args: any;
    private _addType: number = 0;

    start () {

    }

    updateDialog(args:DoubleBtnDialogArgsType) {
        this._args = args;
        this._args.title = args.title || "";
        this._args.msg = args.msg || "";

        this.updateTitle();
        this.updateMessage();
        this.updateLeftButton();
        this.updateRightButton();
    }

    updateTitle() {
        this.lblTitle.string = this._args.title;
    }

    updateMessage() {
        let msg = this._args.msg;
        if (!this._args.msg.match("</color>")) {
            msg =
                "<outline color=black width=2><color=#FFFFFF>" +
                this._args.msg +
                "</color></outline>";
        }
        this.lblMessage.string = msg;
    }

    updateLeftButton() {
        if (this._args.leftBtnName) {
            let name = this._args.leftBtnName;
            let lblBtn = this.btnLeft.getComponentInChildren(Label);
            lblBtn = name;
        }

        if (this._args.hideLeftButton) {
            this.btnLeft.node.active = false;
            // this.btnRight.node.x = 0;
        }
    }

    updateRightButton() {
        if (this._args.rightBtnName) {
            let name = this._args.rightBtnName;
            let lblBtn = this.btnRight.getComponentInChildren(Label);
            lblBtn.string = name;
        }
    }

    btnLeftClick(event, customEventData) {
        if (this._args.leftCallback) {
            this._args.leftCallback();
        }
        this.close();
    }

    btnRightClick(event, customEventData) {
        if (this._args.rightCallback) {
            let isNotCloseDialog = this._args.rightCallback();
            //不关闭对话框
            if (isNotCloseDialog) {
                return;
            }
        }
        this.close();
    }

    close() {
        if (this._addType == 1) {
            this.node.destroy();
        } else if (this._addType == 2) {
            sceneMgr?.popTableLayer();
        } else {
            sceneMgr?.removeDialog();
        }
    }

    setAddType(addType: number) {
        this._addType = addType;
    }
}