
/*
 * @Author: lijianhong
 * @Date: 2021-05-08 11:50:16
 * @LastEditors: Gino
 */

import { CCBoolean, Component, EventHandler, EventTouch, Input, math, Node, UITransform, Vec2, view, _decorator } from "cc";
import { DEV } from "cc/env";
import Logger from "../utils/Logger";

const { ccclass, property } = _decorator;
@ccclass
export default class TouchNode extends Component {
    @property(Node)
    target: Node = null;

    @property(CCBoolean)
    isTouchOutSide:boolean = false;

    @property(CCBoolean)
    isSwallowTouches:boolean = true;

    @property({
        type: [EventHandler],
    })
    onTouchStart: EventHandler[] = [];

    @property({
        type: [EventHandler],
    })
    onTouchOutside: EventHandler[] = [];

    @property({
        type: [EventHandler],
    })
    onTouchMove: EventHandler[] = [];

    @property({
        type: [EventHandler],
    })
    onTouchEnd: EventHandler[] = [];

    _touchNode: Node = null;

    onLoad() {
        if (!this.isTouchOutSide) {
            this.node.on(Node.EventType.TOUCH_START, this._touchEvent, this);
            this.node.on(Node.EventType.TOUCH_MOVE, this._touchEvent, this);
            this.node.on(Node.EventType.TOUCH_END, this._touchEvent, this);
            this.node.on(Node.EventType.TOUCH_CANCEL, this._touchEvent, this);
        } else {
            if (this.target) {
                this._touchNode = this.target;
            } else {
                this._touchNode = new Node();
                const uiTransform = this._touchNode.addComponent(UITransform);
                uiTransform.setContentSize(view.getDesignResolutionSize());
                uiTransform.anchorX = this.node.getComponent(UITransform)?.anchorX;
                uiTransform.anchorY = this.node.getComponent(UITransform)?.anchorY;
                this.node.addChild(this._touchNode);
            }

            this._touchNode.on(Node.EventType.TOUCH_START, this._touchEvent, this);
            this._touchNode.on(Node.EventType.TOUCH_MOVE, this._touchEvent, this);
            this._touchNode.on(Node.EventType.TOUCH_END, this._touchEvent, this);
            this._touchNode.on(Node.EventType.TOUCH_CANCEL, this._touchEvent, this);
            Logger.i(this._touchNode);
        }
    }

    _touchEvent(event:EventTouch) {
        event.preventSwallow = !this.isSwallowTouches;
        let p = event.getLocation();
        if (event.type == Node.EventType.TOUCH_START) {
            if (this.isTouchMe(p)) {
                Logger.i("TouchNode: Touch Begin!");
                if (this.onTouchStart.length > 0) {
                    EventHandler.emitEvents(this.onTouchStart, event);
                }
                return true;
            } else if (this.isTouchOutSide) {
                Logger.i("TouchNode: Touch Outside!");
                return true;
            }
            return false;
        } else if (event.type == Node.EventType.TOUCH_MOVE) {
            //todo
            Logger.i("TouchNode: Touch Move!");
            if (this.onTouchMove.length > 0) {
                EventHandler.emitEvents(this.onTouchMove, event);
            }
        } else {
            // touch end
            Logger.i("TouchNode: Touch End!");

            let startPos = event.getStartLocation();
            let dis = math.Vec2.distance(startPos,p);
            if (Math.abs(dis) > 10) {
                return false;
            }

            let isTouchMe = this.isTouchMe(p);
            if (!isTouchMe) {
                if (this.isTouchOutSide) {
                    if (this.onTouchOutside.length > 0) {
                        EventHandler.emitEvents(this.onTouchOutside, event);
                    }
                }
            }else{
                if (this.onTouchEnd.length > 0) {
                    EventHandler.emitEvents(this.onTouchEnd, event);
                }
            }
        }
    }

    isTouchMe(p) {
        if (!this.onTouchOutside) {
            return true;
        }
        let rect = this.node.getComponent(UITransform)?.getBoundingBox();
        let nodePos = this.node.getComponent(UITransform)?.convertToNodeSpaceAR(p);
        if (rect.contains(new Vec2(nodePos.x,nodePos.y))) {
            return true;
        }
        return false;
    }
}
