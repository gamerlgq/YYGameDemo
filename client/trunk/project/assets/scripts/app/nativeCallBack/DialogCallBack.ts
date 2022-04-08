import { game } from "cc";

export default class DialogCallBack {
    onExitGame() {
        game.end()
    }
}